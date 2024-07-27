<template>
  <q-layout>
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat label="ActaStats" href="/" />
        <q-space />
        <q-tabs align="left">
          <q-btn-dropdown flat rounded icon="translate">
            <q-list>
              <q-btn flat v-close-popup @click="change('es')" :disable="!temp" label="ES" />
              <q-btn flat v-close-popup @click="change('en')" :disable="temp" label="EN" />
            </q-list>
          </q-btn-dropdown>
          <q-btn flat round icon="info_outline" href="/about">
            <q-tooltip> {{ $t('about') }} </q-tooltip>
          </q-btn>

        </q-tabs>

      </q-toolbar>

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
const temp = ref(false);

const selectedLanguage = ref("es");
const change = (lang) => {
  locale.value = lang;
  selectedLanguage.value = lang;
  temp.value = !temp.value;
}
</script>

<style scoped>
.selected {
  color: lime !important;
}
</style>
