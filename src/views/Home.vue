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
import Banner from '@/components/banners/Banner.vue'

export default {
  name: 'Home',
  components: {
    Banner
  }
}
</script>

<style lang="scss" scoped>
.home {
}
</style>
