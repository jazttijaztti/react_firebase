import React from 'react'
import Navigation from '../User/Navigation.js'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

const AdminLogin = () => {
    return (
        <div>
            <Navigation />
            <hr />
            <form>
                <h1>管理者ログイン</h1>
                <input type="text" name="email" />
                <input type="text" name="password" />
                <button type="submit">
                    ログイン
                </button>
            </form>
        </div>
    )
}

export default AdminLogin;