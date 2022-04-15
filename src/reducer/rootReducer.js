import { combineReducers } from 'redux'
import { reducerAuth } from './reducerAuth'
import { reducerCounter } from './reducerCounter'


export const rootReducer = combineReducers({
    Auth: reducerAuth,
    redCounter: reducerCounter
})