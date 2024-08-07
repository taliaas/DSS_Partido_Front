<template>
  <q-page>
    <div class="container">
      <BalanceTable></BalanceTable>
    </div>
  </q-page>
</template>

<script setup>
import BalanceTable from "src/components/Balance/BalanceTable.vue"

defineOptions({
  name: 'BalancePage'
});
</script>

<style scoped></style>
