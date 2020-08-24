<template>
  <nav class="navbar" :class="bodyScroll ? 'navbar_scrolled' : ''">
    <div class="navbar__wrapper wrapper flex flex_between">
      <div class="menu-burger" @click="toggleMenu(!getMenuOpen)">
        <div class="menu-burger-btn" :class="getMenuOpen ? 'open' : 'closed'">
          <span class="line top"></span>
          <span class="line middle"></span>
          <span class="line bottom"></span>
        </div>
      </div>
      <div class="search-input input-ctn flex flex_between" style="margin-left: auto">
        <input
          class
          id="main-search"
          autocomplete="off"
          name="Main search"
          type="search"
          required="required"
          placeholder="input, button ..."
        />
      </div>
      <div class="navbar__logo" @click="toggleTheme(!getTheme)">change theme</div>
      <div
        class="navbar__links flex"
        :class="[getMenuOpen ? 'open' : 'closed', getTheme ? 'dark' : 'light']"
      >
        <router-link class="button secondary-btn" to="/">Home</router-link>
        <router-link class="button secondary-btn" to="/buttons">Buttons</router-link>
        <router-link class="button secondary-btn" to="/cards">Cards</router-link>
        <router-link class="button secondary-btn" to="/dropdowns">Dropdowns</router-link>
        <router-link class="button secondary-btn" to="/inputs">Inputs</router-link>
        <router-link class="button secondary-btn" to="/lists">Lists</router-link>
        <router-link class="button secondary-btn" to="/menus">Menus</router-link>
        <router-link class="button secondary-btn" to="/popups">Popups</router-link>
        <router-link class="button secondary-btn" to="/sliders">Sliders</router-link>
        <router-link class="button secondary-btn" to="/slideshows">Slideshows</router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
@Component({
  methods: {
    ...mapActions("menu", ["toggleMenu"]),
    ...mapActions("theme", ["toggleTheme"]),
  },
  computed: {
    ...mapGetters("menu", ["getMenuOpen", "getStateLoading"]),
    ...mapGetters("theme", ["getTheme", "getStateLoading"]),
  },
})
export default class Navbar extends Vue {
  public bodyScroll: boolean = false;
  public displaySearchInput: boolean = false;
  public handleScroll() {
    if (window.scrollY > 0) {
      this.bodyScroll = true;
    } else {
      this.bodyScroll = false;
    }
  }
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
  background-color: $transparentColor;
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: $navbarHeight;
  @include transition(background-color, 0.3s, ease);

  &__wrapper {
    width: 100%;
    max-width: 1800px;
    margin: 0;
    height: 100%;
  }

  &_scrolled {
    background-color: $white;
    @include box-shadow(
      0 0 0 1px rgba(63, 63, 68, 0.05),
      0 1px 3px 0 rgba(63, 63, 68, 0.15)
    );
  }

  &__logo {
    padding: 1rem 2rem;

    img {
      max-width: 9rem;

      @include mq(xs) {
        max-width: 5rem;
      }

      @include mq(l) {
        max-width: 7rem;
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
    @include transition(transform, 0.3s, ease);
    height: 100vh;
    @include box-shadow(
      0 0 0 1px rgba(63, 63, 68, 0.05),
      0 1px 3px 0 rgba(63, 63, 68, 0.15)
    );

    @include mq(xxs) {
      width: 100vw;
    }

    // &.open {
    // }

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
    @include transition(background-color, 0.3s, ease);
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
      @include transition(fill, 0.3s, ease);
    }
  }

  &__search-input {
    margin-right: auto;
  }
}

.menu-burger {
  background: $transparentColor;
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

  @include transition(background-color, 0.3s, ease);

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
      @include transition(all, 0.35s, cubic-bezier(0.26, 0.1, 0.27, 1.55));

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
</style>