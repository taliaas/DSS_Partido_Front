<template>
  <div class="gra">
    <canvas id="myLineChart"></canvas>
  </div>
</template>

<script setup>
import { onMounted, watch, ref } from 'vue';
import Chart from 'chart.js/auto';

const props = defineProps({
  indicador: {
    type: String,
    required: true
  },
  data: {
    type: Array,
    required: true
  }
})

const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let data = {
  labels: labels,
  datasets: [{
    label: props.indicador,
    data: [23, 45, 21, 10],
    borderColor: 'rgba(75, 192, 192, 1)',
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderWidth: 1
  }]
};
const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

// Función para crear el gráfico
function createChart() {
  console.log(props.indicador)
  const ctx = document.getElementById('myLineChart').getContext('2d');
  let chartInstance;

  if (window.chartInstance) {
    window.chartInstance.destroy();
    delete window.chartInstance;
  }

  if (ctx) {
    chartInstance = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });

    window.chartInstance = chartInstance;
  } else {
    console.error("Elemento 'myLineChart' no encontrado");
  }
}

watch(() => props.indicador, () => {
  createChart();
});

onMounted(createChart);

</script>

<style scoped>
.gra {
  margin: 25px;
  width: 1200px;
  height: 500px;
}
</style>
