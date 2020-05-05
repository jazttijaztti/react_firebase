import React, { useEffect, useState } from 'react';
import firebase from '../config/firebase';

// contextの作成
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (email, password, history) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push('admin/dashboard');
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
        login: login
       }}
    >
      { children }
    </AuthContext.Provider>
  )
}