import React from 'react';

// 複数のcomponentを読み込む時には、lazyを使用する
const AdminDashboard = React.lazy(() => import('./component/Admin/AdminDashbord'));

const routes = [
  { path: '/admin/dashboard', exact: true, component: AdminDashboard },
]

export default routes;