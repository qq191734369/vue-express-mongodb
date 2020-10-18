export const userModule = {
  state: {
    userId: null,
    userName: 'Zyl'
  },
  mutations: {
    updateUserId (state, payload) {
      state.userId = payload.userId
    }
  },
  actions: {
    getUserId({ commit }) {
      // get userId from backend
      return new Promise((resolve, reject) => {
        commit('updateUserId')
        resolve()
      })
    }
  }
}