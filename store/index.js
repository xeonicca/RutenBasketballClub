// import Vuex from 'vuex'
import cloneDeep from 'lodash/cloneDeep'

export const state = () => ({
  drafts: []
})

export const mutations = {
  setDrafts (state, drafts) {
    state.drafts = drafts
  },
}

export const actions = {
  async nuxtServerInit ({state, dispatch, commit}, {req}) {
    await dispatch('Game/fetch')
  },

//   async fetchGames ({commit}, options) {
//     let games = await this.$api.games.index(options)
//     commit('setGames', games)
//     return games
//   },

//   async fetchTeams ({commit}) {
//     let teams = await this.$api.teams.index()
//     commit('setTeams', teams)
//     return teams
//   },

//   async fetchPlayers ({commit}) {
//     let players = await this.$api.players.index()
//     commit('setPlayers', players)
//     return players
//   },

  async fetchDrafts ({commit, state}) {
    if(state.drafts.length) {
      return Promise.resolve(state.drafts)
    }

    let drafts = await this.$api.drafts.fetch()
    commit('setDrafts', drafts)
    return drafts
  }
}

export const getters = {
  draftsGroupedByPlayerId(state) {
    return state.drafts.reduce((all, v) => {
      all[v.player[0]] = cloneDeep(v)
      return all
    }, {})
  }
}

// const createStore = () => {
//   return new Vuex.Store({
//     state,
//     mutations,
//     actions,
//     getters
//   })
// }
