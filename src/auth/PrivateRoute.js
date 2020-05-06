import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// ...optionはRouteのpropsにあるexact, pathなどの指定を、
const PrivateRoute = ({ component: RouteComponent, ...options }) => {
  // contextからログインしているuser情報を取得する
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

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