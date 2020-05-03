import { TISU } from '../actions'

//stateの初期化
const initialState = {value: "ちーす"}

//もしコンポーネントからアクションがないならdefaultのstate(つまりvalueはちーす)
export default (state = initialState, action) => {
   //何かしらのアクションがあるならそれぞれcase文で実行
   switch(action.type) {

     case TISU:
           return {value:state.value + "。"}


     default:
           return state
   }
}
