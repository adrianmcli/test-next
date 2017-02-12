import Link from 'next/link'
import { connect } from 'react-redux'
import Counter from './Counter'

const Component = ({ title, linkTo }) =>
  <div>
    <h1>{title}</h1>
    <Counter />
    <nav>
      <Link href="/"><a>Home</a></Link>
    </nav>
  </div>

export default connect(state => state)(Component)
