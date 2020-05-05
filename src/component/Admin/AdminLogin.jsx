import React ,{ useContext, useState } from 'react';
import '../../css/admin/admin_style.css';
import '../../css/admin/reset.css';

import { AuthContext } from '../../auth/AuthProvider';

const AdminLogin = ({ history }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // AuthContextからlogin関数を受け取る
  const { login } = useContext(AuthContext);



  const handleSubmit = event => {
    event.preventDefault();
    login(email, password, history);
  }

  return (
      <>
        <main>
          <div className="login_wrap">
            <div className="login_block">
              <h1 className="login_title">LOGIN<span>ログイン</span></h1>
              <form onSubmit={ handleSubmit }>
                <div className="login_inner">
                  <p className="login_form_title">メールアドレス</p>
                  <input
                    type="email"
                    className="login_form_input"
                    value={ email }
                    onChange={ event => setEmail(event.target.value) }
                  />
                  <p className="login_error_text" style={{display: 'none'}}>*入力してください</p>
                </div>
                <div className="login_inner">
                  <p className="login_form_title">パスワード</p>
                  <input
                    type="password"
                    name="password"
                    className="login_form_input"
                    value={ password }
                    onChange={ event => setPassword(event.target.value )}
                  />
                  <p className="login_error_text" style={{display: 'none'}}>*入力してください</p>
                </div>
                <button type="submit" className="common_btn01 w300 center">ログイン</button>
              </form>
            </div>
          </div>
        </main>
      </>
  )
}

export default AdminLogin;
