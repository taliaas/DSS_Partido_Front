<template>
   <q-item @click="$emit('dialog-open', props.title)">
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
    </q-item-section>
  </q-item>

</template>

<script setup>
defineOptions({
  name: 'ConfigLink'
})

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  dialo: {
    type: Boolean,
  },
})
</script>
