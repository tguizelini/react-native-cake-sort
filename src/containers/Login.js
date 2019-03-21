import React from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'

import {
  ContainerLinear,
  ContainerScroll,
  Logo,
  EditText,
  Button
} from '../components'

import withLoading from '../hocs/withLoading'

import LoadingActions from '../redux/actions/LoadingActions'

import LoginService from '../services/LoginService'

import sizes from '../values/sizes'
import colors from '../values/colors';

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      login: '',
      senha: ''
    }

    this.login = this.login.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange = (type, value) => {
    switch (type) {
      case 'login':
        this.setState({ login: value })
        break
      case 'senha':
        this.setState({ senha: value })
        break
    }
  }

  fieldValidation = () => {
    if (this.state.login.trim() == '' || this.state.senha.trim() == '' ) {
      Alert.alert('', 'Por favor, preencha todos os campos')
      return false
    }

    return true
  }

  login = async () => { 
    const valid = this.fieldValidation()
    if (!valid) return

    this.props.action.Loading.setStatus(true)
    this.props.action.Loading.setMessage('Efetuando login..')

    const res = await LoginService.login(
      this.state.login, 
      this.state.senha
    )

    this.props.action.Loading.setStatus(false)

    switch (res.status) {
      case 200:
        this.props.navigation.navigate('SorteioLista')
        break
      case 403:
        Alert.alert('', res.message)
        break
      case 500:
        Alert.alert('', res.message)
        break
    }
  }

  render() {
    return (
      <ContainerScroll>
        <ContainerLinear margin>

          <ContainerLinear 
            center weight={1}
            style={styles.containerLogo} 
          >
            <Logo  />
          </ContainerLinear>

          <ContainerLinear weight={1} style={styles.containerForm}>
            <ContainerLinear weight={2} style={styles.containerField}>
              <EditText 
                holder={'Login'}
                value={this.state.login}
                onChange={value => this.onChange('login', value)}
              />

              <EditText 
                password
                holder={'Senha'}
                value={this.state.senha}
                onChange={value => this.onChange('senha', value)}
              />
            </ContainerLinear>

            <ContainerLinear center horizontal weight={2} style={styles.containerButton}>
              <Button 
                label='Entrar'
                onClick={this.login}
              />
            </ContainerLinear>

          </ContainerLinear>

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

const styles = {
  containerLogo: {
    marginTop: sizes.containers.margin.default
  },
  containerForm: {
    marginTop: 0
  },
  containerField: {},
  containerButton: {}
}

export default withLoading( connect(mapStateToProps, mapDispatchToProps)(Login) )
