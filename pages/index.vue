<template>
  <div>

    <h1 class="
      text-3xl md:text-4xl lg:text-5xl

       m-8
       xl:m-20
      ">
      Hey! <br>
      This

      <span class="title-01-img"></span>
      <span class="title-01-bg"></span>

      is the official <br>
      website of a
<!--      <img class="title-02-img" src="~/assets/svg/title-01.svg">-->
      new <br>
      non-profit organisation <br>
      based in

      Brno. <br>
    </h1>


  </div>
</template>


<style scoped>
  h1 {
    font-family: "Manrope", sans-serif;
    font-weight: 700;

    text-transform: uppercase;

    //font-size: 3.5rem;
    line-height: 135%;
  }

  .title-02-img {
    display: inline-block;
    width: 5ch;

    margin-top: -1rem;
  }

  .title-01-bg {
    display: inline-block;
    width: 4ch;
  }

  .title-01-img {
    width: 5ch;
    height: 4.5rem;
    vertical-align: middle;
    position: absolute;

    margin-left: -.5ch;

    display: inline-block;

    background-image: url("assets/svg/title-01.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>
<script setup lang="ts">
</script>