<template>
  <div>
    <h2>{{ $t('r1') }}</h2>
  </div>
  <div class="input">
    <InfoActaComp @update:nucleo="handleNucleoUpdate" @update:area="handleAreaUpdate" />
    <AsistenciaComp @update:pres="handlePresUpdate" @update:aus="handleAusUpdate"/>
    <DateComp @update:date="handleDateUpdate"/>
    <TimeComp @update:time="handleTimeUpdate"/>
    <q-separator />
  </div>
  <div>
    <MembersComp />
    <OrdenTable />
    <Development />
    <AgreemComp />
  </div>
  <div class="container">
    <q-checkbox v-model="teal" val="teal" color="primary" :label="$t('btn7')" />
  </div>

  <div class="container">
    <q-btn type="submit" :loading="submitting" outline label="Guardar" class="q-mt-md" icon="save" color="primary"
      @click="save">
      <template v-slot:loading>
        <q-spinner-facebook />
      </template>
    </q-btn>
    <q-btn label="Cancelar" outline class="q-mt-md" color="negative"></q-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InfoActaComp from "src/components/ActaRO/InfoActaComp.vue";
import OrdenTable from "src/components/ActaRO/OrdenTable.vue";
import AgreemComp from "src/components/ActaRO/AgreemComp.vue";
import MembersComp from "src/components/ActaRO/MembersComp.vue";
import Development from "src/components/ActaRO/DevelopComp.vue";
import AsistenciaComp from "./AsistenciaComp.vue";
import DateComp from "./DateComp.vue";
import TimeComp from './TimeComp.vue';

const submitting = ref(false);
const teal = ref(true);

let nucleo = ref("");
let area = ref("");
let aus = ref("")
let pres = ref("")
let time = ref("")
let date = ref("")

function handleNucleoUpdate(value) {
  console.log(value)
  nucleo.value = value;
}

function handleAreaUpdate(value) {
  console.log(value)
  area.value = value;
}

function handlePresUpdate(value) {
  console.log(value)
  pres.value = value;
}

function handleAusUpdate(value) {
  console.log(value)
  aus.value = value;
}

function handleDateUpdate(value) {
  console.log(value)
  date.value = value;
}

function handleTimeUpdate(value) {
  console.log(value)
  time.value = value;
}
</script>

<style scoped>
.q-mt-md {
  margin: 25px;
  width: 150px;
}

h2 {
  margin: 20px;
  font-size: 44px;
}

.container {
  margin: 20px;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
}

.input {
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
}
</style>
