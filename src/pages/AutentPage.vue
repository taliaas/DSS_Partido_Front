<template>
  <q-page class="container">
    <div class="comp">
      <AutentComp ></AutentComp>
      <ImgAutent ></ImgAutent>
    </div>
  </q-page>
</template>

<script setup>
import ImgAutent from "src/components/ImgAutent.vue";
import AutentComp from "src/components/AutentComp.vue";

defineOptions({
  name: 'AutentPage'
});
</script>

<style scoped>
.comp {
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
}
</style>
