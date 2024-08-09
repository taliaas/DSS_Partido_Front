<template>
  <form>
    <div class="asis">
      <q-input v-model.number="model" type="number" :label="$t('pres')" filled
        style="max-width: 150px; margin: 10px;" />
      <q-input v-model.number="model1" type="number" :label="$t('aus')" filled
        style="max-width: 150px; margin: 10px;" />
    </div>
  </form>

</template>

<script setup>
import { ref, defineEmits, watchEffect } from 'vue';


const model = ref("1");
const model1 = ref("1");

const emit = defineEmits(['update:pres', 'update:aus'])

watchEffect (() => {
  emit('update:pres', model.value),
  emit('update:aus', model1.value)
});
</script>

<style scoped>
.asis {
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
}
</style>
