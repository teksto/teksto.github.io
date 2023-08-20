<template>
  <div id="Pri">
    <h1>La pri pogo, test in markdown file from fetch(). {{ $route.params.mark }}</h1>
  </div>

  <button @click="kontrolu">Check Style</button>

  <Mu/>

</template>

<script setup>
import { ref } from 'vue';

function kontrolu(e){
  document.documentElement.style.setProperty("--background", "#333")
  document.documentElement.style.setProperty("--color", "var(--white)")
}

</script>

<style lang="scss">
#Pri{
  width: 75vw;
  margin: auto;

  @media (max-width: 1023px) {
    width: 98%;
  }
}
</style>
