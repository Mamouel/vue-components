<template>
  <modal>
    <h3 slot="header"></h3>
    <div slot="body" class="alert">{{message}}</div>
    <div slot="footer">
      <button class="btn" @click="$emit('close')">OK</button>
    </div>
  </modal>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import Modal from "@/components/popups/Modal.vue";
@Component({
  components: {
    Modal,
  },
})
export default class AlertModal extends Vue {
  @Prop({ type: String }) public message!: string;
}
</script>

<style lang="scss" scoped>
@import "@/style/index.scss";

.alert {
  color: $black
}
</style>