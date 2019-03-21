import React from 'react'
import {
  View,
  Image
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const Logo = ({ small, medium, big }) => {
  let imageStyle = styles.image.big
  
  imageStyle = (small && !medium && !big) ? 
    styles.image.small : imageStyle

  imageStyle = (!small && medium && !big) ? 
    styles.image.medium : imageStyle

  imageStyle = (!small && !medium && big) ? 
    styles.image.big : imageStyle

  return (
    <View style={styles.container}>
      <Image 
        small
        source={require('../../../assets/logo.png')}
        style={imageStyle} 
      />
    </View>
  )
}

Logo.propTypes = {
  small: PropTypes.bool,
  medium: PropTypes.bool,
  big: PropTypes.bool
}

Logo.defaultTypes = {
  small: false,
  medium: false,
  big: false
}

export default Logo
