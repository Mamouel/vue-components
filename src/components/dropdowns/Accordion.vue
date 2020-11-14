<template>
  <div class="accordion">
    <div v-for="(item, index) in list" :key="index">
      <button class="accordion__section" @click="selected === index ? selected = '' : selected = index">
        Section {{ index + 1 }}
      </button>
      <div class="accordion__panel" :class="index === selected ? 'active' : ''">
        <p>Lorem ipsum...</p>
      </div>
    </div>
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
  public selected: number = -1;
  public list: Object[] = [
    {
      title: "title1",
      item: "Lorem ipsum...",
    },
    {
      title: "title2",
      item: "Lorem ipsum...",
    },
    {
      title: "title3",
      item: "Lorem ipsum...",
    },
    {
      title: "title4",
      item: "Lorem ipsum...",
    },
  ];
}
</script>



<style lang="scss" scoped>
@import "../../style/index.scss";
.accordion {
  margin-top: 100px;
  &__section {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
  }
  &__panel {
    padding: 0 18px;
    height: 0;
    visibility: hidden;
    opacity: 0;
    background-color: $black;
    overflow: hidden;
    @include transition(
      height 0.4s ease,
      visibility 0.3s ease,
      opacity 0.3s ease,
    );
    &.active {
      height: 100px;
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>