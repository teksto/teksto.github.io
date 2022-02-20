<template>

  <!-- Redakti -->
  <Eligo :rdk="mal"></Eligo>

  <!-- Navigado: 西夏、女书、契丹女真、八思巴、减字。 -->
  <div id="Hejm-nav">
    <!-- 左侧导航菜单 -->
    <div class="peco">
      <span>🦪</span>
      <RouterLink active-class="el" to="/tg">西夏</RouterLink>
      <RouterLink active-class="el" to="/nv">女书</RouterLink>
      <RouterLink active-class="el" to="/serci">搜索</RouterLink>
    </div>
    <!-- 右侧功能菜单 -->
    <div class="peco">
      <button>🧄</button>
      <button @click="iru">🧩</button>
      <button @click="emp">🧼 清除</button>
    </div>
  </div>

  <!-- Vido -->
  <RouterView />

</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Eligo from '../kone/Eligo.vue'

// 路由相关。
let nfKap= ref(true);
const Rt= useRouter()
const iru= ()=> Rt.push({
  path: '/tg',
  query: {
    vkap: true
  }
})


// 清空 Eligo.
let mal= ref(false)
function emp(e){
  mal.value= !mal.value
}
</script>

<style scoped lang='scss'>
#Hejm-nav{
  display: flex;
  .peco{
    flex: 1 0 50%;
    &:last-child{text-align: right;}
  }
  a,
  button{
    user-select: none;
    appearance: none;
    border-style: none;
    display: inline-block;
    padding: .3rem .9rem;
    margin: 0 .1rem;
    font-size: .9rem;
    line-height: 1.2rem;
    border-radius: .3rem;
    cursor: pointer;
    background-color: var(--button-back);
    color: var(--button);
  }
}
</style>