<template>
    <!-- 西夏字符集，首部件部打印区。 -->
  <div id='Tangut-bl' lang="tangutx">
    <div id="Tangut-cuij" :class="jug01||'cuij'">
      <p
        v-for="iq in cuijz.flat(1)">
        <Pop len="tangut" v-for="iqz in Array.from(iq)" :tt="iqz"/>
      </p>
    </div>

    <!-- 部件列表 -->
    <div
      v-if="jug01"
      id="Tangut-kap" lang="tangut">
      <p v-for="iz in TangutKap">
        <span v-for="izr in Array.from(iz)" @click="iruKc(izr), tran()">{{izr}}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUpdated, ref } from 'vue'
const props= defineProps(['jugCuij','jug01'])
// const emit= defineEmits(['tutm'])

import Pop from '../../kone/Pop.vue'

// 字集数据（临时，部署 时修改为统一字符集。
import { TangutKap, TangutCuij } from '../../mate/daj/TKJN'
// 接合字符集。
const cuij= []
for(let i in TangutCuij){
  cuij.push(TangutCuij[i])
}
let cuijz= ref(cuij.slice(0,30))

// emit传递。
function tran(e){
  // emit("tutm", {cliz: false})
  console.log(991,e)
}

// 组件选取列表。
function iruKc(e){
  cuijz.value= TangutCuij[e]
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// 列表时不加载更多控制。
let k2c= ref(true)
onUpdated(()=>{
  k2c.value= cuijz.value.length >=28? true:false;
})


// 加载值。
let sp= 1;
const step= 30;
// 窗口尺寸数据。
const vind=()=> document.documentElement.clientHeight;
const pago=()=> document.documentElement.scrollHeight;
const poz=()=> document.documentElement.scrollTop;
onMounted(()=>{
  if(props.jugCuij){cuijz.value= cuij.slice(0,30)}
  // 全集的触底加载。
  window.onscroll= ()=>{
    if(poz() == pago() - vind() && k2c.value){
      sp++
      let spBig= sp >= 15? 460:step * sp;
      cuijz.value= cuij.slice(0,spBig)
    }
  }
})

</script>

<style scoped lang='scss'>
#Tangut-bl{
  display: flex;
  flex-wrap: wrap;
  #Tangut-cuij,
  #Tangut-kap{
    flex: 0 1 50%;
    white-space: normal;
    font-size: 1.5rem;
    line-height: 1.5rem;

    transition: flex .3s;
  }
  #Tangut-cuij[class~='cuij']{flex: 0 1 100%;}

  span{
    // font-size: 1.5rem;
    // line-height: 1.8rem;
    padding: .3rem .1rem;
    cursor: pointer;
    &:hover{
      color: var(--white);
      background-color: var(--dark-lg);
    }
  }
}
</style>