<template>
  <div>

    <header
        class="bg-gray-100 w-screen h-screen flex flex-col justify-start"
    >

      <h1 class="
      text-5xl md:text-4xl lg:text-5xl

        pl-8
        pt-12
       xl:m-20
      ">
        Hey! <br>
        TEXT
        <span class="title-01-img"></span>
        <span class="title-01-bg">T</span>


        is the

        <br class="lg:hidden">
        official
        website of a
        <!--  <img class="title-02-img" src="~/assets/svg/title-01.svg">-->
        new <br>
        non-profit organisation <br>
        based in

        Brno. <br>
      </h1>

      <div class="title-09-img"></div>


    </header>


    <div class="w-screen h-screen bg-blue-800">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur assumenda blanditiis commodi
      consequuntur dolores ducimus eum, explicabo fugiat incidunt maxime neque nisi nobis optio quos tempora tenetur ut
      veritatis.

    </div>
    <div class="w-screen h-screen bg-indigo-400">
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
  font-family: "Manrope", sans-serif;
  font-weight: 700;

  text-transform: uppercase;

//font-size: 3.5rem; line-height: 135%;
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
  margin-top: 10px;

  display: inline-block;

  background-image: url("assets/svg/title-01.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.title-09-img {
//background: red; background-image: url("~/assets/svg/title-09.svg");
  background-repeat: no-repeat;
  background-size: 105%;
  background-position: 100% 100%;

  width: 100%;
  height: 100%;

  margin-bottom: 3rem;
}
</style>
<script setup lang="ts">
</script>