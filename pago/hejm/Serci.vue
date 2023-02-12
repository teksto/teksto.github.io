<template>
  <h1 id='Serci'>SERCI {{ $route.params.q }}</h1>
</template>

<script setup>
import { ref } from 'vue'

import Fuse from 'fuse.js'
let Dz= ref()
const ulTangut= "DzTangut.json"

fetch("db/"+ulTangut).then(
  e=> e.json().then(
    d=> Dz.value= d.tangut
    )
  )

// 转化 Unicode 编码为字符。
function hex2str(e){
  return String.fromCodePoint(parseInt(e, 16))
}

// 执行检索。
let serval= ref(null)
function Serci(e){
  console.log(8911, serval.value)
}

// 分词操作。
function Participo(s){}

// 分词库测试。

// Fuse.js setting.
const atributo= {
  keys: ["M1"],
  threshold: .1,
  distance: 600
}
// const F= new Fuse(Dz, atributo)
// trvni= F.search(serci.value)
</script>

<style scoped lang='scss'></style>