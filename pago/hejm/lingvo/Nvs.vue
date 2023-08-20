<template>
  <Mu />

  <div lang="nv" id="Nvs">
    <span v-for="iz in Ciuj" @click="iru(iz)">{{ iz }}</span>
  </div>

  <dialog id="nvsDialog" ref="vidu">
    <div class="Ujo">
      <div id="Nv-info" v-if="datumoj.presi">
        <div class="G" lang="nv">{{ datumoj.daj.T }}</div>
        <div class="into">
          <p>
            <span class="into-ti">字源：</span>
            <span>{{ datumoj.daj.S }}。</span>
            <sub class="into-sup">({{ datumoj.daj.U }})</sub>
          </p>
          <p>
            <span class="bl" v-for="iz in datumoj.daj.M">{{ iz }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="bngup">
      <button @click="vidu.close(); datumoj.presi=false">关闭</button>
    </div>
  </dialog>

  <Kopira />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Mu from '../ero/Menuo.vue'
import Kopira from '../ero/Kopirajto.vue'

let Ciuj= []
for(let i=0x1b170; i<=0x1b2ff - 4; i++){
  let tx= String.fromCodePoint(i)
  Ciuj.push(tx)
}

// dialog operation and dj processing.
import { NVD as Dn } from '../../mater/dict/DzNvs.json'
let vidu= ref(null)
let datumoj= ref({
  presi: false
})

function iru(e){
  let celo= e.codePointAt().toString(16).toUpperCase()
  let trovis= Dn.filter(z=> z["U"] === celo)
  let pen= trovis[0]
      pen["T"]= String.fromCodePoint(parseInt(pen["U"], 16))
  datumoj.value["daj"]= pen

  datumoj.value.presi= true
  vidu.value.showModal()
  vidu.value.show()
}

onMounted(()=>{
  // 关闭dialog事件处理。
  const dia= document.querySelector("#nvsDialog")
  dia.addEventListener("click", ()=>{
    // datumoj.value.presi= false
    // vidu.value.close()
  })
})
</script>

<style scoped lang='scss'>
#Nvs{
  font-size: 3rem;
  line-height: 3.3rem;
  margin-top: 3.3rem;

  span{
    opacity: .8;
    cursor: default;
    opacity: .3;
    &:hover{opacity: 1;}
    margin: .6rem .3rem;
  }
}

#Nv-info{
  display: inline-flex;
  max-width: 30vw;
  @media screen and (max-width: 900px) {
    max-width: 80vw;
  }
}
</style>