<template>
  <div class="home">
    <div>
      <span>你良的网站</span>
      <Button class="start" :inline="false" @click="goToMainPage">进入</Button>
    </div>
  </div>
</template>
<script>
import canvasNest from 'canvas-nest.js';
import Button from '../components/Button';
export default {
  components: {
    Button
  },
  data() {
    return {
      config: {
        color: '255,80,255',
        count: 30
      },
      canvas: null
    }
  },
  created() {
    
  },
  mounted() {
    const home = document.querySelector('.home')
    this.canvas = new canvasNest(home, this.config)
  },
  destroyed() {
    this.canvas.destroy()
  },
  methods: {
    goToMainPage() {
      this.$router.push({name: 'main'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/share.scss';
.home {
  display: flex;
  height: 100vh;
  background-color: rgba($color: $base-color1, $alpha: .2);
  justify-content: center;
  align-items: center;
  color: $base-color1;
  font-size: $font64;
}
.start {
  margin-top: 16px;
}
</style>