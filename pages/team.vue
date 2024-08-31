<script setup lang="ts">
definePageMeta({
  // layout: 'content',
})
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
      <li>
        <figure>
          <h2>Zuzka Gregušková</h2>

          <NuxtPicture
              placeholder
              src="/img/team/zuzka.jpg" alt=""
              class="w-full [clip-path:polygon(0%_40%,40%_0%,100%_0,100%_60%,60%_100%,0%_100%)]"
          />
          <figcaption>project lead</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <h2>Adéla Hurtová</h2>
          <NuxtPicture
              src="/img/team/hurty.jpg" alt=""
              class="[clip-path:polygon(0%_40%,40%_0%,100%_0,100%_60%,60%_100%,0%_100%)]"
          />
          <figcaption>partnerships</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <h2>Marijana Brajdić</h2>
          <NuxtPicture
              src="/img/team/marijanka.jpg" alt=""
              class="[clip-path:polygon(0%_40%,40%_0%,100%_0,100%_60%,60%_100%,0%_100%)]"
          />
          <figcaption>programme</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <h2>Joe Kolář</h2>
          <NuxtPicture
              src="/img/team/joe.jpg" alt=""
              class="[clip-path:polygon(0%_40%,40%_0%,100%_0,100%_60%,60%_100%,0%_100%)]"
          />
          <figcaption>tech</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <h2>Hanka Hálová</h2>
          <NuxtPicture
              src="/img/team/hanka.jpg" alt=""
              class="[clip-path:polygon(0%_40%,40%_0%,100%_0,100%_60%,60%_100%,0%_100%)]"
          />
          <figcaption>design</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <h2>Filip Wagner</h2>
          <NuxtPicture
              src="/img/team/filip.jpg" alt=""
              class="[clip-path:polygon(0%_40%,40%_0%,100%_0,100%_60%,60%_100%,0%_100%)]"
          />
          <figcaption>finance</figcaption>
        </figure>
      </li>
    </ul>
    </div>
  </NuxtLayout>
</template>

<style scoped>

</style>
