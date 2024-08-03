<template>
  <div class="comp">
    <q-form @submit.prevent.stop="onSubmit">
      <p>este es para config de administrador</p>
      <h2>{{ $t('asign') }}</h2>

      <q-select v-model="selectedRole" :options="options" :label="$t('rol')" />

      <div class="cord">
        <q-btn type="submit" :label="$t('save')" color="primary" class="full-width" />
      </div>
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
  width: 300px;
  margin: 25px;
}

h2 {
  font-size: 26px;
}

.cord {
  margin: 10px;
}
</style>
