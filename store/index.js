export const state = () => ({
  games: [],
  teams: []
})

export const mutations = {
  setGames (state, games) {
    state.games = games
  },

  setTeams (state, teams) {
    state.teams = teams
  }
}


export const actions = {
  async nuxtServerInit ({dispatch, commit}, {req}) {
    console.log('nuxtServerInit called')
    await dispatch('fetchGames', {
      sort: [{
        field: 'Date Played',
        direction: 'desc'
      }]
    })
    await dispatch('fetchTeams')
  },

  async fetchGames ({commit}, options) {
    let games = await this.$api.games.index(options)
    commit('setGames', games)
    return games
  },

  async fetchTeams ({commit}) {
    let teams = await this.$api.teams.index()
    commit('setTeams', teams)
    return teams
  }
}

export const getters = {
  gamesGroupedByDate(state) {
    return state.games.reduce((all, v) => {
      if(!all[v.datePlayed]) {
        all[v.datePlayed] = []
      }
       all[v.datePlayed].push(v)
      return all
    }, {})
  },

  teamsGroupedById(state) {
    return state.teams.reduce((all, v) => {
      all[v.id] = v
      return all
    }, {})
  }
}