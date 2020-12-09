import Vue from 'vue'
import cloneDeep from 'lodash/cloneDeep'

export const state = () => ({
  teams: [],
})

export const mutations = {
  setTeams (state, teams) {
    Vue.set(state, 'teams', [...teams])
  },

  addTeam(state, team) {
    let existed = state.teams.some(v => v.id === team.id)

    if(!existed) {
      state.teams.push(team)
    }
  },

  deleteTeamById({teams}, id) {
    let i  = teams.length
    while(i--) {
      if(teams[i].id == id) {
        teams.splice(i, 1)
      }
    }
  }
}

export const actions = {
  async fetch ({commit, state}) {
    if(state.teams.length) {
      return Promise.resolve(state.teams)
    }

    const newCollection = []
    let teams = await this.$api.teams.fetch({
        sort: [{
          field: 'Name',
          direction: 'asc'
        }]
      })
    for (const t of teams) {
      newCollection.push(t)
    }
    commit('setTeams', newCollection)
    return newCollection
  },

  async read ({commit, getters, state}, id) {
    if(getters.teamsGroupedById.hasOwnProperty(id)) {
      return Promise.resolve(getters.teamsGroupedById[id])
    }

    let team = await this.$api.teams.read(id)
    // commit('addTeam', team)
    return team
  }
}

export const getters = {
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
}