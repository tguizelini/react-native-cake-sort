import sizes from "../../values/sizes";

const paddingDefault = 13

const styles = {
  container: {
    flexDirection: 'row'
  },
  containerWithoutIcon: {
    minWidth: 250,
    flex: 0,
    marginTop: sizes.elements.margin.editText
  },
  containerEditText: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 18
  },
  containerIcon: {
    backgroundColor: 'transparent',
    width: sizes.icon.default,
    marginBottom: paddingDefault + (paddingDefault / 2) - 2
  },
  label: {
    fontSize: sizes.font.input - 4
  },
  padding: paddingDefault
}

export default styles
