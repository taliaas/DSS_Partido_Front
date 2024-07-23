<template>
  <q-page>
    <q-img class="cp" src="src/img/indexPage.jpg">
      <div class="absolute-full " align="center">
          <AutentComp style="width: 600px; max-height: 600px; " />
      </div>
    </q-img>
  </q-page>
</template>

<script setup>
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

.cp {
  display: flex;
  height: 687px;
}
</style>
