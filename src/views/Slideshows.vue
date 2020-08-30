<template>
  <div class="slideshows view wrapper">
    <h1>{{ text[0][getLang] }}</h1>
    <h2>{{ text[1][getLang] }}</h2>
    <SlideshowBasic />
    <h2>{{ text[1][getLang] }}</h2>

    <SlideshowDots/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";

import SlideshowBasic from "@/components/slideshows/SlideshowBasic.vue";
import SlideshowDots from "@/components/slideshows/SlideshowDots.vue";

@Component({
  components: {
    SlideshowBasic,
    SlideshowDots
  },
  computed: {
    ...mapGetters("lang", ["getLang"]),
  },
})
export default class Slideshows extends Vue {
  private text: Object[] = [
    {
      en: "Slideshows",
      fr: "Carrousels",
    },
    {
      en: "Basic",
      fr: "Basique",
    },
  ];
}
</script>

<style lang="scss" scoped>
</style>
