<template>
  <div class="btn">
    <q-btn class="inf" :label="$t('btn1')" icon="add" color="primary" @click="onsubmit" />
    <q-btn class="inf" :label="$t('btn3')" icon="download" color="primary" @click="view = true" />

    <DownloadIndex :value="view"></DownloadIndex>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import DownloadIndex from "src/components/DownloadIndex.vue";

const view = ref(false);

function onsubmit() {
  window.location.href = "http://localhost:9000/index/actas";
}

</script>

<style scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.inf {
  width: 200px;
  height: 50px;
  margin: 35px;
}
</style>
