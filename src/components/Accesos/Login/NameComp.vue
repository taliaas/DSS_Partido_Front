<template>
  <div>
    <q-input class="inp" clearable filled v-model="name" color="dark" :label="$t('name')"
      :rules="[val => val && val.length > 0 || 'Por favor introduce tu nombre']">
      <template v-slot:prepend>
        <q-icon name="person" />
      </template>
    </q-input>

  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
</script>

<style scoped></style>
