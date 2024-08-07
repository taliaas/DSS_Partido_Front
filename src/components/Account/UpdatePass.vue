<template>
  <div class="comp">
    <q-form @submit.prevent.stop="onSubmit">
      <h2>{{ $t('create') }}</h2>
      <q-input v-model="pass" :label="$t('up3')" :type="isPwd ? 'password' : 'text'" :rules="[(val) =>
        (val !== null && val !== '') ||
        'Por favor introduce tu anterior contraseña',
      (val) =>
        (val.length == 8) || 'Por favor introduce 8 caracteres',]">
        <template v-slot:append>
          <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
        </template>
      </q-input>

      <q-input v-model="text1" :label="$t('up4')" :rules="[(val) =>
        (val !== null && val !== '') ||
        'Por favor introduce tu nueva contraseña',
      (val) =>
        (val.length == 8) || 'Por favor introduce 8 caracteres',]" />

      <div class="cord">
        <q-btn type="submit" :label="$t('save')" color="primary" class="full-width" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref } from "vue"

const pass = ref("")
const text1 = ref("")
const isPwd = ref(true)

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
