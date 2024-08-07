<template>
  <div>
    <q-dialog v-if="value" v-model="model" :maximized="maximizedToggle" persistent>
      <q-card class="info">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" class="bg-white text-primary">Minimizar</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary">Maximizar</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Cerrar</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section style="margin-left: 25px;">
          <div class="text-h6">{{ $t('acta') }} {{ props.id }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-table flat class="tg" separator="vertical" disable :rows="rows" :columns="columns" row-key="name" dense
            hide-bottom></q-table>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <h2>{{ $t('miembros') }}</h2>
          <q-table flat class="tg" disable :rows="newRow" :columns="newColumns" row-key="index" dense
            hide-bottom></q-table>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <h2>{{ $t('oder') }}</h2>
          <q-card flat class="my-card">{{ loren }}</q-card>
          <h2>{{ $t('des') }}</h2>
          <q-card flat class="my-card">{{ loren }}</q-card>
          <h2>{{ $t('agree') }}</h2>
          <q-card flat class="my-card">{{ loren }}</q-card>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue"

const model = ref(true);
const maximizedToggle = ref(false)

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Núcleo',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`
  },
  { name: 'area', align: 'center', label: 'Área', field: 'area' },
  { name: 'fet', align: 'center', label: 'Fecha', field: 'fet' },
  { name: 'hour', align: 'center', label: 'Hora', field: 'hour' },
  { name: 'pres', align: 'center', label: 'Presentes', field: 'pres' },
  { name: 'aus', align: 'center', label: 'Ausentes', field: 'aus' }
]
const rows = [
  {
    name: 1,
    nucleo: 159,
    area: 11,
    fet: 6.0,

  },
]
const newColumns = [
  {
    name: 'index',
    label: '#',
    field: 'index',
    align: 'center',
  },
  {
    name: 'name',
    required: true,
    label: 'Nombre',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`
  },
  {
    name: 'ap',
    required: 'true',
    align: 'center',
    field: 'ap',
    label: 'Apellidos'
  },
  {
    name: 'asist',
    align: 'center',
    field: 'asist',
    label: 'Asistencia'
  }
]
const seed = [
  {
    name: 'Alberto',
    ap: 'Romero Pedraza',
    asist: 'Presente'
  }
]
const loren = "loren"
// we generate lots of rows here
let newRow = []
for (let i = 0; i < 1; i++) {
  newRow = newRow.concat(seed.slice(0).map(r => ({ ...r })))
}
newRow.forEach((newRow, index) => {
  newRow.index = index
})

const props = defineProps({
  value: {
    type: Boolean,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
})

function mostrar() {
  console.log(model.value);
}
</script>

<style scoped>
.tg {
  margin: 25px;
}

h2 {
  font-size: 26px;
  margin-left: 25px;
}

.my-card {
  margin: 20px;
}
</style>
