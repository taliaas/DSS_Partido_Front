<template>
  <div class="comp">
    <q-form @submit.prevent.stop="onSubmit">
      <p>este es para config de administrador</p>
      <h2>{{ $t('asign') }}</h2>
      <q-select v-model="model" :options="options" :label="$t('rol')" />
      <div class="cord">
        <q-btn type="submit" :label="$t('save')" color="primary" class="full-width" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref } from "vue"

const model = ref("")
const options = [
  'Miembro del Partido', 'Jefe de núcleo'
]

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
