<template>

  <!-- Navigado. -->
  <div id="Pri-nav">
    <span>🧭 </span>
    <RouterLink to="/pri">Pri</RouterLink>
    <RouterLink to="/pri/mater">Mater</RouterLink>
    <RouterLink to="/pri/alia">Alia</RouterLink>
  </div>

  <!-- Artikolo. -->
  <div id="Pri-arti" v-html="enh"></div>

</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { marked } from 'marked'
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
const Rr= useRoute()

// 文章内容。
let enh= ref(null)

onMounted(()=> {
  let fl= Rr.params.pg? '../doc/'+ Rr.params.pg +'.md': './doc/pri.md';

  fetch(fl)
    .then(r=> r.text())
    .then(d=> enh.value= marked(d))
})

// 获取本地文件。
onBeforeRouteUpdate(e=> {
  let uz= e.params.pg || 'pri'
  genMark('../doc/'+ uz +'.md')
})

function genMark(ul){
  fetch(ul)
    .then(r=> r.text())
    .then(d=> enh.value= marked(d))
}
</script>

<style scoped lang='scss'>
#Pri-nav{
  margin: .3rem 15%;
  cursor: pointer;
  a{
    padding: .3rem;
  }
}
#Pri-arti{
  margin: .3rem 15%;
}
@media (max-width: 800px) {
  #Pri-nav,
  #Pri-arti{
    margin: .3rem auto;
  }
}
</style>