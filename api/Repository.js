import camelCase from 'lodash/camelCase'

export default axios => (resource) => ({
  fetch(options = null, view = 'Grid view') {
    return axios.get(resource, {
      params: options
    }).then(({data}) => {
      let records = data.records || []
      // console.dir(records)
      return records.map(({id, createdTime, fields}) => {
        fields = Object.keys(fields).reduce((all, v) => {
          all[camelCase(v)] = fields[v]
          return all
        }, {})
        return {
          id,
          createdTime,
          ...fields
        }
      })
    })
  }

  read(id) {
    return axios.get(resource + '/' + id).then(({data}) => {
      if(!data) return null
      // console.dir(records)
      let result = Object.keys(fields).reduce((all, v) => {
        all[camelCase(v)] = fields[v]
        return all
      }, {})
      result.id = data.id
      return result
    })
  }

  search(options) {
    return this.fetch(options)
  }
 })
