import { combineReducers } from 'redux'

import app from './modules/app'
import bingo from './modules/bingo'

export default combineReducers({ app, bingo })