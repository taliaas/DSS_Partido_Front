<template>

  <div class="container">
    <q-input v-model.number="model" type="number" label="Presentes*" filled style="max-width: 150px; margin: 10px;" />
    <q-input v-model.number="model1" type="number" label="Ausentes*" filled style="max-width: 150px; margin: 10px;" />

  </div>
</template>

<script setup>
import { ref } from "vue";

const model = ref("1");
const model1 = ref("1");
</script>

<style scoped>
.container {
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  margin: 25px;
}
</style>
