<template>
  <div class="container">
    <CardDetail v-for="card in List" :key="card.title" :title = "card.title" :content="card.content" />
  </div>
</template>

<script setup>
import CardDetail from "components/CardDetail.vue";

const List = [
  {
    title: "Genera tablas dinámicas",
    content: "El corazón del sistema es su capacidad para generar tablas dinámicas basadas en indicadores específicos extraídos de las actas. Estas tablas permiten a los usuarios verificar la presencia de los miembros del partido a las reuniones y los puntos analizados.La información se recopila automáticamente a partir de las actas, asegurando que los datos sean precisos y fáciles de acceder.",
  },
  {
    title: "Genera gráficos",
    content: " Además, el sistema supera las expectativas al ofrecer la posibilidad de crear gráficos interactivos que ilustran el comportamiento de los indicadores a lo largo del tiempo. Estos gráficos no solo muestran tendencias y patrones, sino que también permiten a los usuarios explorar datos históricos para identificar áreas de mejora o éxito. La visualización de datos se vuelve accesible y comprensible, facilitando la toma de decisiones basada en evidencia.",
  },
  {
    title: "Más ...",
    content: "Este sistema no solo optimiza la gestión de actas y la asistencia, sino que también promueve la transparencia y la participación activa dentro del Partido Comunista. Al proporcionar herramientas para el análisis y la visualización de datos, el sistema empodera a los miembros del partido para que se involucren más profundamente en el proceso de toma de decisiones y en la planificación estratégica.",
  }

]
</script>

<style scoped>
.container{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}
</style>
