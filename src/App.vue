<script setup>
import { RouterLink, RouterView } from "vue-router";
import { makeServer } from "./server";

if (process.env.NODE_ENV === "development") {
  makeServer();
}
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
