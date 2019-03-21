import { Alert } from 'react-native'

const collectionValidation = res => {
  switch(res.status) {
    case 200: 
      return res.data
    case 201: 
      return res.data
    case 403:
      Alert.alert('', res.message)
      return []
    case 404:
      Alert.alert('', res.message)
      return []
    default: 
      Alert.alert('', res.message)
      return []
  }
}

const HttpHelper = {
  collectionValidation
}

export default HttpHelper
