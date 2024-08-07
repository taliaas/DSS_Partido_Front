<template>
  <q-page class="container">
    <ReportGraph></ReportGraph>
  </q-page>
</template>

<script setup>
import ReportGraph from "src/components/Graph/ReportGraph.vue"

defineOptions({
  name: 'GraphPage'
});

</script>

<style scoped></style>
