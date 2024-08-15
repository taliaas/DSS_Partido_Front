<template>
  <div class="main">
    <q-card class="conteiner"
      style="background-color: rgba(255,255,255,0.6); border-radius: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0);">
      <q-form>
        <q-card-section>
          <h2>{{ $t("log") }}</h2>
        </q-card-section>

        <q-card-section class="q-pa-md">

          <q-input class="inp" clearable filled v-model="name" color="dark" :label="$t('name')"
            :rules="[val => val && val.length > 0 || 'Por favor introduce tu nombre']">
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>

          <q-input outlined filled v-model="password" :type="isPwd ? 'password' : 'text'" color="dark"
            :label="$t('pass')" lazy-rules :rules="[val => val && val.length > 0 || 'Por favor introduce tu contraseña',
            val => val && val.length < 6 || 'Solo se admiten 8 caracteres'
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
          <q-btn style="border-radius: 8px;" type="submit" color="primary" rounded size="md" :label="$t('log')" no-caps
            class="full-width" @click.prevent="authUser"></q-btn>
        </q-card-section>
        <q-card-section class="text-center q-pt-none">
          <div class="text-dark">{{ $t('link') }}
            <a href="http://localhost:9000/sigin" class="text-dark text-weight-bold" style="text-decoration: none">{{
              $t('sign') }}</a>
          </div>
        </q-card-section>
      </q-form>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { LocalStorage } from 'quasar'
import UserService from "src/services/UserService.vue";
import AuthService from "src/services/AuthService";

const name = ref(null);
const password = ref(null);
const isPwd = ref(true)

function onReset() {
  name.value = null;
  password.value = null;
}
const authUser = async () => {
  const auth = new AuthService()
  const success = await auth.login(name.value, password.value)
  if (!success) {
    alert('Exitos')
    //entrar
  }
  else {
    alert('login incorrecto')
    onReset()
  }
}
const us = new UserService();
const user = us.getUser(name.value);

LocalStorage.set('user', user)
</script>

<style scoped>
.q-gutter-md {
  max-width: 500px;
}
.main {
  background-image: url("../img/cuadros.jpg");
}
.butt {
  width: 160px;
  margin: 10px;
  margin-bottom: 30px;
}

h2 {
  font-size: 52px;
  color: black;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.container {
  background-image: radial-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%);
  backdrop-filter: blur(10px);
}
</style>
