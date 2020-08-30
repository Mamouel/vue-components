<template>
  <div class="slideshow relative">
    <div class="buttons">
      <button class="btn" @click="removeSlide" :disabled="slides <= 2">Remove Slide</button>
      <button class="btn" @click="addSlide" :disabled="slides >= 10">Add Slide</button>
    </div>
    <div class="slides">
      <div v-for="index in slides" :key="index" :class="index == active ? 'active' : 'unactive'">
        <div v-if="index == active">Slide {{ index }}</div>
      </div>
    </div>
    <span class="prev" @click="move(-1)">
      <IconChevronUp />
    </span>
    <span class="next" @click="move(1)">
      <IconChevronUp />
    </span>
    <ul class="dots">
      <li
        v-for="(dot, index) in slides"
        :key="index"
        :class="{ active: ++index === active }"
        @click="jump(index)"
      ></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import IconChevronUp from "@/assets/chevron-up.svg";

@Component({
  components: {
    IconChevronUp,
  },
})
export default class SlideshowDots extends Vue {
  slides: number = 5;
  active: number = 1;

  move(amount: number) {
    let newActive;
    const newIndex = this.active + amount;
    if (newIndex > this.slides) newActive = 1;
    if (newIndex === 0) newActive = this.slides;
    this.active = newActive || newIndex;
  }
  jump(index: number) {
    this.active = index;
  }
  addSlide() {
    this.slides = this.slides + 1;
  }
  removeSlide() {
    this.slides = this.slides - 1;
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/index.scss";

.prev,
.next {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  transform: translateY(-50%);
  border: 2px solid $grey-dark;
  color: $grey-dark;
  border-radius: 50%;
  cursor: pointer;
  line-height: 48px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  @include transition(
    color 0.2s ease,
    background-color 0.3s ease,
    border 0.3s ease
  );
  svg {
    width: 30px;
    height: 30px;
  }
  &:hover {
    background-color: $whitish;
    color: $black;
    border: 2px solid $black;
  }
}

.prev {
  left: 0;
  margin-left: 25px;

  svg {
    transform: rotate(-90deg);
  }
}

.next {
  right: 0;
  margin-left: auto;
  margin-right: 25px;
  text-indent: 2px;
  svg {
    transform: rotate(90deg);
  }
}

.dots {
  position: fixed;
  display: block;
  width: 100%;
  text-align: center;
  li {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: $primary;
    opacity: 0.2;
    display: inline-block;
    margin: 0 3px;
    cursor: pointer;
    @include transition(
      opacity 0.4s ease-in-out,
      width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    );
    &.active {
      width: 22px;
      opacity: 1;
    }
  }
}
.slideshow {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  .slides {
    font-size: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    width: 100%;
    @include background();
    background-image: url("~@/assets/lake.jpg");
    height: 400px;

    @media (min-width: 600px) {
      font-size: 80px;
    }

    @media (min-width: 900px) {
      font-size: 100px;
    }

    .active {
      @include transition(
        transform 0.5s ease,
        opacity 0.3s ease,
        visibility 0.3s ease,
        left 0.3s ease
      );
      opacity: 1;
      visibility: visible;
    }
    .unactive {
      @include transition(
        transform 0.5s ease,
        opacity 0.3s ease,
        visibility 0.3s ease,
        left 0.3s ease
      );
      opacity: 0;
      visibility: hidden;
    }
  }
}

.buttons {
  position: absolute;
  top: 10px;
  left: 10px;
}

button {
  &:disabled {
    opacity: 0.2;
    cursor: no-drop;
  }
}
</style>