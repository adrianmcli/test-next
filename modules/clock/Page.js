import Link from 'next/link'
import { connect } from 'react-redux'
import Clock from './Clock'

const Component = ({ title, linkTo, lastUpdate, light }) =>
  <div>
    <h1>{title}</h1>
    <Clock lastUpdate={lastUpdate} light={light} />
    <nav>
      <Link href={linkTo}><a>Navigate</a></Link>
      <Link href="/counter"><a>Counter</a></Link>
    </nav>
  </div>

export default connect(state => state)(Component)
