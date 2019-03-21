import colors from '../../values/colors'
import sizes from '../../values/sizes'

const textDefault = {
  color: colors.primaryDark,
  backgroundColor: 'transparent',
  fontSize: sizes.font.text,
  marginBottom: sizes.elements.margin.title,
  marginTop: sizes.elements.margin.title
}

const title = {
  ...textDefault,
  fontSize: sizes.font.title,
  color: colors.primary,
  fontWeight: 'bold'
}

const styles = {
  textDefault,
  title
}

export default styles
