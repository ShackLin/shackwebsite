import React, { useEffect } from 'react'
import { GoogleUserAuth } from '../ContextComponent/GoogleSignUp'
import { useNavigate } from 'react-router-dom';
import style from '../ModuleCSS/SignPartStyle.module.css'

export default function GoogleButton() {

      const { GooglelogOut } = GoogleUserAuth();
      const { googleSignIn, user } = GoogleUserAuth();
      const navigate = useNavigate();
      const handleGoogleSignUp = async () => {
            try {
                  await googleSignIn();
            } catch (error) {
                  console.log(error);
            }
      };
      const handleLogOut = async () => {
            try {
                  await GooglelogOut();
                  navigate('/')
            } catch (error) {
                  console.log(error);
            }
      };
      const handleStartPage = () => {
            navigate('/home')
      }

      useEffect(() => {
            if (user != null) {
                  navigate('/home');
            } else {
                  navigate('/login')
            }
      }, [user, navigate]);
      return (
            <div>
                  {user ? (
                        <div className={style.LogoutContainer}>
                              <div className={style.BtnContainer}>
                                    <button className={style.LogOutBtn}
                                          onClick={handleLogOut}>
                                          Logout
                                    </button>
                                    <button className={style.StartBtn}
                                          onClick={handleStartPage}>
                                          Start
                                    </button>
                              </div>

                              <h5>Welcome {user.displayName}</h5>
                              <p>{user.email}</p>

                              <div >
                                    <img src={user.photoURL
                                    } alt="dp" referrerPolicy='no-referrer' className={style.photo} />
                              </div>
                        </div>
                  ) : (
                        <button className={style.GoogleContainer} onClick={handleGoogleSignUp}>
                              <span className={style.GoogleIcon}></span>
                              <span className={style.GooglePara}>LogIn via Google </span>
                        </button>
                  )}
            </div>
      )
}
