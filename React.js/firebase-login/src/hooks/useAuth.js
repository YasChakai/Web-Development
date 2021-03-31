import React, { useState, useEffect, useContext, createContext } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

firebase.initializeApp({

    apiKey: process.env.REACT_APP_FB_API,
    authDomain: process.env.REACT_APP_FB_DOMAIN,
    projectId: process.env.REACT_APP_FB_PROJECT,
    storageBucket: process.env.REACT_APP_FB_BUCKET,
    messagingSenderId: process.env.REACT_APP_FB_SENDER,
    appID: process.env.REACT_APP_FB_APP,

})

const AuthContext = createContext()
// Hook for child components to get the auth object...
// and re-render when it changes

export const useAuth = () => {

    return useContext(AuthContext)

}

// Provider hook that creates auth object and handles state 
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticating, setIsAuthenticating] = useState(true)

    const sendSignInLinkToEmail = email => {
        return firebase.auth().sendSignInLinkToEmail(email, {
            url: 'http://localhost:3000/confirm',
            handleCodeInApp: true,
        }).then(() => {
            return true;
        });

    };
    const signInWithEmailLink = (email, code) => {

        return firebase.auth().signInWithEmailLink(email, code).then(result => {
            setUser(result.user)
            return true;

        })



    }
    
    const logout = () => {
        return firebase.auth().signOut().then(() => {
          setUser(null);
        })
    };
    
    // // subscribe to user on mount because this sets state in the callback 
    // it will cause any component that utilizes this hook to re 
    // render with the lastest auth object

  useEffect(() =>{
     const unsubscribe = firebase.auth().onAuthStateChanged (user => {
         setUser(user)
         setIsAuthenticating(false)
     })
    //  Cleanup subscription on unmount
      return () => unsubscribe();
  },[]);

  const values = {
        user,
        isAuthenticating,
        sendSignInLinkToEmail,
        signInWithEmailLink,
        logout,

  };
    return (
        <AuthContext.Provider value={values}>
            {!isAuthenticating && children}
        </AuthContext.Provider>
    );





};

