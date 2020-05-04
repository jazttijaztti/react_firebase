import { combineReducers } from 'redux'
import users from './users'

//いろんなreducerを一つにまとめるモジュール
export default combineReducers({
    users: users,
})
