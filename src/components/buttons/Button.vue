<template>
  <button @click="$emit('propevent')" :class="classProp">
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

button {
  @include ripples($secondary, 20, 60);
}
</style>
