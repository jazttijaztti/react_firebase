import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import '../../css/admin/admin_style.css';
import '../../css/admin/reset.css';

const Paginator = (props) => {
    console.log(props.totalRows);
    const totalPage = Math.ceil(props.totalRows / props.perPage);
    const pageArray = [...new Array(totalPage + 1).keys()].slice(1);
    console.log(pageArray);
    return(
        <div className="common_pager">
            <a href="" className="common_pager_prev"></a>
            <ul className="common_pager_list">
                <li className="common_pager_item">
                    <a className="common_pager_link active" onClick={props.testFunc}><span>1</span></a>
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
    )
}

export default Paginator;