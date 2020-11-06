import createRepository from '~/api/Repository'
import axios from 'axios'
import qs from 'qs'

const airtable = axios.create({
  baseURL: `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/`,
  headers: {'Authorization': `Bearer ${process.env.AIRTABLE_KEY}`},
  paramsSerializer(params) {
    return qs.stringify(params, { arrayFormat: 'indices' })
  }
})

airtable.interceptors.request.use(function (config) {
  // Do something before request is sent
  // console.dir(config)
  console.log(airtable.getUri(config))
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


export default (ctx, inject) => {
  const airtableRepository = createRepository(airtable)

  const repositories = {
    teams: airtableRepository('Teams'),
    games: airtableRepository('Games'),
    players: airtableRepository('Players')
    //...
  }

  inject('api', repositories)
}