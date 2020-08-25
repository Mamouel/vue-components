<template>
  <div class="dropdowns view wrapper">
    <h1>Dropdowns</h1>
    <DropdownBasic />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";

import DropdownBasic from "@/components/dropdowns/DropdownBasic.vue";

@Component({
  components: {
    DropdownBasic
  },
})
export default class Dropdowns extends Vue {}
</script>

<style lang="scss" scoped>
</style>
