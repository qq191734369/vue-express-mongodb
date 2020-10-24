<template>
  <div class="header">
    <div class="menu-icon" @click="onShowSideMenu">
      <svg-icon icon-class="menu"></svg-icon>
    </div>
    <div class="menu-item">惊了</div>

    <transition name="fly">
      <div v-if="showSideMenu" class="side-menu" @click.stop>
        <div class="side-header">
          <div>side menu header</div>
          <div class="close" @click="hideSideMenu">
            <svg-icon icon-class="close"></svg-icon>
          </div>
        </div>
        <div class="side-content">
          <div class="side-menu-item">item1</div>
          <div class="side-menu-item">item2</div>
          <div class="side-menu-item">item3</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showSideMenu: false,
      bodyDisplay: null
    }
  },
  methods: {
    onShowSideMenu() {
      this.showSideMenu = true

      const body = document.querySelector('body')
      this.bodyDisplay = getComputedStyle(body).overflow
      body.style.overflow = 'hidden'

      setTimeout(() => {
        window.addEventListener('click', this.hideSideMenu)
      }, 0)
    },
    hideSideMenu() {
      const body = document.querySelector('body')
      body.style.overflow = this.bodyDisplay

      this.showSideMenu = false
      window.removeEventListener('click', this.hideSideMenu)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/style/share.scss';
.header {
  position: fixed;
  display: flex;
  top: 0;
  width: 750px;
  background-color: $base-color1;
  height: 80px;
  color: $white;
  z-index: 1;
  svg {
    fill: $white;
  }

  .menu-icon {
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:active {
      opacity: .8;
    }
  }
  
  .menu-item {
    flex-grow: 0;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:active {
      opacity: .8;
    }
  }

  .side-menu {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 600px;
    background-color: $base-color1;
    box-shadow: 0 0 12px rgba($color: #000000, $alpha: .4);
    overflow-y: auto;
    z-index: 1;
  }

  .fly-enter-active, .fly-leave-active {
    transition: all .2s;
  }
  .fly-enter, .fly-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translate3d(-600px, 0, 0);
  }

  .side-header {
    position: relative;
    height: 80px;
    padding: 20px;
    .close {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      &:active {
        opacity: 0.8;
      }
    }
  }

  .side-content {
    padding-top: 20px 0;

    .side-menu-item {
      height: 80px;
      padding: 20px;
      line-height: 40px;

      + .side-menu-item {
        border-top: 1px solid $base-color5;
      }
    }
  }
}
</style>