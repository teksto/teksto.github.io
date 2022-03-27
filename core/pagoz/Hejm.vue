<template>

  <!-- Redakti -->
  <Eligo :rdk="mal">
    <span v-for="iz_enh in enh">{{iz_enh}}</span>
  </Eligo>

  <!-- Navigado: 西夏、女书、契丹女真、八思巴、减字。 -->
  <div id="Hejm-nav">
    <!-- 左侧导航菜单 -->
    <div class="peco">
      <span style="font-size: 1.5rem; line-height: 1.8rem;">🥁 </span>
      <RouterLink active-class="el" to="/tg">西夏</RouterLink>
      <RouterLink active-class="el" to="/nv">女书</RouterLink>
      <RouterLink active-class="el" to="/serci">搜索</RouterLink>
    </div>
    <!-- 右侧功能菜单 -->
    <div class="peco">
      <button @click="rev_reiru">🧄</button>
      <button @click="iru">🧩</button>
      <button @click="emp">🧼 清除</button>
    </div>
  </div>

  <!-- Vido -->
  <RouterView />

  <!-- to top:0 -->
  <Supro />

</template>

<script setup>
import { provide, ref } from 'vue'
import { useRouter } from 'vue-router'
import Eligo from '../kone/Eligo.vue'
import Supro from '../kone/Supro.vue'

// Eligo采集内容。
let enh= ref(new Array)
function rev_reiru(){enh.value.pop()}
function rev_malplena(){}
// 获取Keypope传值。
provide('kikv', kpVenu)
function kpVenu(e){enh.value.push(e)}

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
    color: var(--button-lg);
    &:hover{
      background-color: var(--button-hover);
    }
  }
  .el{
    background-color: var(--button-hover);
    color: var(--button);
  }
}
</style>