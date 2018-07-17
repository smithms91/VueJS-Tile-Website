<template>
  <div id="app">
    <app-header></app-header>
    <app-banner>
      <div class="logo">
        <img src="../assets/logo2.jpg" alt="">
      </div>
      <h1>About Delacy's</h1>
    </app-banner>
    <div class="about-content">
      <p>Delacy's Designs first started back in Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt alias quo praesentium dolorem, quaerat voluptas ratione ab consequuntur soluta, esse repudiandae numquam delectus magni minima officia dicta laboriosam veniam suscipit?Perferendis modi ducimus incidunt, ad necessitatibus delectus corporis cumque provident? Magni earum repudiandae voluptatibus harum quos veritatis numquam dolores incidunt pariatur ea corporis, amet ab est nam et explicabo error!</p>
      <div class="see-our-work">
        <router-link to="/photos">View our past work!</router-link>
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
  .about-content {
    padding: 20px;
  }

  .about-content p {
    font-family: "Alegreya", sans-serif;
    font-size: 1.1em;
  }

  .see-our-work {
    text-align: center;
    margin-top: 20px;
  }

  .see-our-work a {
    color: #333;
    font-family: "Roboto", sans-serif;
    font-weight: bolder;
  }

</style>
