import * as actionTypes from './actionTypes'

export const initialState = {
    // HERE YOU STATE THE INITIAL STATE
}

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        // HERE YOU INCLUDED ANY NEEDED CASE BASED OFF actionTypes. 
        // E.g.
        // case actionTypes.ACTION_CONSTANT:
        //     return state.map(n => n);
        default:
            return state;
    }
}

// SELECTORS

// HERE YOU INCLUDE YOU SELECTOR FUNCTION.
// E.g.
// export function getSpecificDataFromState() {
//     return state.specific;
// }
