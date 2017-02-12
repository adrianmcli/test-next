import React from 'react'
import { Provider } from 'react-redux'

import { reducers, initStore } from '../redux'

export default class Component extends React.Component {
  constructor (props) {
    super(props)
    this.store = initStore(reducers, props.initialState, props.isServer)
  }

  render () {
    return (
      <Provider store={this.store}>
        { this.props.children }
      </Provider>
    )
  }
}
