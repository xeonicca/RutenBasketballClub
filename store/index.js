import cloneDeep from 'lodash/cloneDeep'

export const state = () => ({
  games: [],
  teams: [],
  players: [],
  drafts: []
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
  },

  setDrafts (state, drafts) {
    state.drafts = drafts
  },
}


export const actions = {
  async nuxtServerInit ({dispatch, commit}, {req}) {
    // console.log('nuxtServerInit called')
    return Promise.all([
      dispatch('fetchGames', {
        sort: [{
          field: 'Date Played',
          direction: 'desc'
        },{
          field: 'id',
          direction: 'asc'
        }]
      }),
      dispatch('fetchTeams', {
        sort: [{
          field: 'Name',
          direction: 'asc'
        }]
      }),
      dispatch('fetchPlayers'),
      dispatch('fetchDrafts', {
        sort: [{
          field: 'Round',
          direction: 'asc'
        },{
          field: 'Pick',
          direction: 'asc'
        }]
      })
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
  },

  async fetchDrafts ({commit}) {
    let drafts = await this.$api.drafts.index()
    commit('setDrafts', drafts)
    return drafts
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

  teamsStanding(state) {
    let teams = cloneDeep(state.teams)
    teams.sort((a, b) => {
      return b.wonGamesCount - a.wonGamesCount
    })

    return teams.map(v => v.id)
  },

  playerGroupedByName(state, {teamsGroupedById}) {
    return state.players.reduce((all, v) => {
      all[v.name] = cloneDeep(v)
      if(v.teams && v.teams.length) {
        all[v.name]['teamDetail'] = teamsGroupedById[v.teams[0]] || {}
      } else if(v.team && v.team.length) {
        all[v.name]['teamDetail'] = teamsGroupedById[v.team[0]] || {}
      } else {
        all[v.name]['teamDetail'] = {}
      }
      return all
    }, {})
  },

  playerGroupedById(state, {teamsGroupedById}) {
    return state.players.reduce((all, v) => {
      all[v.id] = cloneDeep(v)
      if(v.teams && v.teams.length) {
        all[v.id]['teamDetail'] = teamsGroupedById[v.teams[0]] || {}
      } else if(v.team && v.team.length) {
        all[v.id]['teamDetail'] = teamsGroupedById[v.team[0]] || {}
      } else {
        all[v.id]['teamDetail'] = {}
      }
      return all
    }, {})
  },

  draftsGroupedByPlayerId(state) {
    return state.drafts.reduce((all, v) => {
      all[v.player[0]] = cloneDeep(v)
      return all
    }, {})
  }
}