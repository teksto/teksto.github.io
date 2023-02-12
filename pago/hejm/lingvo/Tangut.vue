<template>
  <Mu />

  <div id="Tangut" lang="tgs">
    <div class="row" v-for="iz in TangutCiuj">
      <span class="bl" v-for="ic in iz">{{ ic }}</span>
    </div>
  </div>

  <Kopira/>
</template>

<script setup>
import { ref } from 'vue'
import Mu from '../ero/Menuo.vue'
import Kopira from '../ero/Kopirajto.vue'

import { TangutCiuj, TangutKap } from '../../mater/dict/TKJN.json'
</script>

<style scoped lang='scss'>
#Tangut{
  margin-top: 3.3rem;
  .row{
    span{
      font-size: 1.8rem;
      line-height: 2.1rem;
      opacity: .3;
      &:hover{
        transform: scale(2);
        opacity: 1;
      }
      cursor: default;
    }
  }
}
</style>