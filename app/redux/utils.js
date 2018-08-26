import { AsyncStorage } from 'react-native'

export const getToken = () =>
AsyncStorage.getItem('cashair_token')

export const setToken = (token) =>
AsyncStorage.setItem('cashair_token', token)

export const unsetToken = () =>
AsyncStorage.removeItem('cashair_token')