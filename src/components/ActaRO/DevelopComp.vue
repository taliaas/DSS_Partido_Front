<template>
  <div class="container">
    <h2>{{ $t("des") }}</h2>
    <q-input class="comp" clearable outlined autogrow v-model="model" />

  </div>
</template>

<script setup>
import { ref, watchEffect, defineEmits } from "vue";

const model = ref("");

//metodos para hacer: validate - resetValidation - rules

const emit = defineEmits(['update:develop'])

watchEffect(() => {
  emit('update:develop', model.value)
});
</script>

<style scoped>
h2 {
  font-size: 24px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.container {
  margin: 30px;
}

.comp {
width: 100%;
}
</style>
