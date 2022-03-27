<template>
  <div id='Serci'></div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const Rr= useRoute();
// 获取参数。
let q= Rr.query.q;
let lang= Rr.query.lang || 'tg';

// Fuse.js
import Fuse from 'fuse.js'
const F= new Fuse()


</script>

<style scoped lang='scss'></style>