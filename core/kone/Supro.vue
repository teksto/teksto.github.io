<template>
  <div v-if="dis" id='Supro' @click="commd">🌩</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

let dis= ref(false);
function commd(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(()=>{
  window.addEventListener('scroll',e=> {
    dis.value= window.scrollY >= document.documentElement.clientHeight / 2? true:false;

    // console.log(
    //   document.body.clientHeight,
    //   document.body.clientHeight,
    //   document.body.scrollTop,
    //   document.body.scrollHeight,
    //   window.screen.availHeight,
    //   window.screen.height,
    //   document.documentElement.clientHeight,
    //   window.scrollY
    // )
  })
})

</script>

<style scoped lang='scss'>
#Supro{
  font-size: 1.5rem;
  position: fixed;
  bottom: 0rem;
  right: 0;
  padding: .5rem;
  margin: 1rem .3rem;
  border-radius: 1rem;
  cursor: pointer;

  opacity: .3;
  transition: transform 1s, opacity 3s;

  &:hover{
    background-color: rgba(255,255,255,.2);
    transform: translateY(10px);
    opacity: 1;
  }
  &:active{
    animation: rocket 3s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
  } 
}
@keyframes rocket {
  20%{transform: translate3d(0,-10px,0);}
  40%{transform: translate3d(0,20px,0); opacity: .75;}
  100%{transform: translate3d(0,-1200px,0); opacity: 0;}
}
</style>