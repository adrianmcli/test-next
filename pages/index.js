import React from 'react'
import ReduxProvider from '../modules/redux/ReduxProvider'
import Page from '../modules/clock/Page'

export default () =>
  <ReduxProvider>
    <Page title='Index Page' linkTo='/other' />
  </ReduxProvider>
