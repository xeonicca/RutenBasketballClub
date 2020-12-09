export default class Game {
  constructor(rawData = {}, store) {
    // console.log('game created', store)
    for(let key of Object.keys(rawData)) {
      this[key] = rawData[key]
    }
    this.rawData = rawData
    this.store = store
  }

  async getFirstTeam() {
    if(this.firstTeam) {
      return await this.store.dispatch('Team/read', this.firstTeam[0])
    }
    return Promise.resolve({})
  }

  async getSecondTeam() {
    if(this.secondTeam) {
      return await this.store.dispatch('Team/read', this.secondTeam[0])
    }
    return Promise.resolve({})
  }

  async getWinningTeam() {
    if(this.winningTeam) {
      return await this.store.dispatch('Team/read', this.winningTeam[0])
    }
    return Promise.resolve({})
  }
}
