<template>
  <q-form>
    <h2>{{ $t("log") }}</h2>
    <NameComp />
    <PasswordComp />
    <q-btn style="border-radius: 8px;" type="submit" color="primary" rounded size="md" :label="$t('log')" no-caps
      class="full-width" @click.prevent="authUser"></q-btn>

    <div class="text-dark">{{ $t('link') }}
      <a href="http://localhost:9000/sigin" class="text-dark text-weight-bold" style="text-decoration: none">{{
        $t('sign') }}</a>
    </div>
  </q-form>
</template>

<script setup>
import { ref } from "vue";
import UserService from "src/services/UserService.vue";
import AuthService from "src/services/AuthService";


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
