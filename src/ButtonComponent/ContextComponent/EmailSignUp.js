import React, { useContext, useState, useEffect, createContext } from "react"
import {
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut,
      onAuthStateChanged,
      sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from '../FirsbaseAuth/firsbaseConfig'

const UserContext = createContext()


export function AuthProvider({ children }) {
      const [user, setUser] = useState({});
      const createUser = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password);

      };
      const signIn = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password)
      }

      const logout = () => {
            return signOut(auth)
      }
      // const logout = async () => {
      //       try {
      //             await signOut(auth);
      //             setUser(null);
      //       } catch (error) {
      //             console.log(error);
      //       }
      // };
      const ResetPasswordEmail = (email) => {
            return sendPasswordResetEmail(auth, email)
      }
      // useEffect(() => {
      //       console.log('User', user)
      // }, [user])
      useEffect(() => {
            console.log('Sign Succesed')
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                  // console.log(currentUser);
                  setUser(currentUser);
            });
            return () => {
                  unsubscribe();
            };
      }, []);

      return (
            <UserContext.Provider value={{ createUser, user, logout, signIn, ResetPasswordEmail }}>
                  {children}
            </UserContext.Provider>
      )
}
export function UserAuth() {
      return useContext(UserContext)
}