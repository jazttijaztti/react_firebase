import React, { useEffect, useState } from 'react';
import firebase from '../config/firebase';

// contextの作成
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser);

  const login = async (email, password, history) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push('/admin/dashboard');
    } catch (error) {
      alert(error);
    }
  };

  const logout = async (history) => {
    try {
      await firebase.auth().signOut();
      // ログアウト後はlogin画面へ遷移
      history.push('/admin/login');
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login: login,
        logout: logout,
        currentUser
       }}
    >
      { children }
    </AuthContext.Provider>
  )
}