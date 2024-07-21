<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="container">
    <q-card>
      <q-tab-panels v-model="props.title" animated>
        <q-tab-panel name="General">
          <div class="id">Idioma</div>
          <q-toggle class="togg" v-model="value" :label="language" @click="updateLanguage" />
        </q-tab-panel>

        <q-tab-panel name="Cuentas">
          <div class="account">
            <ListAccount></ListAccount>
          </div>
          <div>

          </div>
        </q-tab-panel>

        <q-tab-panel name="Notificaciones">
          <div>
            <q-checkbox v-model="check2" label="Notificaciones" />
          </div>
        </q-tab-panel>

        <q-tab-panel name="Ayuda">
          <div class="text-h6">{{ props.title }}</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import ListAccount from "components/ListAccount.vue";

const value = ref(false);
const check2 = ref(false);
const language = ref("Español");
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

function updateLanguage() {
  if (language.value === "Español") {
    language.value = 'English'
  }
  else
    language.value = 'Español'
}
</script>

<style scoped>
.container {
  margin: 20px;
  width: 500px;
}

.id {
  font-size: 26px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.togg {
  font-size: 16px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
