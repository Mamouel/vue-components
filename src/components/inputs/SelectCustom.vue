<template>
  <div class="input-ctn relative">
    <select
      :class="[className, getTheme ? 'dark' : 'light']"
      :id="id"
      :autocomplete="autocomplete"
      :name="name"
      :value="value"
      :type="type"
      :required="required"
      @input="$emit('update:value', $event.target.value)"
    >
      <option value selected disabled>Catégorie</option>
      <option v-for="(item, index) in options" :key="index" :value="item['value']">
        {{ item["option"] }}
      </option>
    </select>
    <span class="floating-label" :class="getTheme ? 'dark' : 'light'">{{
      placeholder
    }}</span>
    <button class="btn input-btn" v-if="btn && !withIcon">{{ btnText }}</button>
    <button class="btn input-btn" v-if="btn && withIcon">
      <font-awesome-icon v-if="withIcon" :icon="icon" />
    </button>
    <span class="input-icon">
      <font-awesome-icon v-if="withIcon && !btn" :icon="icon" />
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import IconHeart from "@/assets/heart.svg";

@Component({
  components: {
    IconHeart,
  },
  computed: {
    ...mapGetters("theme", ["getTheme", "getStateLoading"]),
  },
})
export default class SelectCustom extends Vue {
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
  @Prop({ type: String }) public icon!: String;
  @Prop({ type: Array }) public options!: Object[];
  mounted() {
    console.log(this.options)
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
  .input-icon {
    position: absolute;
    right: 10px;
    svg {
      color: $grey-med;
    }
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

  .input-btn {
    padding: 10px;
    @include rounded;
    @include font();
    box-shadow: none !important;
    position: absolute;
    right: 0;
    margin: 10px 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 1px solid #d1cfcf;
    border-right: 1px solid #d1cfcf;
    svg {
      margin: 0px;
    }
  }
}
</style>