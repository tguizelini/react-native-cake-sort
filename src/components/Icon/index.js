import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'

import colors from '../../values/colors'
import sizes from '../../values/sizes'

const CustomIcon = ({ icon, color, size, onClick }) => {
  return (
    <Icon 
      name={icon}
      color={color}
      size={size}
      onPress={() => onClick()}
    />
  )
}

CustomIcon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func
}

CustomIcon.defaultProps = {
  icon: 'android',
  color: colors.accent,
  size: sizes.icon.default,
  onClick: () => false
}

export default CustomIcon
