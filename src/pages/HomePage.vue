<template>
  <q-page>
    <q-img class="cp" src="src/img/indexPage.jpg">
      <div class="absolute-full " align="center">
          <AuthView style="width: 600px; max-height: 600px; " />
      </div>
    </q-img>
  </q-page>
</template>

<script setup>
import AuthView from "src/components/AuthView.vue";

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

.cp {
  display: flex;
  height: 687px;
}

.flexcenter {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  color: white;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 60px;
}
</style>
