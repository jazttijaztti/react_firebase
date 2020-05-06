import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom'
import routes from '../../routes';

import AdminMenu   from './common/AdminMenu.js'
import AdminHeader from './common/AdminHeader.js'
import AdminFooter from './common/AdminFooter.js'

import PrivateRoute from './../../auth/PrivateRoute';

import '../../css/admin/reset.css';
import '../../css/admin/admin_style.css';

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
            </Switch>
          </Suspense>
        </div>
      </main>
      <AdminFooter />
    </>
  )
}

export default AdminLayout;