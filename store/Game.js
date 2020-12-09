import Vue from 'vue'

export const state = () => ({
  games: [],
})

export const mutations = {
  setGames(state, games) {
    Vue.set(state, 'games', [...games])
  },

  addGame(state, game) {
    state.games.push(game)
  },

  deleteGameById({games}, id) {
    let i  = games.length
    while(i--) {
      if(games[i].id == id) {
        games.splice(i, 1)
      }
    }
  }
}

export const actions = {
  async fetch({ commit, state, dispatch }) {
    const newCollection = []
    let games = await this.$api.games.fetch({
      sort: [{
        field: 'Date Played',
        direction: 'desc'
      }, {
        field: 'id',
        direction: 'asc'
      }]
    })
    for (const g of games) {
      newCollection.push(g)
    }
    commit('setGames', newCollection)
    return newCollection
  }
}

export const getters = {
  gamesGroupedByDate(state) {
    return state.games.reduce((all, v) => {
      if (!all[v.datePlayed]) {
        all[v.datePlayed] = []
      }
      all[v.datePlayed].push(v)
      return all
    }, {})
  }
}
