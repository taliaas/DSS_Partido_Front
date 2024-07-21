<template>
  <q-page class="container">
    <div class="comp">
      <formularioRO></formularioRO>
      <MembersComp></MembersComp>
      <OrdenTable></OrdenTable>
      <Development></Development>
      <AgreemComp></AgreemComp>
      <BtnActas></BtnActas>
    </div>
  </q-page>
</template>

<script setup>
import formularioRO from "src/components/formularioRO.vue";
import OrdenTable from "src/components/OrdenTable.vue";
import AgreemComp from "src/components/AgreemComp.vue";
import MembersComp from "src/components/MembersComp.vue";
import Development from "src/components/DevelopComp.vue";
import BtnActas from "src/components/BtnActas.vue";

defineOptions({
  name: 'ActaPage'
});
</script>

<style scoped></style>
