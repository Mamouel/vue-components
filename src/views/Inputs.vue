<template>
  <div class="inputs view wrapper">
    <h1>{{ text[0][getLang] }}</h1>
    <div class="inputs__ctn flex">
      <InputCustom
        className=""
        autocomplete="off"
        name="Title"
        type="text"
        required="required"
        placeholder="Title"
      />
      <InputCustom
        className=""
        autocomplete="off"
        name="Title"
        type="text"
        required="required"
        placeholder="Search"
        btn=true
        btnText="search"
      />
      <InputCustom
        className=""
        autocomplete="off"
        name="Title"
        type="text"
        required="required"
        placeholder="Title"
        withIcon=true
        icon="search"
      />
      <InputCustom
        className=""
        autocomplete="off"
        name="Title"
        type="text"
        required="required"
        placeholder="Title"
        btn=true
        withIcon=true
        icon="search"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";

import InputCustom from "@/components/inputs/InputCustom.vue";

@Component({
  components: {
    InputCustom,
  },
  computed: {
    ...mapGetters("lang", ["getLang"]),
  },
})
export default class Inputs extends Vue {
  private text: Object[] = [
    {
      en: "Inputs",
      fr: "Champs de texte",
    },
  ];
}
</script>

<style lang="scss" scoped>

.inputs {
  &__ctn {
    
  }
}
</style>
