<script setup lang="ts">
useBase()
</script>

<template>
  <div class="
    bg-gray-900
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
    <div class="
      relative z-10
      container mx-auto

      prose prose-invert
      prose-a:no-underline
    ">
      <slot />
    </div>
  </div>
</template>
