import React ,{ Component } from 'react';
import {connect} from 'react-redux'
import ReactDOM from 'react-dom';
import '../../css/admin/admin_style.css';
import '../../css/admin/reset.css';
//import AdminHeader from './common/Header.js'
//import AdminFooter from './common/Footer.js'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'



const AdminLogin = () => {
  return (
      <>
        <main>
          <div className="login_wrap">
            <div className="login_block">
              <h1 className="login_title">LOGIN<span>ログイン</span></h1>
              <form method="" action="">
                <div className="login_inner">
                  <p className="login_form_title">メールアドレス</p>
                  <input type="email" name="email" className="login_form_input" />
                  <p className="login_error_text" style={{display: 'none'}}>*入力してください</p>
                </div>
                <div className="login_inner">
                  <p className="login_form_title">パスワード</p>
                  <input type="password" name="password" className="login_form_input" />
                  <p className="login_error_text" style={{display: 'none'}}>*入力してください</p>
                </div>
                <Link to='/admin/dashboard'>
                  <button type="button" className="common_btn01 w300 center">ログイン</button>
                </Link>
              </form>
            </div>
          </div>
        </main>
      </>
  )
}

export default AdminLogin;
