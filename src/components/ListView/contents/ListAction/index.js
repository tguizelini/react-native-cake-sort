import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { 
  ContainerLinear, 
  Text,
  Icon
} from '../../../'

import styles from './styles'

class ListAction extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ContainerLinear row style={styles.container}>
      
        <ContainerLinear margin center vertical weight={1}>
          <Text 
            noMargin 
            style={styles.participanteText}
          >
              {this.props.nome}
            </Text>

          <Text 
            noMargin 
            style={styles.sorteioText}
          >
            Sorteado {this.props.sorteios} vezes
          </Text>
        </ContainerLinear>

        <ContainerLinear margin center weight={0} onClick={() => this.props.onDeleteClick(this.props.id)}>
          <Icon icon='delete' color='red' onClick={() => this.props.onDeleteClick(this.props.id)}  />
        </ContainerLinear>

      </ContainerLinear>
    )
  }
}

ListAction.propTypes = {
  onDeleteClick: PropTypes.func,
  id: PropTypes.number,
  sorteios: PropTypes.number,
  nome: PropTypes.string
}

ListAction.defaultProps = {
  onDeleteClick: id => false,
  id: 0,
  sorteios: 0,
  nome: 'Tiago Guizelini'
}

export default ListAction
