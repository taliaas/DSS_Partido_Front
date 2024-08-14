<template>
    <div class="info" >
      <q-form>
        <q-card-label>
          <h2>{{ $t('add') }}</h2>
        </q-card-label>
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

          <RoleComp />
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
    </div>
</template>

<script setup>
import { ref } from "vue";
import RoleComp from './RoleComp.vue';

//añadir nucleo y area

const isPwd = ref(true)
const name = ref("");
const email = ref("");
const password = ref("");
const showSnackbar = ref(false);
const snackbarMessage = ref('');

function onReset() {
  name.value = null;
  email.value = null;
  password.value = null;
}
const dominio = "@cujae.edu.cu";

</script>

<style scoped>
.info {
  margin: 10px;
  max-width: 450px;
  display: flex;
  justify-content: center;
}

h2 {
  font-size: 28px;
  margin: 20px;
}

</style>
