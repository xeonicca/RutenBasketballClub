import { AvatarGenerator } from 'random-avatar-generator'
const generator = new AvatarGenerator()

export default class Player {
  constructor(rawData = {}, store) {
    for(let key of Object.keys(rawData)) {
      this[key] = rawData[key]
    }
    this.store = store
    this.rawData = rawData

    // avatar url shortcut
    this.imageUrl = this.getImageUrl()
  }

  async getDraft() {
    if(this.draftPool === 'no') {
      return await this.store.dispatch('Draft/read', this.drafts[0])
    }
    return Promise.resolve('自由球員')
  }

  async getTeam() {
    if(this.draftPool === 'no') {
      return Promise.resolve({
        name: '自由球員',
        shortName: '自由球員'
      })
    }

    let teamId = this.isCaptain? this.teams[0]:this.team[0]

    return await this.store.dispatch('Team/read', teamId)
  }

  getImageUrl() {
    if(this.image && this.image.length) {
      return this.image[0].url
    }
    return generator.generateRandomAvatar(this.id);
  }

  toJSON() {
    return this.rawData
  }
}
