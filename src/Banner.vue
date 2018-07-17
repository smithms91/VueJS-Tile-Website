<template>
  <div id="banner">
      <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  #banner {
    position: relative;
  }

  #banner .logo {
    height: 200px;
    width: 100%;
    overflow: hidden;
  }

  #banner h1 {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    font-size: 2em;
    font-weight: bolder;
    font-family: "Roboto", sans-serif;
    line-height: 50px;
    letter-spacing: 2px;
    text-shadow: 1px 1px 5px black;
    text-align: center;
    color: #fff;
  }
</style>


