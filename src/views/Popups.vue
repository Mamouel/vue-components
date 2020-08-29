<template>
  <div class="popups view wrapper">
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
  }
})
export default class Popups extends Vue {
  private text: Object[] = [
    {
      en: "Popups",
      fr: "Alertes",
    },
  ];
}
</script>

<style lang="scss" scoped>
</style>
