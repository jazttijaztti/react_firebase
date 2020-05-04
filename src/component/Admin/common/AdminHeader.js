import React ,{ Component } from 'react';
import {connect} from 'react-redux'
import ReactDOM from 'react-dom';
import '../../../css/admin/admin_style.css';
import '../../../css/admin/reset.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


const AdminHeader = () => {

    return (
        <React.Fragment>

            <header>
            <div className="common_sp">
                    <button type="button" className="menu_btn">
                        <span className="menu_top"></span>
                        <span className="menu_middle"></span>
                        <span className="menu_bottom"></span>
                    </button>
                </div>
            </header>
         </React.Fragment>
    )
}

export default AdminHeader;