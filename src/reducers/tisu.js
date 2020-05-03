import { USERS } from '../actions'

//stateの初期化
const initialState = {value: "ちーす"}

//もしコンポーネントからアクションがないならdefaultのstate(つまりvalueはちーす)
export default (state = initialState, action) => {
   //何かしらのアクションがあるならそれぞれcase文で実行
   switch(action.type) {

     case USERS:

           //値の形式がわからんのでここまでにするがfirebaseからの値はreturnに渡せばうけ渡せる。
           console.log(action.response)
           return {value:state.value + "。"}


     default:
           return state
   }
}
