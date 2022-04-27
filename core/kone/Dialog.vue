<template>
  <div class='Dia'>
    <a class="proksime"></a>
    <div class="dia-ujo">
      <div class="dia-kap">
        span
      </div>
      <div class="dia-kor">
        Body: ⇩
        <slot></slot>
        ↑ Slot
      </div>
      <div class="dia-pie">
        <button>Done</button>
        <button>Ok</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped lang='scss'>
.Dia{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  .proksime{
    z-index: var(--ll1);
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }
  .dia-ujo{
    background-color: var(--white);
    color: var(--dark);
    z-index: var(--ll1 + 10);
    max-width: 80%;
    min-width: 380px;
    width: auto;
    margin: auto;
    padding: .6rem .2rem;
    .dia-kap{
      font-size: 1rem;
      line-height: 1.2rem;
      font-weight: 500;
    }
    .dia-kor{}
    .dia-pie{}
  }
}
</style>