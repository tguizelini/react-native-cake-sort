import axios from 'axios'
import endpoints from '../helpers/http/endpoints'
import headers from '../helpers/http/headers'

//import CacheHelper, { CacheKeys } from '../helpers/cache/CacheHelper'

import ResponseModel from '../models/ResponseModel'

const login = (login, senha) => new Promise(resolve => {
  const URL = endpoints.login.auth + login + '/' + senha

  axios.get(URL)
    .then(res => {
      const response = ResponseModel()

      response.status = res.data.status
      response.message = res.data.message
      response.data = res.data.data

      //CacheHelper.setItem(CacheKeys.KEY_USER, JSON.stringify(res.data))
      
      resolve(response)
    })
    .catch(err => {
      const response = ResponseModel()

      response.status = err.response.data.status
      response.message = err.response.data.message
      response.data = err.response.data

      console.log('ERROR: LoginService.login => ', response)
      resolve(response)
    })
})

const LoginService = {
  login
}

export default LoginService
