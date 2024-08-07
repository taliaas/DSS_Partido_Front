<template>
  <div class="container">
    <SelectGraph @selectionChanged="onSelectionChanged"></SelectGraph>
    <GraphComp :indicador="selectedItem" :data="selectData"></GraphComp>
  </div>
</template>

<script setup>
import SelectGraph from "src/components/Graph/SelectGraph.vue"
import GraphComp from "src/components/Graph/GraphComp.vue";
import { ref } from "vue";

const selectedItem = ref("");
const selectData = ref([]);

function onSelectionChanged({ indicator }) {
  selectedItem.value = `${indicator}`;
}

function cargarDatos() {
  //aki se actualiza el selectData
  selectData.value = [1, 2, 3];
}

</script>
