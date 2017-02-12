import React from 'react'
import Link from 'next/link'

export default () =>
  <div>
    <h1>Welcome to the Home page</h1>
    <ul>
      <li><Link href="/clock"><a>Clock</a></Link></li>
      <li><Link href="/counter"><a>Counter</a></Link></li>
    </ul>
  </div>
