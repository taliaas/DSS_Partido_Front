<template>
  <q-page class="container">
    <div class="comp">
      <LoginComp style="width: 600px; " />
      <ImgLogin style="width: 650px;" />
    </div>
  </q-page>
</template>

<script setup>
import ImgLogin from "src/components/ImgLogin.vue";
import LoginComp from "src/components/LoginComp.vue";

defineOptions({
  name: 'LoginPage'
});
</script>

<style scoped>
.tab {
  font-size: 26px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: #399139;
}

.comp {
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
}
</style>
