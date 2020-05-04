import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <div>
                <Link to='/'>top</Link>
            </div>
            <div>
                <Link to='/admin'>管理者のログインはこちら</Link>
            </div>
        </div>
    )
}

export default Navigation;
