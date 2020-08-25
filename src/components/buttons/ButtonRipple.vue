<template>
  <button @click="logAlert" anim="ripple" :class="classProp">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
@Component({})
export default class Button extends Vue {
  @Prop({ type: String }) private classProp!: string;
  logAlert() {
    this.$emit("log");
  };
  mounted() {
    [].map.call(document.querySelectorAll('[anim="ripple"]'), (el: any) => {
      el.addEventListener("click", (e: any) => {
        e = e.touches ? e.touches[0] : e;
        const r = el.getBoundingClientRect(),
          d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
        el.style.cssText = `--s: 0; --o: 1;`;
        el.offsetTop;
        el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${
          e.clientX - r.left
        }; --y:${e.clientY - r.top};`;
      });
    });
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/index.scss";

[anim="ripple"] {
  //  Customize effect by defining the following
  //  variables on the parent element
  //  --ripple-background: white;
  //  --ripple-opacity: 0.3;
  //  --ripple-duration: 600ms;
  //  --ripple-easing: linear;

  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    display: block;
    background: var(--ripple-background, white);
    border-radius: 50%;
    pointer-events: none;

    //  position and size
    top: calc(var(--y) * 1px);
    left: calc(var(--x) * 1px);
    width: calc(var(--d) * 1px);
    height: calc(var(--d) * 1px);

    //  animated properties
    opacity: calc(var(--o, 1) * var(--ripple-opacity, 0.3));
    transition: calc(var(--t, 0) * var(--ripple-duration, 600ms))
      var(--ripple-easing, linear);
    transform: translate(-50%, -50%) scale(var(--s, 1));
    transform-origin: center;
  }
}

button {
  --ripple-background: white;
  --ripple-opacity: 0.3;
  --ripple-duration: 600ms;

  border: 1px solid darken(tomato, 20%);
  border-radius: 0;
  padding: 0.75em 3em;
  font-size: 1em;
  outline: none;
  display: block;
  background: tomato;
  color: white;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  min-width: 200px;
  text-align: center;
  cursor: pointer;
  user-select: none;
}
</style>