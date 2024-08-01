<template>
  <div>
    <UserComp></UserComp>
    <UpdateEmail />
    <UpdatePass />
    <UpdateName />
    <RoleComp />
  </div>
</template>

<script setup>
import UserComp from 'src/components/UserComp.vue';
import UpdateEmail from "components/UpdateEmail.vue"
import UpdatePass from "components/UpdatePass.vue"
import UpdateName from "src/components/UpdateName.vue"
import RoleComp from 'src/components/RoleComp.vue';
</script>

<style scoped></style>
