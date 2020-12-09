
// import store from '../store'

/*
{
  "id": "rec2oIIDTYg3YKsDm",
  "fields": {
    "Memo": "不要打臉",
    "Team": [
      "recAWOF6HV90OXOpd"
    ],
    "Height": "160~169",
    "CompanyId": "A275",
    "Drafts": [
      "recFC3Td4Tw1mbIzB"
    ],
    "Skype": "xeonicca",
    "Gender": "男",
    "Real Name": "余宗翰",
    "enabled": "true",
    "Number": 8,
    "DraftPool": "yes",
    "Name": "Steve",
    "Image": [{
      "id": "att27s4i4QRou4j8f",
      "url": "https://dl.airtable.com/.attachments/27fcf8d32c20682fcada073b70749d5e/f2c220ad/sticker.png",
      "filename": "sticker.png",
      "size": 17494,
      "type": "image/png",
      "thumbnails": {
        "small": {
          "url": "https://dl.airtable.com/.attachmentThumbnails/ab5845b1159ffb0ca001ec9e3823eba3/1b994435",
          "width": 42,
          "height": 36
        },
        "large": {
          "url": "https://dl.airtable.com/.attachmentThumbnails/832de51cf96e0e7ad89d1067fac16daa/e73e5326",
          "width": 259,
          "height": 224
        },
        "full": {
          "url": "https://dl.airtable.com/.attachmentThumbnails/54683b5470c48e63f2ad85786a552c5c/809a8024",
          "width": 3000,
          "height": 3000
        }
      }
    }],
    "Position": [
      "後衛"
    ],
    "isCaptain": 0
  },
  "createdTime": "2020-11-06T08:50:03.000Z"
}
*/
export default class Player {
  constructor(rawData = {}, store) {
    for(let key of Object.keys(rawData)) {
      this[key] = rawData[key]
    }
    this.store = store
    this.rawData = rawData
  }

  getImageUrl() {
    return this.images.length? this.images[0].url : null
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

  toJSON() {
    return this.rawData
  }
}
