import actionTypes from '../actions/actionTypes'

const INITIAL_STATE = { 
  status: false,
  message: 'Loading..'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.loading.setStatus:
      return { ...state, status: action.value }
    case actionTypes.loading.setMessage:
      return { ...state, message: action.value }
    default: 
      return state
  }
}
