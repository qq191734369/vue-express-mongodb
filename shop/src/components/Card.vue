<template>
  <transition name="pop">
    <div class="card" v-if="show">
      <slot></slot>
    </div>
  </transition>
</template>
 
<script>
  export default {
    name: 'SvgIcon',
    props: {
      
    },
    data() {
      return {
        show: false
      }
    },
    mounted() {
      this.show = true
    }
  }
</script>
 
<style lang="scss" scoped>
.card {
  box-shadow: 0 2px 10px rgba($color: #000000, $alpha: .2);
  border-radius: 8px;
}

.pop-enter-active, .pop-leave-active {
  transition: all .4s;
}
.pop-enter, .pop-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(50px);
  opacity: 0;
}
</style>