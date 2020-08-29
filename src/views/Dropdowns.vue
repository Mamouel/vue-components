<template>
  <div class="dropdowns view wrapper">
    <h1>{{ text[0][getLang] }}</h1>
    <DropdownBasic />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";

import DropdownBasic from "@/components/dropdowns/DropdownBasic.vue";

@Component({
  components: {
    DropdownBasic,
  },
  computed: {
    ...mapGetters("lang", ["getLang"]),
  },
})
export default class Dropdowns extends Vue {
  private text: Object[] = [
    {
      en: "Dropdowns",
      fr: "Listes déroulantes",
    },
  ];
}
</script>

<style lang="scss" scoped>
</style>
