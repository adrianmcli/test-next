import Link from 'next/link'
import { connect } from 'react-redux'
import Counter from './Counter'

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
})

const Component = ({ count, increment, decrement }) => {
  return (
    <div>
      <Counter
        count={count}
        increment={increment}
        decrement={decrement}
      />
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/clock"><a>Clock</a></Link></li>
      </ul>
    </div>
  )
}

export default connect(state => state.counter, mapDispatchToProps)(Component)
