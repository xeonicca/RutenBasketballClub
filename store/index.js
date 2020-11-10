export const state = () => ({
  games: [],
  teams: [],
  players: []
})

export const mutations = {
  setGames (state, games) {
    state.games = games
  },

  setTeams (state, teams) {
    state.teams = teams
  },

  setPlayers (state, players) {
    state.players = players
  }
}


export const actions = {
  async nuxtServerInit ({dispatch, commit}, {req}) {
    console.log('nuxtServerInit called')
    return Promise.all([
      dispatch('fetchGames', {
        sort: [{
          field: 'Date Played',
          direction: 'desc'
        }]
      }),
      dispatch('fetchTeams'),
      dispatch('fetchPlayers')
    ])
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
  },

  async fetchPlayers ({commit}) {
    let players = await this.$api.players.index()
    commit('setPlayers', players)
    return players
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
  },

  playerGroupedById(state, {teamsGroupedById}) {
    return state.players.reduce((all, v) => {
      all[v.id] = v
      all[v.id]['teamDetail'] = teamsGroupedById[v.team[0]] || {}
      return all
    }, {})
  }
}