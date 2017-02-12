import React from 'react'
import Head from 'next/head'

import { Provider } from 'react-redux'
import { reducers, initStore } from '../modules/redux'

import ClockPage from '../modules/clock/Page'

export default class Component extends React.Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(reducers, { clock: null }, isServer)
    store.dispatch({ type: 'TICK', light: !isServer, ts: Date.now() })
    return { initialState: store.getState(), isServer }
  }

  constructor (props) {
    super(props)
    this.store = initStore(reducers, props.initialState, props.isServer)
  }

  render () {
    return (
      <div>
        <Head>
          <title>Clock Page</title>
        </Head>
        <Provider store={this.store}>
          <ClockPage />
        </Provider>
    </div>
    )
  }
}
