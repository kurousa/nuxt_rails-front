export const state = () => ({
  loggedIn: true,
  styles: {
    beforeLogin: {
      appBarHeight: 56
    }
  },
  current: {
    project: null
  },
  projects: [
    { id: 1, name: 'MyProject01', updatedAt: '2021-04-22T00:00+09:00' },
    { id: 2, name: 'MyProject02', updatedAt: '2021-04-22T00:00+09:00' },
    { id: 3, name: 'MyProject03', updatedAt: '2021-04-24T00:00+09:00' },
    { id: 4, name: 'MyProject04', updatedAt: '2021-04-25T00:00+09:00' },
    { id: 5, name: 'MyProject05', updatedAt: '2021-04-26T00:00+09:00' }
  ]
})

export const getters = {}

export const mutations = {
  setLoggedIn (state, payload) {
    state.loggedIn = payload
  }
}

export const actions = {
  login ({ commit }) {
    commit('setLoggedIn', true)
  },
  logout ({ commit }) {
    commit('setLoggedIn', false)
  }
}
