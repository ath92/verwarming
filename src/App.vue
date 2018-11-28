<template>
  <div id="vue-app">
    <vue-header />
    <section>iets</section>
    <footer>iets anders</footer>
  </div>
</template>

<script>
import VueHeader from './components/header';
export default {
  components: {
    VueHeader,
  }
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

header {
  width: 100%;
  text-align: center;
}

#vue-app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  width: 100%;
  height: 100%;
}
</style>
