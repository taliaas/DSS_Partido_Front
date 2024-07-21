<template>

  <div class="container">
    <q-checkbox v-model="teal" label="Añadir acta de círculo político" />
  </div>

  <div class="container">
    <q-btn type="submit" :loading="submitting" label="Guardar" class="q-mt-md" icon="save" color="primary"
      @click="save">
      <template v-slot:loading>
        <q-spinner-facebook />
      </template>
    </q-btn>
    <q-btn label="Cancelar" outline class="q-mt-md" color="primary"></q-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const submitting = ref(false);
const teal = ref(true);

function save() {
  window.location.href = "http://localhost:9000/index/actapolitica";
}
</script>

<style scoped>
.q-mt-md {
  margin: 25px;
  width: 150px;
}

.container {
  margin: 20px;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
}
</style>
