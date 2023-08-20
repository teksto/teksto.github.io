<template>
  <div class="Mu">
    <div id="Mu-serci" class="Mz">
      <!-- <input type="text" class="ng"> -->
      <button @click="serVidu" class="ng">查</button>
    </div>

    <div class="Mz">
      <RouterLink class="ng" active-class="ne" to="/">主頁</RouterLink>
    </div>

    <div class="Mz">
      <RouterLink v-for="iz in muNow" :to="iz.vojo" class="ng" active-class="ne">{{ iz.ti }}</RouterLink>
    </div>
  </div>

  <dialog id="serDialog" ref="serDialog">
    <h1>Dialog:Serci</h1>
    <button @click="serDialog.close()">close</button>
  </dialog>
</template>

<script setup>
import { ref } from 'vue'

const muNow= [
  {ti: "西夏字", vojo: "/tg"},
  {ti: "女書", vojo: "/nv"}
]

const muPrincipo= [
  {ti: "主頁", vojo: "/"},
  {ti: "西夏字", vojo: "/tg"},
  {ti: "女書", vojo: "/nv"},
  {ti: "减字", vojo: "/jzp"},
  {ti: "女真文", vojo: "/jc"},
]
const muIntroduci= [
  {ti: "關於", vojo: "/pri"},
  {ti: "檢索", vojo: "/scer"},
  {ti: "其它", vojo: "/aliaj"},
]

const serDialog= ref(null)
function serVidu(){
  serDialog.value.showModal()
  serDialog.value.show()
}
</script>

<style scoped lang='scss'>
.Mu{
  position: fixed;
  right: 0;
  top: 0;
  display: inline-flex;
  margin: .3rem;
  z-index: 1;
  #Mu-serci{
    input,
    button{
      padding: .3rem;
    }
  }
  .Mz{
    padding: .3rem;
    margin: .1rem;
    background-color: var(--main-sk3);
    border-radius: .3rem;
    .ng{
      appearance: none;
      outline: transparent;
      background: transparent;
      border-style: none;
      background-color: var(--main-sk2);
      color: var(--white);
      border-radius: .2rem;
      padding: .3rem .6rem;
      margin: auto .1rem;
      font-size: .9rem;
      line-height: 1.2rem;
      display: inline-block;
      &:hover{
        background-color: var(--main-sk1);
        color: var(--white);
      }
      &:active{
        background-color: var(--main-sup);
      }
    }
    .ne{
      font-weight: bold;
      background-color: var(--main-sk1);
    }
    transition: all 800ms;
  }
}
</style>