import React from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'

import moment from 'moment'

import withLoading from '../../hocs/withLoading'
import LoadingActions from '../../redux/actions/LoadingActions'

import {
  ContainerLinear,
  ActionButton,
  Text,
  Logo,
  Loading
} from '../../components'

import colors from '../../values/colors'

import SorteioService from '../../services/SorteioService'

class SorteioDoDia extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sorteado: {
        id: '',
        data: '',
        nome: ''
      },
      actions: [
        { 
          icon: 'cake',
          color: colors.accent, 
          title: 'Novo sorteio', 
          action: () => this.sortear()
        },
        { 
          icon: 'perm-identity',
          color: colors.accent, 
          title: 'Sorteios', 
          action: () => this.sorteios()
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

  fetchSorteios = async () => {
    const res = await SorteioService.list()

    switch (res.status) {
      case 200:
        const sorteiosDeHoje = []

        console.log('fetchSorteios.res -> ', res)

        if (res.data.length > 0 && res.data != null) {
          const dtHoje = moment().format('DD/MM/YYYY').toString()

          res.data.map(i => {
            if (dtHoje == i.data) {
              sorteiosDeHoje.push(i)
            }
          })

          if (sorteiosDeHoje.length == 0) {
            this.sortear()
            return
          }
        } else {
          this.sortear()
          return
        }

        await this.setState({ sorteado: sorteiosDeHoje[0] })

        console.log('fetchSorteios.sorteiosDeHoje -> ', {
          sorteiosDeHoje,
          state: this.state
        })

        break
      default:
        Alert.alert('', res.message)
        await this.setState({ sorteado: null })
        break
    }
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
  
  sorteios = () => this.props.navigation.navigate('SorteioLista')
  participantes = () => this.props.navigation.navigate('ParticipanteLista')

  render() {
    return (
      <ContainerLinear>
          { this.state.sorteado.nome == '' && 
            <Loading message='Buscando sorteado de hoje..' />
          }
          { this.state.sorteado.nome != '' && 
            <ContainerLinear center>
              <Logo big />
              <Text primary style={{ marginBottom: 5, paddingBottom: 0 }}>{this.state.sorteado.data}</Text>
              <Text noMargin big>{this.state.sorteado.nome}</Text>
            </ContainerLinear>
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

SorteioDoDia = connect(mapStateToProps, mapDispatchToProps)(SorteioDoDia)
export default withLoading(SorteioDoDia)
