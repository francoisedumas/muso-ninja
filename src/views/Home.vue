<template>
  <div class="home">
    <div v-if="error" class="error">Could not fetch the data</div>
    <div v-if="documents">
      <div v-for="document in documents" :key="document.id">
        <h2>{{ document.title }}</h2>
        <p>{{ document.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'

export default {
  name: 'Home',
  setup() {
    const { error, documents } = getCollection('playlists')

    return { error, documents }
  }
}
</script>
