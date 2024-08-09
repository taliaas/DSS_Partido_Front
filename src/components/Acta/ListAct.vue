<template>
  <div class="q-pa-md">
    <q-table title="Actas del Partido" :rows="rows" :columns="columns" row-key="name" :filter="filter"
      :loading="loading" @row-click="handleRowClick">
      <template #body-cell-view>
        <q-td style="text-align: center"><q-btn flat color="secondary" icon="visibility" size="10px"
            @click="view = !view" /></q-td>
      </template>
      <template #body-cell-update>
        <q-td style="text-align: center"><q-btn flat color="secondary" icon="update" size="10px"
            @click="addProcced" /></q-td>
      </template>
      <template #body-cell-delete>
        <q-td style="text-align: center"><q-btn flat color="secondary" icon="delete" size="10px"
            @click="persistent = true" /></q-td>
      </template>
      <template #body-cell-add>
        <q-td style="text-align: center"><q-btn flat icon="add" size="10px" @click="addProcced" /></q-td>
      </template>
      <template v-slot:top-right>
        <q-input class="busc" dense color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>

  </div>
</template>

<script setup>
import ActaService from "src/services/ActaService";
import { ref, onMounted } from "vue";

const filter = ref("");
const loading = ref(true);
const selectedRow = ref(null);
const view = ref(false);
const persistent = ref(false);

const columns = [
  {
    name: 'id',
    required: true,
    label: 'No. Acta',
    align: 'left',
    field: row => row.id,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'nucleo', align: 'center', label: 'Núcleo', field: 'nucleo', sortable: true },
  { name: 'area', align: 'center', label: 'Área', field: 'area', sortable: true },
  { name: 'ausent', align: 'center', label: 'Ausentes', field: 'missing', sortable: true },
  { name: 'presente', align: 'center', label: 'Presentes', field: 'present', sortable: true },
  { name: 'hora', align: 'center', label: 'Hora', field: 'hour', sortable: true },
  { name: 'fet', align: 'center', label: 'Fecha', field: 'day', sortable: true },
  { name: 'view', align: 'center', label: 'Detalles', field: 'view' },
  { name: 'update', align: 'center', label: 'Modificar', field: 'update' },
  { name: 'delete', align: 'center', label: 'Eliminar', field: 'delete' },
]

function handleRowClick(evt, row, index) {
  selectedRow.value = JSON.stringify(row.name);
  console.log(`Fila seleccionada: ${row.name}`);
  console.log(view.value);

  return row.name;
}

function addProcced() {
  window.location.href = "http://localhost:9000/index/actaordinaria";
}
const rows = ref([]);

onMounted(async () => {
  const acta = new ActaService()
  try {
    const actaROData = await acta.getActaRO();
    rows.value = actaROData;
    loading.value = false;
  } catch (error) {
    console.error('Error al cargar las Acta de Reunión Ordinaria', error);
    loading.value = false;
  }
});
</script>

<style scoped>
.busc {
  margin-right: 25px;
  width: 300px;
}
</style>
