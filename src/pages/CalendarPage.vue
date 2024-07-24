<template>
  <div class="q-pa-md">
    <div>
      <h2>Listado de Reuniones</h2>

      <q-btn type="submit" color="primary" label="Agendar"></q-btn>
    </div>
    <div class="q-gutter-md row items-start">
      <q-date v-model="model" mask="YYYY-MM-DD HH:mm" color="secondary" />
      <q-time v-model="model" mask="YYYY-MM-DD HH:mm" color="secondary" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const model = ref("2024/02/01");

</script>

<style scoped></style>
