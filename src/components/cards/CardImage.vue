<template>
  <div class="card">
    <div class="card__image">
      <div class="card__image_overlay">
        <div class="card__image_overlay_avatar"></div>
        <div class="card__image_overlay_author">username</div>
      </div>
    </div>
    <div class="card__content card-content">
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

  &:hover {
    .card__image_overlay {
      opacity: 1;
      visibility: visible;
      height: 100%;

      &_avatar {
        opacity: 1;
        visibility: visible;
        height: 100px;
      }
    }
  }

  &__image {
    overflow: hidden;
    position: relative;
    height: 200px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    @include background;

    &_overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      z-index: 10;
      background-color: transparentize($color: $black, $amount: 0.4);
      opacity: 0;
      visibility: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      @include transition(
        opacity 0.3s ease,
        visibility 0.3s ease,
        height 0.3s ease
      );
      &_avatar {
        width: 100px;
        height: 0;
        border-radius: 50%;
        margin: 0 auto;
        z-index: 100;
        opacity: 0;
        visibility: hidden;
        @include background;
        @include transition(
        opacity 1s ease,
        visibility 1s ease,
        height 0.3s ease
      );
      }
      &_author {
        z-index: 100;
        color: $white;
        @include font(16px, bold, 20px);
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      }
    }
  }

  &__content {
    box-sizing: border-box;
    background-color: $white;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}

.card-content {
  padding: 1.5rem;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  position: relative;

  svg {
    position: absolute;
    cursor: pointer;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    fill: $grey-med;
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
</style>