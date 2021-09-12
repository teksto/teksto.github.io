<template>
  <div id='Enigo-kone' lang="tangut" contenteditable="true">
    <slot>
      <span class="sigelo">𗇉𗲈</span>
      <span>𗦍</span>
    </slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped lang='scss'>
#Enigo-kone{
  appearance: none;
  outline: transparent;
  font-size: 9rem;
  line-height: 9.9rem;
  padding: .9rem .3rem;
  text-align: center;
}
.sigelo{
  color: var(--bnc-h);
  background-color: var(--bng);
  font-size: 1.2rem;
  line-height: 1.5rem;
  padding: .3rem .1rem;
  border-radius: .2rem;
  writing-mode: vertical-lr;
}
</style>