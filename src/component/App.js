import React ,{ Component } from 'react';
import {connect} from 'react-redux'
import '../css/index.css';
import '../css/reset.css';
import {tisu} from '../actions'
import AdminLogin from './Admin/AdminLogin.js'
import Top from './User/Top.js'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom' //4つのAPI(タグが使える)をreact-router-domから読み込む



class App extends Component {

    componentDidMount(){
       console.log("ういーす")
       this.props.tisu()
    }
 


    render(){
      //(1)よりtisuの値がpropsにはいる
      const props = this.props
      console.log({props})

      //全体をルーティングで切り替えるために<BrouserRouter>で囲う
      //ルーティングへのリンクは<Link to>
      //各ルーティングとコンポーネントを対応させているのが<Switch>の中の<Route />
      return (
          <React.Fragment>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Top}/>
                <Route exact path='/admin' component={AdminLogin}/>
              </Switch>
            </BrowserRouter>
          </React.Fragment>
      )
    }
}

//(1)全てのstateから限定してtisuだけPropsにマッピング
const mapStateToProps = state => ({value: state.tisu.value})

//コンポーネント側でtisu()を実行したらreducerのtypeでマッピングした関数が実行される
const  mapDispatchToProps = ({tisu})


export default connect(mapStateToProps , mapDispatchToProps)(App)


//サンプル
const Admin = (props) => {
  return <div>{props.tisu}</div>

}

