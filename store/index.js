

export const state = () => ({
  token: '',
  userInfo: {}
})

export const mutations = {
  setToken(state, token) {
    this.app.$cookies.set('ex_token', token)
  },
  logout(state) {
    state.token = ''
    this.app.$cookies.remove('ex_token')
  },
  SET_INFO(state, userInfo) {
    state.userInfo = userInfo
  }
}

export const actions = {
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      this.$api.reqGetInfo()
      .then(res => {
        commit('SET_INFO', res.user)
        resolve()
      })
      .catch(() => {
        reject('')
      })
    })
  }
}

export const getters = {}
