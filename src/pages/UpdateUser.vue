<template>
  <q-page class="container">
    <div class="comp">
      <h2>Modificar correo</h2>
      <UpdateEmail></UpdateEmail>
    </div>
  </q-page>
</template>

<script setup>
import UpdateEmail from "components/UpdateEmail.vue"
defineOptions({
  name: 'UpdateUser'
});
</script>

<style scoped>
h2 {
  font-size: 26px;
  margin: 25px;
}
</style>
