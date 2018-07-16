<template>
  <div id="app">
    <app-header></app-header>
    <app-banner>
      <div class="logo">
        <img src="../assets/aboutbanner.jpg" alt="">
      </div>
      <h1>Contact Us</h1>
    </app-banner>
    <h1 class="contact-h1">Visit Us</h1>
    <div class="map">
      <img src="../assets/map.png" alt="">
    </div>
    <div class="contact-info">
      <div class="address-number">
        <p>1000 Location Avenue, Suite A</p>
        <p>Tampa, FL 12345</p>
        <p>tel: (586) 442-2421</p>
        <p>fax: (586) 442-2421</p>
      </div>

      <div class="hours">
        <p>Monday &mdash; Friday: 9AM &mdash; 5PM</p>
        <p>Saturday: 10AM &mdash; 4PM</p>
        <p>Sundays &amp; Evenings: By Appointment</p>
      </div>

      <div class="email-section">
        <h1>Email</h1>
        <div class="contact">
          <p class="name">Cody Balicki</p>
          <p class="email">codymb5@gmail.com</p>
        </div>
        <div class="contact">
          <p class="name">Cody Balicki</p>
          <p class="email">codymb5@gmail.com</p>
        </div>
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
  .contact-h1 {
    font-size: 1.5em;
    margin: 20px 0 0 20px;
    text-transform: uppercase;
    letter-spacing: 1.4px;
  }

  .map {
    padding: 20px;
  }

  .contact-info {
    padding: 20px;
    text-align: left;
    font-family: "Alegreya", sans-serif;
    font-size: 1.2em;
  }

  .address-number {
    margin-bottom: 40px;
  }

  .hours {
    margin-bottom: 40px;
  }

  .email-section h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2em;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 15px;
  }

  .contact {
    margin-bottom: 20px;
  }

  .email {
    color: teal;
    font-family: "Roboto Condensed", sans-serif;
    font-size: .8em;
    text-decoration: underline;
  }

</style>
