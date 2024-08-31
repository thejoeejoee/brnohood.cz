<script setup lang="ts">
definePageMeta({
  // layout: 'content',
})

const people = [
  {
    name: 'Zuzka Gregušková',
    role: 'project lead',
    img: '/img/team/zuzka.jpg',
  },
  {
    name: 'Adéla Hurtová',
    role: 'partnerships',
    img: '/img/team/hurty.jpg',
  },
  {
    name: 'Marijana Brajdić',
    role: 'programme',
    img: '/img/team/marijanka.jpg',
  },
  {
    name: 'Joe Kolář',
    role: 'tech',
    img: '/img/team/joe.jpg',
  },
  {
    name: 'Hanka Hálová',
    role: 'design',
    img: '/img/team/hanka.jpg',
  },
  {
    name: 'Filip Wagner',
    role: 'finance',
    img: '/img/team/filip.jpg',
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
              :src="p.img" :alt="p.name"
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
