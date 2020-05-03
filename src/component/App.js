import React ,{ Component } from 'react';
import {connect} from 'react-redux'
import '../css/index.css';
import '../css/reset.css';
import {tisu} from '../actions'

class App extends Component {
    
    render(){
      //(1)よりtisuの値がpropsにはいる
      const props = this.props
      console.log({props})
    
      return (
          <React.Fragment>
          <div>{props.value}</div>
          <div>コンポーネントちーす</div>
          <button onClick={props.tisu}>くりっくで「。」つける</button>
          </React.Fragment>
      )
    }
}

//(1)全てのstateから限定してtisuだけPropsにマッピング
const mapStateToProps = state => ({value: state.tisu.value})

//コンポーネント側でtisu()を実行したらreducerのtypeでマッピングした関数が実行される
const  mapDispatchToProps = dispatch =>({
    tisu: ()=> dispatch(tisu()),
})


export default connect(mapStateToProps , mapDispatchToProps)(App)


//サンプル
const Admin = (props) => {
  return <div>{props.tisu}</div>

}

