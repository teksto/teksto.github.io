<template>
<div
  v-if="vid" class="dialog">
  <a class="close"></a>
  <div class="dia-ujo">
    <div class="dia-ti">{{ti}}</div>
    <div class="dia-kor">
      【<slot></slot>】 {{viz}}
    </div>
    <div class="dia-pie">
      <button @click="vid=!vid">Kasi</button>
      <button @click="tasko()">Bone</button>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  vid: {
    type: Boolean,
    default: false
  },
  ti: {
    type: String,
    default: 'Dialog'
  },
  close: {
    type: Boolean,
    default: false
  },
  exe: Function,
  debug: String
})

const vizd= ref(false)

function tasko(e){vizd.value= false}
</script>

<style scoped lang='scss'>
.dialog{
  &,
  .close{
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0,0,0,.9);

  .dia-ujo{
    z-index: var(--ll1);
    box-shadow: 0 0 2.1rem var(--dark-lw);
    background-color: var(--white);
    color: var(--dark);
    padding: .6rem;
    border-radius: .3rem;
    .dia-ti{
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.5rem;
      padding-bottom: .3rem;
      border-bottom: 1px dashed var(--dark-ls);
    }
    .dia-kor{
      margin: .3rem auto;
    }
    .dia-pie{
      border-top: 1px dashed var(--dark-ls);
      padding-top: .3rem;
      text-align: center;
      button{
        appearance: none;
        border-style: none;
        background: transparent;
        background-color: var(--dark-ls);
        color: var(--white);
        padding: .6rem .9rem;
        &:hover{
          cursor: pointer;
          background-color: var(--dark-lg);
        }
        &:last-child{border-radius: 0 .3rem .3rem 0;}
        &:first-child{border-radius: .3rem 0 0 .3rem;}
      }
    }
    min-width: 360px;
    max-width: 80%;
  }
}
</style>