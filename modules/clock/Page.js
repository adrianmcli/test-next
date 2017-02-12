import Link from 'next/link'
import { connect } from 'react-redux'
import Clock from './Clock'

const Component = ({ title, lastUpdate, light }) =>
  <div>
    <h1>{title}</h1>
    <Clock lastUpdate={lastUpdate} light={light} />
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/counter"><a>Counter</a></Link></li>
    </ul>
  </div>

export default connect(state => state.clock)(Component)
