<template>
  <!-- print & input-from -->
  <Enigo></Enigo>

  <!-- menu -->
  <div id="Menuo">
    <div class="Menuo-ero">
      <router-link to="/tg" class="mubn"
        :class="$route.name === 'tangut'&&'el'"
        active-class="el">西夏</router-link>
      <router-link v-if="menuVi" to="/kh" class="mubn" active-class="el">契丹</router-link>
      <router-link v-if="menuVi" to="/jc" class="mubn" active-class="el">女真</router-link>
      <router-link to="/nv" class="mubn" active-class="el">女书</router-link>
      <router-link v-if="menuVi" to="/ph" class="mubn" active-class="el">八思巴</router-link>
      <router-link to="/serci" class="mubn" active-class="el">检索</router-link>
    </div>
    <div class="Menuo-ero rg">
      <button class="mubn" @click="cliz=true">全集</button>
      <button class="mubn">清空Enigo</button>
    </div>
  </div>

  <!-- jump -->
  <div id="Salti" v-show="jumpz" @click="jumpSupro">🚀</div>

  <!-- waterfall flow -->
  <div id='Hejm'>
    <router-view @tutm="edd" :jugCuij="cliz"></router-view>
  </div>
</template>

<script setup>
import { onBeforeUpdate, onMounted, ref } from 'vue'
import Enigo from '../kone/Enigo.vue'


// 隐藏菜单。
const menuVi= false;

// import Tangut from './lingvo/Tangut.vue'
// import Nvs from './lingvo/Nv.vue'

// Enigo框部分Emit操作。

// Tangut部分Emit操作。
let cliz= ref(false);
const edd= e=> cliz.value= e.cliz;


// 女书部分Emit操作。


onBeforeUpdate(()=> console.log(cliz.value) )




// 超出显示跳转。
const jumpz= ref(false)
function jumpSupro(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(()=>{
  // 小火箭显示控制。
  // 解决 window.onscroll 多个冲突。
  window.addEventListener('scroll',e=>{
    jumpz.value= window.scrollY >= 800? true:false;
  })

})

</script>

<style scoped lang='scss'>
body{scroll-behavior: smooth!important;}
#Hejm{margin-right: .3rem;}

#Menuo{
  display: flex;
  flex-wrap: wrap;
  margin-right: .3rem;
  margin-bottom: .3rem;
  .Menuo-ero{
    display: flex;
    flex: 1 0 auto;
    &[class~="rg"]{
      justify-content: flex-end;
    }
  }
}

// button & a-link-bn.
.mubn{
  appearance: none;
  border-style: none;
  outline: transparent;
  text-decoration: none;
  background-color: transparent;
  display: inline-block;

  color: var(--bnc);
  border: .1rem solid var(--bng-h);
  background-color: var(--bng);
  border-radius: .2rem;
  padding: .15rem .6rem;
  margin: .3rem .1rem;
  &:hover{
    color: var(--bnc-h);
    background-color: var(--bng-h);
  }
  &[class~="el"]{
    font-weight: 600;
    color: var(--bnc-h);
  }
}

// jump top.
#Salti{
  outline: transparent;
  right: 0;
  bottom: 0;
  position: fixed;
  margin: .3rem;
  font-size: 1.5rem;
  line-height: 1.8rem;

  cursor: pointer;
  transform: rotate(-45deg);
  background-color: rgba(255,255,255,.7);
  border-radius: 1rem;
  padding: .3rem .15rem;
  
  &:hover{
    // transform: rotate(-45deg) scale(2);
    animation-name: jump;
    animation-duration: 2s;
    // animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
}
@keyframes jump {
  0%{transform: rotate(-45deg); background-color: rgba(255,255,255,.3);}
  35%{transform: rotate(-45deg) scale(1);}
  100%{transform: rotate(-45deg) scale(2); background-color: transparent;}
}
</style>