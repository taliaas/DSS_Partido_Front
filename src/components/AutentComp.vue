<template>
  <div class="container">
    <q-form>
      <div class="q-pa-md" style="max-width: 400px;">
        <h2 style="margin-bottom: 60px;">Crear cuenta</h2>

        <q-input class="nm" clearable filled v-model="name" label="Nombre *"
          :rules="[val => val && val.length > 0 || 'Por favor introduce tu nombre']">
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>

        <q-input class="em" clearable filled v-model="email" label="Correo *" lazy-rules suffix="@cujae.edu.cu"
          :rules="[val => val && val.length > 0 || 'Por favor introduce tu correo']">
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
        </q-input>

        <q-input class="pw" filled v-model="password" type="password" label="Contraseña *" lazy-rules :rules="[val => val && val.length > 0 || 'Por favor introduce tu contraseña',
        val => val && val.length <= 8 || 'Solo se admiten 8 caracteres'
        ]">

          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>
      </div>
      <div style=" flex-direction: row; margin-left: 80px; width: 400px;">
        <q-btn class="butt" label="Registrar" type="submit" color="primary" />
      </div>

    </q-form>

  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { onMounted } from "vue";
import PostService from "src/services/PostService";

const service = new PostService();
const posts = service.getPosts();

const name = ref("");
const email = ref("");
const password = ref("");

function onReset() {
  name.value = null;
  email.value = null;
  password.value = null;
}
const dominio = "@cujae.edu.cu";
const valueObject = {
  name: name.value,
  email: email.value + dominio,
  password: password.value,
  role: 1,
}

onMounted(async () => {
  await service.create({ name: name.value, email:  email.value + dominio, password:  password.value, role: 1 });
  console.log(posts);
});
</script>

<style scoped>
.container {
  max-width: 100%;
  height: auto;
  margin: 10px;
}

.q-pa-md {
  margin-left: 60px;
  margin-top: 80px;
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
}

.butt {
  margin-left: 55px;
  width: 250px;
}

h2 {
  font-size: 38px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
