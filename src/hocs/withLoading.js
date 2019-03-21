import React from 'react'
import { connect } from 'react-redux'

import { Loading } from '../components'

const withLoading = (WrappedComponent) => {
  class WithLoading extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return this.props.status ?
          <Loading message={this.props.message} />
        :
          <WrappedComponent {...this.props} />
    }
  }

  const mapStateToProps = state => ({
    status: state.LoadingReducer.status,
    message: state.LoadingReducer.message
  })

  return connect(mapStateToProps, {})(WithLoading)
}

export default withLoading
