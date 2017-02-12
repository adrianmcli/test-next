import React from 'react'
import Head from 'next/head'
import ReduxProvider from '../modules/redux/ReduxProvider'
import ClockPage from '../modules/clock/Page'

export default () =>
  <div>
    <Head>
      <title>Clock Page</title>
    </Head>
    <ReduxProvider>
      <ClockPage />
    </ReduxProvider>
  </div>
