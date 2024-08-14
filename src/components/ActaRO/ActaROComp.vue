<template>
  <div class="container">
    <div>
      <h2>{{ $t('r1') }}</h2>
    </div>
    <div class="input">
      <InfoActaComp @update:nucleo="handleNucleoUpdate" @update:area="handleAreaUpdate" />
      <AsistenciaComp @update:pres="handlePresUpdate" @update:aus="handleAusUpdate" />
      <DateComp @update:date="handleDateUpdate" />
      <TimeComp @update:time="handleTimeUpdate" />
      <q-separator />
    </div>
    <div class="tablas">
      <MembersComp @update:miembros="handleMembersUpdate" />
      <OrdenTable @update:order="handleOrdersUpdate" />
      <Development @update:dev="handleDevelopUpdate" />
      <AgreemComp @update:agreem="handleAgreemUpdate" />
    </div>
    <div>
      <q-checkbox style=" margin: 25px;" v-model="check" dense val="1" color="primary" :label="$t('btn7')" />
    </div>
  </div>
  <div style=" margin: 25px;" class="met">
    <q-btn type="submit" :loading="submitting" flat label="Guardar" class="men" color="primary"
      @click="save">
      <template v-slot:loading>
        <q-spinner-facebook />
      </template>
    </q-btn>
    <q-btn label="Cancel" flat color="negative"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ActaService from "src/services/ActaService";
import InfoActaComp from "src/components/ActaRO/InfoActaComp.vue";
import OrdenTable from "src/components/ActaRO/OrdenTable.vue";
import AgreemComp from "src/components/ActaRO/AgreemComp.vue";
import MembersComp from "src/components/ActaRO/MembersComp.vue";
import Development from "src/components/ActaRO/DevelopComp.vue";
import AsistenciaComp from "./AsistenciaComp.vue";
import DateComp from "./DateComp.vue";
import TimeComp from './TimeComp.vue';

const submitting = ref(false);
const check = ref(true);
let nucleo = ref("");
let area = ref("");
let aus = ref("")
let pres = ref("")
let time = ref("")
let date = ref("")
let memb = ref("")
let order = ref("")
let dev = ref("")
let agreem = ref("")

async function save() {
  const crearActa = new ActaService();
  try {
    submitting.value = true;
    console.log(check.value)
    const actaData = {
      nucleo: nucleo.value,
      area: area.value,
      missing: aus.value,
      present: pres.value,
      hour: time.value,
      day: date.value,
      members: memb.value,
      order: order.value,
      development: dev.value,
      agreements: agreem.value,
      cp: 0 //tomar el valor del check.value
    };

    const result = await crearActa.createActaRO(actaData);
    submitting.value = false;
  } catch (error) {
    console.error(error);
  } finally {
    submitting.value = false;
  }
}

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

function handleMembersUpdate(value) {
  console.log(value)
  memb.value = value;
}

function handleOrdersUpdate(value) {
  console.log(value)
  order.value = value;
}

function handleDevelopUpdate(value) {
  console.log(value)
  dev.value = value;
}

function handleAgreemUpdate(value) {
  console.log(value)
  agreem.value = value;
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
  margin: 10px;
  padding: 10px;
}

.input {
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
}
.met {
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
}

.met button {
  width: 50%;
  box-sizing: border-box;
}
</style>
