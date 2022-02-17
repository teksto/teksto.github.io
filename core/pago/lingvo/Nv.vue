<template>

<h1>
  <button @click="diz=true">open</button>
</h1>  <Dia @pk="pk" v-if="diz">233</Dia>


  <div id="Nvs">
    <div id="areo-nv">
      <Kp
        v-for="iz in Array.from(Nvs)"
        @elz="elez"
        lingvo="nvs"
        :tt="iz">
        <div>字源：{{iroN(iz.codePointAt().toString(16).toUpperCase())}}</div>
      </Kp>
    </div>

    <div id="areo-parafrazi" v-if="areoR">
      <div class="para-x" @click="areoR=false">❌</div>
      <div class="para-kap" lang="nvs">:{{parazBl}}<small>{{paraz.U}}</small></div>
      <div class="para-kor">
        <p>字源：<span>{{paraz.S}}</span></p>
        <p>释文：
          <span v-for="iz in paraz.M">{{iz}}、</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Kp from '../../kone/Keypop.vue'


import Dia from '../../kone/Dia.vue'
let diz= ref(false)
function pk(e){diz.value= e}


import {Nvs} from '../../mate/daj/TKJN.json'
import {nvDict} from '../../mate/daj/dict_nv.json'

// 生成快速字典。
const nMark= ref({})
function iroN(e){return nMark.value[e]}
for(let i of nvDict){
  nMark.value[i.U]= i.S
}

// 译文信息。
const areoR= ref(false)
let paraz= ref(null)
let parazBl= ref('')
import Fuse from 'fuse.js'
const Fi= new Fuse(nvDict, {
  threshold: .1,
  keys: ['U']
})

function elez(e){
  let uni= e.codePointAt().toString(16)
  paraz.value= Fi.search(uni)[0].item
  parazBl.value= e
  areoR.value= true
}
</script>

<style scoped lang='scss'>
#Nvs{
  display: inline-flex;
  #areo-parafrazi{
    flex: 1 0 30vw;
    // transition: all 3000ms;
  }
}

#areo-parafrazi{
  position: relative;
  padding: .3rem;
  .para-x{
    padding: .3rem;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
  }
  border-left: 1px dashed var(--dark-ls);
  margin-left: .3rem;
  .para-kap{
    font-size: 3rem;
    line-height: 3rem;
    small{
      font-size: 1.2rem;
      line-height: 3rem;
      color: var(--dark-ls);
    }
  }
  .para-kor{
    span{color: var(--dark-ls);}
  }
}
</style>