import React from 'react'
import {
  TouchableOpacity,
  Text
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './custom.styles'
import sizes from '../../values/sizes'

const Button = ({ 
  margin, 
  primary, 
  disabled, 
  label, 
  onClick, 
  containerStyle, 
  labelStyle 
}) => {
  let sty = styles.default.container
  let lbl = styles.default.label

  sty = primary ? styles.primary.container : sty
  lbl = primary ? styles.primary.label : lbl

  sty = { ...sty, ...containerStyle }
  lbl = { ...lbl, ...labelStyle }

  sty = !margin ? sty : { 
    ...sty, 
    marginTop: sizes.elements.margin.button 
  }

  sty = disabled ? { ...sty, opacity: 0.5 } : sty

  return (
    <TouchableOpacity 
      style={sty} 
      onPress={() => disabled ? false : onClick()}
    >
      <Text style={lbl}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  margin: PropTypes.bool,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  containerStyle: PropTypes.object,
  labelStyle: PropTypes.object
}

Button.defaultProps = {
  margin: false,
  primary: false,
  disabled: false,
  label: 'Button',
  onClick: () => alert('onClick prop called'),
  containerStyle: {},
  labelStyle: {}
}

export default Button
