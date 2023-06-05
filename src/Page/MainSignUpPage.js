import React, { useContext, useState, useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom'
import { DeContext } from '../ContextComponent/ChangeGerman'
import { NightModeContext } from '../ContextComponent/ChangeNight';
import { UserAuth } from '../ContextComponent/EmailSignUp';
import GitHubButton from '../ButtonComponent/GitHubButton';
import GoogleButton from '../ButtonComponent/GoogleButton';

import style from '../ModuleCSS/SignPartStyle.module.css'

export default function SignPartPage() {

      const { Deutsch } = useContext(DeContext)
      const { isNightMode } = useContext(NightModeContext);
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [error, setError] = useState('')
      const { createUser } = UserAuth()
      const navigate = useNavigate()
      const passwordRef = useRef()
      const passwordConfirmRef = useRef()
      const onSubmit = async (e) => {
            e.preventDefault()
            if (passwordRef.current.value !== passwordConfirmRef.current.value) {
                  return setError("Passwords do not match")
            }
            try {
                  await createUser(email, password);

                  navigate('/login')
            } catch (e) {
                  setError(e.message);
                  console.log(e.message);
            }
      }
      return (
            <div className={isNightMode ? style.SignPartNightContainer : style.SignPartContainer}>
                  <Container fluid>
                        <Row className={style.SignPartRow}>
                              <Col className={style.SignPartCol}>
                                    {error && <div className={style.Alert}>{error}</div>}
                                    <h3 className={`${isNightMode ? style.SignUpPartNightTitle : style.SignUpPartTitle} ${style.AnimatedText}`}>
                                          {Deutsch === 'deutsch' ? 'Erstelle deinen Account' : '註冊你的帳號'}</h3>
                                    <div className={style.SignUpPartMethods}>
                                          <div className={style.SignUpEmailSection}>
                                                <form>
                                                      <label className={`${isNightMode ? style.Nightlabel : style.label} ${style.labelAnimation}`}>Email Address</label><br />
                                                      <input type='email' required className={style.Input} onChange={(e) => setEmail(e.target.value)} autoComplete="new-password" /><br />
                                                      <label className={`${isNightMode ? style.Nightlabel : style.label} ${style.labelAnimation}`}>Password</label><br />
                                                      <input type='password' required className={style.Input} onChange={(e) => setPassword(e.target.value)} ref={passwordRef} autoComplete="new-password" /><br />
                                                      <label className={`${isNightMode ? style.Nightlabel : style.label} ${style.labelAnimation}`}>Confirm Password</label><br />
                                                      <input type='password' required className={style.Input} onChange={(e) => setPassword(e.target.value)} ref={passwordConfirmRef} autoComplete="new-password" /><br />
                                                      <button type='submit' className={style.Submit} onClick={onSubmit}>Signup</button>
                                                </form>
                                          </div>
                                          <div className={style.SignUpThridWay}>
                                                <h6 className={`${isNightMode ? style.ThirdWayNightTitle : style.ThirdWayTitle} ${style.labelAnimation}`}>{Deutsch === 'deutsch' ? 'Registrieren Sie sich über eine Drittanbieterplattform und melden Sie sich direkt an' : '經由第三方平台註冊並直接登入'}</h6>
                                                <div className={style.SignUpGoogle}>
                                                      <GoogleButton />
                                                </div>
                                                <div className={style.SignUpGoogle}>
                                                      <GitHubButton />
                                                </div>

                                                <p className={`${isNightMode ? style.AlreadyNightAccount : style.AlreadyAccount} ${style.labelAnimation}`}>{Deutsch === 'deutsch' ? 'Sie haben bereits ein Konto?' : '你已經有帳號了?'}<Link to='/login'>Log in</Link>
                                                </p>
                                          </div>

                                    </div>
                              </Col>
                        </Row>
                  </Container>
            </div>
      )
}
