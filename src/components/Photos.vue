<template>
  <div id="app">
    <app-header></app-header>
    <div class="photo-section">
      <h1>Recent Work</h1>
      <p>Here's a collection of pictures from prior work we have done.</p>
    </div>

    <div class="work">
      <h3>Bathroom Remodeling</h3>
      <p>A recent bathroom remodel with this tile and that tile etc.</p>
      <carousel class="carousel-container">
        <slide class="image">
          <img src="../assets/Cody/1.jpg" alt="" @click="showModal()">
        </slide>
        <slide class="image">
          <img src="../assets/Cody/2.jpg" alt="" @click="showModal()">
        </slide>
        <slide class="image">
          <img src="../assets/Cody/3.jpg" alt="" @click="showModal()">
        </slide>
        <slide class="image">
          <img src="../assets/Cody/4.jpg" alt="" @click="showModal()">
        </slide>
        <slide class="image">
          <img src="../assets/Cody/5.jpg" alt="" @click="showModal()">
        </slide>
      </carousel>
    </div>

    <div class="work">
      <h3>Kitchen Remodeling</h3>
      <p>A recent kitchen remodel with this tile and that tile etc.</p>
      <carousel class="carousel-container">
        <slide class="image">
          <img src="../assets/Cody/1.jpg" alt="" @click="showModal()">
        </slide>
        <slide class="image">
          <img src="../assets/Cody/2.jpg" alt="" @click="showModal()">
        </slide>
        <slide class="image">
          <img src="../assets/Cody/3.jpg" alt="" @click="showModal()">
        </slide>
        <slide class="image">
          <img src="../assets/Cody/4.jpg" alt="" @click="showModal()">
        </slide>
        <slide class="image">
          <img src="../assets/Cody/5.jpg" alt="" @click="showModal()">
        </slide>
      </carousel>
    </div>

    <div class="work">
      <h3>Bedroom Remodeling</h3>
      <p>A recent bedroom remodel with this tile and that tile etc.</p>
      <carousel class="carousel-container">
        <slide class="image">
          <img src="../assets/Cody/1.jpg" alt="" @click="showModal()">
        </slide>
        <slide class="image">
          <img src="../assets/Cody/2.jpg" alt="" @click="showModal()">
        </slide>
        <slide class="image">
          <img src="../assets/Cody/3.jpg" alt="" @click="showModal()">
        </slide>
        <slide class="image">
          <img src="../assets/Cody/4.jpg" alt="" @click="showModal()">
        </slide>
        <slide class="image">
          <img src="../assets/Cody/5.jpg" alt="">
        </slide>
      </carousel>

      <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
          <p class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="">
          </p>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="showModal()"></button>
      </div>

    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '../Header';
import Banner from '../Banner';
import Footer from '../Footer';
// import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    appHeader: Header,
    appBanner: Banner,
    appFooter: Footer
    // Carousel,
    // Slide
  },
  methods: {
    showModal() {
      console.log("Hey");
      let modal = document.querySelector(".modal");
      modal.classList.toggle("is-active");
    }
  }
}
</script>

<style scoped>

  .photo-section {
    margin: 20px 20px 40px 20px;
  }

  h1 {
    font-size: 1.9em;
    font-weight: bold;
  }

  h3 {
    font-size: 1.2em;
    font-weight: bold;
    font-family: "Roboto Condensed", sans-serif;
  }

  .work h3,
  .work p{
    margin: 20px;
  }

  .VueCarousel-inner,
  .VueCarousel-slide {
    flex-basis: 248px;
  }

  .image img {
    padding: 20px;
    height: 250px;
  }
</style>
