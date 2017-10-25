import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// HERE YOU CAN ADD ANY NEEDED REDUCER
import topicReducer from './topic/reducer'

const reducer = combineReducers({
    // Here you should add (by name) any needed reducers.
    topic: topicReducer
})

export default createStore(
    reducer,
    // This lines allows every 
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)