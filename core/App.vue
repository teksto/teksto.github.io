<template>
  <div id="Navigado-main">
    <a href="#/" class="logo"><img src="/res/cabbage.png"></a>
    <router-link to="/" active-class="el">HEJM</router-link>
    <router-link to="/about" active-class="el">PRI</router-link>
    <router-link to="/tool" active-class="el" style="color: #000000">.</router-link>
  </div>

  <!-- Alternating light and dark -->
  <div id="Alterna">
    <input
     @click="ladJug=!ladJug"
     type="checkbox" name="Alterna" id="alterna-cio" hidden :checked="ladJug">
    <label for="alterna-cio"></label>
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
import { onBeforeUpdate, onMounted, ref } from 'vue'

const H= (new Date).getHours()
// let ladJug= ref(false)
let ladJug= H >= 6 && H <= 18? ref(true):ref(false);
// 默认时段浅色主题。
if(ladJug.value){
  document.body.style.cssText= "background-color: var(--white); color: var(--dark);";
}
// 深浅切换。
onBeforeUpdate(()=>{
  document.body.style.cssText= ladJug.value? "background-color: var(--white); color: var(--dark);":"background-color: var(--back); color: var(--color);"

})

</script>

<style lang="scss">
body{
  color: var(--color);
  background-color: var(--back);
}

#Navigado-main{
  top: 0;
  left: 0;
  position: fixed;
  padding: .3rem .3rem;
  font-size: .7rem;
  line-height: 1.2rem;

  writing-mode: vertical-lr;

  a{
    appearance: none;
    text-decoration: none;
    color: var(--hover);
    margin-top: .3rem;

    &:hover{
      font-weight: 600;
    }

    &[class~="el"]{
      font-weight: 600;
      color: var(--link);
    }
  }
  .logo{
    img{max-width: 1.2rem;}
  }
}

#Pagoz{
  margin-left: 1.8rem;
  width: calc(100% - 1.8rem);
  // max-width: calc(100% - 1.8rem);
}
#Informoj{
  margin: .9rem auto;
  text-align: center;
  a{
    color: var(--dark-lg);
    text-decoration: none;
    &:hover{color: var(--dark-ls);}
  }
}

// Alternating
#Alterna{
  top: 0;
  right: 0;
  position: absolute;
  margin: .3rem;

  label{
    &:hover::before{content: '🌗';}
    &::before{content: '🌕';}
    cursor: pointer;
  }
  #alterna-cio:checked ~ label[for~="alterna-cio"]{
    &::before{content: '🌑';}
  }
}

// tangut and khitan font.
.tg,
:lang(tangut){
  font-family: 'Tangut_unicode_sev';
}
</style>