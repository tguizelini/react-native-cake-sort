import colors from '../../values/colors'
import sizes from '../../values/sizes'

const container = {
  paddingTop: 13,
  paddingBottom: 13,
  paddingLeft: 50,
  paddingRight: 50,
  borderRadius: 50
}

const label = {
  fontSize: sizes.font.button,
  textAlign: 'center',
  //fontWeight: 'bold'
}

const styles = {
  default: {
    container: {
      ...container,
      backgroundColor: colors.primary,
    },
    label: {
      ...label,
      color: colors.background
    }
  },
  primary: {
    container: {
      ...container,
      backgroundColor: colors.accent,
    },
    label: {
      ...label,
      color: colors.background
    }
  },
  container: {
    ...container,
    backgroundColor: colors.accent,
  },
  label: {
    color: colors.background,
    fontSize: sizes.font.button,
    textAlign: 'center',
    fontWeight: 'bold'
  }
}

export default styles
