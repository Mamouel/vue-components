interface StateType {
    isLoading: boolean;
    theme: boolean;
  }
  
  const initialState: StateType = {
    isLoading: false,
    theme: true,
  };
  
  const getters = {
    getStateLoading: (state: StateType) => state.isLoading,
    getTheme: (state: StateType) => state.theme,
  };
  
  const actions = {
    toggleTheme({ commit }: any, value: boolean) {
      commit("setTheme", value);
    },
  };
  
  const mutations = {
    setStateLoading: (state: StateType, loading: boolean) =>
      (state.isLoading = loading),
    setTheme: (state: StateType, value: boolean) => (state.theme = value),
  };
  
  export const theme = {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations,
  };