<template>
  <q-page>
    <q-btn @click="change('en')">English</q-btn>
    <q-btn @click="change('es')">Español</q-btn>
  </q-page>

  <h4>{{ $t("welcome") }}</h4>
  <p>{{ $t("description") }}</p>
</template>

<script setup>
import { useI18n } from "vue-i18n"
const { t, locale } = useI18n();

const change = (lang) => {
  locale.value = lang;
  console.log(lang);
}
</script>
