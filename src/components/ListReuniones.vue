<template>
  <div class="q-pa-md mj">
    <q-table flat bordered :title="$t('list')" :rows="rows" :columns="columns" row-key="name" :filter="filter">
      <template v-slot:top-right>
        <q-input class="busc" flat color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-btn color="primary" icon-right="add" rounded  @click="view = true" />
      </template>
    </q-table>
  </div>
  <DateComp :value="view"></DateComp>
</template>

<script setup>
import { ref } from "vue"
import DateComp from "src/components/DateComp.vue";

const filter = ref("");
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
  },  {
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
    label: 'Núcleo',
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
    name: 'place',
    label: 'Lugar',
    field: 'place',
    align: 'left'
  },
  {
    name: 'fecha',
    label: 'Fecha',
    field: 'fecha',
    align: 'left'
  },
  {
    name: 'hour',
    label: 'Hora',
    field: 'hour',
    align: 'left'
  }

]
</script>

<style scoped>
.mj {
  width: 1400px;
  height: 600px;
}

.busc {
  width: 300px;
  margin-right: 20px;
}
</style>
