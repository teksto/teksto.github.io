<template>
  <div id='Serci'>
    <!-- Serci eniru -->
    <div id="Eniru">
      <!-- Eniga areo -->
      <div id="Eniga">
        <!-- input from -->
        <div id="Formo">
          <div id="formo-ipt">
            <input
              v-model.trim.lazy="Qz"
              @keyup.enter="Trovi(Qz)"
              type="text" placeholder="输入你要检索的内容。">
            <button @click="Trovi(Qz)">🔍</button>
          </div>
          <div id="formo-opc">
            <select v-model="Opcioj_dz">
              <option value="Tangut" selected>西夏文</option>
              <option value="Phasba">八思巴</option>
              <option value="Nvs">女书</option>
              <option value="Cuij">多语合查</option>
            </select>
            <div id="formo-agordo">
              <div id="agordo-bl">
                <div @click="preciza()">检索精度 {{preciza()}}</div>
                <div @click="vid_klavaro=!vid_klavaro">键盘</div>
                <div @click="fnAgo(true)">设置</div>
              </div>
            </div>
          </div>
        </div>
        <!-- history areo -->
        <div
          v-if="loka_hiz()? vid_hiz:false"
          id="Historio">
          <div id="his-kap">
            <h3>Historio</h3>
            <a
              :style="loka_hiz() || 'opacity: .5'"
              @click="malplena">🧼</a>
          </div>
          <div id="his-lz">
            <RouterLink
              class="label"
              v-for="hz in loka_hiz()"
              :to="'/serci?q=' + hz">{{hz}}</RouterLink>
          </div>
        </div>
      </div>
      <!-- Ilustri -->
      <div id="Ilustri">Instruction guide.
        {{vid_agordo}}
      </div>
    </div>

    <!-- Rezultoj montrigas -->
    <div id="Montra">
      <div id="montra-kap">
        <!-- Rezulta teksta kopiareo -->
        <div id="Kopio">Result test, for copying area.</div>
        <!-- Listo de serciezltoj -->
        <div id="Ilobreto">control for result output.</div>
      </div>
      <div id="Listo">
        <!-- Presa listo -->
        <div
          v-if="rezulto"
          class="vico">
          <!-- Unue krado -->
          <div class="unue">
            <div class="kapz">
              <div class="kontoloj">🟢</div>
              <div class="majuskla">爱</div>
            </div>
            <div class="operacio">
              <span>检索到 123 个结果</span>
            </div>
          </div>
          <!-- listo krado -->
          <div
            v-for="iz in rezulto"
            class="krado">
            <ruby>{{String.fromCodePoint(parseInt(iz.item.U, 16))}}
              <rt>{{iz.item.P? iz.item.P[0]:null}}</rt>
            </ruby>
            <div class="parafrazo">
              <div
                v-if="iz.item.F"
                class="legi">{{iz.item.F}}</div>
              <div class="tablo">
                <p v-for="mz in iz.item.M1">{{mz}}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- DOME -->
        <!-- {{rezulto}} -->
        <!-- DOME -->

      </div>
    </div>
  </div>

  <!-- Klavarareo -->
  <div v-if="vid_klavaro" id="Klavar">This keyboard.</div>
  <!-- Agordo dialog fenestro -->
  <Dia :vid="vid_agordo">
    <div id="Ago-tablo">
      <div class="vico">
        <label for="sangi"><input type="checkbox" name="ATL" id="sangi"> 简繁切换</label>
        <label for="frazo"><input type="checkbox" name="ATL" id="frazo"> 词组/逐字</label>
        <label for="sangi"><input type="checkbox" name="ATL" id="sangi"> 简繁切换</label>
      </div>
      <!-- 字典：项目（MI or E or P） -->
    </div>
  </Dia>
</template>

<script setup>
import { onBeforeUpdate, onMounted, ref, watch } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import Fuse from 'fuse.js'
import Dia from '../kone/Dialog.vue'

let Opcioj_dz= ref('Tangut')
let vid_klavaro= ref(false)
let vid_agordo= ref(false)
let vid_hiz= ref(true)
function preciza(e){
  // 默认输出100精度，每点一次增加100。
  return '🟢'
}

