<template>
  <div class="comp">
    <q-form @submit.prevent.stop="onSubmit">
      <q-select v-model="selectedRole" :options="options" :label="$t('rol')" />
      <q-select v-model="selectedArea" :options="options" :label="$t('area')" />
      <q-select v-model="selectedNucleo" :options="options" :label="$t('nucleo')" />
    </q-form>
  </div>
</template>

<script setup>

import { ref, onMounted, computed } from 'vue';
import RoleService from 'src/services/RoleService';

const roleServ = new RoleService();
const roles = ref([]);
const selectedRole = ref(null);

// Preparar las opciones para q-select
const options = computed(() => {
  return roles.value.map(role => ({ label: role.name, value: role.id }));
});

function obtenerRoles() {
  roleServ.getAllRole()
    .then(data => {
      roles.value = data;
    })
    .catch(error => {
      console.error('Error al obtener roles:', error);
    });
}

onMounted(() => {
  obtenerRoles();
});
function onSubmit() {

}
</script>

<style scoped>
.comp {
  width: 400px;
  margin: 10px;
}

h2 {
  font-size: 26px;
}

.cord {
  margin: 10px;
}
</style>
