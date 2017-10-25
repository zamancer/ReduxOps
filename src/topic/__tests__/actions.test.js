import * as actions from '../actions'
import * as actionTypes from '../actionTypes'
import * as selectors from '../reducer'
import { Thunk } from 'redux-testkit'

describe('Topic Actions', () => {

    it('shuold handle simple action dispatching', () => {
        // TODO:
    })

    it('should handle Thunk actions dispatching', () => {
        const dispacthes = Thunk(actions.anAction).execute(actionArg)

        expect(dispacthes.length).toBe(1)
        expect(dispacthes[0].getAction()).toEqual(expectDispatch)
    })
})