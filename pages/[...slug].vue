<template>
  <div class="
    relative
    py-20 px-4
    min-h-screen
  ">
    <div
        class="
          absolute inset-0
          overflow-clip
          flex flex-col
        "
    >
      <DesignCurveLines class="opacity-50"/>
    </div>
    <main class="
      relative z-10
      container mx-auto

      prose prose-invert
      prose-a:no-underline
    ">
      <ContentDoc/>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style>

</style>
