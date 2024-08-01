<template>
  <div>
    <q-card class="my-card bg-white text-black">
      <q-card-section>
        <div class="text-h6">{{ user }}</div>
        <div class="text-subtitle2">{{ correo }}</div>
        <div class="text-subtitle2">{{ role }}</div>
      </q-card-section>

      <q-separator white />

      <q-card-actions vertical>
        <q-btn flat :label="$t('reset2')"></q-btn>
        <q-btn flat :label="$t('reset1')"></q-btn>
        <q-btn flat :label="$t('reset')"></q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue"

const user = ref("USER");
const role = ref("rol");
const correo = ref("USER@cujae.edu.cu");
</script>

<style scoped>
.my-card {
  margin: 25px;
  width: 100%;
  max-width: 400px
}
</style>
