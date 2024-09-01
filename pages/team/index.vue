<script setup lang="ts">
const team = useTeamStore()

useSeoMeta({
  title: 'Team',
  description: 'Who are we?',
})
</script>

<template>
  <div>
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

        [&_figure_img:hover]:scale-95

        [&_li:nth-child(1)_figure_img]:border-primary
        [&_li:nth-child(2)_figure_img]:border-secondary
        [&_li:nth-child(3)_figure_img]:border-tertiary
        [&_li:nth-child(4)_figure_img]:border-secondary
        [&_li:nth-child(5)_figure_img]:border-tertiary
        [&_li:nth-child(6)_figure_img]:border-primary
      ">
      <li v-for="p in team.people">
        <NuxtLink
            :to="`/team/${p.id}`"
            class="no-underline"
            @click="team.setActivePersonId(p.id)"
            :class="{'active': p.id === team.activePersonId}"
        >
          <figure>
            <h2 v-text="p.name"></h2>

            <NuxtPicture
                sizes="100vw md:50vw lg:33vw"
                :src="p.img" :alt="`${p.name}: ${p.role}`"
                :width="p.width" :height="p.height"
                class="Team__picture"
            />
            <figcaption v-text="p.role"></figcaption>
          </figure>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.active {
  h2 {
    @apply vt-name-[team-person-name];
  }
  picture {
    @apply vt-name-[team-person-image];
  }
  figcaption {
    @apply vt-name-[team-person-role];
  }
}

</style>
