<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>ActaStats</q-toolbar-title>

        <q-tabs align="left">
          <q-btn-dropdown dense flat rounded icon="translate">
            <q-list>
              <q-btn flat v-close-popup @click="change('es')" :disable="!temp" label="ES" />
              <q-btn flat v-close-popup @click="change('en')" :disable="temp" label="EN" />
            </q-list>
          </q-btn-dropdown>
        </q-tabs>
        <q-btn round flat color="white" icon="notifications" href="http://localhost:9000/index/notification">
          <q-tooltip>{{ $t("notif") }}</q-tooltip>
        </q-btn>

        <CloseDialog :value="alert"></CloseDialog>
        <q-btn class="bg" round flat color="white" icon="logout" @click="alert = true">
          <q-tooltip>{{ $t("close") }}</q-tooltip>
        </q-btn>
      </q-toolbar>

    </q-header>

    <q-drawer show-if-above side="left" bordered v-model="drawer" :mini="miniState" @mouseover="miniState = false"
      @mouseout="miniState = true" :width="200" :breakpoint="500" :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">

        <q-list style="height: 665px;">
          <q-item-label header>
            {{ $t("men") }}
          </q-item-label>
          <div class="menu-list">
            <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
          </div>
        </q-list>
        <q-separator></q-separator>

        <q-item clickable v-close-popup href="http://localhost:9000/index/user">
          <q-item-section side>
            <q-icon name="person" size="sm" class="text-primary rounded-borders" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t("btn5") }}</q-item-label>
          </q-item-section>
        </q-item>
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
import CloseDialog from 'src/components/CloseDialog.vue';
import { useI18n } from "vue-i18n"
const { t, locale } = useI18n();

defineOptions({
  name: 'MainLayout'
})
const selectedLanguage = ref("es");
const miniState = ref(true);
const drawer = ref(false);
const alert = ref(false);
const temp = ref(false);

const linksList = [
  {
    title: t("home"),
    icon: "home",
    link: "/index",
  },
  {
    title: t("p1"),
    icon: "collections_bookmark",
    link: "/index/actas",
  },
  {
    title: t("p2"),
    icon: "tab",
    link: "/index/balance",
  },
  {
    title: t("p3"),
    icon: "timeline",
    link: "/index/graph",
  },
  {
    title: t("p4"),
    icon: "event",
    link: "/index/calendar"
  }
]

const change = (lang) => {
  locale.value = lang;
  selectedLanguage.value = lang;
  temp.value = !temp.value;
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
