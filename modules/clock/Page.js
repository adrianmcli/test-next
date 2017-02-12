import Link from 'next/link'
import { connect } from 'react-redux'
import Clock from './Clock'

const Component = ({ title, lastUpdate, light }) =>
  <div>
    <h1>{title}</h1>
    <Clock lastUpdate={lastUpdate} light={light} />
    <nav>
      <Link href="/"><a>Home</a></Link>
    </nav>
  </div>

export default connect(state => state.clock)(Component)
