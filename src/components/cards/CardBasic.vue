<template>
  <div class="card">
    <div class="card__content">
      <IconHeart />
      <h3>title</h3>
      <h4>subtitle</h4>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import IconHeart from "@/assets/heart.svg";
@Component({
  components: {
    IconHeart,
  },
})
export default class CardBasic extends Vue {}
</script>

<style lang="scss" scoped>
@import "../../style/index.scss";

.card {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 10px;
  margin-right: 0px;
  @include rounded;
  @include box-shadow();
  position: relative;
  flex: 1 0 25%;
  max-width: calc(100% / 4 - 10px);
  color: $black;
  @include mq(xl) {
    max-width: calc(100% / 3 - 10px);
    flex: 1 0 33.33%;
  }

  @include mq(l) {
    max-width: calc(100% / 2 - 10px);
    flex: 1 0 50%;
  }

  @include mq(xs) {
    max-width: calc(100%);
    flex: 1 0 90%;
  }

  &__content {
    box-sizing: border-box;
    background-color: $white;
    @include rounded;
    padding: 1.5rem;
    position: relative;
    svg {
      position: absolute;
      top: 5px;
      right: 5px;
      width: 30px;
      height: 30px;
      fill: $grey-med;
      cursor: pointer;
      @include transition(fill 0.3s ease);
      &.favorite {
        fill: $primary;
        path {
          fill: $primary;
        }
      }
      &:hover {
        fill: $primary;
      }
    }
    &_text {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &_title {
      padding-right: 20px;
    }
  }
}
</style>
