import Head from 'next/head'
import Link from 'next/link'
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
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/clock"><a>Clock</a></Link></li>
    </ul>
  </div>
