import React from 'react'
import { Text } from 'react-native'
import PropType from 'prop-types'

import styles from './styles'
import sizes from '../../values/sizes'
import colors from '../../values/colors'

const TextCustom = ({ 
  children, 
  numberOfLines, 
  onClick, 
  noMargin, 
  style, 
  title, 
  center,
  big,
  primary
}) => {
  let sty = styles.textDefault

  sty = title ? styles.title : sty
  sty = center ? { ...sty, textAlign: 'center' } : sty

  sty = big ? { ...sty, fontSize: sizes.font.titleBig } : sty

  sty = noMargin ? { ...sty, marginTop: 0, marginBottom: 0 } : sty

  sty = title ? 
      primary ? { 
        ...sty, color: colors.accent 
      } : { 
        ...sty, color: colors.primary
      }
    :
      sty

  sty = primary ? { 
    ...sty, color: colors.accent 
  } : sty

  sty = { ...sty, ...style }

  let nrLines = numberOfLines
  nrLines = center ? 
      null 
    : 
      nrLines > 0 ? nrLines : null

  return (
    <Text style={sty} numberOfLines={nrLines} onPress={() => onClick()}>
      {children}
    </Text>
  )
}

TextCustom.propTypes = {
  children: PropType.node,
  numberOfLines: PropType.number,
  onClick: PropType.func,
  style: PropType.object,
  title: PropType.bool,
  noMargin: PropType.bool,
  center: PropType.bool,
  big: PropType.bool,
  primary: PropType.bool
}

TextCustom.defaultProps = {
  children: 'Lorem Ipsum',
  numberOfLines: 0,
  onClick: () => false,
  style: {},
  title: false,
  noMargin: false,
  center: false,
  big: false,
  primary: false
}

export default TextCustom
