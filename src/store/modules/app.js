import { createAction, handleActions } from 'redux-actions'
import * as types from '../constants'
import immutable from 'immutability-helper'

export const appStart = createAction(types.APP_START)
export const appClear = createAction(types.APP_CLEAR)
export const appPlayerFlag = createAction(types.APP_PLAYER_FLAG)

const defaultState = {
    start: false,
    flag: false
}

export default handleActions({
    [types.APP_START]: state => immutable(state, { 
        start: { 
            $set: true 
        }
    }),
    [types.APP_CLEAR]: _ => defaultState,
    [types.APP_PLAYER_FLAG]: state => {

        const { flag } = state

        return immutable(state, {
            flag: {
                $set: !flag
            }
        })

    },
}, defaultState)