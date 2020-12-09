import cloneDeep from 'lodash/cloneDeep'

export const state = () => ({
  players: [],
})

export const mutations = {
  setPlayers(state, players) {
    state.players = players
  },

  addPlayer(state, player) {
    state.players.push(player)
  },

  deletePlayerById({ players }, id) {
    let i = players.length
    while (i--) {
      if (players[i].id == id) {
        players.splice(i, 1)
      }
    }
  }
}

export const actions = {
  async fetch({ commit }) {
    const newCollection = []
    let players = await this.$api.players.fetch()
    for (const p of players) {
      newCollection.push(p)
    }
    commit('setPlayers', newCollection)
    return newCollection
  },

  async read({ commit, state, getters }, id) {
    if (getters.playersGroupedById.hasOwnProperty(id)) {
      return Promise.resolve(getters.playersGroupedById[id])
    }

    let player = await this.$api.players.read(id)
    commit('addPlayer', player)
    return player
  },
}

export const getters = {
  playersGroupedById(state, { teamsGroupedById }) {
    return state.players.reduce((all, v) => {
      all[v.id] = cloneDeep(v)
      return all
    }, {})
  }
}
