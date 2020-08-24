import Vue from "vue";
import Vuex from "vuex";
import { menu } from "./modules/menu";
import { theme } from "./modules/theme";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    menu,
    theme
  },
});