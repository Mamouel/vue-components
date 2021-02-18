<template>
  <div class="inputs view wrapper">
    <AlertModal
      v-if="showAlertModal"
      @close="showAlertModal = false"
      :message="alertMsg"
    />
    <h1>{{ text[0][getLang] }}</h1>
    <h2>{{ text[1][getLang] }}</h2>
    <div class="inputs__ctn flex">
      <InputCustom
        autocomplete="off"
        name="Title"
        type="text"
        required="required"
        placeholder="Title"
        :value.sync="title"
      />
      <InputCustom
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
        autocomplete="off"
        name="Title"
        type="range"
        required="required"
        :value.sync="rangeValue"
      />
      <span>{{ rangeValue }}%</span>
    </div>
    <h2>{{ text[3][getLang] }}</h2>

    <div class="inputs__ctn flex flex_between">
      <SelectCustom
        name="Category"
        autocomplete="off"
        type="text"
        required="required"
        :value.sync="selected"
        :options="customSelectOptions"
      />
      <span>{{ selected }}</span>
    </div>
    <h2>{{ text[4][getLang] }}</h2>

    <div class="inputs__ctn flex flex_evenly">
      <label for="file" class="btn-text btn-text_secondary">{{
        btnText[getLang]
      }}</label>
      <input
        id="file"
        type="file"
        class="file-input"
        :class="getTheme ? 'dark' : 'light'"
        accept=".jpg, .png, .jpeg, .gif"
        name="image"
        ref="fileInput"
        @input="upload($event.target.files)"
      />
    </div>
    <div class="flex flex-between">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        class="file-input__preview"
      />
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";

import InputCustom from "@/components/inputs/InputCustom.vue";
import SelectCustom from "@/components/inputs/SelectCustom.vue";
import AlertModal from "@/components/popups/AlertModal.vue";

@Component({
  components: {
    InputCustom,
    SelectCustom,
    AlertModal,
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

  private btnText: Object = {
    en: "Add image",
    fr: "Ajouter",
  };

  private alertText: Object[] = [
    {
      max: {
        en: "You can't load more images",
        fr: "",
      },
      invalid: {
        en: "Add image",
        fr: "Ajouter",
      },
    },
  ];

  private searchword: string = "";
  private title: string = "";
  private firstname: string = "";
  private alertMsg: string = "";
  private rangeValue: string = "50";
  private images: any = [];
  private selected: string = "";
  private showAlertModal: boolean = false;
  private customSelectOptions: object[] = [
    { option: "cat1", value: "cat1" },
    { option: "cat2", value: "cat2" },
    { option: "cat3", value: "cat3" },
    { option: "cat4", value: "cat4" },
  ];
  public upload = (files: FileList) => {
    console.log(files[0].type)
    if (files && this.images.length < 2) {
      // const input = this.$refs.fileInput;
      const reader = new FileReader();
      const that = this;
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          that.images.push(e.target.result);
        }
      };
      reader.readAsDataURL(files[0]);
    } else {
      this.images.length === 2
        ? this.handleAlertMsg("Max files")
        : this.handleAlertMsg("Invalid file");

      console.log(this.images.length);

    }
  };
  public handleAlertMsg (msg: string) {
    this.showAlertModal = true;
    this.alertMsg = msg;
    console.log(this.showAlertModal)
  };
}
</script>

<style lang="scss" scoped>
@import "../style/index.scss";

// .inputs {
//   &__ctn {

//   }
// }

.file-input {
  display: none;
  &__preview {
    margin-top: 50px;
    width: 50%;
    max-height: 300px;
  }
}
</style>
