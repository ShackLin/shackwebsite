import { createContext, useContext, useState } from 'react';
import { auth } from '../FirsbaseAuth/firebaseGithubConfig';
import { signInWithPopup } from 'firebase/auth';
import { GithubAuthProvider } from "firebase/auth";


const GithubAuthContenx = createContext();

export const GithubAuthProvider2 = ({ children }) => {

      const [user2, setUser2] = useState({})
      const [gitSignupSuccess, setGitSignupSuccess] = useState(false);
      const GithubSigIn = () => {
            const provider = new GithubAuthProvider()
            signInWithPopup(auth, provider).then((result) => {
                  setUser2(result.user)
                  setGitSignupSuccess(true)
            }).catch((error) => {
                  console.log(error)
            })
      }
      const GithubLogOut = () => {
            setUser2(null)
      }
      // useEffect(() => {
      //       console.log('Git second SignUp')
      //       const unsubscribeGithub = onAuthStateChanged(Auth, (currentUser) => {
      //             setUserGit(currentUser);
      //             console.log('Github User', currentUser)
      //       });
      //       return () => {
      //             unsubscribeGithub();
      //       };
      // }, []);
      return (
            <GithubAuthContenx.Provider value={{ GithubSigIn, GithubLogOut, user2,gitSignupSuccess }}>
                  {children}
            </GithubAuthContenx.Provider>
      );
}
export const GithubUserAuth = () => {
      return useContext(GithubAuthContenx);
};