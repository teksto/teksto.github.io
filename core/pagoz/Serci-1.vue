<template>
<div id="Serci">
  <div id="Enigo">
    <div id="Alirebleco">
      <div id="Formo">
        <input
          v-model.trim="Qz"
          @keyup.enter="exe_serci"
          @focus="vid_klavaro= true"
          @blur="vid_klavaro= false"
          type="text" lang="tg" placeholder="建议优先使用繁体进行检索。">
        <button @click="exe_serci">🔍</button>
      </div>
      <div id="Opcioj">
        <input type="checkbox" name="Opciojz" id="frazo" hidden v-model="agoFarzo">
        <input type="checkbox" name="Opciojz" id="sangi" hidden v-model="agoSangi">
        <input type="checkbox" name="Opciojz" id="agordi" hidden v-model="agordiz">
        <!-- 左侧：搜索目录（选择字典） -->
        <div id="opc-celo">
          <select name="Opciojz" disabled="true" v-model="agoDz">
            <option value="Dz_tg" selected>西夏文</option>
            <option value="Dz_nv">女书</option>
            <option disabled="true" value="Dz_jzp">减字</option>
            <option disabled="true" value="Dz_ph">八思巴</option>
            <option disabled="true" value="Dz_kh">契丹文</option>
            <option disabled="true" value="Dz_jc">女真文</option>
            <option disabled="true" value="Dz_ciuj">搜索全部</option>
          </select>
        </div>
        <!-- 右侧：设置项目 -->
        <div id="opc-ago">
          <label for="deep">
            <span style="opacity: .5">匹配精度</span>
            {{agoDeep<=100? '低': agoDeep>100 & agoDeep<=600? '适中': '高'}}
            <input type="range" min="0" max="1000" step="10" name="Opcioj" id="deep" v-model="agoDeep">
          </label>
          <label data-el="词组" for="frazo"></label>
          <label data-el="繁体" for="sangi"></label>
          <label for="agordi">设置</label>
        </div>
      </div>
      <!-- 搜索历史 -->
      <div v-if="vid_hiz" id="Historio">
        <div id="his-kap">
          <div id="his-kap--ti">Historio</div>
          <div id="his-kap--close">
            <a @click="hiz_klara">close</a>
          </div>
        </div>
        <!-- 打印历史列表 -->
        <router-link
          v-for="iz in hiz.split(',')"
          :to="`/serci?q=${iz}`"
          class="label">{{iz}}</router-link>
      </div>
    </div>
    <!-- 搜索说明 -->
    <div id="Gvidilo" style="opacity:.5;">Gvidilo</div>
  </div>

  <!-- 键盘组件 -->
  <!-- <div v-if="vid_klavaro" id="Klavaro"></div> -->

  <div id="Presi">
    <!-- 选定结果打印区。
    <div id="Tekstkesto">
      <h1>Presa-eligo areo.</h1>
    </div>
-->
    <!-- 搜索结果列表操作区。 -->
    <div id="Elektu">

      <div class="vico">
        <!-- 首字分列 -->
        <div class="Unue">
          <div class="kapz">
            <div class="kontoloj">🟢</div>
            <div class="majuskla">爱</div>
          </div>
          <div class="operacio">
            <span v-if="rezulto.length > 0">检索到 {{rezulto.length}} 个结果</span>
            <span v-else>未检索到……</span>
          </div>
        </div>
        <!-- 列表 -->
        <div
          v-for="iz in rezulto"
          class="Krado">
          <div class="majuskla">
            <ruby>
              <Gt :uid="iz.item.U" lang="tg" />
              <rt>{{iz.item.P? iz.item.P[0]:null}}</rt>
            </ruby>
          </div>
          <div class="parafrazo" :class="vid_krado && 'vid'">
            <div class="legi">{{iz.item.F? iz.item.F:null}}</div>
            <div class="listo">
              <p
                v-if="iz.item.M1"
                v-for="mz in iz.item.M1">{{mz}}</p>
            </div>
          </div>
        </div>

      </div>
<!-- dome -->
<button @click="vid_krado=!vid_krado">Baskuli</button>
<button @click="vid_dialog= true">Vid Dialog</button>
      <ul>
        <li>{{rezulto.length}}</li>
        <li v-for="fz in rezulto">
          <Gt :uid="fz.item.U" lang="tg" /> - <span style="opacity: .5">{{fz.item.F}} / {{fz.item.P}}：</span>{{fz.item.M1}}
        </li>
      </ul>
<!-- dome -->
    </div>

  </div>
</div>

<Dia v-model:viz="agordiz" :vid="vid_dialog" ti="Agorado">
  <div id="ago-dia">
    <div class="ago-dia--kontroli">
      <label for="">词组模式</label>
      <label for="">强制繁体</label>
      <label for="">强制繁体</label>
      <label for="">强制繁体</label>
    </div>
    <div class="ago-dia--deep">
      <input type="range" name="" id="">
    </div>
    <div class="ago-dia--input">
      <input type="text" name="" id="">
    </div>
    <button @click="agoSangi= false">Okz</button>
  </div>
