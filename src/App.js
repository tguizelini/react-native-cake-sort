import React from 'react'
import { BackHandler } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './redux/reducers'
import Navigation from './helpers/navigation'

class App extends React.Component {
  componentDidMount() {
    console.disableYellowBox = true
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
  }

  handleBackButton = () => true 

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Navigation />
      </Provider>
    )
  }
}

export default App
