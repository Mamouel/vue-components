<template>
  <div class="lists view wrapper">
    <h1>Lists</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";

@Component({
  components: {},
  computed: {
    ...mapGetters("lang", ["getLang"]),
  }
})
export default class Lists extends Vue {
  private text: Object[] = [
    {
      en: "Lists",
      fr: "Listes",
    },
  ];
}
</script>

<style lang="scss" scoped>
</style>
