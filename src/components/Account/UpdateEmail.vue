<template>
  <div class="comp">
    <q-form @submit.prevent.stop="onSubmit">
      <h2>{{ $t('create2') }}</h2>
      <q-input v-model="text1" :label="$t('up2')" lazy-rules suffix="@cujae.edu.cu" :rules="[(val) =>
        (val !== null && val !== '') ||
        'Por favor introduce tu nuevo correo',
      (val) =>
        (val.length < 13 && val.length > 4) || 'Por favor introduce entre 5 y 12 caracteres',]" />

      <div class="cord">
        <q-btn type="submit" :label="$t('save')" color="primary" class="full-width"/>
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

.cord {
  margin: 10px;
}
h2{
  font-size: 26px;
}
</style>
