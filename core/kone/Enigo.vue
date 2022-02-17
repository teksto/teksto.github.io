<template>
  <div id='Enigo-kone' :contenteditable="redakti">
    <slot>
      <div class="eg-defaulte">
        <span class="sigelo">𗇉𗲈</span>
        <span>𗦍</span>
      </div>
    </slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const jug= defineProps({
  redakti: Boolean
})
</script>

<style scoped lang='scss'>
#Enigo-kone{
  appearance: none;
  outline: transparent;
  font-size: 9rem;
  line-height: 9.9rem;
  padding: .9rem .3rem;
  text-align: center;
  white-space: nowrap;
  width: auto;
  overflow-x: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
    width: 0;
  }

  font-family: 'Tangut_unicode_sev', 'Nvs_unicode_sev';
}
.sigelo{
  color: var(--button);
  background-color: var(--button-back);
  font-size: 1.2rem;
  line-height: 1.5rem;
  padding: .3rem .1rem;
  border-radius: .2rem;
  writing-mode: vertical-lr;
}
</style>