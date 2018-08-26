import {
  TOGGLE_MENU,
  GET_TRANSACTIONS_SUCCESS,
  AWAIT_RESPONSE,
  RECIEVE_RESPONSE,
  AUTHENTICATE_USER_SUCCESS,
  CLEAR_AUTH_STATUS,
} from './actions'
import { combineReducers } from 'redux';


const isMenuVisible = (state = false, action) => {
  switch(action.type) {
    case TOGGLE_MENU:
      return !state
    default:
      return state
  }
}

const transactions = (state = [], action) => {
  switch(action.type) {
    case GET_TRANSACTIONS_SUCCESS:
      return action.transactions
    default:
      return state
  }
}

const isAwaitingResponse = (state = false, action) => {
  switch(action.type) {
    case AWAIT_RESPONSE:
      return !state
    default:
      return state
  }
}

const authentication = (state={ isAuth: false, token: "" }, action) => {
  switch(action.type) {
    case AUTHENTICATE_USER_SUCCESS:
      return { isAuth: true, token: action.token }
    case CLEAR_AUTH_STATUS:
      return { isAuth: false, token: "" }
    default:
      return state
  }
}

export default combineReducers({
  isMenuVisible,
  transactions,
  isAwaitingResponse,
  authentication
})