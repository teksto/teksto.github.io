<template>
  <div id='Kopirajto'>
    <svg ref="barcodez"
      jsbarcode-format="code128"
      jsbarcode-value="1199292"
      jsbarcode-textmargin="0"
      jsbarcode-displayvalue="false"
      jsbarcode-background="transparent"
      jsbarcode-height="50"
      jsbarcode-linecolor="#CFE9DE"></svg>
    <p>灌園鬻蔬，宜然自得。<RouterLink to="/">🥬</RouterLink> <a href="/doc/CCA.md">CCA-a(71,906,991)</a></p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import JsBarcode from 'jsbarcode'

const barcodez= ref(null)
onMounted(()=>{
  JsBarcode(barcodez.value).init()
})
</script>

<style scoped lang='scss'>
#Kopirajto{
  text-align: center;
  color: var(--main-sk2);
  margin: 3rem auto 1.8rem;
  a{
    color: var(--main-sk2);
    &:hover{
      color: var(--main);
    }
  }
  p{
    margin: 0 auto 1.5rem;
  }
}
</style>