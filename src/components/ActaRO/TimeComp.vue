<template>
  <q-form>
    <q-input class="tm" v-model="time" filled type="time" :options="options" />
  </q-form>
</template>

<script setup>
import { ref } from "vue";

const time = ref("");
const options = ref([]);

</script>

<style scoped>
.tm {
  width: 140px;
  margin: 10px;
}
</style>
