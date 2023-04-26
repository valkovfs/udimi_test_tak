export const state = () => ({
  projects: [],
  errorMessage: '',
})

export const mutations = {
  setProjects(state, projects) {
    state.projects = projects
  },
  setErrorMessage(state, message) {
    state.errorMessage = message
  },
}

export const actions = {
  async fetchProjects({ commit }) {
    try {
      const response = await this.$axios.get('projects-manage/index?filters[is_active]=1&sort=dta_create', {
        headers: {
          'Authorization': `Bearer ${this.$cookies.get('token')}`,
        }
      })
      commit('setProjects', response.data.projects)
    } catch (error) {
    }
  },
  async updateProject({ commit, dispatch }, { id, name }) {
    try {
      await this.$axios.post(`projects-manage/update?id=${id}`, {
          name
        },
        {
          headers: {
            'Authorization': `Bearer ${this.$cookies.get('token')}`,
          },
        })
      commit('setErrorMessage', '')
      dispatch('fetchProjects')
    } catch (error) {
      if (error) {
        commit('setErrorMessage', error.response.data.first_errors.name)
      }
    }
  },
  async clearErrorMessage({commit}) {
    commit('setErrorMessage', '')
  }
}

export const getters = {
  projects: (state) => state.projects,
  errorMessage: (state) => state.errorMessage
}
