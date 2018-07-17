<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <div class="logo">
        <h1>Delacy's Designs</h1>
        <p>Design &amp; Install</p>
      </div>
      <div class="navbar-burger burger" @click="openNav()">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <ul>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/photos">Photos</router-link>
          <router-link to="/testimonials">Testimonials</router-link>
          <router-link to="/contact">Contact</router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  methods: {
    openNav() {
      let navwich = document.querySelector('.navbar-burger');
      let navmenu = document.querySelector('.navbar-menu');
      let yes = document.querySelector('.is-active');
      if (yes) {
        navwich.classList.remove("is-active");
        navmenu.classList.remove("is-active");
        } else {
        navwich.classList.add("is-active");
        navmenu.classList.add("is-active");
      }
    }
  }
}
</script>

<style scoped>
  .navbar {
    padding: 10px;
    align-items: center;
  }

  .navbar-brand {
    align-items: center;
  }

  .logo {
    margin-left: 10px;
    margin-bottom: 5px;
  }

  .logo h1 {
    font-family: "Alegreya", sans-serif;
    font-size: 1.4em;
  }

  .logo p {
    font-size: .8em;
    letter-spacing: 4.4px;
    font-family: "Roboto", sans-serif;
  }

  li {
    font-family: "Roboto Condensed", sans-serif;
  }

  a {
    display: block;
    color: #303030;
    padding: 10px;
  }

  /* Tablet */
  @media only screen and (min-width: 600px) {
    
  }

  /* Desktop */
  @media only screen and (min-width: 1075px) {
    a {
      display: inline-block;
    }
  }
</style>

