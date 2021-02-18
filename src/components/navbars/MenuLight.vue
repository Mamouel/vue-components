<template>
  <nav class="menu-light" :class="getTheme ? 'dark' : 'light'">
    <div class="menu-light__wrapper wrapper flex flex_between">
      <div class="menu-burger" @click="menuLightOpen = !menuLightOpen">
        <div class="menu-burger-btn" :class="menuLightOpen ? 'open' : 'closed'">
          <span class="line top"></span>
          <span class="line middle"></span>
          <span class="line bottom"></span>
        </div>
      </div>
      <div class="menu-light__links" :class="menuLightOpen ? 'open' : 'closed'">
        <p>Home</p>
        <p>About</p>
        <p>Sevices</p>
        <p>Contact</p>
      </div>
      <div class="search-input input-ctn flex flex_between">
        <input
          class
          id="main-search"
          autocomplete="off"
          name="Main search"
          type="search"
          required="required"
          v-model="searchword"
          :placeholder="searchPlaceholder[getLang]"
        />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import InputCustom from "@/components/inputs/InputCustom.vue";
import IconDark from "@/assets/moon.svg";
import IconLight from "@/assets/sun.svg";
@Component({
  components: {
    IconDark,
    InputCustom,
  },
  methods: {
    ...mapActions("menu", ["toggleMenu"]),
    ...mapActions("theme", ["toggleTheme"]),
    ...mapActions("lang", ["toggleLang"]),
  },
  computed: {
    ...mapGetters("menu", ["getMenuOpen", "getStateLoading"]),
    ...mapGetters("theme", ["getTheme", "getStateLoading"]),
    ...mapGetters("lang", ["getLang", "getStateLoading"]),
  },
})
export default class MenuLight extends Vue {
  public bodyScroll: boolean = false;
  public displayLang: boolean = false;
  public displayThemeTooltip: boolean = false;
  public searchword: string = "";
  public searchResults: object[] = [];
  public getLang!: string;
  public menuLightOpen: boolean = false;
  public searchPlaceholder: Object = {
    en: "search",
    fr: "rechercher",
  };
}
</script>

<style lang="scss" scoped>
@import "../../style/index.scss";

.menu-light {
  background-color: $grey-light;
  height: $navbarHeight;
  @include transition(background-color 0.3s ease);
  @include box-shadow();
  margin: 25px 0px;
  position: relative;
  &__wrapper {
    width: 100%;
    max-width: 1800px;
    margin: 0;
    height: 100%;
  }

  &__links {
    position: absolute;
    top: $navbarHeight;
    background-color: $grey-light;
    color: $black;
    padding: 15px 25px;
    text-align: center;
    min-width: 200px;
    @include transition(height 0.3s ease, opacity 0.3s ease, visibility 0.3s ease);
    &.closed {
      height: 0;
      opacity: 0;
      visibility: hidden;
    }
    &.open {
      height: 250px;
      opacity: 1;
      visibility: visible;
    }
  }

  .search-input {
    margin-right: 20px;
    &.dark {
      input {
        color: $white;
      }
    }
    @include mq(s) {
      max-width: 150px;
    }
  }

  .menu-burger {
    background: $transparent;
    &:hover {
      background-color: $black;
      .menu-burger-btn {
        .line {
          background-color: $white;
        }
      }
    }

    .menu-burger-btn {
      width: 20px;
      height: 20px;
      position: relative;

      @include mq(s) {
        width: 15px;
        height: 15px;
      }

      .line {
        background-color: $black;
      }
    }

  }
}
</style>
