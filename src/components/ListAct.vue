<template>
  <div class="q-pa-md">
    <q-table title="Actas del Partido" :rows="rows" :columns="columns" row-key="name" :filter="filter"
      :loading="loading" @row-click="handleRowClick">
      <template #body-cell-name="{ row }">
        <q-td>Acta de Reunión Ordinaria No.{{ row.name }}</q-td>
      </template>
      <template #body-cell-nucleo="{ row }">
        <q-td style="text-align: center">{{ row.nucleo }}</q-td>
      </template>
      <template #body-cell-area="{ row }">
        <q-td style="text-align: center">{{ row.area }}</q-td>
      </template>
      <template #body-cell-fet="{ row }">
        <q-td style="text-align: center">{{ row.fet }}</q-td>
      </template>
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

        <q-btn class="btnAdd" icon="add" round color="primary" @click="addProcced"></q-btn>
      </template>
    </q-table>

    <DetailsActa :value="view" :id="idActa"></DetailsActa>
    <DeleteComp :value="persistent"></DeleteComp>
  </div>
</template>

<script setup>
import DetailsActa from "./DetailsActa.vue";
import ActaROComp from "./ActaROComp.vue";
import DeleteComp from "./DeleteComp.vue";
import { ref } from "vue";

const filter = ref("");
const loading = ref(false);
const update = ref(false);
const selectedRow = ref(null);
const view = ref(false);
const persistent = ref(false);
const idActa = ref("2")

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Nombre',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'nucleo', align: 'center', label: 'Núcleo', field: 'nucleo', sortable: true },
  { name: 'area', align: 'center', label: 'Área', field: 'area', sortable: true },
  { name: 'fet', align: 'center', label: 'Fecha', field: 'fet', sortable: true },
  { name: 'view', align: 'center', label: 'Detalles', field: 'view' },
  { name: 'update', align: 'center', label: 'Modificar', field: 'update' },
  { name: 'delete', align: 'center', label: 'Eliminar', field: 'delete' },
]
const rows = [
  {
    name: 1,
    nucleo: 159,
    area: 11,
    fet: 6.0,

  },
  {
    name: 2,
    nucleo: 518,
    area: 31,
    fet: 26.0,

  }
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

</script>

<style scoped>
.busc {
  margin-right: 25px;
  width: 300px;
}
</style>
