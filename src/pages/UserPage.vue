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
import UserComp from 'src/components/Account/UserComp.vue';
import UpdateEmail from "src/components/Account/UpdateEmail.vue"
import UpdatePass from "src/components/Account/UpdatePass.vue"
import UpdateName from "src/components/Account/UpdateName.vue"
import RoleComp from 'src/components/Account/RoleComp.vue';
</script>

<style scoped></style>
