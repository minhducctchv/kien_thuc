<template>
  <div>
    <div v-html="rawHtml.content"/>
    <button @click="changeHtml">CHANGE</button>
  </div>
</template>

<script setup>
import {reactive} from "vue";

const rawHtml = reactive(
    {content: '<span style="color: blue">Màu xanh</span><br /><span style="color: pink">Màu Hồng</span>'}
)
let i = true
const changeHtml = () => {
  if (i) {
    rawHtml.content = '<h1 style="color: brown">Màu Nâu</h1>'
  } else {
    rawHtml.content = '<span style="color: blue">Màu xanh</span><br /><span style="color: pink">Màu Hồng</span>'
  }
  i = !i
}
</script>

<style scoped>
</style>