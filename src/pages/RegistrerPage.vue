<template>
  <q-page class="main">
    <div class="absolute-full comp">
      <Registrer />
    </div>
  </q-page>
</template>

<script setup>
import Registrer from "src/components/Log/Regist/RegistrerComp.vue";

defineOptions({
  name: 'RegistrerPage'
});
</script>

<style scoped>
.main {
  background-image: url("src/img/indexPage.jpg");
}

.comp {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
