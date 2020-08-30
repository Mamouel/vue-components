<template>
  <div class="dropdowns view wrapper">
    <h1>{{ text[0][getLang] }}</h1>
    <h2>{{ text[1][getLang] }}</h2>
    <DropdownBasic />
    <h2>{{ text[2][getLang] }}</h2>
<AccordionBasic />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";

import DropdownBasic from "@/components/dropdowns/DropdownBasic.vue";
import AccordionBasic from "@/components/dropdowns/AccordionBasic.vue";

@Component({
  components: {
    DropdownBasic,
    AccordionBasic
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
    {
      en: "Basic",
      fr: "Basique",
    },
    {
      en: "Accordions",
      fr: "Accordéons",
    },
  ];
}
</script>

<style lang="scss" scoped>
</style>
