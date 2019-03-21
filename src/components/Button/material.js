import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import { 
  TextButton, 
  RaisedTextButton 
} from 'react-native-material-buttons'

import colors from '../../values/colors'
import styles from './material.styles'

const Button = ({ margin, primary, disabled, label, onClick }) => {
  const sty = margin ? 
      { ...styles.container, ...styles.margin} 
    : 
      styles.container

  if (primary) {
    return (
      <View style={sty}>
        <RaisedTextButton 
          color={colors.accent}
          titleColor={colors.background}
          title={label}
          onPress={() => onClick()} 
          disabled={disabled}
          titleStyle={styles.label}
        />
      </View>
    )
  }

  return (
    <View style={sty}>
      <TextButton 
        title={label}
        titleColor={colors.accent}
        onPress={() => onClick()} 
        disabled={disabled}
        titleStyle={styles.labelTextButton}
      />
    </View>
  )
}

Button.propTypes = {
  margin: PropTypes.bool,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  margin: false,
  primary: false,
  disabled: false,
  label: 'Button',
  onClick: () => alert('onClick prop called')
}

export default Button