/**
 * 字典数据处理。
 * 输出对应字典（数组）
 */
function Dzj(e){
  let dzn= 'Dz_' + e;
  let loka= localStorage.getItem(dzn)

  if(loka){
    return JSON.parse(loka)[e]
  }else{return [{err: false}]}
}

/**
 * 历史记录处理数据。
 */
function malplena(e){
  localStorage.removeItem('serci_hiz')
  vid_hiz.value= false
}
function loka_hiz(e){
  if(localStorage.getItem('serci_hiz')){
    return localStorage.getItem('serci_hiz').split(',')
  }else{
    return false
  }
}
function savi_hiz(e){
  const pre= loka_hiz()
  if(loka_hiz()){
    if(pre.indexOf(e)< 0){pre.unshift(e)}
    localStorage.setItem('serci_hiz', pre)
  }else{
    localStorage.setItem('serci_hiz', e)
    vid_hiz.value= true
  }
}


/**
 * Fuse 检索操作。
 */
function agdos({
  dz= 'tangut',
}={}){
}
const Fi= new Fuse(Dzj('tangut'), {
  keys: ['M1'],
  threshold: .1,
  distance: 600
})

const Rr= useRoute()
console.log(Rr.query.s)

/**
 * 检索操作。
 * 输出对象列表
 */
let Qz= ref(null)
let rezulto= ref(null)
function Trovi(e){
  const vl= e || false;

  // 比对如果是中文则转换成繁体。

  // 写入历史。
  if(vl){savi_hiz(vl)}
}

// 周期操作。
onMounted(()=>{
  /**
   * 字典数据写入本地存储。
   * 判断 localstorage 是否存在字典数据，并进行写入操作。
   */
  const DzUl= {
    "Dz_tangut": "./datumoj/DzTangut.json",
    "Dz_nvs": "./datumoj/DzNvs.json"
  }
  if(
    !localStorage.getItem("Dz_tangut") &
    !localStorage.getItem("Dz_nvs")){
    for(let iz in DzUl){
      fetch(DzUl[iz])
      .then(r=> r.json())
      .then(d=> localStorage.setItem(iz, JSON.stringify(d)))
    }
    localStorage.setItem("TMP", +new Date)
  }

  /**
   * Query 自动检索操作。
   */
  if(Rr.query.q){rezulto.value= Fi.search(Rr.query.q)}

  // localStorage.setItem('serci_hiz','草,桃花,不知道啦,wolf,国家')
})
onBeforeUpdate(()=>{})
// 路由守护监控。
onBeforeRouteUpdate(eq=>{
  if(eq.query.q){rezulto.value= Fi.search(eq.query.q)}
})
</script>

<style scoped lang='scss'>
#Serci{
  display: flex;
  #Eniru{
    flex: 0 1 380px;
    max-width: 30%;
    min-width: 380px;
  }
  #Montra{
    flex: 1 0 auto;
    padding: .6rem;
    width: calc(100% - 380px - 1.8rem);
  }
  @media (max-width: 800px){
    display: block;
    #Eniru{max-width: 98%!important;}
  }
}

