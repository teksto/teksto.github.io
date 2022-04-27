<template>

  <!-- Navigado: hejm, pri. -->
  <div id="Navigado">
    <a id="logo" href="javascript:;">
      <img src="@/mater/cabbage.png" alt="Cabbage logo.">
    </a>
    <RouterLink active-class="el-nav" to="/">Hejm</RouterLink>
    <RouterLink active-class="el-nav" to="/pri">Pri</RouterLink>
    <button @click="sangi(NkB=!NkB)">{{NkB? '🌕': '🌙'}}</button>
  </div>

  <!-- Vido areo. -->
  <div id="Pago">
    <RouterView />
  </div>

  <!-- Coryrigth. -->
  <div id="Kopirajto">
    <p>⊱ <router-link to="/pri/cca">CCA-a(991,967,69)</router-link> ⊰</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

// 白日黑夜转换。
let NkB= ref(false)
function sangi(e){
  if(e){
    document.documentElement.style.setProperty('--bg', 'var(--white)')
    document.documentElement.style.setProperty('--cl', 'var(--color)')
  }else{
    document.documentElement.style.setProperty('--bg', 'var(--black)')
    document.documentElement.style.setProperty('--cl', 'var(--white)')
  }
}

onMounted(()=> {})


</script>

<style lang="scss">
/* @import '@/mater/bazo.css'; */

body{
  margin: 0 auto;
  font-size: .9rem;
  line-height: 1.2rem;
  font-family: serif;
  font-family: var(--lang-hans);
  --webkit-font-smoothing: antialiased;
  --moz-osx-font-smoothing: grayscale;

  transition: background 1500ms, color 1500ms;

  background-color: var(--bg);
  color: var(--cl);
}

:lang(tg), .tg{font-family: var(--lang-hans),  'Tangut_unicode_sev';}
:lang(nv), .nv{font-family: var(--lang-hans), 'Nvs_unicode_sev';}

/* nav-link hover. */
a{
  color: var(--primary);
  text-decoration: none;
  &:hover{color: var(--secondary);}
}
.el-nav{
  color: var(--primary);
  font-weight: 600;
}
#Navigado{
  writing-mode: tb-rl;
  padding: .3rem .15rem;
  a{
    margin: .15rem auto;
    img{
      width: 1.5rem;
      height: 1.5rem;
    }
    &:hover{font-weight: 600;}
  }
  button{
    appearance: none;
    border-style: none;
    padding: 0;
    margin: 0;
    background-color: transparent;
    // &::before{content: '🌕';}
    &:hover{
      font-size: .9rem;
    }
    cursor: pointer;
  }
  position: fixed;
  top: 0;
  left: 0;
}

#Pago{
  margin-left: 1.8rem;
}

#Kopirajto{
  font-size: .7rem;
  line-height: .9rem;
  margin: 3rem auto;
  text-align: center;
  color: var(--dark);
  a{
    color: var(--dark-lg);
    &:hover{color: var(--dark);}
  }
}

/* font and base. */
@font-face {
  font-family: 'Tangut_unicode_sev';
  src: url('/res/font/N4694-ciuj.woff2') format('woff2');
  font-display: swap;
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'Nvs_unicode_sev';
  src: url('/res/font/Nvs.woff') format('woff2');
  font-display: swap;
  font-style: normal;
  font-weight: normal;
}

/* kompostado. */
// h1, h2, h3, h4, h5,
// .h1, .h2, .h3, .h4, .h5{
//   font-weight: 500;
//   line-height: 1.2rem;
//   margin-top: 0;
//   margin-bottom: .3rem;
// }
// p{}
a, ins, u{
  text-decoration-skip: ink edges;
}
// abbr[title]{}
// mark{}
code{
  background-color: rgba(180,180,180,.5);
  border-radius: .2rem;
  padding: .3rem;
  font-size: 80%;
}
</style>
