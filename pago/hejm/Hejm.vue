<template>
  <Mu />

  <div id="Gazeoj">
    <div>
      <div class="grandaj">
        <div class="G" lang="tgs">{{ String.fromCodePoint(parseInt(liter['U'], 16)) }}</div>
        <div class="teksto">
          <p>{{ liter['F'] }}</p>
          <p>
            <span>釋義：</span>
            <span v-for="iz in liter['M1']">{{ parolparto(iz) }}</span>
          </p>
        </div>
      </div>

      <div id="Sangu">
        <button @click="Nova" id="monkey">🎲</button>
        <button @click="Forvisi" id="satas">💔</button>
      </div>

      <div id="Dividi" lang="tgs">
        <span v-for="iz in kole" @click="liter= iz">{{ String.fromCodePoint(parseInt(iz['U'], 16)) }}</span>
      </div>
    </div>
  </div>

  <Kopira style="z-index: -1" class="tp-kopira"/>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { hazarda, parolparto } from '../Privataj'
import { TGD as Dz } from '../mater/dict/DzTangut.json'
import { NVD as Dn } from '../mater/dict/DzNvs.json'

import Kopira from './ero/Kopirajto.vue'
import Mu from './ero/Menuo.vue'

// 当前大字内容。
// let liter= ref(Nova())
let liter= ref(Dz[hazarda(6077)])
// 当日显示过的字符集。
let kole= ref(new Array)

// 随机变化并存入值。
function Nova(e){
  let novaLiter= Dz[hazarda(6077)]
  liter.value= novaLiter
  kole.value.push(novaLiter)
}

// 删除最后一位。
function Forvisi(){
  let grandeco= kole.value.length
  if(grandeco > 1){
    kole.value.pop()
  }
}

// 写入 localStorage 保存。
function Spari(){}

// 切换显示。
function Dividi(e){
  liter.value= e
}

onMounted(()=>{
  kole.value.push(liter.value)
})
// onUnmounted(()=>{})
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
  width: 50vh;
  cursor: default;
  text-align: center;
}
.G{
  font-size: 50vh;
  line-height: 50vh;
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
  max-width: 90vw;
  width: 90vw;
  overflow-x: auto;
  &::-webkit-scrollbar{display: none;}
  cursor: pointer;
}

.tp-kopira{
  position: fixed;
  bottom: 0;
  width: 100%;
}

#monkey{
  animation-duration: 1s;
  animation-fill-mode: both;
  &:hover{
    animation-iteration-count: infinite;
    animation-duration: 2s;
    backface-visibility: visible;
    animation-name: flip;
  }
}
#satas:hover{
  animation-name: tada;
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
  30%,50%,70%,90%{transform: scale3d(1.5,1.5,1.5) rotate3d(0,0,1,3deg);}
  40%,60%,80%{transform: scale3d(1.2,1.2,1.2) rotate3d(0,0,1,-3deg);}
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
@keyframes flip{
  0%{transform: perspective(400px) rotate3d(0,1,0,-360deg); animation-timing-function: ease-out;}
  40%{transform: perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-190deg); animation-timing-function: ease-out;}
  50%{transform: perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-170deg); animation-timing-function: ease-in;}
  80%{transform: perspective(400px) scale3d(.95,.95,.95); animation-timing-function: ease-in;}
  100%{transform: perspective(400px); animation-timing-function: ease-in;}
}

</style>