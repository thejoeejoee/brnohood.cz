<script lang="ts" setup>
definePageMeta({
  layout: 'content',
})
</script>

<template>
  <div class="
    relative
    py-20 px-4
    min-h-screen
  ">
    <div
        class="
          fixed inset-0
          overflow-hidden
        "
    >
      <div class="[&>*]:min-h-[33dvh]">
        <DesignCurveLines class="opacity-30"/>
        <DesignCurveLines class="opacity-30"/>
        <DesignCurveLines class="opacity-30"/>
      </div>
    </div>
    <main class="
      relative z-10
      container mx-auto

      prose prose-invert
      prose-a:no-underline
    ">
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
