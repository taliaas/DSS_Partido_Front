<template>
  <div class="card">
    <div class="head">
      <q-img style="width: 350px; height: 300px;" src="src/img/autenticacion.jpg"></q-img>
      <h1>Todo sobre ActaStats</h1>
    </div>

    <h2>¿Qué es ActaStats?</h2>
    <p class="text">
      Este proyecto consiste en un sistema innovador y eficiente diseñado
      para administrar y analizar las actas del Partido Comunista,
      transformando la gestión de documentos en una herramienta poderosa
      para el conocimiento y la toma de decisiones. Este sistema no solo
      facilita la creación y almacenamiento de actas, sino que también
      integra funcionalidades avanzadas para el seguimiento de la
      asistencia y el rendimiento de los miembros del partido.
    </p>
  </div>
  <div style="margin: 55px;">
    <ListCard />
  </div>
</template>

<script setup>
import ListCard from "src/components/ListCard.vue";

defineOptions({
  name: "AboutPage",
});
</script>

<style scoped>
.head {
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
}

h1 {
  color: #389160;
  margin: 5px;
  font-size: 46px;
  margin-left: 50px;
  margin-top: 120px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

h2 {
  color: #389160;
  font-size: 36px;
  margin-left: 55px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.card {
  width: 1300px;
  margin-left: 35px;
  text-align: justify;
}

.text {
  margin-left: 55px;
  width: 1200px;
  font-size: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
