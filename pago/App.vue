<template>
  <div id='Navigado'>
    <RouterLink to="/">
      <img src="./mater/cabbage.png" class="logo">
    </RouterLink>
    <span>✦</span>
    <RouterLink class="nl" active-class="el" to="/">主頁</RouterLink>
    <RouterLink class="nl" active-class="el" to="/serci">檢索</RouterLink>
    <RouterLink class="nl" active-class="el" to="/pri">關於</RouterLink>
  </div>

  <div id="Vojo">
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped lang='scss'>
#Navigado{
  writing-mode: tb-rl;
  cursor: default;

  position: fixed;
  left: 0;
  top: 0;
  .logo{
    margin: .15rem;
    width: 1.5rem;
  }
  span{
    color: var(--main-sk2);
  }
  a{color: var(--main-sk2);}
  .nl{
    padding: .3rem .1rem;
    border-radius: .3rem;
    &:hover{
      color: var(--main);
      background-color: var(--main-sk3);
    }
    transition: all 800ms;
  }
}
#Vojo{
  margin-left: 1.8rem;
}

.el{
  color: var(--white)!important;
  background-color: var(--main-sk2);
}
</style>

<style lang="scss">
body{
  margin: 0 auto;
  background-color: #f9f9f9;
  color: var(--color);
  font-size: .9rem;
  line-height: 1.2rem;
}

a{
  text-decoration: none;
  color: var(--link);
  &:hover{
    color: var(--link-sup);
    // background-color: var(--main-sk3);
  }
  transition: background 500ms, color 500ms;
}
</style>