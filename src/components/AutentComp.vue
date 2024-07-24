<template>
  <div align="center" class="q-gutter-md " style="margin-top: 50px;">
    <q-card class="conteiner"
      style="background-color: rgba(255,255,255,0.6); border-radius: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0);">
      <q-form>
        <q-card-section>
          <h2>{{ $t("sign") }}</h2>
        </q-card-section>
        <q-card-section>
          <q-input class="inp" clearable filled v-model="name" :label="$t('name')"
            :rules="[val => val && val.length > 0 || 'Por favor introduce tu nombre']">
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>

          <q-input class="inp" clearable filled v-model="email" :label="$t('email')" lazy-rules suffix="@cujae.edu.cu"
            :rules="[val => val && val.length > 0 || 'Por favor introduce tu correo']">
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>

          <q-input class="inp" filled v-model="password" type="password" :label="$t('pass')" lazy-rules :rules="[val => val && val.length > 0 || 'Por favor introduce tu contraseña',
          val => val && val.length <= 8 || 'Solo se admiten 8 caracteres'
          ]">

            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
        </q-card-section>

        <q-card-section>
          <q-btn style="border-radius: 8px; width: 400px; margin-bottom: 10px;" type="submit" color="primary" rounded size="md" :label="$t('sign')" no-caps
             @click="onsubmit"></q-btn>
        </q-card-section>

      </q-form>
    </q-card>
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
  await service.create({ name: name.value, email: email.value + dominio, password: password.value, role: 1 });
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
  font-size: 52px;
  color: black;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
.inp{
 width: 400px;
}
.q-gutter-md {
  max-width: 500px;
}
</style>
