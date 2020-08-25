<template>
  <div class="slideshow-ctn relative">
    <h2 class="slideshow-ctn__title">Basic</h2>
    <div
      v-if="displayPrevArrow"
      class="slideshow-ctn__arrow slideshow-ctn__arrow_left"
      @click="swipeLeft"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-chevron-right"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </div>
    <div
      v-if="displayNextArrow"
      class="slideshow-ctn__arrow slideshow-ctn__arrow_right"
      @click="swipeRight"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-chevron-right"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </div>

    <div class="slideshow-ctn__slideshow" ref="content">
      <div v-for="(item, index) in fakeData" :key="index" class="slideshow-ctn__item">
        <CardImage />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import CardImage from "@/components/cards/CardImage.vue";
import CardBasic from "@/components/cards/CardBasic.vue";

@Component({
  components: {
    CardImage,
    CardBasic,
  },
})
export default class SlideshowBasic extends Vue {
  @Prop({ type: String }) public title!: string;
  public fakeData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  public displayPrevArrow: boolean = false;
  public displayNextArrow: boolean = true;
  /*
   * scrollTo - Horizontal Scrolling
   * @param {(HTMLElement ref)} element - Scroll Container
   * @param {number} scrollPixels - pixel to scroll
   * @param {number} duration -  Duration of scrolling animation in millisec
   */
  public scrollTo(
    element: HTMLElement,
    scrollPixels: number,
    duration: number
  ) {
    const scrollPos = element.scrollLeft;
    const content: any = this.$refs.content;
    var vm = this;
    // Condition to check if scrolling is required
    if (
      !(
        (scrollPos === 0 || scrollPixels > 0) &&
        (element.clientWidth + scrollPos === element.scrollWidth ||
          scrollPixels < 0)
      )
    ) {
      // Get the start timestamp
      const startTime =
        "now" in window.performance ? performance.now() : new Date().getTime();
      function scroll(timestamp: number) {
        vm.displayPrevArrow = true;
        // hide arrows
        if (content.scrollLeft === 0) {
          vm.displayPrevArrow = false;
        } else {
          vm.displayPrevArrow = true;
        }
        if (content.scrollLeft + content.clientWidth === content.scrollWidth) {
          vm.displayNextArrow = false;
        } else {
          vm.displayNextArrow = true;
        }
        // Calculate the timeelapsed
        const timeElapsed = timestamp - startTime;
        // Calculate progress
        const progress = Math.min(timeElapsed / duration, 1);
        // Set the scrollLeft
        element.scrollLeft = scrollPos + scrollPixels * progress;
        // Check if elapsed time is less then duration then call the requestAnimation, otherwise exit
        if (timeElapsed < duration) {
          // Request for animation
          window.requestAnimationFrame(scroll);
        } else {
          return;
        }
      }
      // Call requestAnimationFrame on scroll function first time
      window.requestAnimationFrame(scroll);
    }
  }
  private swipeLeft() {
    const content: any = this.$refs.content;
    this.scrollTo(content, -content.clientWidth, 500);
  }
  private swipeRight() {
    const content: any = this.$refs.content;
    this.scrollTo(content, content.clientWidth, 500);
  }
}
</script>


<style lang="scss" scoped>
@import "../../style/index.scss";

.slideshow-ctn {
  margin: auto;
  box-sizing: border-box;
  position: relative;

  @include mq(xxs) {
    max-width: 100%;
  }

  &__slideshow {
    overflow: auto;
    display: flex;
    // margin-left: -10px;
    padding: 1rem 0.1rem;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  &__item {
    flex: 1 0 25%;
    max-width: calc(100% / 4);
    .card {
      max-width: 100%;
      margin: 10px;
    }
    @include mq(xl) {
      max-width: calc(100% / 3);
      flex: 1 0 33.33%;
    }

    @include mq(m) {
      max-width: calc(100% / 2);
      flex: 1 0 50%;
    }

    @include mq(xs) {
      max-width: calc(100%);
      flex: 1 0 90%;
    }
  }
  ::-webkit-scrollbar {
    display: none;
  }

  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    display: none;
  }

  @include mq(xs) {
    width: 100%;
  }

  &__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    padding: 0 20px;
    cursor: pointer;
    @include transition(transform, 0.3s, ease);

    @include mq(xs) {
      display: none;
    }

    &:hover {
      svg {
        transform: scale(1.05);

        polyline {
          color: $primaryDark;
        }
      }
    }

    &_left {
      left: -70px;
    }

    &_right {
      right: -70px;
      margin-left: auto;
    }

    svg {
      width: 70px;
      height: 70px;
      @include transition(transform, 0.3s, ease);

      polyline {
        @include transition(color, 0.3s, ease);
        color: $primary;
      }
    }
  }
}
</style>