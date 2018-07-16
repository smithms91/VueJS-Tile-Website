<template>
  <nav class="navbar">
    
  </nav>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    openNav() {
      let body = document.getElementById('app');
      body.style.transform = "translateX(50px)";
    }
  }
}
</script>

<style scoped>
  #header-container {
    display: flex;
    width: 100%;
    height: 11%;
    align-items: center;
    justify-content: space-between;
    background-color: red;
    padding: 50px;
    position: absolute;
  }

  .logo {
    float: left;
  }

  .logo h1 {
    font-size: 3em;
  }

  .logo p {
    font-size: 2em;
    letter-spacing: 6px;
  }

  .sandwich-container {
    float: right;
  }

  .line {
    width: 50px;
    height: 5px;
    background: #000;
    margin-top: 12px;
  }


  /* Tablet */
  @media only screen and (min-width: 600px) {
    
  }


  /* Desktop */
  @media only screen and (min-width: 1000px) {
    .sandwich-container {
      display: none;
    }
  }
</style>

