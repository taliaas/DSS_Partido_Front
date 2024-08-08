<template>
  <q-page class="main">
    <div class="absolute-full comp">
      <AuthView />
    </div>
  </q-page>
</template>

<script setup>
import AuthView from "src/components/Log/Regist/AuthView.vue";

defineOptions({
  name: 'LoginPage'
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
