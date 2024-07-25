<template>
  <q-card class="card" flat bordered>
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>Usuario</q-item-label>
        <q-item-label caption>
          correo
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-card>

  <div class="list">
    <q-card class="my-card text-white" style="background: radial-gradient(circle,  #2ba96a 0%, #0c7d32 100%)">
      <q-card-section>
        <q-card-section>
          Nucleo
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card class="my-card text-white" style="background: radial-gradient(circle,  #2ba96a 0%, #0c7d32 100%)">
      <q-card-section>
        <q-card-section>
          Area
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card class="my-card text-white" style="background: radial-gradient(circle,  #2ba96a 0%, #0c7d32 100%)">
      <q-card-section>
        <q-card-section>
          Cargo
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card class="my-card text-white" style="background: radial-gradient(circle,  #2ba96a 0%, #0c7d32 100%)">
      <q-card-section>
        <q-card-section>
          Rol
        </q-card-section>
      </q-card-section>
    </q-card>
    <q-card class="my-card text-white" style="background: radial-gradient(circle, #2ba96a 0%, #0c7d32 100%)">
      <q-card-section>
        <q-card-section>
          Incidencias
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>

  <div>
  </div>
</template>

<script setup>

</script>
<style scoped>
h3 {
  font-size: 24px;
}

.card {
  margin: 20px;
}

.act {
  margin: 20px;
}

.my-card {
  margin-left: 20px;
  margin-right: 20px;
  width: 250px;
  height: 80px;
}

.list {
  display: flex;
  justify-content: space-between;
}
</style>
