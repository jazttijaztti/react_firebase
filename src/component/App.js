import React ,{ Component } from 'react';
import {connect} from 'react-redux'
import '../css/index.css';
import '../css/reset.css';
import {users} from '../actions'
import AdminLogin from './Admin/AdminLogin.js'

import UserIndex from './Admin/UserIndex.js'
import AdminDashbord from './Admin/AdminDashbord'
import Top from './User/Top.js'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom' //4つのAPI(タグが使える)をreact-router-domから読み込む
import AdminLayout from './Admin/AdminLayout';

class App extends Component {

    componentDidMount(){
    }

    render() {
      //(1)よりtisuの値がpropsにはいる
      //const props = this.props

      //全体をルーティングで切り替えるために<BrouserRouter>で囲う
      //ルーティングへのリンクは<Link to>
      //各ルーティングとコンポーネントを対応させているのが<Switch>の中の<Route />
      return (
          <React.Fragment>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Top}/>
                <Route path='/admin/login' component={AdminLogin}/>
                <Route path='/admin' component={AdminLayout}/>
                <Route path='/admin/user/' component={UserIndex}/>
              </Switch>
            </BrowserRouter>
          </React.Fragment>
      )
    }
}

//(1)全てのstateから限定してtisuだけPropsにマッピング
const mapStateToProps = state => ({value: state.users})

//コンポーネント側でtisu()を実行したらreducerのtypeでマッピングした関数が実行される
const  mapDispatchToProps = ({users})

export default connect(mapStateToProps , mapDispatchToProps)(App)

