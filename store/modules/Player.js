import cloneDeep from 'lodash/cloneDeep'
import Player from '../models/Player'

export const state = () => ({
  players: [],
})

export const mutations = {
  setPlayers (state, players) {
    state.players = players
  }
}

export const actions = {
  async fetch ({commit}) {
    const newCollection = []
    let players = await this.$api.players.index()
    for (const p of players) {
      newCollection.push(new Player(p))
    }
    commit('setPlayers', newCollection)
    return newCollection
  },

  async read ({commit, getters}, id) {
    if(getters.playersGroupedById.hasOwnProperty(id)) {
      return Promise.resolve(getters.playersGroupedById[id])
    }
  },
}

export const getters = {
  playersGroupedById(state, {teamsGroupedById}) {
    return state.players.reduce((all, v) => {
      all[v.id] = cloneDeep(v)
      return all
    }, {})
  }
}