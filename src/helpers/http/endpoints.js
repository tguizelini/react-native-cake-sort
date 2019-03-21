import { BASE_URL } from './constants'

const login = {
  auth: BASE_URL + '/login/' //:usuario/:senha
}

const participantes = {
  list: BASE_URL + '/participantes',
  save: BASE_URL + '/participantes',
  delete: BASE_URL + '/participantes/' // :id
}

const sorteios = {
  list: BASE_URL + '/sorteios',
  next: BASE_URL + '/sorteios/next'
}

const endpoints = {
  login,
  participantes,
  sorteios
}

export default endpoints