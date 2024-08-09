<template>
  <div style=" margin: 25px;">

    <q-table flat bordered :title="$t('miembros')" :rows="rows" :columns="columns" :filter="filter" :loading="loading"
      no-data-label="No hay datos" row-key="index">
      <template v-slot:top-right>
        <q-btn color="primary" :disable="loading" round icon="add" @click="medium = true" />
        <q-btn v-if="rows.length !== 0" class="q-ml-sm" round color="primary" :disable="loading" icon="remove"
          @click="removeRow" />
      </template>
    </q-table>
  </div>

  <div>
    <q-dialog v-model="medium">
      <q-card style="width: 700px; max-width: 80vw">
        <q-card-section>
          <div class="text-h6">Añadir miembro</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input class="row2" v-model="newOrder" filled label=" Miembro " style="width: 600px;" />

        </q-card-section>
        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat color="positive" label="Guardar" @click="addOrder" />
          <q-btn flat color="negative" label="Cancelar" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, watch, defineEmits } from "vue";

const medium = ref(false);
const loading = ref(false);
const filter = ref("");
const newOrder = ref("");
let rows = ref([]);

const columns = [
  {
    name: 'desc',
    required: true,
    label: 'Nombre y Apellidos',
    align: 'left',
    field: row => row.desc,
    format: val => `${val}`,
    sortable: true
  }
];

function addOrder() {
  if (newOrder.value !== null) {
    rows.value.push({ desc: newOrder.value });
    newOrder.value = "";
  }
}

const emit = defineEmits(['update:miembros']);

watch(rows, (newValue, oldValue) => {
  emit('update:miembros', newValue);
}, { deep: true });

function removeRow() {
  // Implementa la lógica para remover una fila
}
</script>

<style scoped>
h2 {
  font-size: 32px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin: 45px;
}
</style>
