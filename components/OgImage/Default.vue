<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
}>(), {
  title: 'title',
})
</script>

<template>
  <div class="w-full h-full text-gray-200 border-gray-200 border-4">
    <div class="absolute inset-0 bg-gray-900">
      <DesignCurveLines/>
    </div>
    <div class="absolute inset-0 grid grid-cols-2 grid-rows-2 p-20">
      <h1 class="
        col-start-1 col-span-1 row-start-1 row-span-1
        text-6xl font-bold flex flex-col uppercase text-center
        items-start justify-start
      ">
        <span>BRNO</span>
        <span class="-tracking-wider">hood</span>
      </h1>

      <h2 class="
        flex flex-col items-end justify-end
        col-start-2 col-span-1 row-start-2 row-span-1
      ">
        {{ title }}
      </h2>
    </div>
  </div>
</template>
