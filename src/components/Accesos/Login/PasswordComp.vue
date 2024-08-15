<template>
  <div>
    <q-input outlined filled v-model="password" :type="isPwd ? 'password' : 'text'" color="dark" :label="$t('pass')"
      lazy-rules :rules="[val => val && val.length > 0 || 'Por favor introduce tu contraseña',
      val => val && val.length < 6 || 'Solo se admiten 8 caracteres'
      ]">
      <template v-slot:prepend>
        <q-icon name="lock" />
      </template>
      <template v-slot:append>
        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
      </template>
    </q-input>
  </div>
</template>

<script lang="ts">
import { ref } from "vue"

const password = ref("")
</script>

<style scoped></style>
