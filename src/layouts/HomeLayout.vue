<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat label="ActaStats" href="/"/>
        <q-space />

        <q-tabs align="left">
          <q-route-tab to="/login" label="Iniciar Sesión " />
          <q-route-tab to="/autentication" label="Crear cuenta" />
          <q-route-tab to="/about" label="Acerca" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<script setup>
defineOptions({
  name: "HomeLayout",
});
</script>

<style scoped></style>
