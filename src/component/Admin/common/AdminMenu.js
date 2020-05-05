import React ,{ Component } from 'react';


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
                <a href="A-4.html" className="common_aside_link">テスト</a>
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