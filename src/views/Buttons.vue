<template>
  <div class="buttons view wrapper">
    <h1>Buttons</h1>
    <div class="buttons__section">
      <h2>Basics</h2>
      <div class="buttons__ctn flex">
        <ButtonBasic @log="logAlert" classProp="btn">Basic</ButtonBasic>
        <ButtonBasic @log="logAlert" classProp="btn btn_primary">Primary</ButtonBasic>
        <ButtonBasic @log="logAlert" classProp="btn btn_secondary">Secondary</ButtonBasic>
        <ButtonBasic @log="logAlert" classProp="btn btn_error">Error</ButtonBasic>
        <ButtonBasic @log="logAlert" classProp="btn btn_warning">Warning</ButtonBasic>
        <ButtonBasic @log="logAlert" classProp="btn btn_success">Success</ButtonBasic>
        <ButtonBasic @log="logAlert" classProp="btn btn_small">Small</ButtonBasic>
        <ButtonBasic @log="logAlert" classProp="btn btn_large">Large</ButtonBasic>
        <ButtonBasic @log="logAlert" classProp="btn btn_round">round</ButtonBasic>
      </div>
    </div>
    <div class="buttons__section">
      <h2>Ripple effects</h2>
      <div class="buttons__ctn flex">
        <Button @log="logAlert" classProp="btn btn_round">Hover</Button>
        <ButtonRipple @log="logAlert" classProp="btn btn_secondary btn_large">Click me</ButtonRipple>
        <ButtonRipple2 @log="logAlert" classProp="btn btn_primary">Click me</ButtonRipple2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";

import Button from "@/components/buttons/Button.vue";
import ButtonBasic from "@/components/buttons/ButtonBasic.vue";

import ButtonRipple from "@/components/buttons/ButtonRipple.vue";
import ButtonRipple2 from "@/components/buttons/ButtonRipple2.vue";

@Component({
  components: {
    Button,
    ButtonBasic,
    ButtonRipple,
    ButtonRipple2,
  },
})
export default class Buttons extends Vue {
  public logAlert = () => {
    console.log("clicked");
  };
}
</script>

<style lang="scss" scoped>
@import "../style/index.scss";
.buttons {
  &__section {
    margin: 20px 0;
  }
  &__ctn {
    margin: 20px 0;
  }
}
</style>
