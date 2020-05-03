import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import tisu from './tisu'
import users from './users'

//いろんなreducerを一つにまとめるモジュール
export default combineReducers({
    tisu,
    users: users,
    firestore: firestoreReducer
})
