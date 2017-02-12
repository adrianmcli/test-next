import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import combinedReducers from './combinedReducers'

export const reducers = combinedReducers

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
