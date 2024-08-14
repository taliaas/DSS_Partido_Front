<template>
  <q-page class="main">
    <div class="absolute-full comp">
      <RegisterComp />
    </div>
  </q-page>
</template>

<script setup>
import RegisterComp from "src/components/Accesos/RegisterComp.vue";

defineOptions({
  name: 'RegistrerPage'
});
</script>

<style scoped>
.main {
  background-image: url("src/img/prueb.png");
}

.comp {
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
}
</style>
