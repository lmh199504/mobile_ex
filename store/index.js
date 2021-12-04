

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
  }
}

export const actions = {
  getInfo() {
    return new Promise((resolve, reject) => {
      this.$api.getInfo()
      .then(res => {
        state.userInfo = {}
        resolve()
      })
      .catch(() => {
        reject('')
      })
    })
  }
}

export const getters = {}
