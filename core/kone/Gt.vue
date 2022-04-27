<template>
  <span>{{tiparo}}</span>
</template>

<script setup>
import { ref } from 'vue'
let tiparo= String.fromCodePoint(parseInt(pp.uid, 16))
const pp= defineProps({
  uid: String,
})
</script>