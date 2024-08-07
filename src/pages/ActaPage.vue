<template>
  <q-page class="container">
    <div class="comp">
      <ListAct></ListAct>
    </div>
  </q-page>
</template>

<script setup>
import ListAct from "src/components/Acta/ListAct.vue";

defineOptions({
  name: 'ActaPage'
});
</script>

<style scoped></style>
