<template>
  <div id="footer-content">
    <div class="top-grey"></div>
    <div class="footer-info">
      <p class="back-to-top" @click="backToTop()">Back To Top</p>
      <div class="address">
        <p>Delacy's Design, 1000 Address Here</p>
        <p>Tampa, FL, 95423</p>
        <p>586-235-5234</p>
      </div>
      <p class="copyright">Copyright &copy; 2023 Delacy's Design</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
}
</script>

<style scoped>

  body {
    transition: all 1s;
  }

  #footer-content {
    margin-top: 40px;
    text-align: center;
    background-color: #252525;
    color: white;
  }

  .top-grey {
    background-color: #606060;
    height: 40px;
  }

  .footer-info {
    padding: 20px;
  }

  .back-to-top {
    margin-bottom: 20px;
    font-family: "Roboto", sans-serif;
    font-size: 1.1em;
  }

  .address {
    font-family: "Roboto Condensed", sans-serif;
  }

  .address p {
    margin-bottom: 3px;
  }

  .copyright {
    margin-top: 30px;
    font-family: "Alegreya", sans-serif;
    font-size: 1.3em;
    color: #606060;
  }
</style>


