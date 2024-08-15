<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Información de la Acta {{ id }}</div>
    </q-card-section>
    <q-card-section>
      <h2>{{ $t('n1') }}</h2>
      <p> {{ nucleo }}</p>
    </q-card-section>
    <q-card-section>
      <h2>{{ $t('miembros') }}</h2>
      <ul>
        <li v-for="(member, index) in members" :key="index">{{ member }}</li>
      </ul>
    </q-card-section>
    <q-card-section class="q-pt-none">
          <h2>{{ $t('oder') }}</h2>
          <q-card flat class="my-card">{{ loren }}</q-card>
          <h2>{{ $t('des') }}</h2>
          <q-card flat class="my-card">{{ loren }}</q-card>
          <h2>{{ $t('agree') }}</h2>
          <q-card flat class="my-card">{{ loren }}</q-card>
        </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="Volver" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const members = ref(['Miembro 1', 'Miembro 2']); // Ejemplo de datos
const agreement = ref('Aqui va el acuerdo...'); // Ejemplo de datos
const development = ref('Detalles del desarrollo...'); // Ejemplo de datos
const nucleo = ref('');
const order = ref('');
const router = useRouter();

const id = router.currentRoute.value.params.id;


</script>

<style scoped>
h2 {
  font-size: x-large;
}
</style>
