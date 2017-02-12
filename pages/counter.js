import React from 'react'
import ReduxProvider from '../modules/redux/ReduxProvider'
import CounterPage from '../modules/counter/Page'

export default () =>
  <ReduxProvider>
    <CounterPage />
  </ReduxProvider>
