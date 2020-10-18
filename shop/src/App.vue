<template>
  <div id="app">
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
@import 'assets/style/reset.scss';
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
  font-family: 'Microsoft YaHei',arial,tahoma,\5b8b\4f53,sans-serif;;
}
</style>
