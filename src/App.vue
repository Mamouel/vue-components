<template>
  <div id="app" :class="getTheme ? 'dark' : 'light'">
    <Navbar v-if="!$route.meta.hideNavigation" />
    <div class="app__wrapper" :class="getMenuOpen ? 'menu-open' : 'menu-closed'">
      <router-view />
    </div>
    <!-- <div v-else class="app_loading"><Loading /></div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { mapActions, mapGetters } from "vuex";
import Navbar from "@/components/navbars/Navbar.vue";

@Component({
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters("menu", ["getMenuOpen", "getStateLoading"]),
    ...mapGetters("theme", ["getTheme", "getStateLoading"]),
  },
})
export default class App extends Vue {
  public getStateLoading!: boolean;
  public getMenuOpen!: boolean;
}
</script>

<style lang="scss">
@import "./style/index.scss";
html,
body {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f4f6f8;
  background-repeat: no-repeat;
  font-size: 12px;
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    padding: 0;
    margin: 0;
    &.light {
      background-color: white;
    }
    &.dark {
      background-color: $blackest;
      color: white;
    }
    & * {
      box-sizing: border-box;
    }
    #nav {
      padding: 30px;
    }
    .app__wrapper {
      min-height: 100vh;
      @include transition(margin-left, 0.3s, ease);
      padding-top: 100px;
      &.menu-open {
        margin-left: 300px;
      }

    }
    .app_loading {
      padding: 200px;
      box-sizing: border-box;
      min-height: 100vh;

      @include mq(l) {
        padding: 100px;
      }
      @include mq(xs) {
        padding: 50px;
      }
    }
  }
}
</style>
