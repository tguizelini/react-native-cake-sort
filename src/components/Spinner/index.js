import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { MaterialIndicator } from 'react-native-indicators'

import styles from './styles'
import colors from '../../values/colors'

const Spinner = ({ color }) => (
  <View style={styles}>
    <MaterialIndicator color={color} />
  </View>
)

Spinner.propTypes = {
  color: PropTypes.string
}

Spinner.defaultProps = {
  color: colors.accent
}

export default Spinner