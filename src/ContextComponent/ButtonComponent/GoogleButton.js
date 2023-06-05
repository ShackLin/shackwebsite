import React, { useEffect } from 'react'
import { GoogleUserAuth } from '../ContextComponent/GoogleSignUp'
import { useNavigate } from 'react-router-dom';
import style from '../ModuleCSS/SignPartStyle.module.css'

export default function GoogleButton() {

      const { googleSignIn, user3, GooglelogOut, googleSignupSuccess } = GoogleUserAuth();
      const navigate = useNavigate();
      const handleGoogleSignUp = async () => {

            try {
                  await googleSignIn();
                  navigate('/')
                  console.log('SignUp Sussceed')
            } catch (error) {
                  console.log(error);
            }
      };
      const handleLogOut = async () => {
            try {
                  await GooglelogOut();
                  navigate('/mainsign')
                  console.log('Logout Sussceed')
            } catch (error) {
                  console.log(error);
            }
      };
      const handleStartPage = () => {
            navigate('/home')
      }

      useEffect(() => {
            if (user3 != null) {
                  console.log('User', user3)

            }
      }, [user3]);
      return (
            <div>
                  {googleSignupSuccess && user3 ? (
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

                              <h5>Welcome {user3.displayName}</h5>
                              <p>{user3.email}</p>

                              <div >
                                    <img src={user3.photoURL
                                    } alt="dp" referrerPolicy='no-referrer' className={style.photo} />
                              </div>
                        </div>
                  ) : (
                        <button className={style.GoogleContainer} onClick={handleGoogleSignUp}>
                              <span className={style.GoogleIcon}></span>
                              <span className={style.GooglePara}>Signup & Login </span>
                        </button>
                  )}
            </div>
      )
}
