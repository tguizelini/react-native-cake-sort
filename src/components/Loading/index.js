import React from 'react'
import PropTypes from 'prop-types'

import { 
  ContainerLinear,
  Spinner,
  Text
} from '../'

const Loading = ({ message }) => (
  <ContainerLinear center>
    <Text>{message}</Text>
    <Spinner />
  </ContainerLinear>
)

Loading.propTypes = {
  message: PropTypes.string
}

Loading.defaultProps = {
  message: 'Loading message'
}

export default Loading
