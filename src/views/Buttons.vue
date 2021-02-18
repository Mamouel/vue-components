<template>
  <div class="buttons view wrapper">
    <h1>{{ text[0][getLang] }}</h1>
    <div class="buttons__section">
      <h2>{{ text[1][getLang] }}</h2>
      <div class="buttons__ctn flex">
        <ButtonBasic @propevent="logAlert" classProp="btn">Basic</ButtonBasic>
        <ButtonBasic @propevent="logAlert" classProp="btn btn_primary">Primary</ButtonBasic>
        <ButtonBasic @propevent="logAlert" classProp="btn btn_secondary">Secondary</ButtonBasic>
        <ButtonBasic @propevent="logAlert" classProp="btn btn_error">Error</ButtonBasic>
        <ButtonBasic @propevent="logAlert" classProp="btn btn_warning">Warning</ButtonBasic>
        <ButtonBasic @propevent="logAlert" classProp="btn btn_success">Success</ButtonBasic>
        <ButtonBasic @lopropeventg="logAlert" classProp="btn btn_small">Small</ButtonBasic>
        <ButtonBasic @propevent="logAlert" classProp="btn btn_large btn_secondary">Large</ButtonBasic>
      </div>
    </div>
    <div class="buttons__section">
      <h2>{{ text[2][getLang] }}</h2>
      <div class="buttons__ctn flex">
        <ButtonBasic @propevent="logAlert" classProp="btn-text">Basic</ButtonBasic>
        <ButtonBasic @propevent="logAlert" classProp="btn-text btn-text_primary">Primary</ButtonBasic>
        <ButtonBasic @propevent="logAlert" classProp="btn-text btn-text_secondary">Secondary</ButtonBasic>
        <ButtonBasic @propevent="logAlert" classProp="btn-text btn-text_error">Error</ButtonBasic>
        <ButtonBasic @propevent="logAlert" classProp="btn-text btn-text_warning">Warning</ButtonBasic>
        <ButtonBasic @propevent="logAlert" classProp="btn-text btn-text_success">Success</ButtonBasic>
      </div>
    </div>
    <div class="buttons__section">
      <h2>{{ text[3][getLang] }}</h2>
      <div class="buttons__ctn flex">
        <ButtonBasic @propevent="logAlert" classProp="btn btn_round btn_secondary">round</ButtonBasic>
      </div>
    </div>
    <div class="buttons__section">
      <h2>{{ text[4][getLang] }}</h2>
      <div class="buttons__ctn flex">
        <Button @propevent="logAlert" classProp="btn btn_secondary btn_round">Hover</Button>
        <ButtonRipple @propevent="logAlert" classProp="btn btn_secondary btn_large">Click me</ButtonRipple>
        <ButtonRipple2 @propevent="logAlert" classProp="btn btn_success">Click me</ButtonRipple2>
      </div>
    </div>
    <div class="buttons__section">
      <h2>{{ text[5][getLang] }}</h2>
      <div class="buttons__ctn flex">
        <ButtonRipple2 @propevent="logAlert" classProp="btn btn_icon btn_round btn_secondary">
          <IconHeart />
        </ButtonRipple2>
        <ButtonRipple2 @propevent="logAlert" classProp="btn-text-icon btn_secondary"><IconHeart />Like</ButtonRipple2>
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

import IconHeart from "@/assets/heart.svg";

@Component({
  components: {
    Button,
    ButtonBasic,
    ButtonRipple,
    ButtonRipple2,
    IconHeart,
  },
  computed: {
    ...mapGetters("lang", ["getLang"]),
  },
})
export default class Buttons extends Vue {
  public text: Object[] = [
    {
      en: "Buttons",
      fr: "Boutons",
    },
    {
      en: "Basics",
      fr: "Basiques",
    },
    {
      en: "Text",
      fr: "Textes",
    },
    {
      en: "Round",
      fr: "Rond",
    },
    {
      en: "Ripple effect",
      fr: "Effet d'ondulation",
    },
    {
      en: "Icons",
      fr: "Icônes",
    },
  ];
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
