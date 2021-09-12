<template>
  <div id='Pri' v-html="md"></div>
</template>

<script setup>
import { ref } from 'vue'
import marked from 'marked'

const fl= '/note/pri.md';

let md= ref(null)

fetch(fl)
  .then(r=> r.text())
  .then(d=> md.value= marked(d))

// function xhr(uz, mh='GET'){
//   let rz= 'null';
//   const xh= new XMLHttpRequest()
//   xh.open(mh, uz);
//   xh.onreadystatechange= function(){
//     if(xh.readyState === 4 && xh.status === 200){
//       // console.log(xh.responseText)
//       rz= xh.responseText
//     }
//   }
//   xh.send()

//   return rz
// }
</script>

<style scoped lang='scss'>
#Pri{
  margin: 9rem auto;
  max-width: 800px;
}
</style>