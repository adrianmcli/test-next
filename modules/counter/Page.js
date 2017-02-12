import Link from 'next/link'
import { connect } from 'react-redux'
import Counter from './Counter'

const Component = ({ title, linkTo }) =>
  <div>
    <h1>{title}</h1>
    <Counter />
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/clock"><a>Clock</a></Link></li>
    </ul>
  </div>

export default connect(state => state)(Component)
