<template>
  <div class="comp">
    <q-form @submit.prevent.stop="onSubmit">
      <q-input v-model="email" clearable label="Correo anterior" lazy-rules suffix="@cujae.edu.cu" :rules="[(val) =>
        (val !== null && val !== '') ||
        'Por favor introduce tu anterior correo',
      (val) =>
        (val.length < 13 && val.length > 4) || 'Por favor introduce entre 5 y 12 caracteres',]" />
      <q-input v-model="text1" label="Correo nuevo" lazy-rules suffix="@cujae.edu.cu" :rules="[(val) =>
        (val !== null && val !== '') ||
        'Por favor introduce tu nuevo correo',
      (val) =>
        (val.length < 13 && val.length > 4) || 'Por favor introduce entre 5 y 12 caracteres',]" />

      <div>
        <q-btn type="submit" label="save" icon="save" color="primary"></q-btn>
        <q-btn label="Cancelar" color="primary"></q-btn>
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref } from "vue"

const email = ref("")
const text1 = ref("")

function onSubmit() {

}
</script>

<style scoped>
.comp {
  width: 300px;
  margin: 25px;
}
</style>
