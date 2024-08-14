<template>
  <q-dialog v-model="mode" persistent>
    <q-card>
      <q-card-section class="cont">
        <UpdateName />
       </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn label="Cancel" flat v-close-popup color="negative" />
        <q-btn :label="$t('save')" flat color="positive" @click="deleteActa" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed } from "vue";

const mode = ref("");

const props = defineProps({
  value: Boolean,
});

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
