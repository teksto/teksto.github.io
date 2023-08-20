<template>
  <Mu />

  <div id="Kap-mu">
    <button @click="kapSerci(-1)">首部件</button>
  </div>

  <div id="Tangut" lang="tgs" ref="tangutUjo">
    <div class="row" v-for="iz in Ciuj.slice(0,32)">
      <span class="bl" v-for="ic in Array.from(iz)" @click="kapSerci(ic)">{{ ic }}</span>
    </div>
  </div>

  <dialog ref="vidu">
    <div class="Ujo" id="tg">
      <div id="Kap-indekso" v-if="kontrolu">
        <h1>首部件检索</h1>
        <div id="indekso">
          <div v-for="iz in TangutKap" lang="tgs">
            <p>{{ iz }}</p>
          </div>
        </div>
      </div>
      <div id="Tg-info" v-else>
        <div class="G" lang="tgc">{{ datumoj["Ti"] }}</div>
        <div class="into">
          <div id="Kodo" class="into-ti">
            {{ datumoj["K"] }}
          </div>
          <div id="Prok" class="into-sup">
            <p><span class="into-ti">切音：</span>{{ datumoj["F"] }}。</p>
            <p>
              <span class="into-ti">拟音：</span>
              <span v-for="iz in datumoj['P']" class="bl borderz">{{ iz }}</span>
            </p>
          </div>
          <div id="Klarigo">
            <p>{{ datumoj["E"] }}.</p>
            <span v-for="iz in datumoj['M1']" class="bl">{{ iz }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bngup">
      <button @click="vidu.close()">关闭</button>
    </div>
  </dialog>

  <Kopira/>
</template>

<script setup>
import { onBeforeUpdate, onMounted, ref } from 'vue'
import Mu from '../ero/Menuo.vue'
import Kopira from '../ero/Kopirajto.vue'

import { TangutCiuj, TangutKap } from '../../mater/dict/TKJN.json'
import { TGD as Dn } from '../../mater/dict/DzTangut.json'

// values() 取出值，entries() 转换成二维数组。
let Ciuj= Object.values(TangutCiuj);

function sargo(){}

// 首部件检索所作。
// dialog 操作。
let kontrolu= ref(true)
let vidu= ref(null)
let datumoj= ref(new Object)
function kapSerci(jug){
  // kontrolu.value= jug
  // kontrolu.value= jug>=1? true:false;
  if(jug<=1){
    kontrolu.value= true
    // kap.value= TangutKap
  }else{
    kontrolu.value= false

    let Hex= jug.codePointAt().toString(16).toUpperCase()
    let rez= Dn.filter(z=> z["U"] === Hex)[0]
        rez["Ti"]= jug

    datumoj.value= rez
  }

  vidu.value.showModal()
  vidu.value.show()
}

// 列表容器。
let tangutUjo= ref(null)
onMounted(()=>{
  const el= tangutUjo.value
  // 检测滚动。
  window.addEventListener("scroll", function(){
    let sor= document.documentElement.scrollTop
    let win= document.documentElement.scrollHeight
    let dom= document.documentElement.clientHeight

    // console.log(win, dom)
    // if(sor >= win - dom - 10){
    //   // console.log('aa',el.scrollTop)
    //   setTimeout(() => {
    //     console.log(sor)
    //   }, 1000);
    // }

  }, true)

})

onBeforeUpdate(()=>{
  window.addEventListener("scroll", eq=>{
    // console.log(99,el.scrollTop)
  })
})

</script>

<style scoped lang='scss'>
#Tangut{
  .row{
    span{
      font-size: 1.8rem;
      line-height: 2.1rem;
      opacity: .3;
      &:hover{
        transform: scale(2);
        opacity: 1;
      }
      cursor: default;
    }
  }
}

#Kap-indekso{
  #indekso{
    max-height: 70vh;
    overflow-y: auto;
  }
  margin-bottom: .6rem;
}

#Tg-info{
  display: inline-flex;
  justify-content: center;
  align-items: start;
}

#Kap-mu{
  background-color: var(--main-sk3);
  border-radius: .2rem;
  display: inline-block;
  padding: .3rem;
  margin: .3rem auto;

  button{
    appearance: none;
    border-style: none;
    outline: transparent;
    background: transparent;
    background-color: var(--main-sk2);
    padding: .3rem .6rem;
    border-radius: .3rem;
    color: var(--white);
    &:hover{
      background-color: var(--main-sk1);
    }
    transition: all 800ms;
  }
  position: sticky;
  left: 0;
  top: .3rem;
  z-index: 1;
}
</style>