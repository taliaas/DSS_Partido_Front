<template>
  <div class="q-pa-md">
    <q-table title="Actas del Partido" :rows="rows" :columns="columns" row-key="name" :filter="filter"
      :loading="loading" @row-click="handleRowClick">

      <template #body-cell-view>
        <q-td style="text-align: left" auto-width> <q-btn flat color="secondary" icon="visibility" size="10px" @click="view"/></q-td>
      </template>
      <template #body-cell-update>
        <q-td style="text-align: left"><q-btn flat color="secondary" icon="update" size="10px" /></q-td>
      </template>
      <template #body-cell-delete>
        <q-td style="text-align: left"><q-btn flat color="secondary" icon="delete" size="10px"
            @click="alertActa" /></q-td>
      </template>

      <template v-slot:top-right>
        <q-input class="busc" dense color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-btn color="primary" outline round icon="add" size="14px" href="/index/actaordinaria" />
      </template>

    </q-table>
  </div>
</template>

<script setup>
import ActaService from "src/services/ActaService";
import { ref, onMounted, watch, watchEffect } from "vue";
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import DeleteActa from "src/services/DeleteActa";
import ActaView from "../../pages/ActaView.vue";

const filter = ref("");
const loading = ref(true);
const selectedRow = ref(null);

const { t } = useI18n()
const $q = useQuasar()

function alertActa() {

  $q.dialog({
    title: t('remove'),
    message: t('delete'),
    persistent: true
  }).onOk(() => {
    deleteActa(selectedRow.value);
  }).onCancel(() => {
    console.log('Cancel');
  })
}

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
  { name: 'nucleo', align: 'left', label: 'Núcleo', field: 'nucleo', sortable: true },
  { name: 'area', align: 'left', label: 'Área', field: 'area', sortable: true },
  { name: 'ausent', align: 'left', label: 'Ausentes', field: 'missing', sortable: true },
  { name: 'presente', align: 'left', label: 'Presentes', field: 'present', sortable: true },
  { name: 'hora', align: 'left', label: 'Hora', field: 'hour', sortable: true },
  { name: 'fet', align: 'left', label: 'Fecha', field: 'day', sortable: true },
  { name: 'cp', align: 'left', label: 'CP', field: 'cp', sortable: true },
  { name: 'view', align: 'left', label: 'Detalles', field: 'view' },
  { name: 'update', align: 'left', label: 'Modificar', field: 'update' },
  { name: 'delete', align: 'left', label: 'Eliminar', field: 'delete' },
]
const rows = ref([]);

onMounted(loadActaROData);
async function loadActaROData() {
  const acta = new ActaService();
  try {
    const actaROData = await acta.getActaRO();
    rows.value = actaROData;
    loading.value = false;
  } catch (error) {
    console.error('Error al cargar las Acta de Reunión Ordinaria', error);
    loading.value = false;
  }
}

async function deleteActa(actaId) {
  console.log(actaId);

  const actaService = new DeleteActa();
  await actaService.deleteActaRO(actaId)
    .then(() => {
      // Actualiza las filas después de eliminar con éxito
      rows.value = rows.value.filter(row => row.id !== actaId);
    })
    .catch(error => {
      console.error('Error al eliminar el acta:', error);
    });
  loadActaROData();
}
import { useRouter } from 'vue-router';

const router = useRouter();
function handleRowClick(evt, row, index) {
  selectedRow.value = JSON.stringify(row.id);
  console.log(`Id de fila seleccionada: ${selectedRow.value}`);
  return selectedRow.value;
}
function view(){
  const id = selectedRow.value;
  router.push({ name: 'ActaView', params: { id } });
}
</script>

<style scoped>
.busc {
  margin-right: 25px;
  width: 300px;
}
</style>
