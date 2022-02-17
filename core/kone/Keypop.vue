<template>
  <div class='KeyPopover' :lang="lingvo">
    <span :class="brilo&&'kp-brilo'">{{tt}}</span>
    <div class="kp-vido">
      <div class="kp-najlo" @click="klaku(tt)">📌</div>
      <div class="kp-ujo">
        <div class="kp-gk" @click="$emit('elz', tt)">{{tt}}</div>
        <div class="kp-enh">
          <slot></slot>
        </div>
      </div>
      <div class="kp-dorna"></div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue'
// defineProps(['tt','lingvo'])
const jug= defineProps({
  tt: String,
  lingvo: String
})

// 亮度调整。
let brilo= ref(false)

// 向 Hejm 传递值。
let iruVl= inject('iruKp')
function klaku(e){
  // 传值操作。
  iruVl(e)
  // 加亮操作。
  brilo.value= true
}

// 反传字符信息（to hejm）。
defineEmits(['elz'])
</script>

<style scoped lang='scss'>
.KeyPopover{
  position: relative;
  display: inline-block;

  span{
    color: var(--dark-ls);
    font-size: 1.5rem;
    line-height: 1.8rem;
  }
  .kp-brilo{
    color: var(--cl)!important;
  }

  .kp-vido{
    top: 0;
    left: 50%;
    z-index: 800;
    position: absolute;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;

    transition: transform 500ms, opacity 300ms;
    
    .kp-najlo{
      top: -1rem;
      right: -1rem;
      position: absolute;
      opacity: .7;
      font-size: 1.2rem;
      line-height: 1.2rem;
      padding: .3rem .1rem;
      &:hover{
        opacity: 1;
        border-radius: 1rem;
        background-color: rgba(255,255,255,.3);
        cursor: pointer;
      }
      transition: opacity 800ms;
    }
  }

  *:focus + .kp-vido,
  &:hover .kp-vido{
    transform: translate(-50%, -105%) scale(1);
    display: block;
    opacity: 1;
  }

  cursor: default;
  
  .kp-ujo{
    box-shadow: 0 .3rem .6rem var(--dark-lg);
    background-color: var(--dark);
    border: 1px solid var(--dark-lg);
    border-radius: .3rem;
    padding: .3rem;
    .kp-gk{
      font-size: 3rem;
      line-height: 3.3rem;
      border-bottom: 1px dashed var(--dark-lg);
      text-align: center;
    }
    .kp-enh{
      color: var(--dark-lw);
      font-size: .9rem;
      line-height: 1.2rem;
      padding: .3rem;
      max-width: 180px;
      white-space: nowrap;
      // letter-spacing: normal;
      overflow: hidden;
      text-overflow: ellipsis;

      :deep(ul){
        margin: 0;
        padding: 0;
        list-style: none;
        li{
          max-width: 180px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }

  .kp-dorna{
    width: 0;
    height: 0;
    margin: auto;
    margin-top: -2px;
    border-top: .3rem solid var(--dark);
    border-left: .6rem solid transparent;
    border-right: .6rem solid transparent;
  }
}
</style>