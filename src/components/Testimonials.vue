<template>
  <div id="app">
    <app-header></app-header>
    <h1>Recent Testimonials</h1>
    <carousel class="testimonial-section" :perPage="1">
      <slide class="testimonial">
        <img class="face" src="../assets/pic1.png" alt="">
        <p class="message">"Tile Installation is exactly what our business has been lacking. The best on the net! I like Tile Installation more and more each day because it makes my life a lot easier. I'm good to go. "</p>
        <p class="name">&mdash; Marnie W.</p>
        </slide>
      <slide class="testimonial">
        <img class="face" src="../assets/pic2.png" alt="">
        <p class="message">"I made back the purchase price in just 48 hours! It's really wonderful. Tile Installation impressed me on multiple levels. Tile Installation has completely surpassed our expectations."  </p>
        <p class="name">&mdash; Nedi H.</p>
      </slide>
      <slide class="testimonial">
        <img class="face" src="../assets/pic3.png" alt="">
        <p class="message">"It's incredible. Tile Installation is the most valuable business resource we have EVER purchased. Very easy to use."</p>
        <p class="name">&mdash; Chandler A</p>
      </slide>
    </carousel>

    <p class="seemore" @click="showTest = !showTest">See More!</p>

    <div class="all-testimonials" v-if="showTest">
      <h1>All Testimonials</h1>
      <div class="single-testimonial">
        <img class="face" src="../assets/pic1.png" alt="">
        <p class="message">"Tile Installation is exactly what our business has been lacking. The best on the net! I like Tile Installation more and more each day because it makes my life a lot easier. I'm good to go. "</p>
        <p class="name">&mdash; Marnie W.</p>
      </div>

      <div class="single-testimonial">
        <img class="face" src="../assets/pic1.png" alt="">
        <p class="message">"Tile Installation is exactly what our business has been lacking. The best on the net! I like Tile Installation more and more each day because it makes my life a lot easier. I'm good to go. "</p>
        <p class="name">&mdash; Marnie W.</p>
      </div>

      <div class="single-testimonial">
        <img class="face" src="../assets/pic1.png" alt="">
        <p class="message">"Tile Installation is exactly what our business has been lacking. The best on the net! I like Tile Installation more and more each day because it makes my life a lot easier. I'm good to go. "</p>
        <p class="name">&mdash; Marnie W.</p>
      </div>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '../Header';
import Banner from '../Banner';
import Footer from '../Footer';

export default {
  data() {
    return {
      showTest: false
    }
  },
  components: {
    appHeader: Header,
    appBanner: Banner,
    appFooter: Footer
  }
}
</script>

<style scoped>
  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 1.4em;
    text-align: center;
    margin-bottom: 30px;
  }

  .testimonial-section {
    text-align: center;
  }

  .message {
    padding: 10px;
    margin: 20px;
    font-family: "Roboto Condensed", sans-serif;
  }

  .face {
    width: 100px;
    border-radius: 100%;
  }

  .seemore {
    text-align: center;
    margin: 20px auto;
    color: white;
    background-color: #303030;
    padding: 10px;
    width: 120px;
  }

  .all-testimonials h1 {
    margin-top: 80px;
  }

  .all-testimonials .name {
    margin-bottom: 40px;
  }

  .single-testimonial {
    text-align: center;
  }
</style>
