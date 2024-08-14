<template>
  <div class="q-pa-md">
    <q-table :title="$t('user')" :rows="rows" :columns="columns" row-key="name" :filter="filter"
      :loading="loading" @row-click="handleRowClick">
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

        <q-btn color="primary" outline round icon="add" size="14px" href="/index/adduser" />
      </template>

    </q-table>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import UserService from "src/services/UserService";

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
    deleteUser(selectedRow.value);
  }).onCancel(() => {
    console.log('Cancel');
  })
}

const columns = [
  {
    name: 'id',
    required: true,
    label: 'Nombre',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'nucleo', align: 'left', label: 'Núcleo', field: 'nucleo', sortable: true },
  { name: 'area', align: 'left', label: 'Área', field: 'area', sortable: true },
  { name: 'correo', align: 'left', label: 'Correo', field: 'email', sortable: true },
  { name: 'rol', align: 'left', label: 'Rol', field: 'role', sortable: true },
  { name: 'update', align: 'left', label: 'Modificar', field: 'update' },
  { name: 'delete', align: 'left', label: 'Eliminar', field: 'delete' },
]

function handleRowClick(evt, row, index) {
  selectedRow.value = JSON.stringify(row.id);
  console.log(`Id de fila seleccionada: ${selectedRow.value}`);
  return selectedRow;
}
const rows = ref([]);

onMounted (loadUserData);
async function loadUserData() {
  const user = new UserService();
  try {
    const userData = await user.getAll();
    rows.value = userData;
    loading.value = false;
  } catch (error) {
    console.error('Error al cargar los usuarios', error);
    loading.value = false;
  }
}

async function deleteUser(userId) {
  console.log(userId);

  const userDelete = new UserService();
  await userDelete.deleteUser(userId)
    .then(() => {
      rows.value = rows.value.filter(row => row.id !== userId);
    })
    .catch(error => {
      console.error('Error al eliminar el usuario:', error);
    });
    loadUserData();
}
</script>

<style scoped>
.busc {
  margin-right: 25px;
  width: 300px;
}
</style>
