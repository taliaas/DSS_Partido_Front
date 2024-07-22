<template>
  <div v-if="isVisible">
    <q-dialog v-model="model">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-toolbar>
          <q-toolbar-title><span class="text-weight-bold">ActaStats</span> </q-toolbar-title>
          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>

        <q-card-section>
          <q-input class="busc" :label="$t('btn2')" dense color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>

          <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="acta"
            :label="$t('btn1')" />
          <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="rectangle"
          :label="$t('user')"/>

        </q-card-section>

        <q-card-section>
          <p>Listado de Actas o usuarios </p>
        </q-card-section>

        <q-card-section>
          <q-btn class="btn" icon="download" rounded color="primary"></q-btn>

        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const model = ref(true);
const filter = ref("");
const shape = ref('acta');
const props = defineProps({
  value: Boolean,
});

// Uso de computed para crear una propiedad computada 'isVisible'
const isVisible = computed(() => props.value);

</script>

<style scoped>
.btn {
  margin: 5px;
}
</style>
