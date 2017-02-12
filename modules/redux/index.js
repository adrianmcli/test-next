import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export const reducer = (state = { lastUpdate: 0, light: false }, action) => {
  switch (action.type) {
    case 'TICK': return { lastUpdate: action.ts, light: !!action.light }
    default: return state
  }
}

export const startClock = () => dispatch => {
  return setInterval(() => dispatch({ type: 'TICK', light: true, ts: Date.now() }), 800)
}

let store = null

export const initStore = (reducer, initialState, isServer) => {
  const enhancers = composeWithDevTools(applyMiddleware(thunkMiddleware))
  if (isServer && typeof window === 'undefined') {
    return createStore(reducer, initialState, enhancers)
  } else {
    if (!store) {
      store = createStore(reducer, initialState, enhancers)
    }
    return store
  }
}
