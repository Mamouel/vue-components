<template>
  <button @click="$emit('propevent')" class="ripple" :class="classProp">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
@Component({})
export default class Button extends Vue {
  @Prop({ type: String }) private classProp!: string;
}
</script>

<style lang="scss" scoped>
@import "../../style/index.scss";

// .ripple {
//   background-position: center;
//   transition: background 0.8s;
// }
// .ripple:hover {
//   background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;
// }
// .ripple:active {
//   background-color: #6eb9f7;
//   background-size: 100%;
//   transition: background 0s;
// }

.ripple {
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 1s;
  }

  &:active:after {
    transform: scale(0, 0);
    opacity: 0.2;
    transition: 0s;
  }
}

</style>