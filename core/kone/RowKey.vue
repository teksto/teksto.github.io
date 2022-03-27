<template>
  <p class='alineo' :lang="lang">
    <div
      v-for="iz in Array.from(alineo)"
      :data-mg="iz"
      @click="kik">{{iz}}</div>
  </p>
</template>

<script setup>
import { inject, ref } from 'vue'

// 向Hejm传值。
let kik_value= inject('kikv')
let kk= 1
function kik(e){
  kik_value(e.target.dataset.mg)
}

defineProps({
  alineo: {
    type: String
  },
  lang: {
    type: String,
    default: 'tg'
  }
})
</script>

<style scoped lang='scss'>
.alineo{
  font-size: 1.5rem;
  line-height: 1.8rem;
  div{
    cursor: default;
    &:hover{
      color: var(--dark);
      border-radius: 0 0 .1rem .1rem;
      background-color: var(--white);
    }
    position: relative;
    &:hover::before{
      content: attr(data-mg);
      transform: scale(2);
      position: absolute;
      top: -200%;
      padding: .3rem;
      color: var(--black);
      border-radius: .1rem;
      background-color: rgba(255,255,255,.9);
      z-index: var(--ll1);
    }
  }
  display: flex;
  flex-flow: wrap;
}
</style>