<template>
  <div id="app">
    <img class="vue-logo" alt="Vue logo" src="./assets/logo.png">
    <img class="ignore" alt="Vue logo" src="./assets/logo.png">
    <div @click="showToast">Version: {{version}}</div>
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
    showToast() {
      this.$zToast('12344', { time: 1000 })
    }
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
  min-height: 100vh;
  position: relative;
}
.vue-logo {
  width: 300px;
  height: 300px;
}

img.ignore {
  height: 200px;
  width: 200px;
}

.layer-container {
  position: absolute;
  height: 0;
}

body {
  margin: 0;
}
</style>
