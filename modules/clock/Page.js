import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import Clock from './Clock'

import { startClock } from './index'

const mapDispatchToProps = (dispatch) => ({
  startClock: () => dispatch(startClock())
})

class Component extends React.Component {
  componentDidMount () {
    this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render() {
    const {title, lastUpdate, light} = this.props
    return (
      <div>
        <h1>{title}</h1>
        <Clock lastUpdate={lastUpdate} light={light} />
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/counter"><a>Counter</a></Link></li>
        </ul>
      </div>
    )
  }
}

export default connect(state => state.clock, mapDispatchToProps)(Component)
