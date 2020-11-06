import camelCase from 'lodash/camelCase'

export default axios => (resource) => ({

  index(options = null, view = 'Grid view') {
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
})
