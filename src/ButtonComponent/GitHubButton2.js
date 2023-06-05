import React, { useState } from 'react'
import style from '../ModuleCSS/SignPartStyle.module.css'
import { useNavigate } from 'react-router-dom';

export default function GitHubButton() {
      const navigate = useNavigate();
      const [GithubUser, setGithubUser] = useState(null)
      const handleGithubSignUp = () => {

      }
      const handleStartPage = () => {
            navigate('/home')
      }
      const handleLogOut = () => {

      }
      return (
            <div>
                  {GithubUser ? (
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

                              <h5>Welcome {GithubUser.displayName}</h5>
                              <p>{GithubUser.email}</p>

                              <div >
                                    <img src={GithubUser.photoURL
                                    } alt="dp" referrerPolicy='no-referrer' className={style.photo} />
                              </div>
                        </div>
                  ) : (
                        <button className={style.GoogleContainer} onClick={handleGithubSignUp}>
                              <span className={style.GithubIcon}></span>
                              <span className={style.GooglePara}>LogIn via Github</span>
                        </button>
                  )}
            </div>
      )
}
