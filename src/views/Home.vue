<template>
  <div class="home wrapper">
    <Banner titleOne="VueJs Components" titleTwo="from scratch" />
    <div class="home__desc">
      <p>Welcome to my vue-components personnal project</p>
      <p>All components in this app are made from scratch, with VueJs CLI 3, Typescript and SCSS</p>
      <p>State app is managed with Vuex</p>
      <p>The main purpose of this work is to create a reusable component library</p>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Prop } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import Banner from "@/components/banners/Banner.vue";
@Component({
  components: {
    Banner,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  &__desc {
  }
}
</style>
