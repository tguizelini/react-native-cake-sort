import React from 'react'
import { connect } from 'react-redux'
import { Alert } from 'react-native'

import {
  ContainerScroll,
  ContainerLinear,
  EditText,
  Button,
  Text
} from '../../components'

import withLoading from '../../hocs/withLoading'
import LoadingActions from '../../redux/actions/LoadingActions'

import ParticipanteService from '../../services/ParticipanteService'

class ParticipanteForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nome: '',
      login: '',
      senha: ''
    }

    this.save = this.save.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange = (type, value) => {
    switch (type) {
      case 'nome':
        this.setState({ nome: value })
        break
      case 'login':
        this.setState({ login: value })
        break
      case 'senha':
        this.setState({ senha: value })
        break
    }
  }

  save = async () => {
    const payload = {
      nome: this.state.nome,
      login: this.state.login,
      senha: this.state.senha
    }

    this.props.action.Loading.setStatus(true)
    this.props.action.Loading.setMessage('Salvando..')

    const res = await ParticipanteService.save(payload)

    this.props.action.Loading.setStatus(false)

    switch (res.status) {
      case 200: 
        Alert.alert('', 'Participante criado com sucesso')
        this.props.navigation.pop()
        break
      default: 
        Alert.alert('', res.message)
        break
    }
  }

  render() {
    return (
      <ContainerScroll>
        <Text primary big center>Cadastro</Text>

        <ContainerLinear margin center vertical weight={2}>
          
          <EditText 
            holder='Nome'
            value={this.state.nome} 
            onChange={value => this.onChange('nome', value)} 
          />

          <EditText
            holder='Login' 
            value={this.state.login} 
            onChange={value => this.onChange('login', value)} 
          />
          
          <EditText 
            password
            holder='Senha' 
            value={this.state.senha} 
            onChange={value => this.onChange('senha', value)} 
          />

        </ContainerLinear>

        <ContainerLinear margin center horizontal weight={1}>
          
          <Button 
            label='Salvar'
            onClick={this.save}
          />

        </ContainerLinear>
      </ContainerScroll>
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

export default withLoading( connect(mapStateToProps, mapDispatchToProps)(ParticipanteForm) )
