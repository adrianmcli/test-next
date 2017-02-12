import React from 'react'
import { Provider } from 'react-redux'

import { startClock } from '../clock'
import { reducers, initStore } from '../redux'

export default class Component extends React.Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(reducers, null, isServer)
    store.dispatch({ type: 'TICK', light: !isServer, ts: Date.now() })
    return { initialState: store.getState(), isServer }
  }

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
