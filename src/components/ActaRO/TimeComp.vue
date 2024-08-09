<template>
  <q-form>
    <q-input class="tm" v-model="time" filled type="time" :options="options" />
  </q-form>
</template>

<script setup>
import { ref, defineEmits, watchEffect } from 'vue';

const time = ref("");
const options = ref([]);

const emit = defineEmits(['update:time'])

watchEffect(() => {
  emit('update:time', time.value)
});
</script>

<style scoped>
.tm {
  width: 140px;
  margin: 10px;
}
</style>
