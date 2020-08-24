interface StateType {
  isLoading: boolean;
  menuOpen: boolean;
}

const initialState: StateType = {
  isLoading: false,
  menuOpen: false,
};

const getters = {
  getStateLoading: (state: StateType) => state.isLoading,
  getMenuOpen: (state: StateType) => state.menuOpen,
};

const actions = {
  toggleMenu({ commit }: any, value: boolean) {
    commit("setMenu", value);
  },
};

const mutations = {
  setStateLoading: (state: StateType, loading: boolean) =>
    (state.isLoading = loading),
  setMenu: (state: StateType, value: boolean) => (state.menuOpen = value),
};

export const menu = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};

// import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
// @Module({ namespaced: true, name: 'menu' })
// class Menu extends VuexModule {
//   public menuOpen: boolean = false;
//   @Mutation
//   public setMenu(value: boolean): void {
//     this.menuOpen = value
//   }
//   @Action
//   public toggleMenu(value: boolean): void {
//     this.context.commit('setMenu', value)
//   }
// }
// export default Menu
