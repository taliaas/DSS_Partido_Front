<template>
  <div class="container">
    <q-btn type="submit" :loading="submitting" label="Guardar" class="q-mt-md" icon="save" color="primary">
      <template v-slot:loading>
        <q-spinner-facebook />
      </template>
    </q-btn>
    <q-btn label="Cancelar" outline class="q-mt-md" color="primary"></q-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const submitting = ref(false);
const teal = ref(false);

</script>

<style scoped>
.container {
  margin: 35px;
}

.q-mt-md {
  margin: 10px;
  width: 150px;
}
</style>
