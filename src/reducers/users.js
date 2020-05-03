import { USERS } from '../actions'

const initialState = {
    name: '乙彦です'
}

export default (state = initialState, action) => {
    switch(action.type) {
        case USERS:
            return state

        default:
          return state
    }
}