import axios from 'axios'

const HOST = ""

export default {
  get(url, params = {}) {

    return axios.get(HOST + url, {
      params: {
        ...params
      },
      headers: {
        'token': cookie.get('token') || ''
      }
    }).then((response) => {
      return checkResponse(response.data)
    })
  },
  post(url, params = {}) {

    return axios.post(HOST + url, {
      ...params
    }, {
      headers: {
        'token': cookie.get('token') || ''
      }
    }).then((response) => {
      return checkResponse(response.data)
    })
  },
}
