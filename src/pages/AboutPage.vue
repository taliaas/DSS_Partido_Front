<template>
  <div class="q-px-lg q-py-md pp">
    <q-timeline color="secondary">
      <q-timeline-entry heading >
       <div style="font-size: 44px; font-family: Georgia, 'Times New Roman', Times, serif;"> {{ $t("info") }}</div>
      </q-timeline-entry>

      <q-timeline-entry :title="$t('what')" icon="done_all">
        <div style="font-size: 16px;">{{ $t("text1") }}</div>
      </q-timeline-entry>

      <q-timeline-entry :title="$t('title')" icon="tab">
        <div style="font-size: 16px;">{{ $t("text2") }}</div>
      </q-timeline-entry>

      <q-timeline-entry :title="$t('title2')" >
        <div style="font-size: 16px;">{{ $t("text3") }}</div>
      </q-timeline-entry>

      <q-timeline-entry :title="$t('title1')" icon="add">
        <div style="font-size: 16px;">{{ $t("text4") }}</div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script setup>

defineOptions({
  name: "AboutPage",
});
</script>

<style scoped>
.pp{
  width: 1500px;
}
.head {
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
}

h1 {
  color: #389160;
  margin: 5px;
  font-size: 46px;
  margin-left: 50px;
  margin-top: 120px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

h2 {
  color: #389160;
  font-size: 36px;
  margin-left: 55px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.card {
  width: 1300px;
  margin-left: 35px;
  text-align: justify;
}

.text {
  margin-left: 55px;
  width: 1200px;
  font-size: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
