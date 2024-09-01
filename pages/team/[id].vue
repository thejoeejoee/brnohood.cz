<script setup lang="ts">
import {vOnClickOutside} from '@vueuse/components'

const team = useTeamStore();
const route = useRoute();
const router = useRouter();

const p: Ref<Person> = ref(team.people.find((person) => person.id === route.params.id));
// TODO: 404 if p.value is undefined

// to have working page transitions api when direct access to the page and going back to the team page
team.setActivePersonId(p.value.id);

useSeoMeta({
  title: `${p.value.name} | Team`,
  description: 'Who are we?',
})

const escapeKeyHandler = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    router.push("/team");
  }
}

onMounted(() => {
  window.document.addEventListener("keydown", escapeKeyHandler)
})
onBeforeUnmount(() => {
  window.document.removeEventListener("keydown", escapeKeyHandler)
})


</script>

<template>
  <div class="relative min-h-screen">
    <div class="
      hidden lg:block
      absolute inset-0 blur-xl opacity-25 -z-1 overflow-hidden
      pointer-events-none
    ">
      <TeamList :activate="false"/>
    </div>
    <div
        class="relative grid grid-cols-1 lg:grid-cols-2 grid-row-2 gap-12 z-1"
        v-on-click-outside="() => router.push('/team')"
    >
      <div class="row-start-2 md:row-start-1 col-start-1">
        <h2
            v-text="p.name"
            class="text-3xl vt-name-[team-person-name]"
        ></h2>
        <h3 class="
          flex flex-row items-center gap-2
          text-gray-300 text-2xl
          vt-name-[team-person-role]
        ">
          <Icon name="hugeicons:user-love-01"/>
          {{ p.role }}
        </h3>

        <p v-text="p.perex" class="text-lg text-justify"></p>
      </div>

      <NuxtPicture
        sizes="xs:100vw md:50vw 2xl:25vw"
        :src="p.img" :alt="`${p.name}: ${p.role}`"
        :width="p.width" :height="p.height"
        class="
          row-start-1 col-start-1 md:col-start-2
          Team__picture
          vt-name-[team-person-image]
        "
        :class="p.pictureClass"
      />
    </div>
  </div>

</template>

<style scoped>

</style>
