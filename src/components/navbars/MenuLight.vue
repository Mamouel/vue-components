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
  margin: 25px 0px;

  &__wrapper {
    width: 100%;
    max-width: 1800px;
    margin: 0;
    height: 100%;
  }


  .search-input {
    margin-right: 20px; 
    &.dark {
      input {
        color: $white;
      }
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
        position: absolute;
        height: 4px;
        width: 100%;
        background-color: $black;
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
}
</style>
