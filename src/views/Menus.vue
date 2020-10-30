<template>
  <div class="menus view wrapper">
    <h1>{{ text[0][getLang] }}</h1>
    <MenuBasic />
    <MenuLight />

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import MenuBasic from "@/components/navbars/MenuBasic.vue";
import MenuLight from "@/components/navbars/MenuLight.vue";

@Component({
  components: {
    MenuBasic,
    MenuLight
  },
  computed: {
    ...mapGetters("lang", ["getLang"]),
  },
})
export default class Menus extends Vue {
  private text: Object[] = [
    {
      en: "Menus",
      fr: "Menus",
    },
  ];
}
</script>

<style lang="scss" scoped>
</style>
