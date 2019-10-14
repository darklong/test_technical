import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from '../reducers'
import testMiddleWare from './testMiddleWare'

// const store = createStore (rootReducers,applyMiddleware(thunk, testMiddleWare))
const store = createStore (rootReducers,applyMiddleware(thunk))


export default store