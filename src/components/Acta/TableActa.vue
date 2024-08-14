<template>
  <div>
    <q-tabs v-model="tab">
      <q-tab name="ro" label="Acta Ordinaria" />
      <q-tab name="cp" label="Acta de Círculo Político" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated swipeable transition-prev="jump-up" transition-next="jump-up">
      <q-tab-panel name="ro">
        <ListAct></ListAct>
      </q-tab-panel>

      <q-tab-panel name="cp">
        <ListPolitica></ListPolitica>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ListPolitica from './ListPolitica.vue';
import ListAct from './ListAct.vue';

const tab = ref('ro')
</script>
