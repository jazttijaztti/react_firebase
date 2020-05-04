import React ,{ Component } from 'react';
import {connect} from 'react-redux'
import ReactDOM from 'react-dom';
import '../../../css/admin/admin_style.css';
import '../../../css/admin/reset.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


const AdminMenu = () => {

    return (
        <React.Fragment>
                    <aside className="common_aside">
                        <ul className="common_aside_list">
                            <li className="common_aside_item">
                                <a href="#" className="common_aside_link">ユーザー一覧</a>
                            </li>
                            <li className="common_aside_item">
                                <a href="A-4.html" className="common_aside_link">質問集</a>
                            </li>
                        <li className="common_aside_item">
                                <button type="button" className="common_aside_link">ログアウト</button>
                            </li>
                        </ul>
                    </aside>
        </React.Fragment>
    )
}

export default AdminMenu;