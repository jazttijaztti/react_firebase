import axios from 'axios'

//reducerとリンクする設定
export const USERS = 'USERS'
//const firebase_URL = 'https://ファイヤーベースのURL.com/api/v1とか'
const QUERY = '?token=daikikyoumogenkidesu123da'

export const users = () => async dispatch  => {

    //おそらく本当はこういう感じでやる
    //const response = await axios.get(`${firebase_URL}/firebase${QUERY}`)
    //今は暫定で下記でやる
    dispatch({type: 'USERS'})
}



