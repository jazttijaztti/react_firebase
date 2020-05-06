import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import '../../css/admin/admin_style.css';
import '../../css/admin/reset.css';

const Paginator = props => {

    console.log(props)
    return(
        <li className="common_pager_item" onClick={console.log(222)}>
            <button className="common_pager_link active" value={props.value} onClick={console.log(111)}><span>{ props.value }</span></button>
        </li>
    )
}

export default Paginator;