<template>
  <div v-if="isVisible" class="jt">

    <q-dialog v-model="mode" persistent>
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ $t("agg") }}</div>
        </q-card-section>

        <q-card-section class="cont">
          <q-input :label="$t('nucleo')" v-model="core" type="number" class="inp" />
          <q-select v-model="detail" :options="options" :label="$t('detail')" class="inp" />
          <q-input :label="$t('place')" v-model="place" class="inp" />
        </q-card-section>

        <div class="cont">
          <q-card-section>
            <q-date v-model="model" mask="YYYY-MM-DD HH:mm" color="secondary" />
          </q-card-section>

          <q-card-section>
            <q-time v-model="model" mask="YYYY-MM-DD HH:mm" color="secondary" />
          </q-card-section>
        </div>
        <q-separator />
        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn label="Cancel" flat v-close-popup color="negative" />
          <q-btn :label="$t('save')" flat color="positive" @click="deleteActa" />
        </q-card-actions>
      </q-card>

    </q-dialog>

  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const mode = ref("");
const core = ref("");
const place = ref("");
const detail = ref("");
const maximizedToggle = ref(true);
const model = ref('');

const props = defineProps({
  value: Boolean,
});

const isVisible = computed(() => props.value);
const options = [
  'Reunión Ordinaria', 'Reunión Extraordinaria', 'Reunión de Círculo Político'
]
</script>

<style scoped>
.inp {
  margin: 10px;
  width: 200px;

}

.cont {
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
}
</style>
