<template>
  <div class="banner w1 relative">
    <h1 class="banner__title">
      <span class="banner__title_thin" >{{ titleOne }}</span>
      <span class="banner__title_bold" >{{ titleTwo }}</span>
    </h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
@Component({})
export default class Banner extends Vue {
  @Prop({ type: String }) private titleOne!: string;
  @Prop({ type: String }) private titleTwo!: string;
}
</script>

<style lang="scss" scoped>
@import "../../style/index.scss";

.banner {
  // background-image: url("~@/assets/banner.jpg");
  min-height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  &__title {
    display: flex;
    flex-direction: column;

    &_thin,
    &_bold {
      @include transition(transform, 0.5s, ease);
    }

    &_thin {
      @include font(72px, normal, 75px);
      color: $primary;

      @include mq(l) {
        @include font(48px, normal, 50px);
      }
    }

    &_bold {
      @include font(72px, bold, 75px);
      color: $primaryLight;
      @include mq(l) {
        @include font(48px, normal, 50px);
      }
    }
  }
}
</style>