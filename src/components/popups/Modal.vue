<template>
  <transition name="modal">
    <div class="modal">
      <slot name="background"></slot>
        <div class="modal-container">
          <slot name="header"> default header </slot>
          <slot name="body"> default body </slot>
          <slot name="footer"> default footer </slot>
        </div>
    </div>
  </transition>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class Modal extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/style/index.scss";

.modal {
  height: 100%;
}

.modal-container {
  position: absolute;
  z-index: 10000;
  width: 35%;
  min-width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  color: $black;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  @include mq(l) {
    width: 45%;
  }
  @include mq(s) {
    width: 60%;
  }
  @include mq(xs) {
    width: 85%;
  }
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>