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

    it('should update template properties', () => {
        const resultState = {
            allTemplates: {
                "10000": {
                    id: 10000,
                    name: 'My first template',
                    logo: 'image1.png',
                    logoPosition: "",
                    background: "",
                    backgroundPosition: "",
                    lineColor: ""
                }
            },
            currentTemplate: {
                id: 10000,
                name: 'My first template',
                logo: 'image1.png',
                logoPosition: "",
                background: "",
                backgroundPosition: "",
                lineColor: ""
            }
        }

        Reducer(theReducer).expect({
            type: actionTypes.TEMPLATES_SAVE_EXPORT_TEMPLATE,
            payload: {
                id: 10000,
                name: 'My first template',
                logo: 'image1.png'
            }
        }).toReturnState(resultState)
    })

    it('should update a template property', () => {
        const resultState = {
            currentTemplate: {
                id: "",
                name: "Name for this Template",
                logo: "",
                logoPosition: "",
                background: "",
                backgroundPosition: "",
                lineColor: ""
            },
            allTemplates: {}
        }

        Reducer(theReducer).expect({
            type: actionTypes.TEMPLATES_UPDATE_CURRENT_TEMPLATE,
            payload: {
                name: "Name for this Template"
            }
        }).toReturnState(resultState)
    })

    it('should update a set of template properties', () => {
        const resultState = {
            currentTemplate: {
                id: "4000",
                name: "Name for this Template",
                logo: "somelogo.png",
                logoPosition: "top-upper-corner",
                background: "",
                backgroundPosition: "",
                lineColor: ""
            },
            allTemplates: {}
        }

        Reducer(theReducer).expect({
            type: actionTypes.TEMPLATES_UPDATE_CURRENT_TEMPLATE,
            payload: {
                id: "4000",
                name: "Name for this Template",
                logo: "somelogo.png",
                logoPosition: "top-upper-corner"
            }
        }).toReturnState(resultState)
    })
})