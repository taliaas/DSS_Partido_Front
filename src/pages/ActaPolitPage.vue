<template>
  <q-page class="container">
    <h2>Acta de Círculo Político</h2>
    <div class="comp">
      <InputPolit></InputPolit>
      <DesarrolloPolitComp></DesarrolloPolitComp>
      <AgreemComp></AgreemComp>
      <BtnPolit></BtnPolit>
    </div>
  </q-page>
</template>

<script setup>
import InputPolit from "src/components/ActaCP/InputPolit.vue";
import DesarrolloPolitComp from "src/components/ActaCP/DesarrolloPolitComp.vue";
import BtnPolit from "src/components/ActaCP/BtnPolit.vue";
import AgreemComp from "src/components/ActaRO/AgreemComp.vue";

defineOptions({
  name: 'ActaPolitPage'
});
</script>

<style scoped>
h2 {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 32px;
  margin: 35px;
}
</style>
