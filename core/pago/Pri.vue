<template>
  <div id='Pri' v-html="markd"></div>
</template>

<script setup>
import { ref } from 'vue'
import marked from 'marked'

let markd= null

// 用于说明的固定markdown文件。
// const defFl= '/note/pri.md'
const defFl= '/README.md'
// 其它文档的存放目录。
const defKata= '/note'

// 读取目录（待实现）

// 读取默认文档。
fetch(fl)
  .then(rz=> rz.text())
  .then(dz=> marked+= marked(dz))

// 备用的 XHR 方式。
// function xhr(uz, mh='GET'){}

</script>

<style scoped lang='scss'></style>