
// import store from '../store'

export default class Team {
  constructor(rawData = {}, store) {
    for(let key of Object.keys(rawData)) {
      this[key] = rawData[key]
    }
    this.store = store
    this.rawData = rawData
  }

  async getPlayers() {
    let promises = []
    if(this.players && this.players.length) {
      this.players.forEach(v => promises.push(this.store.dispatch('Player/read', v)))
    }

    return await Promise.all(promises)
  }

  async getCaptain() {
    if(this.captain && this.captain.length) {
      return await this.store.dispatch('Player/read', this.captain[0])
    }
    return null
  }

  toJSON() {
    return this.rawData
  }
}
