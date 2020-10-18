<template>
  <div class="main">
    <Header></Header>
  </div>
</template>
<script>
import Header from '../components/Header'
export default {
  components: {
    Header
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
  destroyed() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/share.scss';
.main {

}
</style>