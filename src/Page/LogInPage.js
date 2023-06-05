import React, { useContext, useState, useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../ContextComponent/EmailSignUp';
import { DeContext } from '../ContextComponent/ChangeGerman'
import { NightModeContext } from '../ContextComponent/ChangeNight';
import style from '../ModuleCSS/LogInStyle.module.css'

export default function SignPartPage() {
      const { Deutsch } = useContext(DeContext)
      const { isNightMode } = useContext(NightModeContext);
      const navigate = useNavigate();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const { signIn } = UserAuth();
      const passwordRef = useRef()
      const onLogin = async (e) => {
            e.preventDefault();
            // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            //       return setError("Passwords do not match,please click ,if you forgot your password, plase click Reset Password button")
            // }
            try {
                  await signIn(email, password)
                  navigate('/')
            } catch (e) {
                  // setError(e.message)
                  console.log(e.message)
            }
      }
      return (
            <div className={isNightMode ? style.LogInNightContainer : style.LogInContainer}>
                  <Container fluid>
                        <Row className={style.LogIntRow}>
                              <Col className={style.LogInCol}>
                                    <h3 className={`${isNightMode ? style.LogInNightTitle : style.LogInTitle} ${style.AnimatedText}`}>{Deutsch === 'deutsch' ? 'Melde dich in deinem Konto an' : '登入你的帳號'}</h3>
                                    <div className={style.LogInMethods}>
                                          <div className={style.LogInEmailSection}>
                                                <form>
                                                      <label className={`${isNightMode ? style.Nightlabel : style.label} ${style.labelAnimation}`}>Email Address</label><br />
                                                      <input type='email' required className={style.Input} onChange={(e) => setEmail(e.target.value)} autoComplete="username" /><br />
                                                      <label className={`${isNightMode ? style.Nightlabel : style.label} ${style.labelAnimation}`}>Password</label><br />
                                                      <input type='password' required className={style.Input} onChange={(e) => setPassword(e.target.value)} ref={passwordRef} autoComplete="new-password" /><br />
                                                      <button type='submit' className={style.Submit} onClick={onLogin}>LogIn </button>
                                                </form>
                                                <p className={`${isNightMode ? style.AlreadyNightAccount : style.AlreadyAccount} ${style.labelAnimation}`}>{Deutsch === 'deutsch' ? 'Haben Sie noch keinen Account ?' : '你還沒有帳號嗎?'}<Link to='/signup'>Sign Up</Link>
                                                </p>
                                          </div>

                                    </div>
                              </Col>
                        </Row>
                  </Container>
            </div>
      )
}
