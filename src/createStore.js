import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import RootReducer from './reducer'

export const Middlewares = [ReduxThunk]
export const createStoreWithMiddleware = applyMiddleware(...Middlewares)(createStore)
export const store = createStore( RootReducer )
