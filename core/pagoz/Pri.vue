<template>

  <!-- Navigado. -->
  <div id="Pri-nav">
    <span>🧭</span>
    <a @click="malfer('pri')">关于</a>
    <a @click="malfer('elsuti')">资源</a>
    <a @click="malfer('alia')">其它</a>
  </div>

  <!-- Artikolo. -->
  <div id="Pri-arti" v-html="enh"></div>

</template>

<script setup>
import { ref, watch } from 'vue'
import { marked } from 'marked'

// 文章内容。
let enh= ref(null);

// 默认文件地址。
let fl= ref('doc/pri.md');

function malfer(e){
  fl.value= 'doc/' + e +'.md';
}

fetch(fl.value)
  .then(rz=> rz.text())
  .then(dr=> enh.value= marked(dr));

// onMounted(()=>{})
watch(fl, nz=> fetch(nz).then(rz=> rz.text()).then(dr=> enh.value= marked(dr)))

</script>

<style scoped lang='scss'>
#Pri-nav{
  margin: 12% 15% 0;
  cursor: pointer;
  a{
    padding: .3rem;
  }
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.8rem;
}
#Pri-arti{
  margin: 1.2rem 15%;
}
</style>