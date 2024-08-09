<template>
  <div>
    <form>
      <q-input class="tm" v-model="date" filled type="date" />
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const date = ref("");
</script>

<style scoped>
.tm {
  width: 140px;
  margin: 10px;
}
</style>
