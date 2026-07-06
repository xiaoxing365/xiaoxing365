<template>
  <div id = "App">
    <Header />
    <br/>
    <router-view />
    <br/>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import About from './components/about.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Home,
    About,
    Footer
  }
});
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
 *{
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
#App {
  position: relative;
  margin: 0;
  border: 0;
  padding: 0;
}

</style>
