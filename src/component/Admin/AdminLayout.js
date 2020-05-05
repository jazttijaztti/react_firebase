import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import routes from '../../routes';

import AdminMenu   from './common/AdminMenu.js'
import AdminHeader from './common/AdminHeader.js'
import AdminFooter from './common/AdminFooter.js'

import { AuthProvider } from './../../auth/AuthProvider';
import PrivateRoute from './../../auth/PrivateRoute';


import '../../css/admin/reset.css';
import '../../css/admin/admin_style.css';

import firebase from "firebase";
import "firebase/storage";

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <main>
        <div className="common_layout">
          <AdminMenu />
          {/* componentをlazyで読み込んでいる場合は「Suspense」が必要 */}
          <Suspense fallback={ <div>loading...</div> }>
            <Switch>
              <AuthProvider>
                {
                  routes.map((route, index) => (
                    <PrivateRoute
                      component={ route.component }
                      exact={ route.exact }
                      key={ index }
                      path={ route.path }
                      render={ props => (<route.component {...props} />) }
                    />
                  ))
                }
                <Route render={() => <p>not found!.</p>} />
              </AuthProvider>
            </Switch>
          </Suspense>
        </div>
      </main>
      <AdminFooter />
    </>
  )
}

export default AdminLayout;