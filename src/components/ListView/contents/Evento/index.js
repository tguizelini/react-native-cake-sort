import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ImageBackground } from 'react-native'
import banner from '../../../../../assets/bolo.jpg'

import { 
  ContainerLinear, 
  Text
} from '../../../'

import styles from './styles'

class Evento extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick = () => this.props.onItemClick()

  render() {
    return (
      <ContainerLinear 
        center
        style={styles.container}
        onClick={() => this.onClick()}
      >

      <ImageBackground style={styles.containerBanner} source={banner}>

        <ContainerLinear center style={styles.containerInfo} onClick={() => this.onClick()}>
          <Text style={styles.dataText}>{this.props.data}</Text>
          <Text style={styles.participanteText}>{this.props.participante}</Text>
        </ContainerLinear>
        
      </ImageBackground>
  
      </ContainerLinear>
    )
  }
}

Evento.propTypes = {
  onItemClick: PropTypes.func,
  id: PropTypes.number,
  data: PropTypes.string,
  participante: PropTypes.string
}

Evento.defaultProps = {
  onItemClick: () => false,
  id: 0,
  data: '22/12/2019',
  participante: 'Tiago Guizelini'
}

export default Evento
