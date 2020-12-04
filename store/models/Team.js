/** Model definition file for the Movie Class **/

import store from '../store'

export default class Team {
  constructor(rawData = {}) {
    this.id = rawData.id
    for(let key of rawData.fields) {
      this[key] = rawData[key]
    }
  }

  async getPlayers() {
    if(this.draftPool) {
      return await store.dispatch('player/search', this.drafts[0])
    }
    return Promise.resolve('自由球員')
  }

  async getTeam() {
    let teamId = this.isCaptain? this.teams[0]:this.team[0]
    if(this.teamId) {
      return await store.dispatch('team/read', teamId)
    } else {
      return Promise.resolve({
        name: '自由球員',
        shortName: '自由球員'
      })
    }
  }
}
