<template>
  <div class="sliders view wrapper">
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
export default class Sliders extends Vue {
  private text: Object[] = [
    {
      en: "Sliders",
      fr: "Curseurs",
    },
  ];
}
</script>

<style lang="scss" scoped>
</style>
