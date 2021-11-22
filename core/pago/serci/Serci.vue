<template>
  <div id="Serci">
    <!-- 输入区 -->
    <div id="serciEniru">
      <div id="serciKap">

        <div id="Opcioj">
          <input v-model="vR" value="1" type="radio" name="Traduko" id="CJ" hidden>
          <input v-model="vR" value="2" type="radio" name="Traduko" id="TG" hidden>
          <input v-model="vR" value="3" type="radio" name="Traduko" id="NS" hidden>
          <label for="CJ">检索</label>
          <label for="TG">西夏</label>
          <label for="NS">女书</label>
        </div>
        <div id="Eniruz">
          <input type="search" id="serciValue" placeholder="输入单字或词组、短句。"
            @keyup.enter="serci"
            v-model.trim="vL"
            onkeyup="value=value.replace(/[ -~]/g,'')"
            onkeydown="if(event.keyCode==13)event.keyCode=9">
          <button @click="serci">检索</button>
        </div>
        <!-- 帮助信息 -->
        <div id="serciHelpo">
          <a>检索指南</a>
          <a>首部件式</a>
          <a>女书</a>
          <a>五笔（稿）</a>
        </div>
        <!-- 模拟键盘 -->
        <KB vid=false />
        {{$route.params.q}}
      </div>
    </div>

    <!-- 输出区 -->
    <div id="serciEligo">
      <!-- 选取区 -->
      <div id="serciElektita">
        <button @click="malplena">选取内容</button>
      </div>
      <!-- 候选区 -->
      <div id="serciKandidato">
        
        <!-- {{typeof serci()}} -->
        <div class="serciList" v-for="iz in indekso">
          <div class="uz">
            <div class="uz-big">{{iz}}</div>
            <div class="uz-ele">
              <div class="uz-ele-bl">选项</div>
            </div>
            <div class="uz-ant">{{iz}}</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import KB from '../../kone/Klavaro.vue'
import { useRoute } from 'vue-router'
const uzr= useRoute();
const ulv= uzr.params.q;

// 默认值。
let vR= 1;
let vL= ulv? ref(ulv):ref(null);
let verr= ref(false);

// 列表。
let indekso= vL.value

function serci(){
  if(vL.value){
    document.querySelector("#serciEniru").style.height= '180px';
  }else{
    verr.value= true;
  }

  // 仅导出汉字。
  let rz= vL.value.replace(/[^\u4E00-\u9FA5]/g, '');
  // vL.value= rz
  console.log(vL.value)

  return rz.slice(',')

}
function malplena(){
  document.querySelector("#serciEniru").style.height= '100vh'
  vL.value= null
}

// 输出。
function eksteren(){

}


onMounted(()=>{
  if(ulv){
    document.querySelector("#serciEniru").style.height= '180px';
    console.log(vL.value.replace(/[^\u4E00-\u9FA5]/g, ''))
  }
})

// 控制明暗主题。
// Fuse。
import Fuse from 'fuse.js'

// document.documentElement.style.setProperty('--bg', 'var(--day-bg)')
// document.documentElement.style.setProperty('--cl', 'var(--day-cl)')
</script>

<style scoped lang='scss'>
$bsize: 100vh;
// #Serci{}

// Konekti.
#Opcioj{
  line-height: 1.5rem;
  label{
    padding: .3rem .6rem;
    background-color: rgba(255,255,255,.3);
    &:hover{color: var(--button);}
    &:last-child{border-radius: 0 .5rem .5rem 0;}
    &[for="CJ"],&:first-child{border-radius: .5rem 0 0 .5rem;}
    transition: color 1s;
  }
  #CJ:checked ~ label[for="CJ"],
  #TG:checked ~ label[for="TG"],
  #NS:checked ~ label[for="NS"]{
    background-color: var(--button-hover)!important;
    color: var(--button)!important;
    font-weight: bold;
  }
}

// Arango.
#serciEniru{
  height: 100vh;
  min-height: 180px;
  background-image: url('res/site/bgwh.jpg');
  background-attachment: fixed;
  background-position: bottom;
  background-repeat: no-repeat;
  // background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  #serciKap{
    // #Opcioj{}
    #Eniruz{
      input,
      button{
        appearance: none;
        border-style: none;
        outline: transparent;
        vertical-align: middle;
        display: inline-block;
        font-size: 1.2rem;
        line-height: 1.5rem;
        padding: .6rem .9rem;
        margin: 0;
      }
      input{
        border-radius: .3rem 0 0 .3rem;
        min-width: 35vw;
        &[type="search"]::-webkit-search-cancel-button{
          cursor: pointer;
        }
        &[class~="el"]{background-color: rgba(0,0,0,.3);}
      }
      button{
        border-radius: 0 .3rem .3rem 0;
        border: 1px solid var(--minor-sup);
        letter-spacing: .3rem;
        padding-left: 1.2rem;
        font-weight: 600;
      }
      margin: .3rem auto;
      @media screen and (max-width: 800px){
        input{
          min-width: 60vw;
          width: 60vw;
        }
      }
    }
  }
  transition: height 3s;
  #serciHelpo{
    margin-bottom: .3rem;
  }
}

#serciEligo{
  width: auto;
  margin: 1.2rem auto;
  // #serciElektita{}
  // #serciKandidato{}

  // @media screen and (max-width: 1024px){
  //   width: 100%;
  //   margin: 1.2rem .3rem;
  // }
}

// Listo de rezultoj.
.uz{
  width: 100%;
  display: inline-flex;
  padding: .1rem 0;
  .uz-big,
  .uz-ant{
    flex: 1 0 3rem;
    font-size: 1.8rem;
    line-height: 2.1rem;
    text-align: center;
    padding: .6rem 0;
  }
  .uz-ele{
    flex: 1 0 calc(100% - 6rem);
    .uz-ele-bl{}
  }
  // .uz-ant{}

  &:hover{
    background-color: var(--gray-ls);
  }
  border-bottom: 1px solid #000;
}

</style>