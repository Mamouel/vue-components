<template>
  <div class="input-ctn relative">
    <input
      :class="[className, getTheme ? 'dark' : 'light']"
      :id="id"
      :autocomplete="autocomplete"
      :name="name"
      :value="value"
      :type="type"
      :required="required"
      @input="$emit('update:value', $event.target.value);"
    />
    <span class="floating-label" :class="getTheme ? 'dark' : 'light'">{{ placeholder }}</span>
    <button v-if="btn">{{ btnText }}</button>
    <!-- <inline-svg :src="require(`../assets/${icon}.svg`)"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import IconHeart from "@/assets/heart.svg";

@Component({
  computed: {
    ...mapGetters("theme", ["getTheme", "getStateLoading"]),
  },
})
export default class InputCustom extends Vue {
  @Prop({ type: String }) public className!: string;
  @Prop({ type: String }) public id!: string;
  @Prop({ type: String }) public autocomplete!: string;
  @Prop({ type: String }) public name!: string;
  @Prop({ type: String }) public value!: string;
  @Prop({ type: String }) public type!: string;
  @Prop({ type: String }) public required!: string;
  @Prop({ type: String }) public placeholder!: string;
  @Prop({ type: String }) public btn!: boolean;
  @Prop({ type: String }) public btnText!: string;
  @Prop({ type: String }) public withIcon!: boolean;
  @Prop({ type: String }) public icon!: string;
  mounted() {
    console.log(this.icon);
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/index.scss";

.input-ctn {
  display: flex;
  justify-content: center;
  align-items: center;
  &.half {
    width: 50%;
  }
  input:focus ~ .floating-label,
  input:not(:focus):valid ~ .floating-label {
    top: 12px;
    left: 20px;
    font-size: 11px;
    background-color: $white;
    opacity: 1;
    padding: 0 3px;
    &.dark {
      background-color: $blackest;
      color: $white;
    }
    &.light {
      background-color: $white;
      color: $black;
    }
  }

  textarea:focus ~ .floating-label_textarea {
    top: 12px;
    left: 20px;
    font-size: 11px;
    opacity: 1;
    background-color: $white;
    padding: 0 3px;
    &.dark {
      background-color: $blackest;
    }
    &.light {
      background-color: $white;
    }
  }

  .floating-label {
    position: absolute;
    pointer-events: none;
    left: 30px;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.2s ease all;
    &_textarea {
      top: 30px;
    }
  }
}
</style>