<template>
  <div class="cards view wrapper">
    <h1>{{ text[0][getLang] }}</h1>

    <h2>{{ text[1][getLang] }}</h2>
    <div class="cards__ctn flex">
      <CardBasic />
      <CardBasic />
      <CardBasic />
      <CardBasic />
    </div>
    <h2>{{ text[2][getLang] }}</h2>
    <div class="cards__ctn flex">
      <CardImage />
      <CardImage />
      <CardImage />
      <CardImage />
    </div>
    <h2>{{ text[3][getLang] }}</h2>

    <div class="cards__ctn flex">
      <CardImageText />
      <CardImageText />
      <CardImageText />
      <CardImageText />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";

import CardBasic from "@/components/cards/CardBasic.vue";
import CardImage from "@/components/cards/CardImage.vue";
import CardImageText from "@/components/cards/CardImageText.vue";

@Component({
  components: {
    CardBasic,
    CardImage,
    CardImageText,
  },
  computed: {
    ...mapGetters("lang", ["getLang"]),
  },
})
export default class Cards extends Vue {
  private text: Object[] = [
    {
      en: "Cards",
      fr: "Cartes",
    },
    {
      en: "Basic",
      fr: "Basique",
    },
    {
      en: "Image",
      fr: "Image",
    },
    {
      en: "Image & text",
      fr: "Image et texte",
    },
  ];
}
</script>

<style lang="scss" scoped>
@import "../style/index.scss";

.cards {
  margin: auto;
  box-sizing: border-box;
  position: relative;

  @include mq(xxs) {
    max-width: 100%;
  }

  &__ctn {
    margin-left: -10px;
  }
}
</style>
