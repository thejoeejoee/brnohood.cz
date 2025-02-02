<script lang="ts" setup>

definePageMeta({
  layout: 'default',
})

import Logo from '~/assets/svg/logo-white.svg'
import EU from '~/assets/svg/eu.svg'
import Jobst from '~/assets/svg/jobst.svg'
</script>

<template>
  <div class="bg-brand-gradient relative py-8 md:py-24">
    <div class="bg-leaves z-1"></div>

    <section class="
      min-h-[105dvh]
      w-full relative z-10
      flex flex-col
      justify-between items-center
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

      <!-- date place -->
      <div class="
        container m-auto
        flex flex-col

        justify-between
        items-center
        gap-y-4
        text-8xl
        drop-shadow-md
      ">
        <div class="
          font-brand
          text-white
        ">21/06/2025
        </div>

        <div class="
          font-brand
          text-white
          flex flex-col md:flex-row
          items-center
          text-4xl gap-x-4
        ">
          <Jobst class="!w-24 !h-auto all-white"/>
          <div class="flex flex-col items-start mt-8">
            <span>Moravian Square</span>
            <span>Governor's Palace</span>
          </div>
        </div>

      </div>

      <div v-if="false" class="
        h-[10dvh]
        w-full
        bg-gradient-to-t from-white to-transparent
      ">
        <div class="bg-noise"></div>
      </div>
    </section>

    <div class="
      max-w-6xl bg-noise mx-auto py-8 md:py-24 my-24 px-4 md:px-0
      relative z-10 flex flex-col items-center
    ">
<!--      <BgHole class="!w-full !h-full absolute inset-0" />-->
    <h2 class="font-brand text-primary-950 text-6xl text-center mb-8 md:mb-24">What to expect?</h2>
    <section class="
      relative z-10

      [&_h2]:text-6xl/10
      [&_h2]:uppercase
      [&_h2]:drop-shadow
      [&_h2]:font-brand
      [&_h2]:mt-8
      md:[&_h2]:mb-4

      [&_p]:text-lg
      [&_p]:max-w-md

      [&>div]:flex
      md:[&>div]:gap-8

      md:inline-grid gap-12
      grid-cols-1 md:grid-cols-2
    ">
        <div class="col-start-1 text-right self-end justify-self-end flex-col md:flex-col-reverse">
          <h2 class=" text-tertiary">Culture</h2>
          <p>
            Culture is the key to understanding the world around us.
            It is the bridge between the past and the future.
          </p>
        </div>
        <div class="md:col-start-2 self-end flex flex-col md:flex-col-reverse gap-4">
          <h2 class="
          text-quaternary
            first-letter:-ml-1
          ">Music</h2>
          <p>
            Music drives us. It is the rhythm of our lives. It is the melody of our souls, the harmony of our hearts.
          </p>
        </div>

        <div class="col-start-1 row-start-2 justify-self-end text-right flex-col">
          <h2 class="text-primary ">Art</h2>
          <p>
            Art is the the deepest expression of the human soul. It is
            the most powerful way to communicate with the world.
          </p>
        </div>
        <div class="md:col-start-2 row-start-2 flex-col">
          <h2 class=" text-secondary">Communities</h2>
          <p>
            We are all part of a community. We are all part of a
            bigger picture. We are all part of a bigger story.
          </p>
        </div>
    </section>
    </div>

    <section class="
      relative z-10
      max-w-6xl bg-noise mx-auto py-8 md:py-24 my-24 px-4 md:px-0
      flex flex-col items-center
      gap-y-8" id="where">
      <h2 class="font-brand text-primary-950 text-6xl">Where to find us?</h2>

      <a href="geo:49.19766574646789,16.60797556637376;u=50"
         class="flex flex-row items-center gap-x-2 text-lg hover:underline">
        Governor's Palace, Moravian Square, Brno

        <Icon name="hugeicons:link-square-02" size="1.25rem"></Icon>
      </a>

      <div class="max-w-4xl h-96 w-full">
        <LMap
            ref="map"
            :zoom="20"
            :center="[49.19766574646789,16.60797556637376]"
            :use-global-leaflet="false"
        >
          <!--        <l-tile-layer url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"></l-tile-layer>-->
          <l-tile-layer
              url="https://sgx.geodatenzentrum.de/wmts_topplus_open/tile/1.0.0/web_grau/default/WEBMERCATOR/{z}/{y}/{x}.png"></l-tile-layer>

          <l-marker :lat-lng="[49.19766574646789,16.60797556637376]"/>


          <!--        <LTileLayer-->
          <!--            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"-->
          <!--            attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"-->
          <!--            layer-type="base"-->
          <!--            name="OpenStreetMap"-->
          <!--        />-->
        </LMap>
      </div>
    </section>

    <section class="
      relative z-10
      max-w-6xl bg-noise mx-auto py-8 md:py-24 my-24 px-4 md:px-0
      flex flex-col items-center
      gap-y-8" id="when">
      <h2 class="font-brand text-primary-950 text-6xl">21st of June, 2025</h2>

      <h3 class="font-brand text-primary-800 text-4xl">2-10 PM</h3>
    </section>

    <section class="
      w-full relative z-10
      max-w-6xl bg-noise mx-auto py-8 md:py-24 mt-24 px-4 md:px-0
    ">
      <div class="
        mx-auto max-w-4xl flex flex-col md:flex-row justify-between items-center md:items-start
        mb-16 gap-8 md:gap-0

        [&_h2]:text-xl
        [&_h2]:text-gray-700
        [&_h2]:font-brand
        [&_h2]:uppercase
        [&_h2]:mb-8

        text-gray-400 text-lg
      ">
        <div class="flex flex-col items-center md:items-start gap-2">
          <h2>Contact</h2>

          <a
              class="flex flex-row items-center gap-x-1 hover:underline"
              href="https://instagram.com/brnohood"
          >
            <Icon name="hugeicons:instagram" size="1.25rem"></Icon>
            brnohood
          </a>
          <a
              class="flex flex-row items-center gap-x-1 hover:underline"
              href="mailto:hooders@brnohood.cz"
          >
            <Icon name="hugeicons:mail-01" size="1.25rem"></Icon>
            hooders@brnohood.cz
          </a>
        </div>
        <div>
          <h2 class="text-center md:text-left">Support</h2>

          <EU class="!w-full !h-auto"/>
        </div>
        <div class="flex flex-col items-center md:items-start">
          <h2>Legal</h2>
          <span>BRNOhood, z. s.</span>
          <span>VAT number: 21862087</span>
          <span>data box ID: k9i6bjd</span>
        </div>

      </div>

    </section>
  </div>
</template>

<style>
.all-white {
  filter: invert(100%) sepia(78%) saturate(0%) hue-rotate(103deg) brightness(108%) contrast(100%);
}

.Top--festival {
  animation: ease-in-out 300ms 0s 1 festivalSlide forwards;
}

.Top--menu {
  animation: ease-in-out 300ms 0s 1 menuSlide forwards;
}

@keyframes festivalSlide {
  0% {
    transform: translateY(0);

  }
  100% {
    transform: translateY(-75%);
  }
}

@keyframes menuSlide {
  0% {
    transform: translateY(0);
    filter: blur(1rem);
    opacity: 0;
  }
  100% {
    transform: translateY(75%);
    filter: blur(0);
    opacity: 1;
  }
}

.bg-noise {
  background-color: white;
  background-image: url('~/assets/svg/bg-noise.svg');
  background-repeat: repeat;
}
</style>
