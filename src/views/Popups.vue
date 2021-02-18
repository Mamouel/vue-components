<template>
  <div class="popups view wrapper">
    <h1>{{ text[0][getLang] }}</h1>
    <ButtonRipple class="btn btn_secondary" @propevent="showBasicModal = true">Open Modal</ButtonRipple>
    <div v-if="showBasicModal">
      <BasicModal @close="showBasicModal = false" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import BasicModal from "@/components/popups/BasicModal.vue";
import ButtonRipple from "@/components/buttons/ButtonRipple.vue";

@Component({
  components: {
    BasicModal,
    ButtonRipple
  },
  computed: {
    ...mapGetters("lang", ["getLang"]),
  },
})
export default class Popups extends Vue {
  public showBasicModal: boolean = false;

  private text: Object[] = [
    {
      en: "Popups",
      fr: "Alertes",
    },
  ];
}
</script>

<style lang="scss" scoped>
</style>
