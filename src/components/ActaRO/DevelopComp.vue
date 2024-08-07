<template>
  <div class="container">
    <h2>Desarrollo</h2>
    <q-input class="inp" clearable outlined autogrow v-model="model" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const model = ref("");

//metodos para hacer: validate - resetValidation - rules
</script>

<style scoped>
h2 {
  font-size: 24px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.container{
  margin: 25px;
}
</style>
