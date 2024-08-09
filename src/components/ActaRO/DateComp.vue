<template>
  <div>
    <q-input class="tm" v-model="date" filled type="date" />
  </div>
</template>

<script setup>
import { ref, defineEmits, watchEffect } from 'vue';

const date = ref("");

const emit = defineEmits(['update:date'])

watchEffect(() => {
  emit('update:date', date.value)
});
</script>

<style scoped>
.tm {
  width: 140px;
  margin: 10px;
}
</style>
