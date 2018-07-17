<template>
  <div id="app">
    <app-header></app-header>
    <p>Here's just a small sampling of some of the products we carry in the showroom.</p>
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
</style>
