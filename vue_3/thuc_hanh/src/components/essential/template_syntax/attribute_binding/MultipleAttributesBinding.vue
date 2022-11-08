<template>
  <div>
    <div v-bind="objectOfAttrs">AHIHIHI</div>
    <button @click="changeId">CHANGE ID</button>
  </div>
</template>

<script setup>
import {reactive} from "vue";

  const objectOfAttrs = reactive({
    id: 1,
    class: 'my-class'
  })
  const changeId = function (){
    objectOfAttrs.id++
  }
</script>

<style scoped>
.my-class {
  background-color: aqua;
}
</style>