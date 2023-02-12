<template>
  <Mu />

  <div lang="nv" id="Nvs">
    <span v-for="iz in T">{{ iz }}</span>
  </div>

  <Kopira />
</template>

<script setup>
import { ref } from 'vue'
import Mu from '../ero/Menuo.vue'
import Kopira from '../ero/Kopirajto.vue'

let T= []
for(let i=0x1b170; i<=0x1b2ff; i++){
  let tx= String.fromCodePoint(i)
  T.push(tx)
}
</script>

<style scoped lang='scss'>
#Nvs{
  font-size: 3rem;
  line-height: 3.3rem;
  margin-top: 3.3rem;

  span{
    opacity: .8;
    cursor: default;
    opacity: .3;
    &:hover{opacity: 1;}
    margin: .6rem .3rem;
  }
}
</style>