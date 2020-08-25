<template>
  <div class="slideshows view wrapper">
    <h1>Slideshows</h1>
    <SlideshowBasic />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";

import SlideshowBasic from "@/components/slideshows/SlideshowBasic.vue";

@Component({
  components: {
    SlideshowBasic
  },
})
export default class Slideshows extends Vue {}
</script>

<style lang="scss" scoped>
</style>
