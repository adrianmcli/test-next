import { combineReducers } from 'redux'
import clock from '../clock/reducer'
import counter from '../counter/reducer'

export default combineReducers({
  clock,
  counter
})
