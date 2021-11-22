<template>
  <div id="Navigado-main">
    <a href="#/" class="logo"><img src="/res/cabbage.png"></a>
    <router-link to="/" active-class="el">HEJM</router-link>
    <router-link to="/about" active-class="el">PRI</router-link>
  </div>

  <!-- Alternating light and dark -->
  <div id="Alterna" @click="salti">
    <span id="Alterna-cio" :class="Luno?'el':'elz'"></span>
  </div>

  <!-- print router pagoz -->
  <div id="Pagoz">
    <router-view></router-view>
  </div>

  <!-- copyright -->
  <div id="Informoj">
    <p><a href="#/cca">cca-a(996,998,69) y(13)</a></p>
  </div>
</template>

<script setup>
import { onBeforeUpdate, onMounted, ref, watch } from 'vue'

// 控制深浅主题的配色。
let Luno= ref(false);
function salti(jug){
  Luno.value=!Luno.value;
  if(Luno.value){
    document.documentElement.style.setProperty('--bg', 'var(--white-true)')
    document.documentElement.style.setProperty('--cl', 'var(--color)')
  }else{
    document.documentElement.style.setProperty('--bg', 'var(--black)')
    document.documentElement.style.setProperty('--cl', 'var(--white)')
  }
  document.body.style.cssText= "transition: background 3s"
}
</script>

<style lang="scss">
body{
  background-color: var(--bg);
  color: var(--cl);
}
// @media(prefers-color-scheme: light){
//   body{
//     background-color: var(--day-bg);
//     color: var(--day-cl);
//   }
// }
// @media(prefers-color-scheme: dark){
//   body{
//     background-color: var(--nig-bg);
//     color: var(--nig-cl);
//   }
// }

// Universala.
a{
  text-decoration: none;
  color: var(--link);
  &:hover{color: var(--link-hover);}
  &:active{color: var(--link-action);}
}
.bn,
button{
  appearance: none;
  border-style: none;
  outline: transparent;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  text-align: center;
  color: var(--button-lg);
  background-color: var(--button-back);
  border-radius: .2rem;
  padding: .3rem .6rem;
  margin: .1rem;
  font-size: .9rem;
  line-height: 1.2rem;

  &:hover{
    color: var(--button-lg)!important;
    background-color: var(--button-hover);
  }
  &:active{color: var(--button)!important;}
  &[class~="el"]{color: var(--button); font-weight: 600;}

  transition: background-color .5s;
}

// Arango.
#Pagoz{
  margin-left: 1.8rem;
  width: calc(100% - 1.8rem);
}
#Navigado-main{
  font-size: .7rem;
  line-height: 1.2rem;
  padding: .3rem .3rem;
  writing-mode: vertical-rl;
  position: fixed;
  left: 0;
  top: 0;

  $link: #1B5E20;
  $hover: #4CAF50;

  a{
    margin-top: .3rem;
    color: $link;
    &:hover{font-weight: 600;}
    &[class~="el"]{
      font-weight: 600;
      color: $hover;
    }
  }
  .logo{
    img{max-width: 1.2rem;}
  }
}
#Informoj{
  text-align: center;
  a{
    color: var(--dark-lg);
    &:hover{color: var(--dark-lw);}
  }
}

// Alternating
#Alterna{
  position: absolute;
  right: 0;
  top: 0;
  margin: .3rem;
  font-size: 1.2rem;
  line-height: 1.2rem;
  cursor: pointer;

  #Alterna-cio{
    &::before{content: '🌕';}
    &:active::before{content: '🌗';}
    &[class~="el"]::before{content: '🌑';}
  }
  &:hover{
    animation: spa 3s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
  }
}
@keyframes roll {
  0%{opacity: 1;}
  100%{
    opacity: 0;
    transform: translate3d(0,-100%,0) rotate3d(0,0,1,-120deg);
  }
}
@keyframes spa {
  20%{transform: scale3d(.9,.9,.9);}
  50%{transform: scale3d(1.1,1.1,1.1);}
  75%{opacity: .5;}
  100%{transform: scale3d(.3,.3,.3); opacity: 0;}
}
</style>