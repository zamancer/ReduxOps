import * as actionTypes from './actionTypes'

// This is a lookup table
export const initialState = {
}

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case actionTypes.EXPORT_ARTPIECES_LOAD_ARTPIECES:    
            return Object.assign({}, state, action.payload)
        default:
            return state
    }
}
