<template>
  <div style=" margin: 25px;">

    <q-table flat bordered :title="$t('agree')" :rows="rows" :columns="columns" :filter="filter" :loading="loading"
      no-data-label="No hay datos" row-key="index" :rows-per-page-options="[0]">

      <template v-slot:top-right>
        <q-btn color="primary" :disable="loading" round icon="add" @click="medium = true" />
        <q-btn v-if="rows.length !== 0" class="q-ml-sm" round color="primary" :disable="loading" icon="remove"
          @click="removeRow" />
      </template>
    </q-table>
  </div>

  <div class="dialo">
    <q-dialog v-model="medium">
      <q-card style="width: 700px; max-width: 80vw">
        <q-card-section>
          <div class="text-h6">Añadir acuerdo</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input class="row2" v-model="agreem" filled label=" Acuerdo" style="width: 600px;" />

        </q-card-section>
        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat color="positive" label="Guardar" @click="addOrder" />
          <q-btn flat color="negative" label="Cancelar" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const medium = ref(false);
const loading = ref(false);
const filter = ref("");
const agreem = ref("");

let rows = ref([]);

const columns = [

  {
    name: 'desc',
    required: true,
    label: "Descripcion",
    align: 'left',
    field: row => row.desc,
    format: val => `${val}`,
    sortable: true
  },
]

function addOrder() {
  if (agreem.value !== null) {
    rows.value.push({ desc: agreem.value });
    agreem.value = "";
  }
}

//hacer remove
function removeRow() { }

</script>

<style scoped>
h2 {
  font-size: 32px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin: 45px;
}
</style>
