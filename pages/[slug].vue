<script lang="ts" setup>
definePageMeta({
  layout: 'content',
})
</script>

<template>
  <div class="">
    <main class="">
      <ContentDoc>
        <template #not-found>
          <h1>
            <span class="text-4xl">
              404
            </span>
            <span class="text-2xl">
              Page not found
            </span>
          </h1>
        </template>
      </ContentDoc>
    </main>
  </div>
</template>
