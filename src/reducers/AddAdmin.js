import { AddAdmin } from '../actions'
import { AddAdminComp } from '../component/AddAdminComp'

const initialState = { value: '予期しないところからアクセスされました' }

export default ( state = initialState, action) => {
    switch(action.type) {
        case AddAdmin:
            return {}
    }
}