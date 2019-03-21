import axios from 'axios'
import endpoints from '../helpers/http/endpoints'
import headers from '../helpers/http/headers'

import ResponseModel from '../models/ResponseModel'

const list = () => new Promise(resolve => {
  axios.get(endpoints.sorteios.list, headers)
    .then(res => {
      const response = ResponseModel()

      response.status = res.response.data.status
      response.message = res.response.data.message
      response.data = res.response.data.data

      resolve(response)
    })
    .catch(err => {
      const response = ResponseModel()

      response.status = err.response.data.status
      response.message = err.response.data.message
      response.data = err.response.data

      console.log('ERROR: SorteioService.list => ', response)
      resolve(response)
    })
})

const sortear = () => new Promise(resolve => {
  axios.get(endpoints.sorteios.next, headers)
    .then(res => {
      const response = ResponseModel()

      response.status = res.response.data.status
      response.message = res.response.data.message
      response.data = res.response.data.data

      resolve(response)
    })
    .catch(err => {
      const response = ResponseModel()

      response.status = err.response.data.status
      response.message = err.response.data.message
      response.data = err.response.data

      console.log('ERROR: SorteioService.save => ', response)
      resolve(response)
    })
})

const SorteioService = {
  list,
  sortear
}

export default SorteioService
