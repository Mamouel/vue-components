<template>
  <div class="accordion">
    <ul class="accordion__list">
      <li class="accordion__item" v-for="index in list" :key="index._id">
        <div
          class="accordion__btn"
          :class="contentVisible === index._id ? 'show' : 'hide'"
          @click="contentVisible === index._id ? contentVisible = '' : contentVisible = index._id"
        >
          {{ index.title }}
          <span>
            <IconChevronUp />
          </span>
        </div>

        <p
          class="accordion__content"
          :class="contentVisible === index._id ? 'show' : 'hide'"
        >{{ index.item }}</p>
      </li>
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
export default class AccordionBasic extends Vue {
  public contentVisible: string = "";
  public list: Object[] = [
    {
      _id: "id1",
      title: "title1",
      item: "item1",
    },
    {
      _id: "id2",
      title: "title2",
      item: "item2",
    },
    {
      _id: "id3",
      title: "title3",
      item: "item3",
    },
    {
      _id: "id4",
      title: "title4",
      item: "item4",
    },
  ];
}
</script>

<style lang="scss" scoped>
@import "../../style/index.scss";

.accordion {
  width: 100%;
  &__list {
    padding: 0;
  }
  &__item {
    list-style: none;
    width: 100%;
  }
  &__btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 15px;
    margin: 0;
    border: 1px solid $grey-light;
    @include font(18px, bold, 18px);
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      svg {
        width: 24px;
        height: 24px;
        transform: rotate(180deg);
        @include transition(transform 0.3s ease);
      }
    }
    &.show {
      svg {
        transform: rotate(0deg);
      }
    }
  }
  &__content {
    visibility: hidden;
    opacity: 0;
    height: 0;
    margin: 0 1px;
    padding: 0;
    // background-color: $grey-med;
    @include transition(
      height 0.1s ease,
      visibility 0.1s ease,
      opacity 0.1s ease,
      padding 0.3s ease
    );
    &.show {
      visibility: visible;
      opacity: 1;
      height: 100%;
      padding: 20px;
    }
  }
}
</style>