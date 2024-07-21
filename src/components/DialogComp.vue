<template>
  <div>
    <q-dialog :model="visible" :backdrop-filter="backdropFilter">
      <q-card class="comp">
        <div style="display: flex;">
          <SettingsComp @itemSelected="selectedItem = $event"></SettingsComp>
          <DetailsSett :title="selectedItem" />
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import SettingsComp from "components/SettingsComp.vue"
import DetailsSett from "components/DetailsSett.vue"
import { ref, watch } from "vue";

const backdropFilter = ref("blur(4px)");
const selectedItem = ref("");

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  }
})

// Escucha el evento itemSelected y actualiza selectedItem
const emit = defineEmits(['update:selected']);
watch(selectedItem, (newVal) => {
  emit('update:selected', newVal);
}, { immediate: true });
</script>

<style scoped>
.comp {
  width: 1000px;
  height: 350px;
}
</style>
