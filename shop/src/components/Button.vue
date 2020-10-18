<template>
  <a  href="javascript:void(0)" 
      class="zl-btn" 
      :class="{'btn-inline': inline}"
      @click="onClick">
    <slot></slot>
  </a>
</template>

<script>
import { vueDebounce } from 'util/debounce'
export default {
  name: 'HelloWorld',
  props: {
    inline: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick: vueDebounce(function() {
      this.$emit('click')
    }, 300)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/style/share.scss';
.zl-btn {
  display: block;
  background-color: $base-color1;
  padding: 16px;
  color: $white;
  text-decoration: none;
  border-radius: 8px;
  font-size: $font32;

  &:active {
    background-color: $base-color0;
  }

  .btn-inline {
    display: inline-block;
  }
}
</style>