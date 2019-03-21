import React from 'react'
import { AsyncStorage } from "react-native"

import strings from '../../values/strings'

import constants from './constants'

const getItem = async (key) => {
  try {
    const ret = await AsyncStorage.getItem(key)
    const value = JSON.stringify(ret)
    return value

  } catch (error) {
    errorHandler(strings.error.cache.get, key, error, data)
    return false
  }
}

const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
    return true

  } catch (error) {
    errorHandler(strings.error.cache.set, key, error, data)
    return false
  }
}

const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key, JSON.stringify(value))
    return true

  } catch (error) {
    errorHandler(strings.error.cache.remove, key, error, data)
    return false
  }
}

const errorHandler = (title, key, error, data) => {
  const obj = {
    title,
    key,
    error,
    data
  }

  console.log(obj.title, obj)
}

const CacheHelper = {
  getItem,
  setItem,
  removeItem
}

export const CacheKeys = constants
export default CacheHelper
