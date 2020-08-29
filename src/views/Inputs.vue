<template>
  <div class="inputs view wrapper">
    <h1>{{ text[0][getLang] }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";

@Component({
  components: {},
  computed: {
    ...mapGetters("lang", ["getLang"]),
  },
})
export default class Inputs extends Vue {
  private text: Object[] = [
    {
      en: "Inputs",
      fr: "Champs de texte"
    },
  ]
}
</script>

<style lang="scss" scoped>
</style>
