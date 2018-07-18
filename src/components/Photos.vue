<template>
  <div id="app">
    <app-header></app-header>
    <div class="photo-section">
      <h1>Recent Work</h1>
      <p>Here's a collection of pictures from prior work we have done.</p>
    </div>

    <div class="work">
      <h3>Bathroom Remodeling</h3>
      <p>Our bathroom remodeling is top of the line and we only use the best of the best products we have available.</p>
      <carousel class="carousel-container">
        <slide class="image">
          <img src="../assets/1.png" alt="This demolition allowed for an entire re-design of their bathroom which allowed for the most creativity possible." @click="showModal($event)">
        </slide>
        <slide class="image">
          <img src="../assets/2.png" alt="This was a midway point after we finished installing some of the tiling and the bathtub." @click="showModal($event)">
        </slide>
        <slide class="image">
          <img src="../assets/3.png" alt="Fully finished product. Closeup of the bathtub and tiling included. Still missing a few final additions." @click="showModal($event)">
        </slide>
        <slide class="image">
          <img src="../assets/4.png" alt="This angle of the shower shows how it flows with the rest of the bathroom and matches with the tub well." @click="showModal($event)">
        </slide>
        <slide class="image">
          <img src="../assets/5.png" alt="A little cubby by the bathtub for soap, shampoo, and other shower necessities." @click="showModal($event)">
        </slide>
      </carousel>
    </div>

    <div class="work">
      <h3>Kitchen Remodeling</h3>
      <p>Click each photo to enlarge and read a small description.</p>
      <carousel class="carousel-container">
        <slide class="image">
          <img src="../assets/1.png" alt="This demolition allowed for an entire re-design of their bathroom which allowed for the most creativity possible." @click="showModal($event)">
        </slide>
        <slide class="image">
          <img src="../assets/2.png" alt="This was a midway point after we finished installing some of the tiling and the bathtub." @click="showModal($event)">
        </slide>
        <slide class="image">
          <img src="../assets/3.png" alt="Fully finished product. Closeup of the bathtub and tiling included. Still missing a few final additions." @click="showModal($event)">
        </slide>
        <slide class="image">
          <img src="../assets/4.png" alt="This angle of the shower shows how it flows with the rest of the bathroom and matches with the tub well." @click="showModal($event)">
        </slide>
        <slide class="image">
          <img src="../assets/5.png" alt="A little cubby by the bathtub for soap, shampoo, and other shower necessities." @click="showModal($event)">
        </slide>
      </carousel>
    </div>

    <div class="work">
      <h3>Bedroom Remodeling</h3>
      <p>Click each photo to enlarge and read a small description.</p>
      <carousel class="carousel-container">
        <slide class="image">
          <img src="../assets/1.png" alt="This demolition allowed for an entire re-design of their bathroom which allowed for the most creativity possible." @click="showModal($event)">
        </slide>
        <slide class="image">
          <img src="../assets/2.png" alt="This was a midway point after we finished installing some of the tiling and the bathtub." @click="showModal($event)">
        </slide>
        <slide class="image">
          <img src="../assets/3.png" alt="Fully finished product. Closeup of the bathtub and tiling included. Still missing a few final additions." @click="showModal($event)">
        </slide>
        <slide class="image">
          <img src="../assets/4.png" alt="This angle of the shower shows how it flows with the rest of the bathroom and matches with the tub well." @click="showModal($event)">
        </slide>
        <slide class="image">
          <img src="../assets/5.png" alt="A little cubby by the bathtub for soap, shampoo, and other shower necessities." @click="showModal($event)">
        </slide>
      </carousel>

      <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
          <p class="image is-4by3">
            <img class="popup-image" :src="current.src" alt="">
          </p>
          <p class="description">{{text}}</p>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="close()"></button>
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
  data() {
    return {
      current: {},
      text: ""
    }
  },
  components: {
    appHeader: Header,
    appBanner: Banner,
    appFooter: Footer
    // Carousel,
    // Slide
  },
  methods: {
    showModal(event) {
      this.current = event.target;
      this.text = this.current.alt;
      console.log(this.current.alt);
      let modal = document.querySelector(".modal");
      modal.classList.toggle("is-active");
    },
    close() {
      let modal = document.querySelector(".modal");
      modal.classList.remove("is-active");
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

  .work {}

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

  .image .popup-image {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .modal-content {
    margin: 0;
  }

  .description {
    color: white;
    background: #66666675;
    padding: 10px;
    font-family: "Alegreya", sans-serif;
    font-size: 1.1em;
  }
</style>
