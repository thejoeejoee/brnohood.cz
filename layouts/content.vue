<script setup lang="ts">
useBase()
const props = useAttrs()
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
    "
         :class="{'prose prose-invert prose-a:no-underline container mx-auto': !props.fullWidth}"
    >
      <slot />
    </div>
  </div>
</template>
