<template>
  <div id="Tangut" lang="tg">
    <div id="Tg-cuij">
      <!-- <p v-for="iz in TangutCuij">{{iz}}</p> -->
      <!-- {{DZ.slice(0,18)}} -->
      <RK v-for="iz in DZ.slice(0,18)" :alineo="iz"></RK>
    </div>
    <div id="Tg-kap" v-if="Rr.query.vkap || false">
      <p v-for="iz in TangutKap">{{iz}}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { TangutCuij, TangutKap } from '../../mater/daj/TKJN'
import RK from '../../kone/RowKey.vue'

// 获取路由数据。
const Rr= useRoute()


// 测试字典。
// const DZ= TangutCuij.slice(0, 18)
let DZ= new Array;
for(let i in TangutCuij){
  DZ.push(TangutCuij[i])
}

// 字典部分。
const step= Math.ceil()

let ap= ref(1)
let apvido= ref(false)
onMounted(()=> {
  // 触底加载
  window.onscroll= function(){
    if(
      document.documentElement.scrollTop
      >=
      document.documentElement.scrollHeight
      -
      document.documentElement.clientHeight - 10
    ){}
  }

})

// 路由守卫：打开Dialog单字用。
let vid_dia= ref(false)
onBeforeRouteUpdate(e=>{
  if(e.params.uid){
    vid_dia.value= true
  }
})

</script>

<style scoped lang='scss'>
#Tangut{
  display: flex;
  #Tg-cuij{flex: 0 1 auto;}
  #Tg-kap{flex: 1 0 35vw;}
}
</style>