<template>
  <h1>Listado de post:</h1>
  <ul>
    <li v-for="post in posts" :key="post.id">{{ post.id }}</li>
  </ul>

</template>

<script setup>
import { onMounted } from "vue";
import PostService from "src/services/PostService";

const service = new PostService();
const posts = service.getPosts();

onMounted(async () => {
  await service.fetchAll();
  await service.create({ name: 'John', email: 'john.doe@example.com',password: 'DoeJohn', role: '2'});
});
</script>

