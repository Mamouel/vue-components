interface StateType {
    isLoading: boolean;
    lang: string;
  }
  
  const initialState: StateType = {
    isLoading: false,
    lang: "en",
  };
  
  const getters = {
    getStateLoading: (state: StateType) => state.isLoading,
    getLang: (state: StateType) => state.lang,
  };
  
  const actions = {
    toggleLang({ commit }: any, value: string) {
      commit("setLang", value);
    },
  };
  
  const mutations = {
    setStateLoading: (state: StateType, loading: boolean) =>
      (state.isLoading = loading),
    setLang: (state: StateType, value: string) => (state.lang = value),
  };
  
  export const lang = {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations,
  };
  