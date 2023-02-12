<template>
  <div id="Pri">
    <h1>La pri pogo, test in markdown file from fetch(). {{ $route.params.mark }}</h1>
  </div>

  <Mu/>

</template>

<script setup>
import { ref } from 'vue';
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
