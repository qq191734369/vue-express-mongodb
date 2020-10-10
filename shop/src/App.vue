<template>
  <div id="app">
    <img class="vue-logo" alt="Vue logo" src="./assets/logo.png">
    <img class="ignore" alt="Vue logo" src="./assets/logo.png">
    <div>Version: {{version}}</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      version: process.env.VUE_APP_VERSION
    }
  },
  methods: {
  },
  created() {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.vue-logo {
  width: 300px;
  height: 300px;
}

img.ignore {
  height: 200px;
  width: 200px;
}
</style>
