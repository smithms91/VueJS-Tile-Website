<template>
  <div id="app">
    <app-header></app-header>
    <app-banner>
      <div class="logo">
        <img src="../assets/banner.jpg" alt="">
      </div>
      <h1>Find Your Inspiration</h1>
    </app-banner>
    <div class="home-content">
      <div class="main-content">
        <p>Delacy's Tile Design &amp; Installation is an independent, full service tile shop featuring a collection of tile, natural stone, glass tiles, mosaics and wood flooring with a focus on clean, modern design.</p>
      </div>

      <div class="second-content">
        <h3>Our Mission</h3>
        <p>With almost 40 years experience in the tile industry, we encourage homeowners, designers and contractors to bring their ideas to the showroom and let us help you from design to installation. Our job is to ask the questions you might not have thought of and prevent any surprises that might disappoint you and prevent you from achieving the prevent you from achieving the style and look you want.</p>
        <h3>Our Showroom</h3>
        <ul>
          <li>Over 500 different glass and mosaic tiles, one of the largest selections of subway tiles and hundreds of porcelain floor and wall tiles</li>
          <li>Hardwood flooring, luxury vinyl planks and wood-toned porcelain tiles</li>
          <li>Dozens of solid surface options in stone, Caesarstone, Silestone, Samsung quartz and porcelain slabs</li>
          <li>Bio Blaze ethanol fireplaces, freestanding or wall mounted</li>
          <li>Professional staff with many years experience as tile contractors, designers and homebuilders</li>
          <li>Bright, true, energy efficient LED lighting</li>
          <li>iPads for browsing images and drafting notes or designs</li>
          <li>On-site warehouse for orders and supplies</li>
        </ul>
      </div>

      <div class="quote-content">
        <hr>
          <i class="material-icons">format_quote</i>
          <p class="quote">Making the simple complicated is commonplace; Making the complicated simple, awesomely simple, that's creativity.</p>
          <p class="author">&mdash; Charles Mingus</p>
        <hr>
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

  .main-content {
    padding: 30px 20px;
  }

  .main-content p {
    font-family: "Alegreya", sans-serif;
    font-size: 1.5em;
    text-align: left;
  }

  .second-content {
    padding: 0 20px;
  }

  .second-content h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4em;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 15px 0;
  }

  .second-content p {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.1rem;
  }

  ul {
    margin-left: 65px;
    list-style-type: square;
  }

  li {
    font-family: "Alegreya", sans-serif;
    font-size: 1.05em;
  }

  .quote-content {
    text-align: center;
    margin: 10px 20px;
  }

  hr {
    margin: 40px 20px 20px 20px;
    height: 1px;
    background-color: rgba(100, 100, 100, .5);
  }

  .quote-content i {
    font-size: 3em;
    color: lightgrey;
    text-shadow: 0px 0px black;
  }

  .quote {
    font-size: 1.5em;
    font-family: "Roboto", sans-serif;
  }

  .author {
    color: darkgrey;
    text-shadow: 0px 0px black;
    margin: 10px;
    font-size: .9em;
  }

  @media only screen and (min-width: 600px) {
    img {
      position: relative;
      top: -550px;
    }
  }

  @media only screen and (min-width: 1000px) {
    
  }
</style>
