import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <div>
                <Link to='/admin/user'>ユーザー一覧</Link>
            </div>
            <div>
                <Link to='#'>ログアウト</Link>
            </div>
            <hr />
        </div>
    )
}

export default Navigation;