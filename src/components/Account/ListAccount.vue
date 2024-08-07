<template>
  <div>
    <q-btn class="pass" flat color="primary" label="Modificar name" @click="update_name = true"></q-btn>
    <q-btn class="pass" flat color="primary" label="Modificar correo" @click="update_email = true"></q-btn>
    <q-btn class="pass" flat color="primary" label="Modificar rol" @click="update_role = true"></q-btn>
    <q-btn class="pass" flat color="primary" label="Modificar contraseña" @click="update_password = true"></q-btn>
    <q-separator spaced></q-separator>
    <q-btn class="pass" flat color="primary" label="Eliminar usuario" @click="deleteUser = true"></q-btn>
    
    <q-btn class="pass" flat color="primary" label="Eliminar rol" @click="deleteRole = true"></q-btn>

  </div>
</template>

<script setup>
import { ref } from "vue";

const deleteUser = ref(false);
const deleteRole = ref(false);
const update_name = ref(false);
const update_email = ref(false);
const update_role = ref(false);
const update_password = ref(false);

</script>

<style scoped></style>
