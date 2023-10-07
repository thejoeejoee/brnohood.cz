<template>
  <div>


    <h1>helo word</h1>

    <NuxtLink to="/contact" class="hover:text-underline">go to </NuxtLink>


  </div>
</template>

<script setup lang="ts">
const { $anime } = useNuxtApp()

onMounted(() => {
  $anime({
    targets: '.title',
    keyframes: [
      {translateY: -40},
      {translateX: 250},
      {translateY: 40},
      {translateX: 0},
      {translateY: 0}
    ],
    duration: 4000,
    easing: 'easeOutElastic(1, .8)',
    loop: true,
  })
})
</script>

<style scoped>
  h1 {}
</style>