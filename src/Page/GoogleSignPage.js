import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DeContext } from '../ContextComponent/ChangeGerman'
import { NightModeContext } from '../ContextComponent/ChangeNight';
import GoogleButton2 from '../ButtonComponent/GoogleButton2'

import style from '../ModuleCSS/LogInStyle.module.css'

export default function GoogleSignPage() {
      const { Deutsch } = useContext(DeContext)
      const { isNightMode } = useContext(NightModeContext);

      return (
            <div className={isNightMode ? style.LogInNightContainer : style.LogInContainer}>
                  <Container fluid>
                        <Row className={style.LogIntRow}>
                              <Col className={style.LogInCol}>
                                    <div className={style.LogInLogo}>
                                    </div>
                                    <h3 className={isNightMode ? style.LogInNightTitle : style.LogInTitle}>{Deutsch === 'deutsch' ? 'Melde dich in deinem Konto an' : '登入你的帳號'}</h3>
                                    <div className={style.LogInMethods}>
                                          <div className={style.LogInThridWay}>
                                                <h6 className={isNightMode ? style.LogInNightTitle : style.LogInTitle}>{Deutsch === 'deutsch' ? 'Melden Sie sich über eine Drittanbieterplattform bei Ihrem Konto an' : '經由第三方平台登入帳戶'}</h6>
                                                <div className={style.LogInGoogle}>
                                                      <GoogleButton2 />
                                                </div>
                                                {/* <p className={isNightMode ? style.AlreadyNightAccount : style.AlreadyAccount}>{Deutsch === 'deutsch' ? 'Melden Sie sich über eine Drittanbieterplattform bei Ihrem Konto an' : '你還沒有帳號嗎?'}<Link to='/signup'>Sign Up</Link>
                                                </p> */}
                                          </div>
                                    </div>
                              </Col>
                        </Row>
                  </Container>
            </div>
      )
}
