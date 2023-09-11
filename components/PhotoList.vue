<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
const { title } = props
</script>

<template>
  <h2 v-text="title" class="text-lg text-blue-400 slow-scale-up"></h2>
  <ul class="w-full bg-gray-200">
    <li><img src="https://josefkolar.cz/_nuxt/f21bf3905f73e7f58753f579d6718b53-1080.jpg" alt=""></li>
    <li><img src="https://josefkolar.cz/_nuxt/f21bf3905f73e7f58753f579d6718b53-1080.jpg" alt=""></li>
    <li
        class="slow-scale-up"
    ><img src="https://josefkolar.cz/_nuxt/f21bf3905f73e7f58753f579d6718b53-1080.jpg" alt=""></li>
  </ul>
</template>

<style scoped>
</style>