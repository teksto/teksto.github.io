<template>
  <a class="ombro" @click="ombro=false"></a>
  <div class='Dia'>
    <div class="dia-ujo">
      <div class="dia-kap">Header</div>
      <div class="dia-kor">body</div>
      <div class="dia-pie">
        <button @click="$emit('pk', false)">close</button>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 遮蔽控制。
const ombro= ref(true);

defineEmits(['pk'])
</script>

<style scoped lang='scss'>
.Dia,
.ombro{
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-color: rgba(0,0,0,.7);
  z-index: 900;
  min-height: 100vh;
}
.Dia{
  z-index: 910!important;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  .dia-ujo{
    padding: .6rem .3rem;
    min-width: 300px;
    min-height: 180px;
    border-radius: .2rem;
    background-color: var(--gray);
    box-shadow: 0 0 3rem var(--dark-lg)
  }
  color: var(--dark);
  font-size: .9rem;
  line-height: 1.2rem;
}
</style>