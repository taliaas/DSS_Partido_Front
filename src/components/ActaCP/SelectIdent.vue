<template>
  <div class="sel">
    <q-select v-model="area" :options="optionsarea" :label="$t('area')" />

    <q-select v-model="nucleo" :options="optionsnucleo" :label="$t('nucleo')" />
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue"

const area = ref("")
const nucleo = ref("")
const areaSistm = ref([

])
const nucleoSistm = ref([])

//llamar al servicio -- guiarme por roleComp

//hacer cuando tenga el servicio
//const optionsarea = computed(() => {
 // return areaSistm.value.map(role => ({ label: role.name, value: role.id }));
//});
//const optionsnucleo = computed(() => {
 // return nucleoSistm.value.map(role => ({ label: role.name, value: role.id }));
//});
const emit = defineEmits(['update:area', 'update:nucleo'])

watchEffect (() => {
  emit('update:area', area.value),
  emit('update:nucleo', nucleo.value)
});
</script>

<style scoped>
.sel {
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
}
</style>
