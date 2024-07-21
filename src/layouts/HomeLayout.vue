<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat label="ActaStats" href="/" />
        <q-space />
        <q-tabs align="left">
          <q-btn flat toggle-color="lime-13" @click="change('en')" label="EN"
            :class="{ selected: selectedLanguage === 'en' }">
            <q-tooltip>English </q-tooltip>
          </q-btn>
          <q-btn class="id" flat @click="change('es')" label="ES" :class="{ selected: selectedLanguage === 'es' }">
            <q-tooltip>Español</q-tooltip>
          </q-btn>

          <q-separator vertical inset color="white" />

          <q-route-tab to="/about" :label="$t('about')" />
        </q-tabs>

      </q-toolbar>

      <q-footer bordered class="bg-grey-3 text-primary">
        <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey-8">
          <q-route-tab to="/login" :label="$t('log')" />
          <q-route-tab to="/autentication" :label="$t('sign')"/>
        </q-tabs>
      </q-footer>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<script setup>
import { ref } from 'vue';
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
defineOptions({
  name: "HomeLayout",
});

const selectedLanguage = ref("es");
const change = (lang) => {
  locale.value = lang;
  selectedLanguage.value = lang;
}
</script>

<style scoped>
.selected {
  color: lime !important;
}
</style>
