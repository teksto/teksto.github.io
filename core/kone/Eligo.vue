<template>
  <div id='Eligo' :contenteditable="rdk">
    <div id="sigelo" lang="tg">
      <span id="sigelo-small">𗇉𗲈</span>
      <span>𗦍</span>
    </div>
  </div>
  <div id="Eligo-fixed" lang="tg">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, } from 'vue'

defineProps(['rdk'])

</script>

<style scoped lang='scss'>
#Eligo{
  text-align: center;
  margin: 1.2rem auto;
}

#sigelo{
  font-size: 6rem;
  line-height: 6.9rem;
  #sigelo-small{
    writing-mode: tb-rl;
    font-size: 1rem;
    line-height: 1.2rem;
    padding: .3rem .1rem;
    border-radius: .3rem;
    background-color: var(--error);
  }
}

#Eligo-fixed{
  top: 0;
  position: sticky;
  font-size: 3rem;
  line-height: 3.3rem;
  background-color: var(--black);
  text-align: center;
  padding: .3rem;
  z-index: var(--ll1);
}
</style>