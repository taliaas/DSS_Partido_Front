<template>
  <div>
    <h2>{{ $t("btn7") }}</h2>
  </div>
  <div class="comp">
    <div class="input">
      <SelectIdent @update:area="handleAreaUpdate" @update:nucleo="handleNucleoUpdate"/>
      <AsistenciaComp @update:pres="handlePresUpdate" @update:aus="handleAusUpdate" />
      <DateComp @update:date="handleDateUpdate" />
      <TimeComp @update:time="handleTimeUpdate" />
    </div>
    <TemaComp @update:tema="handleTemaUpdate" />
    <DevelopComp @update:dev="handleDevUpdate" />
    <AgreemComp @update:agreem="handleAgreemUpdate" />
    <div class="met">
      <q-btn type="submit" :loading="submitting" flat label="Guardar" class="men" color="primary" @click="save">
        <template v-slot:loading>
          <q-spinner-facebook />
        </template>
      </q-btn>
      <q-btn label="Cancel" flat color="negative" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import AsistenciaComp from "../ActaRO/AsistenciaComp.vue";
import AgreemComp from "../ActaRO/AgreemComp.vue";
import TemaComp from "./TemaComp.vue";
import DevelopComp from "../ActaRO/DevelopComp.vue";
import TimeComp from "../ActaRO/TimeComp.vue";
import DateComp from "../ActaRO/DateComp.vue";
import ActaService from "src/services/ActaService";
import SelectIdent from "./SelectIdent.vue";

const submitting = ref(false);

let aus = ref("")
let pres = ref("")
let time = ref("")
let date = ref("")
let dev = ref("")
let tema = ref("")
let agreem = ref("")
let area = ref("")
let nucleo = ref("")

const agreeNew = () => {
  const descValue = agreem.value.desc;
  console.log(descValue); // Esto imprimirá "bah"
};

async function save() {
  const temp = new ActaService();
  try {
    submitting.value = true;
    const actaData = {
      missing: aus.value,
      present: pres.value,
      hour: time.value,
      day: date.value,
      topic: tema.value,
      development: dev.value,
      agreements: agreem.value //agregar area y nucleo cuando ya este en el back
    };

    const result = await temp.createActaCP(actaData);
    submitting.value = false;
  } catch (error) {
    console.error(error);
  } finally {
    submitting.value = false;
  }
}

function handleAreaUpdate(value) {
  console.log(value)
  area.value = value;
}
function handleNucleoUpdate(value) {
  console.log(value)
  nucleo.value = value;
}

function handlePresUpdate(value) {
  console.log(value)
  pres.value = value;
}

function handleTemaUpdate(value) {
  tema.value = value;
}

function handleAusUpdate(value) {
  console.log(value)
  aus.value = value;
}

function handleAgreemUpdate(value) {
  console.log(value)
  agreem.value = value;
}

function handleDevUpdate(value) {
  dev.value = value;
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
h2 {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 32px;
  margin: 35px;
}

.comp {
  margin: 10px;
}

.met {
  margin: 25px;
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

.input {
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  margin-left: 15px;
}
</style>
