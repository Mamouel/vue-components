<template>
<div class="home view">
  <Banner :titleOne="text.bannerTitleOne[getLang]" :titleTwo="text.bannerTitleTwo[getLang]" />
  <div class="home__desc wrapper">
    <p v-for="(item, index) in text.description[getLang]" :key="index">
      {{ item }}
    </p>
  </div>
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop
} from "vue-property-decorator";
import {
  mapActions,
  mapGetters
} from "vuex";
import Banner from "@/components/banners/Banner.vue";
@Component({
  components: {
    Banner,
  },
  computed: {
    ...mapGetters("lang", ["getLang", "getStateLoading"]),
  },
})
export default class Home extends Vue {
  public text: Object = {
    bannerTitleOne: {
      en: "VueJS Components",
      fr: "Composants VueJS",
    },
    bannerTitleTwo: {
      en: "",
      fr: "",
    },
    description: {
      en: [
        "Welcome to my vue-components personnal project",
        "All components in this app are made from scratch, with Vue CLI 3, Typescript and SCSS",
        "App state is managed with Vuex",
        "The main purpose of this work is to create a reusable component library",
      ],
      fr: [
        "Bienvenue sur mon projet personnel vue-components",
        "Tous les composants de cette app sont faits de zéro, avec Vue CLI 3, Typescript et SCSS",
        "Vuex est utilisé pour le state management",
        "Le but principal de ce travail est de créer une bibliothèque de composants réutilisables",
      ],
    },
  };
}
</script>

<style lang="scss" scoped>
@import "../style/index.scss";

.home {
  padding-top: $navbarHeight;

  &__desc {
    padding-top: 150px;
  }
}
</style>
