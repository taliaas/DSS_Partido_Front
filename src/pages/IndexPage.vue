<template>
  <div class="q-pa-md">
    <q-parallax>
      <template v-slot:media>
        <img src="src/img/indexPage.jpg">
      </template>

      <template v-slot:content="scope">
        <div class="absolute column items-center" :style="{
          opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
          top: (scope.percentScrolled * 60) + '%',
          left: 0,
          right: 0
        }">
          <img src="src/img/logo-mono-white.svg" style="width: 150px; height: 150px">
          <div class="text-h3 text-white text-center">{{ $t("welcome") }}</div>

        </div>

      </template>
    </q-parallax>
  </div>

</template>

<script setup>

defineOptions({
  name: 'IndexPage'
});

</script>

<style scoped>
.container {
  background-image: url();
}
</style>
