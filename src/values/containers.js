import sizes from './sizes'
import colors from './colors'

const containerMain = { 
  padding: sizes.containers.margin.default
}

const containerDefault = {
  flex: 1,
  backgroundColor: colors.background
}

const containerScroll = { 
  flexGrow: 1,
  backgroundColor: colors.background
}

const containerBottom = {
  flex: 1,
  justifyContent: 'flex-end',
  backgroundColor: colors.background
}

const containerEnd = {
  flex: 1,
  alignItems: 'flex-end'
}

const containerRow = {
  flex: 1,
  flexDirection: 'row',
  backgroundColor: colors.background
}

const containerCenterVertical = {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: colors.background
}

const containerCenterHorizontalTop = {
  flex: 1,
  alignItems: 'center',
  backgroundColor: colors.background
}

const containerCenter = {
  flex: 1, 
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.background
}

const containerCardView = {
  padding: 16,
  backgroundColor: 'red',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'stretch',
  minHeight: 56,
  margin: 4,
  borderRadius: 2,
  elevation: 2,
  shadowRadius: 2,
  shadowOpacity: 0.3,
  backgroundColor: colors.background,
  shadowOffset: {
    width: 0,
    height: 2,
  },
}

const containerGrid = {
  ...containerDefault,
  alignItems: 'flex-start',
  flexDirection: 'row',
  flexWrap: 'wrap'
}

const containers = {
  containerMain,
  containerDefault,
  containerScroll,
  containerBottom,
  containerEnd,
  containerRow,
  containerCenterVertical,
  containerCenterHorizontalTop,
  containerCenter,
  containerCardView,
  containerGrid
}

export default containers
