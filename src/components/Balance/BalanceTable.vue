<template>
  <div class="info">
    <q-table class="act" :title="$t('bala')" bordered :rows="rows" :columns="columns" row-key="name"
      :filter="filter" :loading="loading" @row-click="handleRowClick">
      <template v-slot:top-right>
        <q-input class="busc" flat color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-btn color="primary" icon-right="archive" :label="$t('ex')" no-caps @click="exportTable" />
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { exportFile } from 'quasar'

const filter = ref("");
const loading = ref(false);
const selectedRow = ref(null);

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Núcleo',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  { name: 'order', align: 'center', label: 'Orden del Día', field: 'order' },
  { name: 'part', align: 'center', label: 'Participantes', field: 'part' },
  { name: 'agreem', align: 'center', label: 'Total de Acuerdos', field: 'agreem' },
  { name: 'crec', align: 'center', label: 'Crecimiento', field: 'crec' },
  { name: 'cp', align: 'center', label: 'Círculo Político', field: 'cp' },
  { name: 'cp-agreem', align: 'center', label: 'Acuerdos de Círculo Político', field: 'cp-agreem' },
]
const rows = [
  {
    name: "jnx",
    nucleo: "xns",
    area: "snx",
    fet: "s",
  }
]

function handleRowClick(evt, row, index) {
  selectedRow.value = JSON.stringify(row.name);
  console.log(`Fila seleccionada: ${row.name}`);
  return row.name;
}

function wrapCsvValue(val, formatFn, row) {

  let formatted = formatFn !== void 0
    ? formatFn(val, row)
    : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')

  return `"${formatted}"`
}

function exportTable() {
  // naive encoding to csv format
  const content = [columns.map(col => wrapCsvValue(col.label))].concat(
    rows.value.map(row => columns.map(col => wrapCsvValue(
      typeof col.field === 'function'
        ? col.field(row)
        : row[col.field],
      col.format,
      row
    )).join(','))
  ).join('\r\n')

  const status = exportFile(
    'table-export.csv',
    content,
    'text/csv'
  )

  if (status !== true) {
    $q.notify({
      message: 'Browser denied file download...',
      color: 'negative',
      icon: 'warning'
    })
  }
}
</script>

<style scoped>
.info {
  margin: 25px;
}

.busc {
  margin: 25px;
}
</style>
