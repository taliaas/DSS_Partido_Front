<template>
  <div class="cont">
    <q-input filled v-model="nucleo" type="number" :label="$t('nucleo')" style="max-width: 150px; margin: 10px;" />
    <q-input filled v-model="area" type="number" :label="$t('area')" style="max-width: 150px; margin: 10px;" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const nucleo = ref("1");
const area = ref("1");

</script>

<style scoped>
.cont {
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
}

h2 {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 32px;
  margin: 25px;
  font-display: initial;
}

.tm {
  width: 140px;
  margin: 10px;
}
</style>
