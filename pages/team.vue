<script setup lang="ts">
definePageMeta({
  // layout: 'content',
})

useBase()

// set description
useSeoMeta({
  title: 'Team',
  description: 'Who are we?',
})

// ❯ identify public/img/team/*
// public/img/team/filip.jpg JPEG 1280x852 1280x852+0+0 8-bit sRGB 70010B 0.000u 0:00.001
// public/img/team/hanka.jpg JPEG 3538x2363 3538x2363+0+0 8-bit sRGB 1.20973MiB 0.000u 0:00.000
// public/img/team/hurty.jpg JPEG 4000x2667 4000x2667+0+0 8-bit sRGB 1.49112MiB 0.000u 0:00.000
// public/img/team/joe.jpg JPEG 1336x892 1336x892+0+0 8-bit sRGB 147627B 0.000u 0:00.000
// public/img/team/marijanka.jpg JPEG 3363x2246 3363x2246+0+0 8-bit sRGB 1.73595MiB 0.000u 0:00.000
// public/img/team/zuzka.jpg JPEG 4740x3160 4740x3160+0+0 8-bit sRGB 1.03555MiB 0.000u 0:00.000

const people = [
  {
    name: 'Zuzka Gregušková',
    role: 'project lead',
    img: '/img/team/zuzka.jpg',
    width: 4740,
    height: 3160,
  },
  {
    name: 'Adéla Hurtová',
    role: 'partnerships',
    img: '/img/team/hurty.jpg',
    width: 4000,
    height: 2667,
  },
  {
    name: 'Marijana Brajdić',
    role: 'fun specialist',
    img: '/img/team/marijanka.jpg',
    width: 3363,
    height: 2246,
  },
  {
    name: 'Joe Kolář',
    role: 'tech',
    img: '/img/team/joe.jpg',
    width: 1336,
    height: 892,
  },
  {
    name: 'Hanka Hálová',
    role: 'design',
    img: '/img/team/hanka.jpg',
    width: 3538,
    height: 2363,
  },
  {
    name: 'Filip Wagner',
    role: 'finance',
    img: '/img/team/filip.jpg',
    width: 1280,
    height: 852,
  },
]

</script>

<template>
  <NuxtLayout
      name="content"
      :fullWidth="true"
  >

    <div class="prose prose-invert max-w-screen-2xl mx-auto">
      <h1>Who are we?</h1>

      <ul class="
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        m-0
        p-0

        [&_li]:flex
        [&_li]:flex-col
        [&_li]:p-4
        [&_h2]:self-start
        [&_h2]:z-10
        md:[&_h2]:transform
        md:[&_h2]:origin-top-left
        md:[&_h2]:rotate-[-34deg]
        md:[&_h2]:translate-y-[4em]
        lg:[&_h2]:translate-y-[3em]
        xl:[&_h2]:translate-y-[5em]

        [&_figure]:flex
        [&_figure]:flex-col
        [&_figure]:gap-y-2
        [&_figure_img]:w-full
        [&_figure_img]:rounded-full
        [&_figure_img]:border-8
        [&_figure_img]:transform
        [&_figure_img]:transition-transform
        [&_figure_img:hover]:scale-95


        [&_li:nth-child(1)_figure_img]:border-primary
        [&_li:nth-child(2)_figure_img]:border-secondary
        [&_li:nth-child(3)_figure_img]:border-tertiary
        [&_li:nth-child(4)_figure_img]:border-secondary
        [&_li:nth-child(5)_figure_img]:border-tertiary
        [&_li:nth-child(6)_figure_img]:border-primary
      ">
        <li v-for="p in people">
          <figure>
            <h2 v-text="p.name"></h2>

            <NuxtPicture
                sizes="100vw md:50vw lg:33vw"
                :src="p.img" :alt="`${p.name}: ${p.role}`"
                :width="p.width" :height="p.height"
                class="w-full [clip-path:polygon(0%_40%,40%_0%,100%_0,100%_60%,60%_100%,0%_100%)]"
            />
            <figcaption v-text="p.role"></figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>

<style scoped>

</style>
