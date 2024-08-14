<template>
  <div style=" margin-left: 25px; margin-right: 25px;">
    <h2>{{ $t("tema") }}</h2>
    <q-input  class="inp" clearable outlined autogrow v-model="model1" />
  </div>
</template>

<script setup>
import { ref, defineEmits, watchEffect } from "vue";

const model1 = ref("");

const emit = defineEmits(['update:tema'])

watchEffect(() => {
  emit('update:tema', model1.value)
});
</script>

<style scoped>
.inp {
  font-family: Georgia, 'Times New Roman', Times, serif;
}
h2 {
  font-size: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

</style>
