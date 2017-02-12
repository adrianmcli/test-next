import React from 'react'
import ReduxProvider from '../modules/redux/ReduxProvider'
import Page from '../modules/counter/Page'

export default () =>
  <ReduxProvider>
    <Page title='Counter Page' linkTo='/' />
  </ReduxProvider>
