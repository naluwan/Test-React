import { createStore, applyMiddleware } from 'redux'
import { itemReducer } from './reducer.js'
import thunk from 'redux-thunk'

const itemStore = createStore(itemReducer, applyMiddleware(thunk))

export { itemStore }
