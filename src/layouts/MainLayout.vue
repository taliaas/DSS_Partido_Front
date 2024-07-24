<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>ActaStats</q-toolbar-title>

        <q-tabs align="left">
          <q-btn-dropdown dense flat rounded icon="translate">
            <q-list>
              <q-item clickable v-close-popup @click="change('eS')">
                <q-item-section>
                  <q-item-label>ES</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="change('en')">
                <q-item-section>
                  <q-item-label>EN</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

        </q-tabs>
        <q-btn-dropdown flat dense icon="widgets" dropdown-icon="none">
          <q-list>
            <q-item>
              <q-item-section side>
                  <q-icon name="dashboard" size="xs" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ $t("dash") }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="showConfigDialog = true">
              <q-item-section side>
                <q-icon name="settings" size="sm" class="text-primary rounded-borders" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ $t("btn4") }}</q-item-label>
              </q-item-section>

            </q-item>

            <q-item clickable v-close-popup @click="showConfigDialog = true">
              <q-item-section side>
                <q-icon name="person" size="sm" class="text-primary rounded-borders" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ $t("btn5") }}</q-item-label>
              </q-item-section>

              <DialogComp :visible="showConfigDialog" />
            </q-item>

            <q-item clickable v-close-popup @click="showConfigDialog = true">
              <q-item-section side>
                <q-icon name="help" size="sm" class="text-primary rounded-borders" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ $t("help") }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <CloseDialog :value="alert"></CloseDialog>
        <q-btn class="bg" round flat color="white" icon="logout" @click="alert = true">
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
import EssentialLink from 'components/EssentialLink.vue';

import DialogComp from 'src/components/DialogComp.vue';
import CloseDialog from 'src/components/CloseDialog.vue';
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
  {
    title: "Calendar",
    icon: "event",
    link: "/index/calendar"
  }
]

const showConfigDialog = ref(false); // Variable para controlar la visibilidad del diálogo

const change = (lang) => {
  locale.value = lang;
  selectedLanguage.value = lang;
}

</script>

<style scoped>
.btn-bottom {
  display: flex;
  justify-content: space-between;
  align-items: start;
}

.menu-list {
  height: 350px;
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

.btn {
  margin: 7px;
}

.selected {
  color: lime !important;
}
</style>
