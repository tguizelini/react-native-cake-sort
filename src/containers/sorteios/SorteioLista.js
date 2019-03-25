import React from 'react'
import { Alert } from 'react-native'

import {
  ContainerLinear,
  ListView,
  Loading
} from '../../components'

import SorteioService from '../../services/SorteioService'

class SorteioLista extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.fetchSorteios()
  }

  fetchSorteios = async () => {
    const res = await SorteioService.list()

    switch (res.status) {
      case 200:
        const sorteios = []

        if (res.data.length > 0 && res.data != null) {
          res.data.map(i => {
            sorteios.push(i)
          })
        }

        await this.setState({ items: sorteios })
        break
      default:
        Alert.alert('', res.message)
        await this.setState({ items: [] })
        break
    }
  }
  
  render() {
    return (
      <ContainerLinear center>
          { this.state.items.length == 0 && 
            <Loading message='Buscando sorteado de hoje..' />
          }
          { this.state.items.length > 0 && 
            <ListView.View
              type={ListView.Type.EVENTO}
              items={this.state.items}
            />
          }
      </ContainerLinear>
    )
  } 
}

export default SorteioLista
