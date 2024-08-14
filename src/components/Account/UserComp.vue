<template>

  <q-card class="my-card bg-white text-black">
    <q-card-section>
      <div class="div">
        <q-avatar rounded color="primary" text-color="white">{{ letra }}</q-avatar>
        <h3>{{ user }}</h3>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="text-subtitle2">{{ correo }}</div>
      <div class="text-subtitle2">{{ role }}</div>
    </q-card-section>

    <q-separator white />

    <q-card-actions vertical>
      <q-btn class="full-width" flat :label="$t('reset2')" @click="alertActa"></q-btn>
      <q-btn class="full-width" flat :label="$t('reset1')"></q-btn>
      <q-btn class="full-width" flat :label="$t('reset')"></q-btn>
    </q-card-actions>
  </q-card>

</template>

<script setup>
import { ref } from "vue"
import { useQuasar } from 'quasar'

const user = ref("");
const role = ref("rol");
const correo = ref("USER@cujae.edu.cu");
const letra = ref('J');

const $q = useQuasar()
const value = $q.localStorage.getItem(user)

user.value = value
console.log(value)

</script>

<style scoped>
.my-card {
  margin: 25px;
  width: 100%;
  max-width: 400px
}

.div {
  display: flex;
  align-items: center;
}
h3 {
  font-size: 24px;
  margin: 10px;
}
</style>
