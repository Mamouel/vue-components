<template>
  <modal>
    <div class="disable-background" slot="background" @click="$emit('close')">w</div>
    <h3 slot="header">Title</h3>
    <div slot="body" class="flex justify-around">
      <div class="">
        <div class="btn btn_primary" @click="toggleSearch">Infos</div>
        <div class="btn btn_primary" @click="toggleAddNew">Add new</div>
      </div>
      <transition
        name="expand"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
      >
        <div class="" v-if="search">
          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc
            risus nisi, tempor eu lectus id, elementum ornare metus. Nullam
            ultricies pulvinar augue a vestibulum. Ut sit amet pulvinar justo.
            Aliquam tortor arcu, tristique a mi ac, sollicitudin ornare eros.
            Suspendisse potenti. Maecenas mollis, arcu nec pulvinar efficitur,
            eros diam feugiat eros, vel ornare odio enim lacinia lorem. Cras
            erat turpis, euismod at risus vel, eleifend rhoncus erat. Phasellus
            lacinia tincidunt erat eget condimentum.
          </p>
        </div>
      </transition>
      <transition
        name="expand"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
      >
        <div v-if="addNew" class="">
          <input class="" type="text" placeholder="First name" />
          <input class="" type="text" placeholder="Last name" />
          <input class="" type="email" placeholder="Email" />
        </div>
      </transition>
    </div>
    <div slot="footer" class="flex justify-between">
      <button class="btn btn_secondary" @click="$emit('close')">Cancel</button>
      <button class="btn" @click="$emit('close')">OK</button>
    </div>
  </modal>
</template>

<script lang='ts'>
import { mapActions, mapGetters } from "vuex";
import { Component, Vue } from "vue-property-decorator";
import Modal from "@/components/popups/Modal.vue";
@Component({
  components: {
    Modal,
  },
})
export default class BasicModal extends Vue {
  // public displayCustomersFound: boolean = false;
  // public getStateLoading!: boolean;
  public addNew: boolean = false;
  public search: boolean = false;

  public toggleSearch() {
    this.addNew = false;
    this.search = true;
  }
  public toggleAddNew() {
    this.addNew = true;
    this.search = false;
  }
  public enter(element: any) {
    const width = getComputedStyle(element).width;
    element.style.width = width;
    element.style.position = "absolute";
    element.style.visibility = "hidden";
    element.style.height = "auto";
    const height = getComputedStyle(element).height;
    element.style.width = null;
    element.style.position = null;
    element.style.visibility = null;
    element.style.height = 0;
    // getComputedStyle(element).height;
    setTimeout(() => {
      element.style.height = height;
    });
  }
  public afterEnter(element: any) {
    element.style.height = "auto";
  }
  public leave(element: any) {
    const height = getComputedStyle(element).height;
    element.style.height = height;
    // getComputedStyle(element).height;
    setTimeout(() => {
      element.style.height = 0;
    });
  }
}
</script>

<style lang="scss" scoped>
.expand-enter-active,
.expand-leave-active {
  transition: height 0.2s ease-in-out;
  overflow: hidden;
}
.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>