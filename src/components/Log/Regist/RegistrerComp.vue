<template>
  <div style=" padding: 0px; margin: 0px;">
    <q-card class="conteiner"
      style="background-color: rgba(255,255,255,0.6); border-radius: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0);">
      <q-form>
        <q-card-section>
          <h2>{{ $t("sign") }}</h2>
        </q-card-section>
        <q-card-section>
          <q-input class="inp" clearable filled v-model="name" color="dark" :label="$t('name')"
            :rules="[val => val && val.length > 0 || 'Por favor introduce tu nombre']">
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>

          <q-input class="inp" clearable filled v-model="email" color="dark" :label="$t('email')" lazy-rules
            suffix="@cujae.edu.cu" :rules="[val => val && val.length > 0 || 'Por favor introduce tu correo']">
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>

          <q-input class="inp" filled v-model="password" color="dark" :type="isPwd ? 'password' : 'text'"
            :label="$t('pass')" lazy-rules :rules="[val => val && val.length > 0 || 'Por favor introduce tu contraseña',
            val => val && val.length <= 8 || 'Solo se admiten 8 caracteres'
            ]">

            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
            </template>
          </q-input>
        </q-card-section>

        <q-card-section>
          <q-btn style="border-radius: 8px; width: 100%; margin-bottom: 10px;" type="submit" color="primary" rounded
            size="md" :label="$t('sign')" no-caps @click="onSubmit"></q-btn>
        </q-card-section>
        <q-card-section>
          <p v-if="showSnackbar" style="color: red;" :timeout="3000">
            {{ snackbarMessage }}
          </p>
        </q-card-section>
      </q-form>
    </q-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CreateService from "src/services/CreateService";

const isPwd = ref(true)
const name = ref("");
const email = ref("");
const password = ref("");
const role = 'admin';
const showSnackbar = ref(false);
const snackbarMessage = ref('');

function onReset() {
  name.value = null;
  email.value = null;
  password.value = null;
}
const dominio = "@cujae.edu.cu";
const createServiceInstance = new CreateService();

// Función de envío del formulario
function onSubmit(e) {

  e.preventDefault();

  const userData = {
    name: name.value,
    email: email.value + dominio,
    password: password.value,
    role: role
  };

  // Llama a la función createUser con los valores obtenidos
  createServiceInstance.createUser(userData)
    .then(data => {
      console.log('User created successfully:', data);
      //token
      //entrar
    })
    .catch(error => {
      console.error('Failed to create user:', error);
      snackbarMessage.value = 'Failed to create user: ' + error;
      onReset();
    });
};
</script>

<style scoped>
.container {
  max-width: 100%;
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
  font-size: 52px;
  color: black;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.inp {
  width: 100%;
}

.q-gutter-md {
  max-width: 500px;
}
</style>
