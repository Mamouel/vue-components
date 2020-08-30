<template>
  <nav class="navbar" :class="[bodyScroll ? 'navbar_scrolled' : '', getTheme ? 'dark' : 'light']">
    <div class="navbar__wrapper wrapper flex flex_between">
      <div class="menu-burger" @click="toggleMenu(!getMenuOpen)">
        <div class="menu-burger-btn" :class="getMenuOpen ? 'open' : 'closed'">
          <span class="line top"></span>
          <span class="line middle"></span>
          <span class="line bottom"></span>
        </div>
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
      <!-- <div class="search-input input-ctn flex flex_between">
        <input
          class
          id="main-search"
          autocomplete="off"
          name="Main search"
          type="search"
          required="required"
          placeholder="input, button ..."
        />
      </div> -->
      <div
        class="navbar__theme"
        @click="toggleTheme(!getTheme)"
        @mouseover="displayThemeTooltip = true"
        @mouseleave="displayThemeTooltip = false"
      >
        <span v-if="getTheme">
          <IconLight />
        </span>
        <span v-else>
          <IconDark />
        </span>
        <span
          class="navbar__theme_tooltip"
          :class="displayThemeTooltip ? 'open' : 'closed'"
        >Toggle {{ getTheme ? 'light' : 'dark' }} theme</span>
      </div>
      <div
        class="navbar__links flex"
        :class="[getMenuOpen ? 'open' : 'closed', getTheme ? 'dark' : 'light']"
      >
        <router-link
          v-for="(item, index) in links"
          :key="index"
          class="button secondary-btn"
          :to="item.to"
        >{{ item.text[getLang] }}</router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import IconDark from "@/assets/moon.svg";
import IconLight from "@/assets/sun.svg";

@Component({
  components: {
    IconDark,
    IconLight,
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
export default class Navbar extends Vue {
  public bodyScroll: boolean = false;
  public displayLang: boolean = false;
  public displayThemeTooltip: boolean = false;
  public displaySearchInput: boolean = false;
  public handleScroll() {
    if (window.scrollY > 0) {
      this.bodyScroll = true;
    } else {
      this.bodyScroll = false;
    }
  }
  public links: object[] = [
    {
      to: "/",
      text: {
        en: "Home",
        fr: "Accueil",
      },
    },
    {
      to: "/buttons",
      text: {
        en: "Buttons",
        fr: "Boutons",
      },
    },
    {
      to: "/cards",
      text: {
        en: "Cards",
        fr: "Cartes",
      },
    },
    {
      to: "/dropdowns",
      text: {
        en: "Dropdowns",
        fr: "Listes déroulantes",
      },
    },
    {
      to: "/inputs",
      text: {
        en: "Inputs",
        fr: "Champs de texte",
      },
    },
    {
      to: "/lists",
      text: {
        en: "Lists",
        fr: "Listes",
      },
    },
    {
      to: "/menus",
      text: {
        en: "Menus",
        fr: "Menus",
      },
    },
    {
      to: "/popups",
      text: {
        en: "Popups",
        fr: "Popups",
      },
    },
    {
      to: "/sliders",
      text: {
        en: "Sliders",
        fr: "Curseurs",
      },
    },
    {
      to: "/slideshows",
      text: {
        en: "Slideshows",
        fr: "Carrousels",
      },
    },
  ];
  public created() {
    window.addEventListener("scroll", this.handleScroll);
  }
  public destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/index.scss";

.navbar {
  background-color: $transparent;
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: $navbarHeight;
  @include transition(background-color 0.3s ease);
  &__wrapper {
    width: 100%;
    max-width: 1800px;
    margin: 0;
    height: 100%;
  }
  &_scrolled {
    @include box-shadow(
      0 0 0 1px rgba(63, 63, 68, 0.05),
      0 1px 3px 0 rgba(63, 63, 68, 0.15)
    );
    &.light {
      background-color: $whitish;
    }
    &.dark {
      background-color: $black;
      color: white;
      a {
        text-decoration: none;
        color: $white;
      }
    }
  }

  &__theme {
    padding: 1rem 2rem;
    cursor: pointer;
    position: relative;
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
    position: absolute;
    top: 0px;
    padding-top: 100px;
    z-index: 10;
    left: 0;
    flex-direction: column;
    width: 300px;
    background-color: $white;
    @include transition(transform 0.3s ease);
    height: 100vh;
    @include box-shadow(
      0 0 0 1px rgba(63, 63, 68, 0.05),
      0 1px 3px 0 rgba(63, 63, 68, 0.15)
    );

    @include mq(xxs) {
      width: 100vw;
    }

    &.closed {
      transform: translateX(-100%);
    }
    &.light {
      background-color: $whitish;
    }
    &.dark {
      background-color: $black;
      color: white;
      a {
        text-decoration: none;
        color: $white;
      }
    }

    a {
      @include font(18px, bold, 30px);
      text-decoration: none;
      color: $black;
      width: 100%;
      padding: 5px 25px;

      &.router-link-exact-active {
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
        fill: $white;
      }
    }

    svg {
      width: 30px;
      height: 30px;
      fill: $primary;
      @include transition(fill 0.3s ease);
    }
  }

  &__search-input {
    margin-right: auto;
  }
}

.menu-burger {
  background: $transparent;
  z-index: 1000;
  display: flex;
  border-radius: 50%;
  margin: 10px;
  position: relative;
  padding: 10px;
  cursor: pointer;

  @include mq(s) {
    padding: 10px;
  }

  @include transition(background-color 0.3s ease);

  &:hover {
    background-color: $primary;

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
      position: absolute;
      height: 4px;
      width: 100%;
      background-color: $primary;
      border-radius: 8px;
      @include transition(all 0.35s cubic-bezier(0.26, 0.1, 0.27, 1.55));

      @include mq(s) {
        height: 3px;
      }

      &.top {
        top: 0;
        transform: rotate(0deg);
      }

      &.middle {
        top: 50%;
        transform: translateY(-50%);
      }

      &.bottom {
        bottom: 0;
      }
    }
  }

  .menu-burger-btn.open {
    .top {
      transform: rotate(45deg);
      top: 40%;
    }

    .middle,
    .bottom {
      transform: rotate(-45deg);
      top: 40%;
    }
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
</style>