<template>
  <transition name="fade">
    <div class="toast" v-if="show">
      {{msg}}
    <slot></slot>
  </div>
  </transition>
</template>
<script>
export default {
  name: 'Toast',
  props: {
    msg: String,
    time: Number,
    show: Boolean
  },
  data() {
    return {
      
    }
  },
  created() {

  },
  methods: {
    close() {
      this.show = false
    },
    open() {
      this.show = true
    },
    showChangeHandler(val) {
      if (val && this.time) {
        setTimeout(() => {
          this.show = false
        }, this.time)
      }
    }
  },
  watch: {
    show: {
      handler: 'showChangeHandler',
      immediate: true
    }
  }
}
</script>
<style lang="scss">
@import '../assets/style/share.scss';
.toast {
  box-sizing: border-box;
  position: fixed;
  display: inline-block;
  padding: 10px;
  background-color: $toast-bg-color;
  bottom: 20vh;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  box-shadow: 0 2px 8px #0a0909;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
  max-width: 700px;
  word-wrap: break-word;
}

.fade-enter-active, .fade-leave-active {
  transition: all .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate3d(-50%, 0, 0) scale(0, 0);
}
</style>