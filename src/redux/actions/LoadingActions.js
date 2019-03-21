import actionTypes from './actionTypes'

const LoadingActions = {
  setStatus: value => setAction(actionTypes.loading.setStatus, value),
  setMessage: value => setAction(actionTypes.loading.setMessage, value)
}

const setAction = (type, value) => ({ type, value })

export default LoadingActions
