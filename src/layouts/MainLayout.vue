<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>ActaStats</q-toolbar-title>

        <q-btn flat toggle-color="lime-13" @click="change('en')" label="EN"
          :class="{ selected: selectedLanguage === 'en' }">
          <q-tooltip>English </q-tooltip>
        </q-btn>
        <q-btn class="id" flat @click="change('es')" label="ES" :class="{ selected: selectedLanguage === 'es' }">
          <q-tooltip>Español</q-tooltip>
        </q-btn>

        <q-separator vertical inset color="white" />

        <q-btn class="bg" round dense flat color="white" icon="logout" @click="alert = true">
          <q-tooltip>{{ $t("close") }}</q-tooltip>
        </q-btn>

      </q-toolbar>
    </q-header>

    <q-drawer show-if-above side="left" bordered v-model="drawer" :mini="miniState" @mouseover="miniState = false"
      @mouseout="miniState = true" :width="200" :breakpoint="500" :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">

        <q-list style="height: 610px;">
          <q-item-label header>
            {{ $t("men") }}
          </q-item-label>
          <div class="menu-list">
            <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
          </div>
        </q-list>
        <q-separator></q-separator>
        <div class="btn-bottom">
          <ConfigLink v-for="cof in listSecun" :key="cof.title" v-bind="cof" @dialog-open="handleDialogOpen" />
          <q-btn round color="primary" icon="settings"> <q-tooltip>{{ $t("btn4")
              }}</q-tooltip></q-btn>
          <q-btn round color="primary" icon="person"> <q-tooltip>{{ $t("btn5")
              }}</q-tooltip></q-btn>
          <DialogComp :visible="showConfigDialog" />
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  <div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue'
import ConfigLink from 'src/components/ConfigLink.vue';
import DialogComp from 'src/components/DialogComp.vue';
import { useI18n } from "vue-i18n"
const { t, locale } = useI18n();

defineOptions({
  name: 'MainLayout'
})
const selectedLanguage = ref("es");
const miniState = ref(true);
const account = ref(false); //q-dialog
const drawer = ref(false);
const alert = ref(false);


const linksList = [
  {
    title: "Home",
    icon: "home",
    link: "/index",
  },
  {
    title: "Actas",
    icon: "collections_bookmark",
    link: "/index/actas",
  },
  {
    title: "Balance",
    icon: "tab",
    link: "/index/balance",
  },
  {
    title: "Gráficos",
    icon: "timeline",
    link: "/index/graph",
  },
]

const showConfigDialog = ref(false); // Variable para controlar la visibilidad del diálogo

const change = (lang) => {
  locale.value = lang;
  selectedLanguage.value = lang;
}

const handleDialogOpen = (title) => {
  if (title === "Configuración") {
    showConfigDialog.value = true;
  }
  else
    account.value = true;
};
</script>

<style scoped>
.menu-list {
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

.bg {
  margin-left: 8px;
}

.op {
  height: 50px;
}

.op1 {
  margin: 7px;
}

.op2 {
  margin: 7px;
}

.btn1 {
  margin: 7px;
}

.btn-bottom {
  flex-direction: column;
}

.selected {
  color: lime !important;
}
</style>
