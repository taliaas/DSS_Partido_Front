<template>
  <div align="center" class="q-gutter-md " style="margin-top: 50px;">
    <q-card class="conteiner" style="background-color: rgba(255,255,255,0.6); border-radius: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0);">
      <q-form>
        <q-card-section>
          <h2>{{ $t("log") }}</h2>
        </q-card-section>

          <q-card-section class="q-pa-md">
            <q-input dense outlined clearable filled v-model="email" :label="$t('email')" color="dark"
              lazy-rules suffix="@cujae.edu.cu"
              :rules="[val => val && val.length > 0 || 'Por favor introduce tu correo']">
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>

            <q-input dense outlined filled v-model="password" type="password" color="dark"
              :label="$t('pass')" lazy-rules :rules="[val => val && val.length > 0 || 'Por favor introduce tu contraseña',
              val => val && val.length < 8 || 'Solo se admiten 8 caracteres'
              ]">

              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>
        </q-card-section>

        <q-card-section>
            <q-btn style="border-radius: 8px;" type="submit" color="primary" rounded size="md" :label="$t('log')" no-caps class="full-width" @click="onsubmit"></q-btn>
          </q-card-section>
          <q-card-section class="text-center q-pt-none">
            <div class="text-dark">{{ $t('link') }}
              <a href="http://localhost:9000/autentication" class="text-dark text-weight-bold" style="text-decoration: none">{{ $t('sign') }}</a></div>
          </q-card-section>
      </q-form>
    </q-card>
  </div>
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
.q-gutter-md {
  max-width: 500px;
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
  background-image: radial-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%);
  backdrop-filter: blur(10px);
}

</style>
