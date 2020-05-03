import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import users from './users'

//いろんなreducerを一つにまとめるモジュール
export default combineReducers({
    users: users,
    firestore: firestoreReducer
})
