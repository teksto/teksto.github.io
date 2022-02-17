<template>
  <div id='Tangut'>
    
    <div v-for="iz in azSegCuij.slice(0, 1*ap)">
      <p v-for="rz in iz">
        <Kp
          v-for="ez in Array.from(rz)"
          @elz="paratg"
          lingvo="tangut"
          :tt="ez">
          <ul>
            <li v-for="(qz) in iro(ez.codePointAt().toString(16).toUpperCase())">{{qz}}</li>
          </ul>
        </Kp>
      </p>
    </div>

    <div id="tangut-kap" v-if="areoKap"></div>
    
    <div id="se" v-show="apVd">
      <p>到底啦~</p>
    </div>
    
  </div>
</template>

<script setup>
import { onMounted, onUpdated, ref } from 'vue'
import Kp from '../../kone/Keypop.vue'

// defineEmits(['evl'])

// 获取 $path 相关操作。
import { useRoute } from 'vue-router'
const rt= useRoute()
const rszz= rt.path
// const ul= null ?? 

console.log(987, rszz)

// Mate-daj.
import {TangutCuij, TangutKap} from '../../mate/daj/TKJN.json'
import {tgDict as td} from '../../mate/daj/dict_tg.json'

// 首部件显示控制。
let areoKap= ref(false)
// 词条信息提示。
let enh= ref()

// 获取所有字符集。
const azCuij= new Array;
for(let i1 in TangutCuij){
  azCuij.push(TangutCuij[i1])
}
// 分割字符集。
const azSegCuij= new Array;
const segSz= azCuij.length;
const sn= 18;
const step= Math.ceil(segSz / sn);
for(let i=0; i<step; i++){
  azSegCuij.push(
    azCuij.slice(
      i*sn, (sn*i)+sn
    )
  )
}

// 生成快速字典。
function iro(e){return tMark.value[e]}
const tMark= ref({})
for(let i of td){
  tMark.value[i.U]= i.M1
}

// 触底加载操作。
let ap= ref(1)  // 行列自增。
let apVd= ref(false) // 底显控制。
const vind= ()=> document.documentElement.clientHeight;
const pghg= ()=> document.documentElement.scrollHeight;
const loko= ()=> document.documentElement.scrollTop;
onMounted(()=>{

  window.onscroll= function(){

    if(loko() >= pghg() - vind() - 10){
      if(ap.value < step){
        ap.value++
      }
      // 到底显示。
      if(ap.value === step){
        apVd.value= true
      }
    }

  }

})

// 数据变动后。
onUpdated(()=>{
  console.log('new: ', ap.value, step)
})


// 详细译文。
const paraz= ref('')
function paratg(e){
  console.log('tgEmit: ', e)
}

</script>

<style scoped lang='scss'>
#Tangut{
  // font-size: 1.5rem;
  // line-height: 1.8rem;
  #se{
    margin: 3.6rem auto;
    text-align: center;
    font-size: .9rem;
    line-height: 1.2rem;
    color: var(--dark);
  }
}
</style>