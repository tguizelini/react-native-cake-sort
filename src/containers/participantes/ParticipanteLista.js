import React from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'

import {
  ContainerLinear,
  ListView,
  ActionButton
} from '../../components'

import withLoading from '../../hocs/withLoading'
import LoadingActions from '../../redux/actions/LoadingActions'

import colors from '../../values/colors'

import ParticipanteService from '../../services/ParticipanteService'

class ParticipanteLista extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }

    this.novoParticipante = this.novoParticipante.bind(this)
    this.deletarParticipante = this.deletarParticipante.bind(this)
  }

  componentWillMount() {
    this.fetchParticipantes()
  }

  fetchParticipantes = async () => {
    this.props.action.Loading.setStatus(true)
    this.props.action.Loading.setMessage('Buscando participantes..')

    const res = await ParticipanteService.list()

    this.props.action.Loading.setStatus(false)

    switch (res.status) {
      case 200:
        this.setState({
          items: res.data
        })
        break
      default: 
        Alert.alert('', res.message)
        break
    }
  }

  deletarParticipante = async id => {
    this.props.action.Loading.setStatus(true)
    this.props.action.Loading.setMessage('Excluindo participante..')

    const res = await ParticipanteService.delete(id)

    this.props.action.Loading.setStatus(false)

    switch (res.status) {
      case 200:
        Alert.alert('', 'Participante excluído')
        this.fetchParticipantes()
        break
      default:
        Alert.alert('', res.message)
        break
    }
  }

  novoParticipante = () => this.props.navigation.navigate('ParticipanteForm')
  
  render() {
    return (
      <ContainerLinear>
        <ListView.View
          type={ListView.Type.LIST_ACTION}
          items={this.state.items}
          onDeleteClick={this.deletarParticipante}
        />

        <ActionButton 
          actions={[{ 
            icon: 'perm-identity',
            color: colors.accent, 
            title: 'Novo Participante', 
            action: this.novoParticipante 
          }]} 
        />
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

export default withLoading( connect(mapStateToProps, mapDispatchToProps)(ParticipanteLista) )