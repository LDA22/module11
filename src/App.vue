<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GoBackButton from './components/GoBackButton.vue'
</script>

<template>
  <nav>
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/quotes">Random Quotes</RouterLink> |
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>
  <GoBackButton />
  <RouterView />
</template>
