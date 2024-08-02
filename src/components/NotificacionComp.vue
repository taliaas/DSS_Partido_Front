<template>
  <div class="q-pa-md mj">
    <q-table flat bordered :title="$t('notif')" :rows="rows" :columns="columns" row-key="name" :filter="filter"
      :selected-rows-label="getSelectedString" selection="multiple" v-model:selected="selected">
      <template v-slot:top-right>
        <q-input class="busc" flat color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        </template>
      <template #body-cell-star>
        <q-td style="text-align: center">
          <q-checkbox v-model="val" color="secondary" checked-icon="star" unchecked-icon="star_border"
            indeterminate-icon="help" />
        </q-td>
      </template>
      <template #body-cell-delete>
        <q-td style="text-align: center">
          <q-btn color="secondary" icon="delete" flat dense size="12px"></q-btn>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref } from "vue"
import DateComp from "src/components/DateComp.vue";

const val = ref(false)

const filter = ref("");
const selected = ref([])
const view = ref(false);
const rows = [
  {
    name: 1,
    detail: 'Reunión Extraordinaria',
    place: 'Automatica',
    fecha: "12 - 12 - 2023",
    hour: "9:00"
  },
  {
    name: 2,
    detail: 'Reunión Ordinaria',
    place: 'Automatica',
    fecha: "04 - 03 - 2024",
    hour: "8:00"
  },
  {
    name: 1,
    detail: 'Reunión Extraordinaria',
    place: 'Automatica',
    fecha: "12 - 12 - 2023",
    hour: "9:00"
  },
  {
    name: 2,
    detail: 'Reunión Ordinaria',
    place: 'Automatica',
    fecha: "04 - 03 - 2024",
    hour: "8:00"
  },
  {
    name: 1,
    detail: 'Reunión Extraordinaria',
    place: 'Automatica',
    fecha: "12 - 12 - 2023",
    hour: "9:00"
  },
  {
    name: 2,
    detail: 'Reunión Ordinaria',
    place: 'Automatica',
    fecha: "04 - 03 - 2024",
    hour: "8:00"
  },
  {
    name: 1,
    detail: 'Reunión Extraordinaria',
    place: 'Automatica',
    fecha: "12 - 12 - 2023",
    hour: "9:00"
  },
  {
    name: 2,
    detail: 'Reunión Ordinaria',
    place: 'Automatica',
    fecha: "04 - 03 - 2024",
    hour: "8:00"
  }, {
    name: 1,
    detail: 'Reunión Extraordinaria',
    place: 'Automatica',
    fecha: "12 - 12 - 2023",
    hour: "9:00"
  },
  {
    name: 2,
    detail: 'Reunión Ordinaria',
    place: 'Automatica',
    fecha: "04 - 03 - 2024",
    hour: "8:00"
  }
]
const columns = [

  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  {
    name: 'detail',
    label: 'Detalles',
    field: 'detail',
    align: 'left'
  },
  {
    name: 'hour',
    field: 'hour',
    align: 'left'
  },
  {
    name: "star",
    align: 'left',
    field: 'star'
  },
  {
    name: "delete",
    align: "left",
    field: "delete"
  }
]

function getSelectedString() {
  return selected.value.length === 0 ? '' : `${selected.value.length} record${selected.value.length > 1 ? 's' : ''} selected of ${rows.length}`
}
</script>

<style scoped>
.busc {
  margin: 10px;
  width: 350px;
}
</style>
