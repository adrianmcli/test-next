import React from 'react'
import ReduxProvider from '../modules/redux/ReduxProvider'
import ClockPage from '../modules/clock/Page'

export default () =>
  <ReduxProvider>
    <ClockPage />
  </ReduxProvider>
