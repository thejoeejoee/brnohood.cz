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
      [&_h2]:transform
      [&_h2]:origin-top-left
      [&_h2]:rotate-[-34deg]
      [&_h2]:translate-y-[5em]

      [&_figure]:flex
      [&_figure]:flex-col
      [&_figure]:gap-y-2
      [&_figure_img]:w-full
      [&_figure_img]:rounded-full
    ">
      <li>
        <figure>
          <h2>Zuzka Gregušková</h2>

          <NuxtPicture
              placeholder
              src="/img/team/zuzka.jpg" alt=""
              class="w-full [clip-path:polygon(0%_40%,40%_0%,100%_0,100%_60%,60%_100%,0%_100%)]"
          />
          <figcaption>president</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <h2>Adéla Terezie Hurtová</h2>
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
