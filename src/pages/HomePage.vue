<template>
  <q-page class="main">
    <div class="absolute-full comp">

    </div>
  </q-page>
</template>

<script setup>
import AuthView from "src/components/Accesos/AuthView.vue";

defineOptions({
  name: 'LoginPage'
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
