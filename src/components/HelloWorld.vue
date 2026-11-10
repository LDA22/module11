<script setup>
import { ref, onMounted } from 'vue'

const quote = ref('')
const author = ref('')
const loading = ref(false)
const error = ref('')

async function getQuote() {
  loading.value = true
  error.value = ''
  try {
    const res = await fetch('https://dummyjson.com/quotes/random')
    if (!res.ok) throw new Error('Request failed')
    const data = await res.json()
    quote.value = data.quote
    author.value = data.author
  } catch (e) {
    error.value = 'Could not load a quote. Try again.'
  } finally {
    loading.value = false
  }
}

onMounted(getQuote)
</script>

<template>
  <div>
    <h1>Random Quotes</h1>
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">{{ error }}</p>
    <blockquote v-else>
      <p>"{{ quote }}"</p>
      <footer>- {{ author }}</footer>
    </blockquote>
    <button @click="getQuote">New Quote</button>
  </div>
</template>
