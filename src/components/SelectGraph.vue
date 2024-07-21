<template>
  <div class="info">
    <q-select class="sel" rounded outlined v-model="model" :options="options1" label="Seleccione el núcleo"
      @update:model-value="emitSelection" />
    <q-select class="sel" rounded outlined v-model="model1" :options="options" label="Seleccione el indicador"
      @update:model-value="emitSelection" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const model = ref("");
const model1 = ref("");
const options = ['jbjsbc', 'vxhvhs', 'ssdncj'];
const options1 = [1, 2, 3, 4, 5];

const emit = defineEmits(['selectionChanged']);

function emitSelection(newValue) {
  emit('selectionChanged', { nucleus: model.value, indicator: model1.value });
}
</script>

<style scoped>
.sel {
  margin: 10px;
  width: 250px;
}

.info {
  margin: 35px;
  display: flex;
}
</style>
