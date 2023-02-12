<template>
  <Mu />

  <div id="Gazeoj">
    <div>
      <div class="grandaj">
        <div class="G" lang="tgs">{{ String.fromCodePoint(parseInt(skribo['U'], 16)) }}</div>
        <div class="teksto">
          <p>{{ skribo['F'] }}</p>
          <p>
            <span>釋義：</span>
            <span v-for="iz in skribo['M1']">{{ jugVortoj(iz) }}</span>
          </p>
        </div>
      </div>

      <div id="Sangu">
        <button @click="kole.pop()" id="antaua"></button>
        <button @click="Hazar" id="monkey">🎲</button>
        <button @click="Dividi" id="satas">💖</button>
      </div>

      <div id="Dividi" lang="tgs">
        <span v-for="iz in kole">{{ iz }}</span>
      </div>
    </div>
  </div>

  <Kopira class="tp-kopira"/>
</template>

<script setup>
import { onBeforeMount, onMounted, createApp, ref } from 'vue'
import { TGD as Dz } from '../mater/dict/DzTangut.json'
import { NVD as Dn } from '../mater/dict/DzNvs.json'

import Kopira from './ero/Kopirajto.vue'
import Mu from './ero/Menuo.vue'

// 提供随机数（主要为字典切换使用）。
function hazarda(max=6143, min=0, op){
  const R= Math.random()
  return Math.floor(R * (max - min + 1)) + min
}

// 临时显示
let hz= hazarda(6077)
let skribo= ref(Dz[hz])
// 名词处理函数。
function jugVortoj(t){
  let vortoj= {
    n: '名詞',
    v: '動詞',
    l: '漢語借詞',
    t: '譯音',
    a: '形容詞',
    d: '副詞',
    m: '數詞',
    q: '量詞',
    e: '助詞',
    p: '代詞',
    r: '介詞',
    c: '連詞',
    s: '嘆詞'
  }
  return t.replace(/[nvltadmqeprcs]/g, e=> vortoj[e])
}
// 随机切换新字。
function Hazar(e){
  let hz= hazarda()
  skribo.value= Dz[hz]
}
// 收藏、分享。
let kole= ref([])
function Dividi(){
  const tkt= String.fromCodePoint(parseInt(skribo.value['U'],16))
  if(!kole.value.includes(tkt)){
    kole.value.push(tkt)
  }
}


// onMounted(()=>{})
</script>

<style scoped lang='scss'>
#Gazeoj{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.grandaj{
  position: relative;
  margin: auto;
  width: 66vh;

  cursor: default;
}
.G{
  font-size: 60vh;
  line-height: 60vh;
  @media screen and (max-width: 801px) {
    font-size: 90vw;
    line-height: 90vw;
  }
  opacity: .8;
  &:hover{
    // z-index: 1;
    // position: relative;
    opacity: 1;
  }
  transition: opacity 2000ms;
}
.teksto{
  writing-mode: tb-rl;
  background-color: var(--main-sk3);
  padding: .6rem;
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-family: KaiTi;
  color: var(--link-sup);
  p{
    margin: 0;
    // span{}
    // &:first-child{font-weight: bold;}
    &:last-child{
      margin-right: .3rem;
      opacity: .5;
    }
  }
  border: .2rem solid var(--main-sk2);
  max-height: 100%;

  opacity: .8;

  position: absolute;
  bottom: 0;
  left: 0;

  &:hover{
    box-shadow: .6rem .6rem .9rem var(--dark);
    opacity: 1;
  }
  transition: all 800ms;
}

#Sangu{
  button{
    appearance: none;
    border-style: none;
    background: transparent;
    font-size: 1.8rem;
    line-height: 1.8rem;
    margin: .3rem .6rem;
    cursor: pointer;
  }
  text-align: center;
  margin: 1rem auto;
}

#Dividi{
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: var(--gray-agg);
  max-height: 1.8rem;
  white-space: nowrap;
  max-width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar{display: none;}
}

.tp-kopira{
  position: fixed;
  bottom: 0;
  width: 100%;
}

#antaua{
  &::before{
    content: '🔨';
  }
  &:hover::before{content: '🪓';}
}
/* button hover animation */
#monkey:hover{
  animation-name: tada;
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
}
#satas:hover{
  animation-name: zoom;
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
}
/* zoom out animation */
@keyframes zoom{
  0%{opacity: 1;}
  50%{
    opacity: .1;
    transform: scale3d(.3,.3,.3);
  }
  100%{opacity: 1;}
}
@keyframes tada{
  0%{transform: scale3d(1,1,1);}
  20%{transform: scale3d(.9.9.9) rotate3d(0,0,1,-3deg);}
  30%,50%,70%,90%{transform: scale3d(1.2,1.2,1.2) rotate3d(0,0,1,3deg);}
  40%,60%,80%{transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg);}
  100%{transform: scale3d(1,1,1);}
}
@keyframes wobble{
  0%,100%{transform: none;}
  15%{transform: translate3d(-25%,0,0) rotate3d(0,0,1,-5deg);}
  30%{transform: translate3d(20%,0,0) rotate3d(0,0,1,3deg);}
  45%{transform: translate3d(-15%,0,0) rotate3d(0,0,1,-3deg);}
  60%{transform: translate3d(10%,0,0) rotate3d(0,0,1,2deg);}
  75%{transform: translate3d(-5%,0,0) rotate3d(0,0,1,-1deg);}
}

</style>