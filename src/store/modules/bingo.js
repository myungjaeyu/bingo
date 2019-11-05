import { createAction, handleActions } from 'redux-actions'
import * as types from '../constants'
import immutable from 'immutability-helper'

import getBingo from '../../services/getBingo'

export const bingoRender = createAction(types.BINGO_RENDER)
export const bingoClear = createAction(types.BINGO_CLEAR)
export const bingoCellPaint = createAction(types.BINGO_CELL_PAINT)
export const bingoCheck = createAction(types.BINGO_CHECK)

const player = { cells: [], paints: [], bingo: [] }

const defaultState = {
    player1: player,
    player2: player
}

export default handleActions({
    [types.BINGO_RENDER]: state => {

        const cells = [], paints = []
        const shuffle = arr => arr.sort(_ => 0.5 - Math.random()).slice()

        while (cells.length !== 25) {

            cells.push(cells.length + 1)
            paints.push(false)

        }

        return immutable(state, {
            player1: {
                cells: {
                    $set: shuffle(cells)
                },
                paints: {
                    $set: paints
                }
            },
            player2: {
                cells: {
                    $set: shuffle(cells)
                },
                paints: {
                    $set: paints
                }
            }
        })

    },
    [types.BINGO_CLEAR]: _ => defaultState,
    [types.BINGO_CELL_PAINT]: (state, { payload }) => {

        const index = {
            PLAYER1 : state.player1.cells.indexOf(payload),
            PLAYER2 : state.player2.cells.indexOf(payload)
        }

        return immutable(state, {

            player1: {
                paints: {
                    [index.PLAYER1]: {
                        $set: true
                    }
                }
            },
            player2: {
                paints: {
                    [index.PLAYER2]: {
                        $set: true
                    }
                }
            }

        })

    },
    [types.BINGO_CHECK]: (state, { payload }) => {

        const { player1, player2 } = state

        return immutable(state, {
            player1: {
                bingo: {
                    $push: getBingo(player1, payload)
                }
            },
            player2: {
                bingo: {
                    $push: getBingo(player2, payload)
                }
            }
        })

    },
}, defaultState)