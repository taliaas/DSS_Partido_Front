<template>
  <div class="container">
    <CardDetail v-for="card in List" :key="card.title" :title="$t(card.title)" :content="$t(card.content)" />
  </div>
</template>

<script setup>
import CardDetail from "components/CardDetail.vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const List = [
  {
    title: $t("title"),
    content: t("text2")
  },
  {
    title: t("title2"),
    content: t("text3")
  },
  {
    title: t("title1"),
    content: t("text4")
  }
]
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}
</style>
