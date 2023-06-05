import React, { useEffect } from 'react'
import style from '../ModuleCSS/SignPartStyle.module.css'
import { useNavigate } from 'react-router-dom';
import { GithubUserAuth } from '../ContextComponent/GithubSignUp';
import { GoogleUserAuth } from '../ContextComponent/GoogleSignUp'


export default function GitHubButton() {
      const { GithubSigIn, GithubLogOut, user2 } = GithubUserAuth()
      const { googleSignupSuccess } = GoogleUserAuth();
      const navigate = useNavigate();

      const handleGithubSignUp = async () => {
            try {
                  await GithubSigIn();
                  navigate('/')
                  console.log('SignUp Sussceed')
            } catch (error) {
                  console.log(error)
            }
      }
      const handleStartPage = () => {
            navigate('/home')
      }
      const handleGithubLogOut = async () => {
            try {
                  await GithubLogOut()
                  navigate('/mainsign')
                  console.log('Logout Sussceed')
            } catch (error) {
                  console.log(error)
            }
      }
      useEffect(() => {
            if (user2 != null) {
                  console.log('User', user2)
                  // navigate('/signup');
            }
      }, [user2]);
      return (
            <div>
                  {googleSignupSuccess && user2 ? (
                        <div className={style.LogoutContainer}>
                              <div className={style.BtnContainer}>
                                    <button className={style.LogOutBtn}
                                          onClick={handleGithubLogOut}>
                                          Logout
                                    </button>
                                    <button className={style.StartBtn}
                                          onClick={handleStartPage}>
                                          Start
                                    </button>
                              </div>

                              <h5>Welcome {user2.displayName}</h5>
                              <p>{user2.email}</p>

                              <div >
                                    <img src={user2.photoURL
                                    } alt="dp" referrerPolicy='no-referrer' className={style.photo} />
                              </div>
                        </div>
                  ) : (
                        <button className={style.GoogleContainer} onClick={handleGithubSignUp}>
                              <span className={style.GithubIcon}></span>
                              <span className={style.GooglePara}>Signup & Login </span>
                        </button>
                  )}
            </div>
      )
}
