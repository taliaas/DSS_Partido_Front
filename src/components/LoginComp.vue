<template>

  <q-form class="container">
    <div class="q-pa-md" style="max-width: 400px;">
      <h2 style="margin-bottom: 60px;">Iniciar Sesión</h2>
      <q-input class="em" clearable filled v-model="email" label="Correo *" lazy-rules suffix="@cujae.edu.cu"
        :rules="[val => val && val.length > 0 || 'Por favor introduce tu correo']">
        <template v-slot:prepend>
          <q-icon name="email" />
        </template>
      </q-input>

      <q-input class="pw" filled v-model="password" type="password" label="Contraseña *" lazy-rules :rules="[val => val && val.length > 0 || 'Por favor introduce tu contraseña',
      val => val && val.length < 8 || 'Solo se admiten 8 caracteres'
      ]">

        <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
      </q-input>
    </div>
    <div style=" flex-direction: row; margin-left: 80px; width: 400px;">
      <a href="http://localhost:9000/login/password">¿Olvido la contraseña?</a>
      <q-btn class="butt" label="Iniciar Sesión" rounded type="submit" color="primary" @click="onsubmit" />
    </div>
  </q-form>

</template>

<script setup>
import { ref } from "vue";

const email = ref(null);
const password = ref(null);

function onReset() {
  email.value = null;
  password.value = null;
}
function onsubmit() {
  window.location.href = "http://localhost:9000/index";
}
</script>
<style scoped>
.container {
  max-width: 100%;
  height: auto;
}

.q-pa-md {
  margin-left: 60px;
  margin-top: 70px;
}

.butt {
  margin-left: 55px;
  width: 160px;
}

h2 {
  font-size: 32px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
