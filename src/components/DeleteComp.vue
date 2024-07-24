<template>
  <div v-if="isVisible">
    <q-dialog v-model="model" persistent>
      <q-card style="width: 300px">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ $t('remove') }}</div>
        </q-card-section>

        <q-card-section>
          <div>{{ $t('delete') }}</div>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn label="Cancel" flat v-close-popup color="negative" />
          <q-btn label="OK" flat color="positive" @click="deleteActa" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const model = ref(true);

const props = defineProps({
  value: Boolean,
});

// Uso de computed para crear una propiedad computada 'isVisible'
const isVisible = computed(() => props.value);

function deleteActa() { //fetch para delete
}

</script>
