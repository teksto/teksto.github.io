<template>
  <div v-show="montri" @click="Ordo" id='Supro'>⚡</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

let montri= ref(false)

function Ordo(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(()=> {
  window.addEventListener("scroll", ez=>{
    montri.value= window.scrollY >= document.documentElement.clientHeight / 2? true:false;
  })
})
</script>

<style scoped lang='scss'>
#Supro{
  font-size: 1.5rem;
  line-height: 1.8rem;
  position: fixed;
  right: 0;
  bottom: 0;
  margin: .9rem .6rem;
  cursor: pointer;

  &:hover{
    animation: Breto 2s both;
  }
  // &:active{
  //   animation: Raketo 1s both;
  // }
}

@keyframes Raketo {
  0%{opacity: 1;}
  100%{
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Breto {
  0%{
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100%{
    opacity: 1;
    transform: none;
  }
}
</style>