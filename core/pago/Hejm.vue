<template>
  <Eg :redakti="edk">
    <span v-for="iz in iruEg">{{iz}}</span>
  </Eg>

  <div id='Hejmz'>
    <!-- 主页导航 -->
    <div id="Navigado">
      <div class="ero">
        <router-link to="/tg" active-class="el" class="bn">西夏文</router-link>
        <router-link to="/nv" active-class="el" class="bn">女书</router-link>
        <router-link to="/search" active-class="el" class="bn">🔍 检索</router-link>
        <router-link to="/search/艾默里11奇sda别惹" class="bn">xxx</router-link>
      </div>
      <div class="ero">
        <!-- <button @click="zoz=!zoz">♻ {{zoz?'全集 📜':'首部件 🧩'}}</button> -->
        <button @click="iruEg.pop()">🧽</button>
        <button @click="iruEg.length=0">🧼 清空</button>
      </div>
    </div>

    <!-- 路由显示区 -->
    <div id="Eligspaco">
      <router-view></router-view>
    </div>
  </div>

  <!-- jump topz -->
  <Topz />
</template>

<script setup>
import { onMounted, onUpdated, provide, ref } from 'vue'
import Eg from '../kone/Enigo.vue'
import Topz from '../kone/Supro.vue'

let zoz= ref(true);
let edk= ref(true);

// 传给 Enigo 的值。
let iruEg= ref([])
// 接收 KeyPop 传来的值。
function iruKp(e){iruEg.value.push(e)}
provide('iruKp', iruKp)

</script>

<style scoped lang='scss'>
#Navigado{
  display: flex;
  .ero{flex: 1 0 50%;}
  .ero:last-child{text-align: right;}
  margin: .6rem .3rem;
}
</style>