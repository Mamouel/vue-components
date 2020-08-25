<template>
  <div class="dropdown">
    <button @click="displayDropdown" class="dropdown__btn btn btn__secondary">click</button>
    <div class="dropdown__ctn" :class="showDropdown ? 'show' : 'hide'">
      <p v-for="(item, index) in fakeData" :key="index">{{ item }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
@Component({})
export default class DropdownBasic extends Vue {
  public showDropdown: boolean = false;
  public fakeData: string[] = ["test", "test", "test"];
  displayDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  close(e: any) {
    if (!this.$el.contains(e.target)) {
      this.showDropdown = false;
    }
  }
  mounted() {
    document.addEventListener("click", this.close);
  }
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/index.scss";
.dropdown {
  position: relative;
  &__btn {
  }
  &__ctn {
    position: absolute;
    left: 10px;
    min-width: 100px;
    background-color: $whitish;
    transition: visibility 0.3s ease, opacity 0.3s ease;
    @include box-shadow;
    &.show {
      visibility: visible;
      opacity: 1;
    }
    &.hide {
      visibility: hidden;
      opacity: 0;
    }
    p {
      margin: 0;
      padding: 10px;
      cursor: pointer;
      &:hover {
        background-color: $greyDark;
      }
    }
  }
}
</style>