<template>
  <q-layout>
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat label="ActaStats" href="/" />
        <q-space />
        <q-tabs align="left">
          <q-btn-dropdown flat rounded icon="translate" >
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
          <q-btn flat round icon="info_outline" href="/about" >
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
