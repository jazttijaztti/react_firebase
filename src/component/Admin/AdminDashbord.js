import React ,{ Component } from 'react';
import {connect} from 'react-redux'
import ReactDOM from 'react-dom';
import '../../css/admin/admin_style.css';
import '../../css/admin/reset.css';
import AdminMenu   from './common/AdminMenu.js'
import AdminHeader from './common/AdminHeader.js'
import AdminFooter from './common/AdminFooter.js'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'



const AdminDashbord = () => {

    return (
        <React.Fragment>
            <AdminHeader />
            <main>
                <div className="common_layout">
                    <AdminMenu />
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
                            <ul className="common_user_list">
                                <li className="common_user_item">
                                    <div className="common_user_name_block">
                                        <p className="common_user_name"><span>山田太郎</span>さん</p>
                                        <a href="A-3-2.html" className="common_user_edit_btn">編集</a>
                                    </div>
                                    <ul className="common_user_info_list">
                                        <li className="common_user_info">
                                            <img src={"static/images/icon03.png"} alt="tel" className="common_user_icon"/>
                                            <p className="common_user_info_text">090-4211-1111</p>
                                        </li>
                                        <li className="common_user_info">
                                            <img src={"static/images/icon04.png"} alt="email" className="common_user_icon"/>
                                            <p className="common_user_info_text">test@sample.com</p>
                                        </li>
                                        <li className="common_user_info">
                                            <img src={"static/images/icon05.png"} alt="address" className="common_user_icon"/>
                                            <p className="common_user_info_text">なんかのデータ</p>
                                        </li>
                                    </ul>
                                    <ul className="common_user_info_list">
                                        <li className="common_user_info">
                                            <img src={"static/images/icon05.png"} alt="tel" className="common_user_icon"/>
                                            <p className="common_user_info_text">なんかのでーた</p>
                                        </li>
                                        <li className="common_user_info">
                                            <img src={"static/images/icon05.png"} alt="email" className="common_user_icon"/>
                                            <p className="common_user_info_text">ういーす</p>
                                        </li>
                                        <li className="common_user_info">
                                            <img src={"static/images/icon05.png"} alt="address" className="common_user_icon"/>
                                            <p className="common_user_info_text">ちーす</p>
                                        </li>
                                    </ul>
                                </li>

                                <li className="common_user_item">
                                    <div className="common_user_name_block">
                                        <p className="common_user_name"><span>山田太郎</span>さん</p>
                                        <a href="A-3-2.html" className="common_user_edit_btn">編集</a>
                                    </div>
                                    <ul className="common_user_info_list">
                                        <li className="common_user_info">
                                            <img src={"static/images/icon03.png"} alt="tel" className="common_user_icon"/>
                                            <p className="common_user_info_text">090-4211-1111</p>
                                        </li>
                                        <li className="common_user_info">
                                            <img src={"static/images/icon04.png"} alt="email" className="common_user_icon"/>
                                            <p className="common_user_info_text">test@sample.com</p>
                                        </li>
                                        <li className="common_user_info">
                                            <img src={"static/images/icon05.png"} alt="address" className="common_user_icon"/>
                                            <p className="common_user_info_text">なんかのデータ</p>
                                        </li>
                                    </ul>
                                    <ul className="common_user_info_list">
                                        <li className="common_user_info">
                                            <img src={"static/images/icon05.png"} alt="tel" className="common_user_icon"/>
                                            <p className="common_user_info_text">なんかのでーた</p>
                                        </li>
                                        <li className="common_user_info">
                                            <img src={"static/images/icon05.png"} alt="email" className="common_user_icon"/>
                                            <p className="common_user_info_text">ういーす</p>
                                        </li>
                                        <li className="common_user_info">
                                            <img src={"static/images/icon05.png"} alt="address" className="common_user_icon"/>
                                            <p className="common_user_info_text">ちーす</p>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                        <div className="common_pager">	
                            <a href="" className="common_pager_prev"></a>
                            <ul className="common_pager_list">
                                <li className="common_pager_item">
                                    <a href="" className="common_pager_link active"><span>1</span></a>
                                </li>
                                <li className="common_pager_item">
                                    <a href="" className="common_pager_link"><span>2</span></a>
                                </li>
                                <li className="common_pager_item">
                                    <a href="" className="common_pager_link"><span>3</span></a>
                                </li>
                                <li className="common_pager_item">
                                    <a href="" className="common_pager_link"><span>4</span></a>
                                </li>
                                <li className="common_pager_item">
                                    <a href="" className="common_pager_link"><span>5</span></a>
                                </li>
                            </ul>
                            <a href="" className="common_pager_next active"></a>
                        </div>
                    </div>
                </div>
            </main>
              
            <AdminFooter /> 
        </React.Fragment>
    )
}

export default AdminDashbord;
