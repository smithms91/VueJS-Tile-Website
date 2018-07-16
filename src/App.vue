<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
import Header from './Header'

export default {
  data() {
    return {
    }
  },
  components: {
    appHeader: Header
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}
</style>
