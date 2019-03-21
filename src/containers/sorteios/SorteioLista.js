import React from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'

import withLoading from '../../hocs/withLoading'
import LoadingActions from '../../redux/actions/LoadingActions'

import {
  ContainerLinear,
  ListView,
  ActionButton,
  Text
} from '../../components'

import colors from '../../values/colors'

import SorteioService from '../../services/SorteioService'

class SorteioLista extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      actions: [
        { 
          icon: 'cake',
          color: colors.accent, 
          title: 'Novo Sortear', 
          action: () => this.sortear()
        },
        { 
          icon: 'perm-identity',
          color: colors.accent, 
          title: 'Participantes', 
          action: () => this.participantes()
        }
      ]
    }

    this.sortear = this.sortear.bind(this)
    this.participantes = this.participantes.bind(this)
  }

  componentDidMount() {
    this.fetchSorteios()
  }


  participantes = () => this.props.navigation.navigate('ParticipanteLista')

  fetchSorteios = async () => {
    //this.props.action.Loading.setStatus(true)
    //this.props.action.Loading.setMessage('Buscando sorteios..')

    const res = await SorteioService.list()

    switch (res.status) {
      case 200:
        this.setState({ items: res.data })
        break
      case 500: 
        Alert.alert('', res.message)
        this.setState({ items: [] })
        break
    }

    //this.props.action.Loading.setStatus(false)
  }
  
  sortear = async () => {
    this.props.action.Loading.setStatus(true)
    this.props.action.Loading.setMessage('Efetuando novo sorteio..')

    const res = await SorteioService.sortear()

    this.props.action.Loading.setStatus(false)

    switch (res.status) {
      case 200:
        this.fetchSorteios()
        break
      default: 
        Alert.alert('', res.message)
        break
    }
  }

  render() {
    return (
      <ContainerLinear>
        { this.state.items.length == 0 ?
            <ContainerLinear center>
              <Text>Nenhum sorteio encontrado</Text>
            </ContainerLinear>
          :
            <ListView.View
              type={ListView.Type.EVENTO}
              items={this.state.items}
            />
        }

        <ActionButton actions={this.state.actions} />
      </ContainerLinear>
    )
  } 
}

const mapStateToProps = state => ({ })

const mapDispatchToProps = dispatch => ({
  action: {
    Loading: {
      setStatus: value => dispatch( LoadingActions.setStatus(value) ),
      setMessage: value => dispatch( LoadingActions.setMessage(value) ),
    }
  }
})

export default withLoading( connect(mapStateToProps, mapDispatchToProps)(SorteioLista) )