<template>
  <div class="buttons wrapper">
      <h1>Buttons</h1>
      <FunctionalButton @click="log" class="test">
          test
      </FunctionalButton>

      <!-- <button @click="log" class="test">test</button> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";

import FunctionalButton from "@/components/buttons/Button.vue";
@Component({
  components: {
    FunctionalButton,
  }
})
export default class Buttons extends Vue {
  public log = () => {
    console.log('clicked')
  }
}
</script>

<style lang="scss" scoped>

</style>

