import React, { useContext, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import style from '../ModuleCSS/HomeStyle.module.css';
import { NightModeContext } from '../ContextComponent/ChangeNight';
import { DeContext } from '../ContextComponent/ChangeGerman';

export default function Home() {
      const { Deutsch } = useContext(DeContext)
      const { isNightMode } = useContext(NightModeContext);
      const [isHovered, setIsHovered] = useState(false);
      const handleHover = () => {
            setIsHovered(!isHovered);
      };

      return (
            <div className={isNightMode ? style.homeNight : style.homeContainer}>
                  <Container>
                        <Row className={style.homeRow}>
                              <Col xs={12} md={6} className={style.homeColLeft}  >
                                    <div className={style.homeImageContainer}>
                                          <div className={style.homeImage}></div>
                                    </div>
                              </Col>
                              <Col xs={12} md={6} className={style.homeColRight} >
                                    <div className={style.titleSection}>
                                          {/* <div className={style.decLine}></div> */}
                                          <h1 className={style.introTitle}>LIN-SHACK</h1>
                                    </div>
                                    <div className={style.paraSection}>
                                          <div className={style.decLine2}></div>
                                          <p className={`${Deutsch === 'deutsch' ? style.paraGerman : style.para} ${isHovered ? style.pianoAnimation : ''
                                                }`} onMouseEnter={handleHover}
                                                onMouseLeave={handleHover}>
                                                {Deutsch === 'deutsch' ? 'Vor meinem 30. Lebensjahr war ich ein 6/2-Mensch, wo ich immer wiederTry und Error machte. Ich hatte an Ultramarathons und Super-Ironman-Rennen teilgenommen und ging auch nach Myanmar, um am Siebten Zen-Camp teilzunehmen. Ich reiste sogar mehr als alleine vier Monate und vier Jahre im Ausland gelebt. Als ich dreißig geworden bin, denke ich langsam über vergangene Lebenserfahrungen nach. Erlerne ich derzeit weiterhin Front-End-Technologie und Kenntnisse im Informationsbereich.' : ' 於30歲前是一個不停嘗試錯誤的6/2人，曾比過超級馬拉松及超級鐵人賽，也曾去緬甸參加過禪七營，更曾一人獨自旅行四個多月及國外生活四年。過了三十歲後，慢慢反思過往的人生經驗。目前持續學習前端技術及資訊領域知識'}
                                          </p>
                                    </div>
                              </Col>
                        </Row>
                  </Container>
            </div>
      );
}