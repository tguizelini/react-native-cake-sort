import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const mathSmall = 2
const mathBig = 2

const defaultSizes = {
  elements: {
    margin: {
      editText: -12,
      dropDown: 14,
      spinner: 6,
      button: 14,
      title: 23
    }
  },
  containers: {
    margin: {
      default: 26
    }
  },
  font: {
    text: 16,
    input: 16,
    button: 18,
    title: 26,
    titleBig: 30,
    navbar: 17
  },
  icon: {
    default: 26
  }
}

const deviceSmall = {
  elements: {
    margin: {
      editText: defaultSizes.elements.margin.editText - mathSmall,
      dropDown: defaultSizes.elements.margin.dropDown - mathSmall,
      spinner: defaultSizes.elements.margin.spinner - mathSmall,
      button: defaultSizes.elements.margin.button - mathSmall,
      title: defaultSizes.elements.margin.title - mathSmall,
    }
  },
  containers: {
    margin: {
      default: defaultSizes.containers.margin.default - (mathSmall*3)
    }
  },
  font: {
    text: defaultSizes.font.text - mathSmall,
    input: defaultSizes.font.input - mathSmall,
    button: defaultSizes.font.button - mathSmall,
    title: defaultSizes.font.title - mathSmall,
    titleBig: defaultSizes.font.titleBig - mathSmall,
    navbar: defaultSizes.font.navbar - mathSmall,
  },
  icon: {
    default: defaultSizes.icon.default - mathSmall,
  }
}

const deviceBig = {
  elements: {
    margin: {
      editText: defaultSizes.elements.margin.editText + mathBig,
      dropDown: defaultSizes.elements.margin.dropDown + mathBig,
      spinner: defaultSizes.elements.margin.spinner + mathBig,
      button: defaultSizes.elements.margin.button + mathBig,
      title: defaultSizes.elements.margin.title + mathBig,
    }
  },
  containers: {
    margin: {
      default: defaultSizes.containers.margin.default + (mathBig*3)
    }
  },
  font: {
    text: defaultSizes.font.text + mathBig,
    input: defaultSizes.font.input + mathBig,
    button: defaultSizes.font.button + mathBig,
    title: defaultSizes.font.title + mathSmall,
    titleBig: defaultSizes.font.titleBig - mathBig,
    navbar: defaultSizes.font.navbar + mathBig,
  },
  icon: {
    default: defaultSizes.icon.default + mathBig,
  }
}

const deviceMedium = defaultSizes

let sizes = width >= 360 ? deviceMedium : deviceSmall
sizes = width >= 600 ? deviceBig : sizes

export default sizes
