import React ,{ Component } from 'react';

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