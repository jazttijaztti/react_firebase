import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from './AuthProvider';

// ...optionはRouteのpropsにあるexact, pathなどの指定を、
const PrivateRoute = ({ component: RouteComponent, ...options }) => {
  // contextからログインしているuser情報を取得する
  const { currentUser } = useContext(AuthContext);
  console.log(RouteComponent);

  return (
    <Route
      {...options}
      render={props =>
        currentUser ? (
          <RouteComponent { ...props } />
        ) : (
          // currentUserがfalse(ログインしていない)の時には)リダイレクト
          <Redirect to="/admin/login" />
        )
      }
    />
  );
}

export default PrivateRoute;