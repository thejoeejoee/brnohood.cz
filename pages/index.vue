<template>
  <div>

    <header
        class="
          bg-gray-100
          h-screen w-full
          relative flex flex-col
        "
    >

      <img
          class="
            self-end
            w-28 mt-6 mr-6 -mb-6
            xl:w-36 md:w-44 md:mt-10 md:mr-10 -md:mb-10
            xl:w-48 xl:mt-24 xl:mr-24 -xl:mb-48
            2xl:w-56 2xl:mt-24 2xl:mr-24 2xl:-mb-24
          "
          src="~/assets/svg/logo-black.svg"
          alt="BrnoHOOD logo"
      >

      <div class="
        absolute right-0 bottom-0
        bg-09 w-full h-full
      "></div>

      <h1 class="
        text-[2.5rem] md:text-7xl lg:text-7xl xl:text-[6rem] 2xl:text-[6rem]
        !leading-tight !md:leading-snug
        p-4 pr-0 md:p-6 lg:p-10
        drop-shadow-[0_0_20px_rgba(255,255,255,1)]
      ">
        Hey!
        <!-- break line always -->
        <br>
        This
        <!-- yellow thing -->
        <span class="absolute bg-01 w-[2ch] md:w-[5ch] h-[3rem] md:h-[1lh] -ml-[.3rem]"></span>
        <span class="inline-block w-[1.5ch] md:w-[4.5ch]"></span>
        is the
        <!-- break line only on mobile -->
        <br class="lg:hidden">
        official
        <!-- break only on desktop -->
        <br class="hidden lg:block">
        website
        <!-- break line only on mobile -->
        <br class="lg:hidden">
        of a
        <!-- new line always -->
        <br>
        non-profit
        <!-- break line only on mobile -->
        <br class="lg:hidden">
        organisation <br>
        based in
        Brno.
      </h1>

    </header>


    <div class="h-screen bg-violet-900>
      <h1>Responsible People
      </h1>

    </div>
    <div class="h-screen bg-indigo-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur assumenda blanditiis commodi
      consequuntur dolores ducimus eum, explicabo fugiat incidunt maxime neque nisi nobis optio quos tempora tenetur ut
      veritatis.

    </div>

  </div>
</template>


<style scoped>
header {
}

h1 {
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;

  text-transform: uppercase;
  letter-spacing: -0.05rem;
  word-spacing: -0.1rem;
}


.bg-01 {
  background-image: url("assets/svg/title-01.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.bg-09 {
  background-image: url("~/assets/svg/title-09.svg");
  background-repeat: no-repeat;


  background-position: bottom 0 left -2rem;
  background-size: calc(100% + 4rem);
  @media screen("md") {
    background-position: bottom 0 left -2rem;
    background-size: calc(100% + 4rem);
  }
  @media screen("lg") {
    background-position: bottom -7rem right -5rem;
  }
  @media screen("xl") {
    background-position: bottom -12.5rem right -7.5rem;
  }
  @media screen("2xl") {
    background-position: bottom -12.5rem right -7.5rem;
  }
}
</style>
<script setup lang="ts">
</script>