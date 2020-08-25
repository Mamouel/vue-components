<template>
  <button @click="logAlert" :class="classProp">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
@Component({})
export default class Button extends Vue {
  @Prop({ type: String }) private classProp!: string;
  logAlert = () => {
    this.$emit("log");
  };
}
</script>
