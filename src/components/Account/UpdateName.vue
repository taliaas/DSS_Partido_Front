<template>
  <div class="comp">
    <q-form @submit.prevent.stop="onSubmit">
      <h2>{{ $t('create1') }}</h2>
      <q-input v-model="name" clearable :label="$t('up1')" :rules="[(val) =>
        (val !== null && val !== '') ||
        'Por favor introduce tu nuevo nombre',
      (val) =>
        (val.length < 13 && val.length > 4) || 'Por favor introduce entre 5 y 12 caracteres',]" />

    </q-form>
  </div>
</template>

<script setup>
import { ref } from "vue"

const name = ref("")

function onSubmit() {

}
</script>

<style scoped>
.comp {
  width: 300px;
  margin: 25px;
}

h2 {
  font-size: 26px;
}

.cord {
  margin: 10px;
}
</style>
