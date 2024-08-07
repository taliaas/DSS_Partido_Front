<template>

  <div class="te">
    <q-input label="Tema" class="inp" clearable outlined autogrow v-model="model" />

    <q-input label="Planteamiento" class="inp" clearable outlined autogrow v-model="model1" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const model = ref("");
const model1 = ref("");
</script>

<style scoped>
.te {
  margin: 35px;
}

.inp {
  margin-bottom: 25px;
  font-family: Georgia, 'Times New Roman', Times, serif;

}
</style>
