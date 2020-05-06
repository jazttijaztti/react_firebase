import React ,{ Component } from 'react';
import '../../css/admin/admin_style.css';
import '../../css/admin/reset.css';
import AdminFooter from './common/AdminFooter.js'
import Paginator from './Paginator.js'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import firebase from "firebase";
import "firebase/storage";

class AdminDashbord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            allUserKeys: [],
            userKeys: [],
            totalRows: 0,
            currentPage: 1,
            perPage: 1,
            offset: 0
        }
        this.getFireData();
    }

    testFunc () {
        console.log(222);
    }

    getFireData() {
        let db = firebase.database();
        let ref = db.ref("users");
        let self = this;
        ref
        .once('value')
        .then(snapshot => {
            const data = snapshot.val();
            const allUserKeys = Object.keys(data);
            let userKeys = allUserKeys.slice(0, this.state.perPage)
            self.setState({
              data: data,
              allUserKeys: allUserKeys,
              userKeys: userKeys,
              totalRows: allUserKeys.length
            });
        });
    }

    render() {
        return (
            <React.Fragment>
                        <div className="common_main">
                            <h1 className="common_title">USER<span>ユーザー一覧</span></h1>
                            <div className="user_search_block">
                                <form method="" action="">
                                    <div className="user_search_flex">
                                        <div className="user_search_right">
                                            <div className="user_search_inner">
                                                    <select name="" className="user_search_select w100">
                                                        <option value="">---</option>
                                                        <option value="2019">サービスA</option>
                                                        <option value="2020">サービスB</option>
                                                        <option value="2021">サービスC</option>
                                                    </select>
                                                <div className="user_search_date_block">

                                                    <select name="" className="user_search_select w100">
                                                        <option value="">---</option>
                                                        <option value="2019">2019</option>
                                                        <option value="2020">2020</option>
                                                        <option value="2021">2021</option>
                                                    </select>
                                                    <p className="user_search_text">年</p>
                                                    <select name="" className="user_search_select w100">
                                                        <option value="">---</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                    </select>
                                                    <p className="user_search_text">月ちーす</p>
                                                </div>
                                                <select name="" className="user_search_select">
                                                    <option value="">---</option>
                                                    <option value="">登録のみ</option>
                                                    <option value="">指名あり</option>
                                                    <option value="">好感触</option>
                                                    <option value="">接触NG</option>
                                                    <option value="">テスト</option>
                                                    <option value="">成約</option>
                                                </select>
                                            </div>

                                        </div>
                                        <button type="submit" className="user_search_btn">
                                            <img src={"static/images/icon01.svg"} alt="search"/>
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="common_user_wrap">
                                {
                                    this.state.userKeys.map((key, index) =>
                                        <li className="common_user_item" key={ index }>
                                            <div className="common_user_name_block">
                                                <p className="common_user_name"><span>{this.state.data[key].name}</span>さん</p>
                                                <a href="A-3-2.html" className="common_user_edit_btn">詳細^^b</a>
                                            </div>
                                            <ul className="common_user_info_list">
                                                <li className="common_user_info">
                                                    <span>TEL</span>
                                                    <p className="common_user_info_text">{this.state.data[key].tel}</p>
                                                </li>
                                                <li className="common_user_info">
                                                    <span>メール</span>
                                                    <p className="common_user_info_text">{this.state.data[key].email}</p>
                                                </li>
                                                <li className="common_user_info">
                                                    <span>とりあえず性別を表示</span>
                                                    <p className="common_user_info_text">{this.state.data[key].gender}</p>
                                                </li>
                                                <li className="common_user_info">
                                                    <span>住所</span>
                                                    <p className="common_user_info_text">{this.state.data[key].address}</p>
                                                </li>
                                            </ul>
                                        </li>
                                    )
                                }
                            </div>
                            <Paginator
                                currentPage={this.state.currentPage}
                                totalRows={this.state.totalRows}
                                perPage={this.state.perPage}
                                testFunc={this.testFunc}
                            />
                        </div>



            <BrowserRouter>
                <Switch>
                    /*<Route exact path='/admin_dashbord' component={AdminDashbord}/> */
                </Switch>
            </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default AdminDashbord;
