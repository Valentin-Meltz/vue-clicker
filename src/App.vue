<template>
  <div class="main">
    <Header />
    <Clicker />
  </div>
</template>

<script>
import Header from './components/Tools/Header.vue';
import Clicker from './components/Clicker/clicker.vue';

export default {
  name: 'App',
  components: {
    Header,
    Clicker,
  },
}
</script>

<style scoped>
html, body, #app, .main {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fff;
}
</style>
