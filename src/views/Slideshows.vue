<template>
  <div class="slideshows view wrapper">
    <h1>{{ text[0][getLang] }}</h1>
    <h2>{{ text[1][getLang] }}</h2>
    <SlideshowBasic />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";

import SlideshowBasic from "@/components/slideshows/SlideshowBasic.vue";

@Component({
  components: {
    SlideshowBasic,
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
