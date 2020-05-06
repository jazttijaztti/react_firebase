import React, { useEffect, useState } from 'react';
import firebase from '../config/firebase';

// contextの作成
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (email, password, history) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
          localStorage.setItem('currentUser', JSON.stringify(response.user));
        });
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
    firebase.auth().onAuthStateChanged((user) => {
<<<<<<< HEAD
      console.log('--------------');
      console.log(user);
      console.log('--------------');
      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
    });
  }, []);
=======
      setCurrentUser(user);
    });
  });
>>>>>>> 3498cc303bf239a3415c20c24e3b68ccab60c867

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