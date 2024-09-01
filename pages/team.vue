<script setup lang="ts">
definePageMeta({
  // layout: 'content',
})

useBase()
</script>

<template>
  <NuxtLayout
      name="content"
      :fullWidth="true"
  >
    <div class="prose prose-invert max-w-screen-2xl mx-auto" >
      <NuxtPage :page-key="r => r.params.id"/>
    </div>
  </NuxtLayout>
</template>

<style scoped>

</style>
