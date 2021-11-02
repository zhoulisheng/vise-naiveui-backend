<script setup>
import DMaster from './layout/DMaster.vue'
import { NLoadingBarProvider, NMessageProvider } from 'naive-ui'
</script>

<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <d-master></d-master>
    </n-message-provider>
  </n-loading-bar-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
