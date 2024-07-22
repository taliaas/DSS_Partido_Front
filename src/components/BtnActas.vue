<template>

  <div class="container">
    <q-checkbox v-model="teal" val="teal" color="primary" :label="$t('btn7')"/>
  </div>

  <div class="container">
    <q-btn type="submit" :loading="submitting" outline label="Guardar" class="q-mt-md" icon="save" color="primary"
      @click="save">
      <template v-slot:loading>
        <q-spinner-facebook />
      </template>
    </q-btn>
    <q-btn label="Cancelar" outline class="q-mt-md" color="negative"></q-btn>
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
