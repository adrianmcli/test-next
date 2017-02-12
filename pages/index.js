import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default () =>
  <div>
    <Head>
      <title>Home Page</title>
    </Head>
    <h1>Welcome to the Home page</h1>
    <ul>
      <li><Link href="/clock"><a>Clock</a></Link></li>
      <li><Link href="/counter"><a>Counter</a></Link></li>
    </ul>
  </div>
