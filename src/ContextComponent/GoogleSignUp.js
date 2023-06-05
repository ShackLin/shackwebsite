import { createContext, useContext, useState } from 'react';
import {
      GoogleAuthProvider,
      signInWithPopup,
      // signInWithRedirect,
      // onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../FirsbaseAuth/firebaseGoogleConfig';
// import { useNavigate } from 'react-router-dom'


const GoogleAuthContext = createContext();

export const GoogleAuthContextProvider = ({ children }) => {
      const [googleSignupSuccess, setGoogleSignupSuccess] = useState(false);
      const [user3, setUser3] = useState({});

      // const googleSignIn = async () => {
      //       const provider = new GoogleAuthProvider();
      //       signInWithRedirect(auth, provider)
      // };

      // const GooglelogOut = async () => {
      //       try {
      //             await signOut(auth);
      //             // navigate('/');
      //       } catch (error) {
      //             console.log(error);
      //       }
      // }
      // const GooglelogOut=()=>{
      //       signOut(auth)
      // }
      const googleSignIn = () => {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider).then((result) => {
                  setUser3(result.user);
                  setGoogleSignupSuccess(true);
            }).catch((error) => {
                  console.log(error)
            })
      }

      const GooglelogOut = () => {
            setUser3(null)
      }



      // useEffect(() => {
      //       const unsubscribeGoogle = onAuthStateChanged(auth, (currentUser) => {
      //             setUserGoogle(currentUser);
      //             console.log('Google User', currentUser)
      //       });
      //       return () => {
      //             unsubscribeGoogle()
      //       };
      // }, []);

      return (
            <GoogleAuthContext.Provider value={{ googleSignIn, GooglelogOut, user3, googleSignupSuccess }}>
                  {children}
            </GoogleAuthContext.Provider>
      );
};

export const GoogleUserAuth = () => {
      return useContext(GoogleAuthContext);
};