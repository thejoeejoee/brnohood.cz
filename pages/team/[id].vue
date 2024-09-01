<script setup lang="ts">
const team = useTeamStore();
const route = useRoute();

const p: Ref<Person> = ref(team.people.find((person) => person.id === route.params.id));
// TODO: 404 if p.value is undefined

// to have working page transitions api when direct access to the page and going back to the team page
team.setActivePersonId(p.value.id);

useSeoMeta({
  title: `${p.value.name} | Team`,
  description: 'Who are we?',
})
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 grid-row-2 gap-12">
    <div
        class="
          row-start-2 md:row-start-1 col-start-1
        "
    >
      <h1 v-text="p.name" class="vt-name-[team-person-name]"></h1>
      <h2 v-text="p.role" class="vt-name-[team-person-role]"></h2>

      <p v-text="p.perex" class="text-lg text-justify"></p>
    </div>

    <NuxtPicture
        sizes="100vw md:50vw lg:100vw"
        :src="p.img" :alt="`${p.name}: ${p.role}`"
        :width="p.width" :height="p.height"
        class="
        row-start-1 col-start-1 md:col-start-2
        Team__picture
        vt-name-[team-person-image]
        [clip-path:polygon(0%_40%,40%_0%,100%_0,100%_60%,60%_100%,0%_100%)]

      "
    />
  </div>

</template>

<style scoped>

</style>
