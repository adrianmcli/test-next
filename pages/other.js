import React from 'react'
import ReduxProvider from '../modules/redux/ReduxProvider'
import Page from '../modules/clock/Page'

export default () =>
  <ReduxProvider>
    <Page title='Other Page' linkTo='/' />
  </ReduxProvider>
