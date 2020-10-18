<template>
  <div class="main">
    <Header></Header>
    <div class="content">
      <div class="card-wrapper" v-for="(item, index) in cards" :key="index">
        <Card class="card">
          {{item}}
        </Card>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header'
import Card from '../components/Card'
export default {
  components: {
    Header,
    Card
  },
  data() {
    return {
      cards: Array(10).fill(1)
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
  padding-top: 80px;
}
.content {
  display: flex;
  flex-wrap: wrap;
}
.card-wrapper {
  width: 50%;
  padding: 20px;
  height: 300px;

  .card {
    width: 100%;
    height: 100%;
  }
}
</style>