</Dia>

</template>

<script setup>
import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import KB from '../kone/Klavaro.vue'
import Gt from '../kone/Gt.vue'

// 路由相关。
const Rr= useRoute();
// 西夏五笔键盘。
let vid_klavaro= ref(false)

// 搜索历史记录相关。
let hiz= ref(localStorage.getItem("serci_hiz"))
let vid_hiz= ref(true);
function hiz_savi(daj){
  const hiz_local= localStorage.getItem("serci_hiz")
  if(hiz_local.split(",").indexOf(daj) < 0){
    const hiz_n= hiz_local.length > 0? daj + ',' + hiz_local: daj;
    // 读写操作。
    localStorage.setItem("serci_hiz", hiz_n)
    hiz.value= localStorage.getItem("serci_hiz")
  }
}
// 清空搜索记录操作。
function hiz_klara(e){
  vid_hiz.value= false;
  localStorage.setItem("serci_hiz", "")
}

// 搜索前置。
let Q= ref()
Q.value= Rr.query.q || Rr.params.q || null;
let Qz= ref(null)
let rezulto= ref([])
// 搜索设置部分：全部（默认为‘汉夏’）、模糊搜索广度（默认20）、指定项目待定。
let agoAmp= ref(false)
let agoLargo= ref(20)
let agoSpe= ref(null)
let agoKey= ref("M1")

// let rdjs= ref()
// fetch('./datumoj/DzTangut.json')
//   .then(r=> r.json())
//   .then(d=> rdjs.value= d.Tangut.length)
// console.log(921333, rdjs.value)

// Fuse.js
import {Tangut as Dz_tg} from '../mater/daj/DzTangut'
import Fuse from 'fuse.js'
const F= new Fuse(Dz_tg,{
  keys: [agoKey.value],
  threshold: .1,
  distance: 600
});

// find检索封装，封装 Fuse 搜索操作 。
let djz= ref()
function trovi(celo="tg", {}={}){
  const KC= {
    tg: './datumoj/DzTangut.json',
    nv: './datumoj/DzNvs.json',
    ph: './datumoj/DzPhasba.json',
    kh: './datumoj/DzKhitan.json',
    jc: './datumoj/DzJurchen.json'
  }
  let uz= KC[celo]
  const rz= []

  fetch(uz).then(r=> r.json())
    .then(d=> console.log(2288, d.Tangut.length))

  // return  {'爱':{}}
}
// console.log(783, trovi())

// 搜索设置操作。
function agordoj(slos, {}={}){
  // 读取 localstorage 的本地配置文件。
  const loka= localStorage.getItem('serci_agordo')
  // 对各配置相进行操作。

  // 修改后配置本地存储。
}

// 执行搜索操作。
import ZH from '../kone/h2h.js'
import ENE from '../kone/eneGamo.js'
function exe_serci(e){
  // 获取搜索内容。
  let enh= null
  let dz= 'Dz_tg'
  let ob= 'M1'

  const daj= Qz.value;
  const gustigi= ENE(daj);

  switch(gustigi.lang){
    case 'en':
      break;
    case 'zh':
      enh= ZH(daj)
      console.log(11)
      break;
    case 'tg':
      break;
    case 'nv':
      console.warn("Sugesto: Vortara preparado...")
      break;
    case 'pg':
      console.warn("Averti: Ankorau neniuj rimedoj.")
      break;
    default:
      console.error("Err: Ekster antaudeterminita lingva gamo!")
  }

  // 字串转成数组操作。


  // 执行搜索。

  // 写入历史记录。
  hiz_savi(daj)

  // console.log(99121, ENE(daj))
  console.log(222, enh)
}


// 周期操作。
onMounted(()=>{
  if(Q.value){rezulto.value= F.search(Q.value)}
  vid_hiz.value= localStorage.getItem("serci_hiz").length > 0? true:false;
})
// 路由守护。
onBeforeRouteUpdate(e=> {
  rezulto.value= F.search(e.query.q || e.params.q)
})

// ===============================
// Gt unicode output dome.
function skribi(){
  let arr= ['草','木','金','馨怡','李春燕成呀电在','艺术家','出女妖','皓腕凝霜雪中','草木灰中','基数']
  localStorage.setItem("serci_hiz", arr)
}

let agoDz= ref('Dz_tg')
let agoSangi= ref(true)
let agoFarzo= ref(true)
let agoDeep= ref(600)
let agordiz= ref(false)
function agoPresi(e){console.log(5631, agoSangi.value, agoFarzo.value, agoDeep.value, agoDz.value)}

function agoDeepSkalo(e=300){
  let skalo= ['⚫','⚪','🔵','🟢','🟡','🟠','🔴']
  return skalo[3]
}

let vid_krado= ref(false)
let vid_dialog= ref(false)
import Dia from '../kone/Dialog.vue'
</script>

