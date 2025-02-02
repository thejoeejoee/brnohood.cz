<script setup lang="ts">
import Logo from "assets/svg/logo-white.svg";
import Jobst from "assets/svg/jobst.svg";

useBase()
const props = useAttrs()
</script>

<template>
  <div class="">
    <div class="bg-brand-gradient relative min-h-screen flex flex-col">
      <div class="bg-leaves z-1"></div>

      <section class="
      w-full relative z-10
      flex flex-col
      justify-between items-center py-16
    ">
        <!-- top logo + menu/festival -->
        <div class="
        container mx-auto
        flex flex-col
        md:flex-row gap-y-8
        justify-between
        items-center
      ">
          <div class="w-full">
            <Logo class="!w-full !h-48 drop-shadow-md"/>
            <h1 class="sr-only">BRNOhood</h1>
          </div>

          <div class="
          relative w-full mx-auto

          font-brand
          text-white
          flex flex-row
          text-3xl
          drop-shadow-sm
        ">
            <div class="opacity-0">&nbsp;</div>
            <div class="mx-auto absolute inset-0 flex justify-center items-center Top--festival">
              international festival
            </div>
            <div class="
            mx-auto absolute inset-0
            flex justify-center items-center
            Top--menu
            gap-x-4
          ">
              <!--            <a href="">who</a>-->
              <!--            <a href="">what</a>-->
              <!--            <a href="">when</a>-->
            </div>

          </div>


        </div>
      </section>

      <div class="relative z-1 bg-noise w-full mx-auto p-24 flex-grow">
        <slot />
      </div>
    </div>
  </div>
</template>
