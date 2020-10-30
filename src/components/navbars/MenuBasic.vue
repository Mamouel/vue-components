<template>
  <nav class="menu" :class="[bodyScroll ? 'menu_scrolled' : '', getTheme ? 'dark' : 'light']">
    <div class="menu__wrapper wrapper flex flex_between">
      <div class="menu__links flex" :class="getTheme ? 'dark' : 'light'">
        <p>Accueil</p>
        <p>Contact</p>
      </div>
      <div class="lang">
        <div
          class="lang__btn"
          @mouseover="displayLang = true"
          @mouseleave="displayLang = false"
        >{{ getLang }}</div>
        <div
          class="lang__dropdown"
          :class="displayLang ? 'open' : 'closed'"
          @mouseover="displayLang = true"
          @mouseleave="displayLang = false"
        >
          <div class="lang__dropdown__item" @click="toggleLang('en')">English</div>
          <div class="lang__dropdown__item" @click="toggleLang('fr')">Francais</div>
        </div>
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
      <div
        class="menu__theme"
        @click="toggleTheme(!getTheme)"
        @mouseover="displayThemeTooltip = true"
        @mouseleave="displayThemeTooltip = false"
      >
        <span>
          <IconDark />
        </span>
        <span
          class="menu__theme_tooltip"
          :class="displayThemeTooltip ? 'open' : 'closed'"
        >Toggle {{ getTheme ? 'light' : 'dark' }} theme</span>
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
export default class MenuBasic extends Vue {
  public bodyScroll: boolean = false;
  public displayLang: boolean = false;
  public displayThemeTooltip: boolean = false;
  public searchword: string = "";
  public searchResults: object[] = [];
  public getLang!: string;
  public searchPlaceholder: Object = {
    en: "search",
    fr: "rechercher",
  };
}
</script>

<style lang="scss" scoped>
@import "../../style/index.scss";

.menu {
  background-color: $grey-light;
  height: $navbarHeight;
  @include transition(background-color 0.3s ease);
  margin: 25px 0px;

  &__wrapper {
    width: 100%;
    max-width: 1800px;
    margin: 0;
    height: 100%;
  }

  &__theme {
    padding: 1rem 2rem;
    cursor: pointer;
    position: relative;
    color: $black;

    &:hover {
      color: $primary;
    }

    &_tooltip {
      position: absolute;
      padding: 5px 10px;
      background-color: $grey-dark;
      left: 0;
      top: 50px;
      color: $white;
      @include rounded;
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.3s ease, visibility 0.3s ease;

      &.open {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  &__links {
    z-index: 10;
    width: 50%;
    p {
      @include font(18px, bold, 30px);
      text-decoration: none;
      color: $black;
      padding: 5px 25px;
      cursor: pointer;
      @include transition(color 0.3s ease);

      &:hover {
        color: $primary;
      }
    }
  }

  &__search-icon {
    @include transition(background-color 0.3s ease);
    border-radius: 50%;
    margin: 10px;
    padding: 15px;
    cursor: pointer;

    &:hover {
      background-color: $primary;

      svg {
        width: 30px;
        height: 30px;
        fill: $black;
      }
    }

    svg {
      width: 30px;
      height: 30px;
      fill: $primary;
      @include transition(fill 0.3s ease);
    }
  }

  .lang {
    position: relative;
    height: 60px;
    margin-left: auto;
    font-family: $heading-font;

    &__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      color: $black;
      background-color: $transparent;
      @include font(16px, bold, 20px);
      padding: 20px;
      text-transform: capitalize;
      cursor: pointer;
    }

    &__dropdown {
      position: absolute;
      background-color: $white;
      opacity: 0;
      visibility: hidden;
      @include transition(opacity 0.3s ease, visibility 0.3s ease);

      &.open {
        opacity: 1;
        visibility: visible;
      }

      &__item {
        // width: 50px;
        padding: 10px 15px;
        cursor: pointer;
        color: $black;
        @include transition(color 0.3s ease, background-color 0.3s ease);

        &:hover {
          background-color: $primary;
          color: $white;
        }
      }
    }
  }

  .search-input {
    &.dark {
      input {
        color: $white;
      }
    }
  }
}
</style>
