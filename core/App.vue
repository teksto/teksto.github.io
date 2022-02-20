<template>

  <!-- Navigado: hejm, pri. -->
  <div id="Navigado">
    <a id="logo" href="javascript:;">
      <img src="res/cabbage.png" alt="Cabbage logo.">
    </a>
    <RouterLink active-class="el-nav" to="/">Hejm</RouterLink>
    <RouterLink active-class="el-nav" to="/pri">Pri</RouterLink>
  </div>

  <!-- Vido areo. -->
  <div id="Pago">
    <RouterView />
  </div>

  <!-- Coryrigth. -->
  <div id="Kopirajto">
    <p>⊱ <a href="/caa">CCA-a(991,967,69)</a> ⊰</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const qq= ref(921)

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

  background-color: var(--bg);
  color: var(--cl);
}

:lang(tg), .tg{font-family: 'Tangut_unicode_sev';}
:lang(nv), .nv{font-family: 'Nvs_unicode_sev';}

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
  src: url('res/font/N4694-ciuj.woff2') format('woff2');
  font-display: swap;
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'Nvs_unicode_sev';
  src: url('res/font/Nvs.woff') format('woff2');
  font-display: swap;
  font-style: normal;
  font-weight: normal;
}

</style>
