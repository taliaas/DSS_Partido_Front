<template>
  <q-layout>

    <q-tabs>
      <q-route-tab label="Home" to="/" />
      <q-route-tab label="About" to="/about" />
    </q-tabs>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from "vue"

const locale = ref("")
const temp = ref(false);
const selectedLanguage = ref("es");

const change = (lang) => {
  locale.value = lang;
  selectedLanguage.value = lang;
  temp.value = !temp.value;
}
</script>
