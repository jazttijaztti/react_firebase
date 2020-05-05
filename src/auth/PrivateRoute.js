import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from './AuthProvider';

const PrivateRoute = ({ component: RouteComponent, ...options }) => {
  // contextからログインしているuser情報を取得する
  //const { currentUser } = useContext(AuthContext);
  const currentUser = true;
  console.log(currentUser);

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