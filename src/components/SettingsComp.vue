<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered padding>
      <q-item tag="label" v-ripple @click="selectItem('General')">
        <q-item-section side>
          <q-icon :color="iconColor('General')" name="settings" />
        </q-item-section>
        <q-item-section>
          <q-item-label>General</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced />
      <q-item tag="label" v-ripple @click="selectItem('Cuentas')">
        <q-item-section side>
          <q-icon :color="iconColor('Cuentas')" name="account_circle" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Cuentas</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced />
      <q-item tag="label" v-ripple @click="selectItem('Notificaciones')">
        <q-item-section side>
          <q-icon :color="iconColor('Notificaciones')" name="notifications" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Notificaciones</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced />
      <q-item tag="label" v-ripple @click="selectItem('Ayuda')">
        <q-item-section side>
          <q-icon :color="iconColor('Ayuda')" name="help" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Ayuda</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const items = ['General', 'Cuentas', 'Notificaciones', 'Ayuda'];
const selectedItems = ref({});

// Define los eventos que este componente puede emitir
const emit = defineEmits(['itemSelected']);

function selectItem(item) {
  // Resetear todos los estados de selección
  Object.keys(selectedItems.value).forEach(key => {
    if (key !== item) {
      delete selectedItems.value[key];
    }
  });

  // Marcar el ítem actual como seleccionado
  selectedItems.value[item] = true;
  console.log(selectedItems.value);

  // Emitir evento con el nombre del ítem seleccionado
  emit('itemSelected', item);
}

// Poner default el color de general en verde
function iconColor(item) {
  return selectedItems.value[item] ? 'primary' : 'gray';
}

</script>

<style scoped>
.q-pa-md {
  background-color: white;
}
</style>