<style scoped lang='scss'>
@media only screen and (max-width: 800px){
  #Serci{
    display: block!important;
    margin: 0 .3rem 0 0;
    #Enigo{
      min-width: auto;
    }
  }
}

#Serci{
  display: flex;
}

#Enigo{
  flex: 0 1 30vw;
  margin-top: .6rem;
  min-width: 380px;

  #Formo{
    padding: .3rem;
    display: flex;
    width: auto;

    input,
    button{
      appearance: none;
      border-style: none;
      outline: transparent;
      font-size: 1rem;
      line-height: 1.5rem;
      padding: .3rem .6rem;
    }

    input{
      border-radius: .3rem 0 0 .3rem;
      flex: 1 0 auto;
    }
    button{
      border-radius: 0 .3rem .3rem 0;
      flex: 0 1 auto;
      &:hover{
        background-color: var(--gray);
      }
    }
  }

  #Opcioj{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .3rem;
    #opc-celo,
    #opc-ago{flex: 1 0 auto;}
    #opc-ago{text-align: right;}
    select,
    label{
      color: var(--cl);
      background-color: var(--dark-lg);
      &:hover{background-color: var(--dark-lw);}
      cursor: pointer;
      transition: all 500ms;
    }
    select{
      border-style: none;
      border-radius: .3rem;
      padding: .3rem .6rem;
      display: inline-block;
    }
    label{
      flex: 1 0 auto;
      padding: .3rem .6rem;
      &:first-child{border-radius: .3rem 0 0 .3rem;}
      &:last-child{border-radius: 0 .3rem .3rem 0;}
    }
    // 选项操作。
    label[for="frazo"]::before{content: '逐字';}
    label[for="sangi"]::before{content: '简体';}
    #frazo:checked ~ #opc-ago > label[for="frazo"],
    #sangi:checked ~ #opc-ago > label[for="sangi"]{
      &::before{
        content: attr(data-el);
      }
    }
    label[for="deep"]{
      // transition: display 3s;
      input{display: none;}
      &:hover{
        input{display: inline-block;}
      }
    }
    label[for="agordi"]{opacity: .5;}
    #agordi:checked ~ #opc-ago > label[for="agordi"]{opacity: 1;}
  }

  #Historio{
    padding: .3rem;
    #his-kap{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: .6rem auto .3rem;
      #his-kap--ti{
        font-weight: 600;
        flex: 1 0 auto;
        opacity: .5;
      }
      #his-kap--close{
        flex: 1 0 auto;
        text-align: right;
        & > a{
          opacity: .5;
          &:hover{opacity: 1;}
          cursor: pointer;
        }
      }
    }
  }

  #Alirebleco{
    padding: .3rem;
    border-radius: .3rem;
    background-color: var(--dark);
    position: relative;
    #Klavaro{
      width: 100%;
      position: absolute;
      left: 0;
    }
  }
}

#Presi{
  flex: 0 1 auto;
  padding: .6rem;
  #Tekstkesto{
    height: 9rem;
    position: sticky;
    top: 0;
    background-color: var(--bg);
    z-index: var(--ll1);
  }
}


// Unue & Krado bloko.
.vico{
  display: flex;
  flex-wrap: wrap;
  .Unue,
  .Krado{
    margin: .1rem;
    padding: .15rem .3rem;
    border-radius: .3rem;
    color: var(--dark-lw);
    background-color: var(--dark);
  }
  .Unue{
    .kapz{
      display: flex;
      align-items: center;
      .kontoloj,
      .majuskla{
        flex: 1 0 auto;
      }
    }
    .majuskla{
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 2.1rem;
      font-family: KaiTi, var(--lang-hans);
      text-align: right;
    }
    .operacio{
      opacity: .5;
    }
  }
  .Krado{
    align-items: center;
    display: flex;

    cursor: default;
    max-width: 300px;

    .majuskla{
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 2.1rem;
      ruby{
        rt{
          opacity: .5;
          font-size: .7rem;
        }
      }
    }
    .parafrazo{
      opacity: .5;
      padding: 0 .3rem;
      font-size: .7rem;
      .legi{
        padding-bottom: .3rem;
        border-bottom: 1px dashed var(--dark-lg);
      }
      .listo{
        p{margin: 0;}
      }
      display: none;
    }
    transition: all 500ms;
    &:hover{
      z-index: var(--ll2);
      transform: scale(1.2);
      box-shadow: 0 0 1.8rem var(--black);
      .majuskla{color: var(--gray);}
    }
    &:hover .parafrazo{
      display: block;
    }
    .vid{display: block!important;}
  }
}


// label.
.label{
  display: inline-block;
  white-space: nowrap;
  color: var(--black);
  background-color: var(--gray);
  border-radius: .3rem;
  padding: .3rem .6rem;
  margin: .1rem;
  font-size: .9rem;
  line-height: .9rem;
  &:hover{
    background-color: var(--gray-lg);
    color: var(--dark-lw);
  }
  font-family: 'Tangut_unicode_sev', 'Nvs_unicode_sev', var(--lang-hans);
}
</style>