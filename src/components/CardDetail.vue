<template>
  <q-card class="my-card" flat bordered>
    <q-card-section>
      <div class="nam">
        <h2>{{ props.title }}</h2>
      </div>
      <div class="con">
       <p> {{ props.content }}</p>
      </div>
    </q-card-section>
  </q-card>


</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    required: true
  },

  content: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.my-card {
  margin: 10px;
  width: 400px;
  background-color: #c7e8d6;
}

h2 {
  font-size: 34px;
  margin-bottom: 5px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.con{
  font-size: 16px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
