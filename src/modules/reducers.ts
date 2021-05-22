import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

export default (history: any) =>
  combineReducers({
    router: connectRouter(history),
  })