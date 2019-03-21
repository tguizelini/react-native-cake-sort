import React from 'react'
import { 
  StatusBar,
  View,
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'

import containers from '../../values/containers'

const ContainerLinear = ({ 
  onClick, 
  children, 
  margin, 
  row, 
  style, 
  weight, 
  center, 
  bottom, 
  end,
  vertical, 
  horizontal,
  transparent
}) => {
  styles = getLayoutStyle(
    center, 
    bottom,
    end,
    vertical, 
    horizontal,
    row,
    weight, 
    style
  )

  styles = margin ? {
      ...styles,
      ...containers.containerMain
    }
  : styles

  styles = transparent ? {
      ...styles,
      backgroundColor: 'transparent'
    }
  : styles
  
  if (onClick !== false) {
    return (
      <TouchableOpacity 
        activeOpacity={0.8}
        style={styles} 
        onPress={() => onClick()}
      >
        <StatusBar hidden />
        {children}
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles}>
      <StatusBar hidden />
      {children}
    </View>
  )
}

const getLayoutStyle = (center, bottom, end, vertical, horizontal, row, weight, styleProps) => {
  let sty = containers.containerDefault

  sty = (center && !vertical && !horizontal) ? containers.containerCenter : sty
  sty = (center && vertical && horizontal) ? containers.containerCenter : sty
  
  sty = (center && vertical && !horizontal) ? containers.containerCenterVertical : sty
  sty = (center && !vertical && horizontal) ? containers.containerCenterHorizontalTop : sty
  
  sty = bottom ? containers.containerBottom : sty
  
  sty = row ? containers.containerRow : sty
  
  sty = bottom ? containers.containerBottom : sty
  sty = end ? { ...sty, ...containers.containerEnd } : sty
  sty = { ...sty, ...styleProps, flex: weight }

  return sty
}

let styles = {}

ContainerLinear.propTypes = {
  onClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool
  ]),
  children: PropTypes.node,
  weight: PropTypes.number,
  style: PropTypes.object,
  margin: PropTypes.bool,
  row: PropTypes.bool,
  center: PropTypes.bool,
  bottom: PropTypes.bool,
  end: PropTypes.bool,
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
  transparent: PropTypes.bool
}

ContainerLinear.defaultProps = {
  onClick: false,
  children: null,
  weight: 1,
  style: {},
  margin: false,
  row: false,
  center: false,
  bottom: false,
  end: false,
  vertical: false,
  horizontal: false,
  transparent: false
}

export default ContainerLinear
