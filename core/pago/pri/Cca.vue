<template>
  <div id='CCA'>
    <h1>CCA-interkonsento</h1>

    <ul>
      <li>996: Kode-protektita uzo.</li>
      <li>998: Disvastiga (konservativa) protekto de tekstaj verkoj.</li>
      <li>69: Deklaro pri persona laboro.</li>
    </ul>

    <ul>
      <li>13: Publika areo.</li>
    </ul>
  </div>

  <div id="Color" style="border: 1px solid var(--boder); border-radius: .3rem; padding: .6rem; margin-right: .6rem;">
    <div class="row kvin">
      <div style="background: var(--gray); color: var(--white);">gray</div>
      <div style="background: var(--gray-lg); color: var(--white);">lg</div>
      <div style="background: var(--gray-lw); color: var(--white);">lw</div>
      <div style="background: var(--gray-ls); color: var(--white);">ls</div>
    </div>
    <div class="row kvin">
      <div style="background: var(--dark); color: var(--white);">dark</div>
      <div style="background: var(--dark-lg); color: var(--white);">lg</div>
      <div style="background: var(--dark-lw); color: var(--white);">lw</div>
      <div style="background: var(--dark-ls); color: var(--white);">ls</div>
    </div>
    <div class="row">
      <div style="background: var(--red); color: var(--white);">red</div>
      <div style="background: var(--red-lg); color: var(--white);">red-lg</div>
      <div style="background: var(--orange); color: var(--white);">orange</div>
      <div style="background: var(--orange-lg); color: var(--white);">orange-lg</div>
      <div style="background: var(--yellow); color: var(--white);">yellow</div>
      <div style="background: var(--yellow-lg); color: var(--white);">yellow-lg</div>
      <div style="background: var(--green); color: var(--white);">green</div>
      <div style="background: var(--green-lg); color: var(--white);">green-lg</div>
      <div style="background: var(--cyan); color: var(--white);">cyan</div>
      <div style="background: var(--cyan-lg); color: var(--white);">cayn-lg</div>
      <div style="background: var(--blue); color: var(--white);">blue</div>
      <div style="background: var(--blue-lg); color: var(--white);">blue lg</div>
      <div style="background: var(--purple); color: var(--white);">purple</div>
      <div style="background: var(--purple-lg); color: var(--white);">purple lg</div>
      <div style="background: var(--pink); color: var(--white);">pink</div>
      <div style="background: var(--pink-lg); color: var(--white);">pink lg</div>
      <div style="background: var(--magenta); color: var(--white);">magenta</div>
      <div style="background: var(--magenta-lg); color: var(--white);">magenta lg</div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped lang='scss'>
#CCA{
  max-width: 800px;
  margin: 9rem auto;
}

#Color{
  .row{
    display: grid;
    grid-template-columns: repeat(8,1fr);
    & > div{
      font-size: 1.2rem;
      line-height: 1.5rem;
      padding: .6rem .6rem;
    }
  }
  .kvin{
    grid-template-columns: repeat(4, 1fr)!important;
  }
}
</style>