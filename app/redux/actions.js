import { AsyncStorage, NativeModules } from 'react-native'
import { setToken, getToken, unsetToken } from './utils'

export const GET_TRANSACTIONS_SUCCESS = 'transactions/fetch_success'
export const GET_TRANSACTIONS_ERROR = 'transactions/fetch_error'
export const CREATE_TRANSACTION_SUCCESS = 'transactions/create_success'
export const CREATE_TRANSACTION_ERROR = 'transactions/create_error'
export const AUTHENTICATE_USER_SUCCESS = 'user/auth_success'
export const AUTHENTICATE_USER_ERROR = 'user/auth_error'
export const CLEAR_AUTH_STATUS = 'user/clear_auth_status'
export const TOGGLE_MENU = 'menu/toggle'
export const AWAIT_RESPONSE = 'response/await'

export const awaitResponse = () => {
  return {
    type: AWAIT_RESPONSE
  }
}

export const toggleMenu = () => {
  return {
    type: TOGGLE_MENU
  }
}

export const clearAuthStatus = () => {
  unsetToken()
  return {
    type: CLEAR_AUTH_STATUS
  }
}

export const createTransaction = (type, details) => {
  return (dispatch) => {
    dispatch({
      type: AWAIT_RESPONSE
    })
    getToken()
    .then(token =>
      fetch('https://us-central1-cashair-c6ad0.cloudfunctions.net/cashair/transaction', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: token
        },
        body: JSON.stringify({
          type,
          ...details
        })
      })
    )
    .then(response =>
      (response.ok) ?
      response.json() : Promise.reject(response)
    )
    .then((responseJSON) => {
      dispatch({
        type: CREATE_TRANSACTION_SUCCESS,
        transaction: responseJSON.transaction
      })
      dispatch(awaitResponse())
      NativeModules.AlertDialog.show("success")
    })
    .catch((error) => {
      dispatch({
        type: CREATE_TRANSACTION_ERROR,
        error
      })
      dispatch(awaitResponse())
      NativeModules.AlertDialog.show("failure")
    })
  }
}

export const getTransactions = () => {
  return (dispatch) => {
    dispatch({
      type: AWAIT_RESPONSE
    })
    getToken()
    .then(token =>
      fetch('https://us-central1-cashair-c6ad0.cloudfunctions.net/cashair/transaction', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: token
        }
      })
    )
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      const error = Error()
      error.response = response
      throw error
    })
    .then((transactions) => {
      const transactionArray = Object.keys(transactions)
      .map((transactionId) => {
        return { id: transactionId, ...transactions[transactionId] }
      })
      dispatch({
        type: GET_TRANSACTIONS_SUCCESS,
        transactions: transactionArray
      })
      dispatch(awaitResponse())
    })
    .catch((error) => {
      dispatch({
        type: GET_TRANSACTIONS_ERROR,
        error
      })
      dispatch(awaitResponse())
    })
  }
}

export const authenticateUser = ({ email, secretKey }) => {
  return (dispatch) => {
    dispatch({
      type: AWAIT_RESPONSE
    })
    fetch('https://us-central1-cashair-c6ad0.cloudfunctions.net/cashair/user/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        secretKey,
      })
    })
    .then(response =>
      (response.ok) ?
      response.json() : Promise.reject(response)
    )
    .then((responseJSON) => {
      setToken(responseJSON.token)
      dispatch({
        type: AUTHENTICATE_USER_SUCCESS,
        token: responseJSON.token
      })
      dispatch(awaitResponse())
    })
    .catch((error) => {
      dispatch({
        type: AUTHENTICATE_USER_ERROR,
        error: error
      })
      dispatch(awaitResponse())
    })
  }
}

