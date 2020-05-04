import React from 'react'
import Navigation from './Navigation.js'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


const Top = () => {
    return (
        <div>
            <Navigation />
            <h1>ユーザーのトップページがもしあるならこのコンポーネントに</h1>
        </div>
    )
}

export default Top;
