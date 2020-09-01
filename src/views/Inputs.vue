<template>
  <div class="inputs view wrapper">
    <h1>{{ text[0][getLang] }}</h1>
        <h2>{{ text[1][getLang] }}</h2>

    <div class="inputs__ctn flex">
      <InputCustom
        class
        autocomplete="off"
        name="Title"
        type="text"
        required="required"
        placeholder="Title"
        :value.sync="title"
      />
      <InputCustom
        class
        autocomplete="off"
        name="Firstname"
        type="text"
        required="required"
        placeholder="Firstname"
        btn="true"
        btnText="search"
        :value.sync="firstname"
      />
      <InputCustom
        class
        autocomplete="off"
        name="Search"
        type="text"
        required="required"
        placeholder="Search"
        withIcon="true"
        icon="search"
        :value.sync="searchword"
      />
      <InputCustom
        class
        autocomplete="off"
        name="Search"
        type="text"
        required="required"
        placeholder="Search"
        btn="true"
        withIcon="true"
        icon="search"
        :value.sync="searchword"
      />
      <span>{{ searchword }}</span>
    </div>
    <h2>{{ text[2][getLang] }}</h2>

    <div class="inputs__ctn flex">
      <InputCustom
        class
        autocomplete="off"
        name="Title"
        type="range"
        required="required"
        :value.sync="rangeValue"
      />
      <span>{{ rangeValue }}</span>
    </div>
    <h2>{{ text[3][getLang] }}</h2>

    <div class="input-ctn flex flex_between">
      <select name="Category" v-model="selected" :class="getTheme ? 'dark' : 'light'">
        <option value selected disabled>Catégorie</option>
        <option value="Cat1">Cat1</option>
        <option value="Cat2">Cat2</option>
        <option value="Cat3">Cat3</option>
        <option value="Cat4">Cat4</option>
        <option value="Cat5">Cat5</option>
      </select>
      <span>{{selected}}</span>
    </div>
    <h2>{{ text[4][getLang] }}</h2>

    <div class="input-ctn flex flex_between">
      <input
        type="file"
        class="file-input"
        :class="getTheme ? 'dark' : 'light'"
        accept="image/*"
        name="image"
        ref="fileInput"
        @input="upload($event.target.files)"
      />
    </div>
    <div class="flex flex_evenly">
      <div v-for="(image, index) in images" :key="index">
        <img :src="image" style="max-height: 200px" />
      </div>
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
    ...mapGetters("theme", ["getTheme"]),

  },
})
export default class Inputs extends Vue {
  private text: Object[] = [
    {
      en: "Inputs",
      fr: "Champs de texte",
    },
    {
      en: "Form inputs",
      fr: "Champs de formulaires",
    },
    {
      en: "Range",
      fr: "Curseurs",
    },
    {
      en: "Select",
      fr: "Sélection",
    },
    {
      en: "File upload with preview",
      fr: "Sélection image avec prévisualisation",
    },

  ];
  private searchword: string = "";
  private title: string = "";
  private firstname: string = "";
  private rangeValue: string = "50";
  private images: any = [];
  private selected: string = "";
  public upload = (files: any) => {
    const input = this.$refs.fileInput;
    // this.image = files[0];
    const reader = new FileReader();
    const that = this;
    reader.onload = (e: any) => {
      that.images.push(e.target.result);
    };
    reader.readAsDataURL(files[0]);
  };
}
</script>

<style lang="scss" scoped>
.inputs {
  &__ctn {
  }
}
</style>
