<template>
  <div class="banner w1" :class="getTheme ? 'dark' : 'light'">
    <h1 class="banner__title">
      <span class="banner__title_thin">{{ titleOne }}</span>
      <span class="banner__title_bold">{{ titleTwo }}</span>
    </h1>
    <div class="banner__sep" :class="getTheme ? 'dark' : 'light'"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
@Component({
  computed: {
    ...mapGetters("theme", ["getTheme", "getStateLoading"]),
    ...mapGetters("lang", ["getLang", "getStateLoading"]),
  }
})
export default class Banner extends Vue {
  @Prop({ type: String }) private titleOne!: string;
  @Prop({ type: String }) private titleTwo!: string;
}
</script>

<style lang="scss" scoped>
@import "../../style/index.scss";

.banner {
  // background-image: url("~@/assets/banner.jpg");
  // min-height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  &.dark {
    background-color: $black;
  }
  &.light {
    background-color: $grey-light;
  }
  &__title {
    display: flex;
    flex-direction: column;
    border-bottom: none;
    padding-top: 80px;
    padding-bottom: 40px;

    &_thin {
      @include font(72px, normal, 75px);
      color: $primary;
      @include mq(l) {
        @include font(48px, normal, 50px);
      }
    }
    &_bold {
      @include font(72px, bold, 75px);
      color: $primary-light;
      @include mq(l) {
        @include font(48px, normal, 50px);
      }
    }
  }
  &__sep {
    position: absolute;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 120px 100vw;
    &.dark {
      border-color: transparent transparent transparent $black;
    }
    &.light {
      border-color: transparent transparent transparent $grey-light;
    }
  }
}
</style>
