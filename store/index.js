export const state = () => ({
  styles: {
    beforeLogin: {
      appBarHeight: 56
    }
  },
  current: {
    project: null,
    user: null
  },
  projects: [
    { id: 1, name: 'MyProject01', updatedAt: '2021-04-22T00:00+09:00' },
    { id: 2, name: 'MyProject02', updatedAt: '2021-04-22T00:00+09:00' },
    { id: 3, name: 'MyProject03', updatedAt: '2021-04-24T00:00+09:00' },
    { id: 4, name: 'MyProject04', updatedAt: '2021-04-25T00:00+09:00' },
    { id: 5, name: 'MyProject05', updatedAt: '2021-04-26T00:00+09:00' }
  ],
  rememberRoute: {
    name: 'index',
    params: {}
  }
})

export const getters = {}

export const mutations = {
  setCurrentProject (state, payload) {
    state.current.project = payload
  },
  setCurrentUser (state, payload) {
    state.current.user = payload
  },
  setRememberRoute (state, payload) {
    state.rememberRoute = payload
  }
}

export const actions = {
  getCurrentProject ({ state,commit }, params) {
    const currentProject = state.projects.find(project => project.id === Number(params.id))
    commit('setCurrentProject', currentProject)
  },
  getCurrentUser ({ commit }, user) {
    commit('setCurrentUser', user)
  },
  getRememberRoute ({ commit }, route) {
    route = route || { name: 'index', params:{} }
    commit('setRememberRoute', { name: route.name, params: route.params })
  }
}
