import axios from 'axios'
import endpoints from '../helpers/http/endpoints'
import headers from '../helpers/http/headers'

import ResponseModel from '../models/ResponseModel'

const list = () => new Promise(resolve => {
  axios.get(endpoints.participantes.list, headers)
    .then(res => {
      const response = ResponseModel()

      response.status = res.response.data.status
      response.message = res.response.data.message
      response.data = res.response.data.data

      resolve(response)
    })
    .catch(err => {
      const response = ResponseModel()

      response.status = err.response.data
      response.message = err.response.data.message
      response.data = err.response.data

      console.log('ERROR: ParticipanteService.list => ', response)
      resolve(response)
    })
})

const save = obj => new Promise(resolve => {
  axios.post(endpoints.participantes.save, obj, headers)
    .then(res => {
      const response = ResponseModel()

      response.status = res.response.data.status
      response.message = res.response.data.message
      response.data = res.response.data.data

      resolve(response)
    })
    .catch(err => {
      const response = ResponseModel()

      response.status = err.response.data
      response.message = err.response.data.message
      response.data = err.response.data

      console.log('ERROR: ParticipanteService.save => ', response)
      resolve(response)
    })
})


const del = id => new Promise(resolve => {
  axios.delete(endpoints.participantes.delete + id, headers)
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

      console.log('ERROR: ParticipanteService.delete => ', response)
      resolve(response)
    })
})

const ParticipanteService = {
  list,
  save,
  delete: del
}

export default ParticipanteService
