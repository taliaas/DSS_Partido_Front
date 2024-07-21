<template>
  <div class="container">
    <h2>Reunión Ordinaria</h2>

    <q-form>
      <div class="cont">
        <q-input filled v-model="text" type="number" label="Núcleo*" style="max-width: 150px; margin: 10px;" />
        <q-input filled v-model="text1" type="number" label="Área*" style="max-width: 150px; margin: 10px;" />

        <q-input v-model.number="model" type="number" label="Presentes*" filled
          style="max-width: 150px; margin: 10px;" />
        <q-input v-model.number="model1" type="number" label="Ausentes*" filled
          style="max-width: 150px; margin: 10px;" />

        <q-input class="tm" v-model="time" filled type="time" :options="options" />

        <q-input class="tm" v-model="date" filled type="date" />
      </div>
      <q-separator />
    </q-form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const time = ref("");
const options = ref([]);
const date = ref("");
const model = ref("1");
const model1 = ref("1");
const text = ref("1");
const text1 = ref("1");

</script>

<style scoped>
.container {
  margin: 20px;
}

h2 {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 32px;
  margin: 25px;
  font-display: initial;
}

.cont {
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  margin: 25px;
}

.tm {
  width: 140px;
  margin: 10px;
}
</style>
