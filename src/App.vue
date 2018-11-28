<template>
  <div id="app">
    <h1>Hey</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    axios.get('https://us-central1-eastwatch-verwarming.cloudfunctions.net/getTemperatureOverrides')
    .then(response => {
      console.log(response);
    });
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

#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  width: 100%;
  height: 100%;
}
</style>
