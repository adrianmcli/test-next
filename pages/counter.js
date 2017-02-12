import React from 'react'
import Head from 'next/head'
import ReduxProvider from '../modules/redux/ReduxProvider'
import CounterPage from '../modules/counter/Page'

export default () =>
  <div>
    <Head>
      <title>Counter Page</title>
    </Head>
    <ReduxProvider>
      <CounterPage />
    </ReduxProvider>
  </div>
