<script lang="ts" setup>
definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div>
    <main
        class="
          h-dvh w-full relative
          bg-gray-900
          grid grid-cols-2 grid-rows-2
          text-gray-200
        "
    >
      <div
          class="
            absolute inset-0
            overflow-clip
            flex flex-col
          "
      >
        <DesignCurveLines/>
      </div>

      <div class="
        relative
        col-start-1 row-start-1
        col-span-2 lg:col-span-1
        flex flex-col lg:flex-row
        justify-between items-start
        p-8 md:p-12 lg:p-20
      ">
        <h1 class="text-6xl font-bold flex flex-col uppercase justify-center text-center">
          <span>BRNO</span>
          <span class="-tracking-wider">hood</span>
        </h1>

        <h2 class="
          text-2xl font-semibold uppercase
          self-center md:self-start
        ">
          <NuxtLink
              to="/manifesto"
              class="
                flex flex-row items-center gap-1
                text-secondary

                transition-transform
                md:hover:translate-x-1 hover:underline
              ">
            <Icon
                name="hugeicons:arrow-right-02"
                size="1.5em"
                class="hidden md:block"
            ></Icon>
            Manifesto
          </NuxtLink>
<!--          <NuxtLink-->
<!--              to="/manifesto"-->
<!--              class="flex flex-row items-center gap-1 text-primary hover:underline">-->
<!--            <Icon name="hugeicons:arrow-right-02" size="1.5em"></Icon>-->
<!--            Contact-->
<!--          </NuxtLink>-->
        </h2>
      </div>

      <div class="
        relative
        col-start-1 lg:col-start-2 col-span-2
        row-start-2
        flex flex-col justify-end items-end
        font-mono text-xs
        p-8 md:p-12 lg:p-20
      ">
        <span class="font-semibold">BRNOhood, z. s.</span>
        <span>VAT number: 21862087</span>
        <span>data box ID: k9i6bjd</span>
        <span><a href="mailto:hooders%40brnohood.cz" class="hover:cursor-pointer">hooders@brnohood.cz</a></span>
      </div>

    </main>
  </div>
</template>
