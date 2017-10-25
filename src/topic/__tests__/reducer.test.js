import { Reducer } from 'redux-testkit'
import theReducer, { initialState } from '../reducer'
import * as actionTypes from '../actionTypes'

describe('Topic Reducer', () => {
    it('should have initial state', () => {
        expect(theReducer()).toEqual(initialState)
    })

    it('should not affect state', () => {
        Reducer(theReducer).expect({
            type: 'NOT_EXISTING_TYPE'
        }).toReturnState(initialState)
    })

    // Rest of tests...
    // it('should attend action', () => {
    //     const resultState = {}
    //     Reducer(theReducer).expect({
    //         type: actionTypes.ACTION,
    //         payload: 'something'
    //     }).toReturnState(resultState)
    // })
})