#Eniga{
  background-color: var(--dark);
  margin: .6rem auto;
  padding: .3rem;
  border-radius: .3rem;
  #Formo{
    padding: .3rem 0;
    #formo-ipt{
      display: flex;
      align-items: center;
      input,
      button{
        appearance: none;
        border-style: none;
        outline: transparent;
        // background: transparent;
        font-size: 1rem;
        line-height: 1.2rem;
        padding: .3rem .6rem;
      }
      input{
        width: 100%;
        border-radius: .3rem 0 0 .3rem;
        &:hover{background-color: var(--gray-lg);}
      }
      button{
        border-radius: 0 .3rem .3rem 0;
        &:hover{background-color: var(--gray);}
        cursor: pointer;
      }
    }
    #formo-opc{
      display: flex;
      align-items: center;
      select{
        flex: 0 1 90px;
        // appearance: none;
        border-style: none;
        outline: transparent;
        background-color: var(--dark-lg);
        color: var(--gray);
        padding: .15rem .3rem;
        border-radius: .3rem;
      }
      #formo-agordo{
        flex: 1 0 calc(100% - 90px);
        text-align: right;
        #agordo-bl{
          display: inline-flex;
          background-color: var(--dark-lg);
          padding: 0 .3rem;
          border-radius: .3rem;
          & > div{
            flex: 1 0 auto;
            padding: .15rem .3rem;
            &:hover{background-color: var(--dark);}
          }
          cursor: pointer;
        }
      }
      color: var(--gray);
      margin-top: .3rem;
      opacity: .7;
    }
  }
  #Historio{
    margin-bottom: .3rem;
    #his-kap{
      display: flex;
      align-items: center;
      padding: .3rem 0;
      margin-bottom: .3rem;
      border-bottom: 1px dashed var(--dark-lg);
      a{
        flex: 1 0 auto;
        text-align: right;
        cursor: pointer;
      }
      h3{margin: 0;}
    }
  }
  color: var(--white);
}
// #Ilustri{}

// lqyout.
#montra-kap{
  position: sticky;
  top: 0;
  #Kopio{
    font-size: 1.2rem;
    line-height: 1.5rem;
    font-family: var(--lang-baza), 'Tangut_unicode_sev', 'Nvs_unicode_sev';
    height: 1.5rem * 3;
    max-height: 1.5rem * 3;
    overflow-y: auto;
    // display: none;
  }
  #Ilobreto{
    margin: .3rem auto;
    text-align: right;
  }
  background-color: var(--bg);
  box-shadow: 0 .3rem .9rem var(--block);
  z-index: var(--ll2);
}
// #Listo{}
// listo & block.
.vico{
  display: flex;
  flex-wrap: wrap;
  .unue{
    background-color: var(--dark);
    border-radius: .3rem;
    padding: .1rem .3rem;
    margin: .1rem;
    // display: inline-block!important;
    .kapz{
      display: flex;
      align-items: center;
      .kontoloj{
        flex: 0 1 auto;
        cursor: pointer;
      }
      .majuskla{
        flex: 1 0 auto;
        font-size: 1.8rem;
        line-height: 2.1rem;
        text-align: right;
        font-family: KaiTi, 'Tangut_unicode_sev', 'Nvs_unicode_sev';
      }
    }
    .operacio{opacity: .5;}
    color: var(--dark-ls);
  }
  .krado{
    background-color: var(--dark);
    border-radius: .3rem;
    padding: .1rem .3rem;
    margin: .1rem;
    ruby{
      font-size: 1.8rem;
      line-height: 2.1rem;
      font-family: Kaiti, 'Tangut_unicode_sev', 'Nvs_unicode_sev';
      rt{opacity: .5;}
    }
    .parafrazo{
      margin: 0 .3rem;
      opacity: .5;
      .legi{
        font-size: .7rem;
        line-height: .9rem;
        padding-bottom: .3rem;
        margin-bottom: .3rem;
        border-bottom: 1px dashed var(--gray);
      }
      .tablo{
        font-size: .7rem;
        line-height: .9rem;
        p{margin: 0;}
      }
      display: none;
    }
    color: var(--dark-ls);
    display: flex;
    cursor: default;
    &:hover{
      transform: scale(1.2);
      color: var(--white);
      border: 1px solid var(--dark-lg);
      box-shadow: 0 0 1rem var(--block);
      .parafrazo{display: block;}
      z-index: var(--ll2);
    }
  }
}

// label & tag.
// label,
.label{
  color: var(--gray);
  background-color: var(--dark-lg);
  white-space: nowrap;
  display: inline-block;
  margin: .1rem;
  padding: .3rem .6rem;
  border-radius: .3rem;
  line-height: .9rem;
  font-size: .7rem;
  &:hover{
    // background-color: var(--dark-ls);
    color: var(--dark);
  }
  transition: color 800ms;
  cursor: default;
}
</style>