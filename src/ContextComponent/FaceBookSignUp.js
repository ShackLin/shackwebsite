import { createContext, useContext, useEffect, useState } from 'react';
import { auth, provider } from '../FirsbaseAuth/firebaseFbConfig';
import { signInWithPopup, FacebookAuthProvider, onAuthStateChanged } from 'firebase/auth';


const FacebookAuthContext = createContext();

export const FacebookAuthContextProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [profilePicture, setProfilePicture] = useState(null);

      const handleFacebookLogin = () => {
            const provider=new FacebookAuthProvider()
            signInWithPopup(auth, provider)
                  .then((result) => {
                        console.log('User', result.user);
                        setUser(result.user);

                        const credential = FacebookAuthProvider.credentialFromResult(result);
                        const accessToken = credential.accessToken;
                        // Fetch Facebook graph API to get the user's actual profile picture
                        fetch(`https://graph.facebook.com/${result.user.providerData[0].uid}/picture?type=large&access_token=${accessToken}`)
                              .then((response) => response.blob())
                              .then((blob) => {
                                    setProfilePicture(URL.createObjectURL(blob));
                              })
                              .catch((error) => {
                                    console.log(error);
                              });
                  })
                  .catch((err) => {
                        console.log(err);
                  });
      };
      // const facebookSignIn = async () => {
      //       const provider = new FacebookAuthProvider();
      //       signInWithRedirect(auth, provider);
      // };

      const logOut = () => {
            // Perform logout logic for Facebook
            setUser(null);
            console.log('Logout Successed');
      };

      // useEffect(() => {
      //       const unsubscribeFaceBook = onAuthStateChanged(auth, (currentUser) => {
      //             setUser(currentUser);
      //             console.log('User', currentUser);
      //       });
      //       return () => {
      //             unsubscribeFaceBook();
      //       };
      // }, []);

      return (
            <FacebookAuthContext.Provider value={{ handleFacebookLogin, logOut, user, profilePicture }}>
                  {children}
            </FacebookAuthContext.Provider>
      );
};

export const FacebookUserAuth = () => {
      return useContext(FacebookAuthContext);
};