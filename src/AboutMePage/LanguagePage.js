import React, { useContext, useRef, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import style from '../ModuleCSS/LanguageStyle.module.css'
import { DeContext } from '../ContextComponent/ChangeGerman'
import { NightModeContext } from '../ContextComponent/ChangeNight';

export default function LanguagePage() {
      const { Deutsch } = useContext(DeContext)
      const { isNightMode } = useContext(NightModeContext);
      const containerRef = useRef(null)
      const titleRef = useRef(null)
      const rowRef = useRef(null)
      useEffect(() => {
            const handleScroll = () => {
                  const containerElement = containerRef.current;
                  const titleElement = titleRef.current;
                  if (
                        containerElement &&
                        titleElement &&
                        window.scrollY >= (containerElement.offsetTop * 25)
                  ) {
                        titleElement.style.transition = '2s';
                        titleElement.style.opacity = '1';
                  } else {
                        titleElement.style.transition = ' 2s';
                        titleElement.style.opacity = '0';
                  }
            };

            window.addEventListener('scroll', handleScroll);
            return () => {
                  window.removeEventListener('scroll', handleScroll);
            };

      }, []);
      useEffect(() => {
            const handleScrollRow = () => {
                  const containerElement = containerRef.current;
                  const RowElement = rowRef.current;
                  if (
                        containerElement &&
                        rowRef &&
                        window.scrollY >= containerElement.offsetTop * 27 + containerElement.offsetHeight / 7
                  ) {

                        RowElement.style.transition = 'left 0.5s';
                        RowElement.style.left = '100px';

                  } else {
                        RowElement.style.transition = 'left 0.5s';
                        RowElement.style.left = '-1200px';

                  }
            };

            window.addEventListener('scroll', handleScrollRow);
            return () => {
                  window.removeEventListener('scroll', handleScrollRow);
            };
      }, []);

      return (
            <div className={isNightMode ? style.languageNightContainer : style.languageContainer} ref={containerRef} >
                  <Container fluid>
                        <h5 className={isNightMode ? style.languageNightTitle : style.languageTitle} ref={titleRef}>{Deutsch === 'deutsch' ? 'Sprachkenntnisse' : '語言能力'}</h5>
                        <Row className={style.languageRow} ref={rowRef}>
                              <Col className={style.languageCol}>
                                    <div className={style.ItemsContainer} >
                                          <h5 className={isNightMode ? style.itemNightTitle : style.itemTitle}>{Deutsch === 'deutsch' ? 'Taiwanesisch (Taiwan)' : '台語(台灣)'}</h5>
                                          <div className={style.languageItem}>
                                                <div className={isNightMode ? style.languageNightBar : style.languageBar} >
                                                      <div className={style.indicatorBar} ></div>
                                                </div>
                                                <span className={isNightMode ? style.languageNightLevel : style.languageLevel}>Level 9</span>
                                          </div>
                                    </div>
                                    <div className={style.ItemsContainer} >
                                          <h5 className={isNightMode ? style.itemNightTitle : style.itemTitle}>{Deutsch === 'deutsch' ? 'Chinesisch (Taiwan)' : '中文(台灣)'}</h5>
                                          <div className={style.languageItem}>
                                                <div className={isNightMode ? style.languageNightBar : style.languageBar}>
                                                      <div className={style.indicatorBar}></div>
                                                </div>
                                                <span className={isNightMode ? style.languageNightLevel : style.languageLevel}>Level 9</span>
                                          </div>
                                    </div>
                                    <div className={style.ItemsContainer} >
                                          <h5 className={isNightMode ? style.itemNightTitle : style.itemTitle}>{Deutsch === 'deutsch' ? 'Kantonesisch (Hongkong)' : '粵語(香港)'}</h5>
                                          <div className={style.languageItem}>
                                                <div className={isNightMode ? style.languageNightBar : style.languageBar}>
                                                      <div className={style.indicatorBar2}></div>
                                                </div>
                                                <span className={isNightMode ? style.languageNightLevel : style.languageLevel}>Level 8</span>
                                          </div>
                                    </div>
                                    <div className={style.ItemsContainer} >
                                          <h5 className={isNightMode ? style.itemNightTitle : style.itemTitle}>{Deutsch === 'deutsch' ? 'English' : '英文'}</h5>
                                          <div className={style.languageItem}>
                                                <div className={isNightMode ? style.languageNightBar : style.languageBar}>
                                                      <div className={style.indicatorBar3}></div>
                                                </div>
                                                <span className={isNightMode ? style.languageNightLevel : style.languageLevel}>Level 7</span>
                                          </div>
                                    </div>
                                    <div className={style.ItemsContainer} >
                                          <h5 className={isNightMode ? style.itemNightTitle : style.itemTitle}>{Deutsch === 'deutsch' ? 'Deutsch' : '德文'}</h5>
                                          <div className={style.languageItem}>
                                                <div className={isNightMode ? style.languageNightBar : style.languageBar}>
                                                      <div className={style.indicatorBar4} ></div>
                                                </div>
                                                <span className={isNightMode ? style.languageNightLevel : style.languageLevel}>Level 8</span>
                                          </div>
                                    </div>
                                    <div className={style.ItemsContainer} >
                                          <h5 className={isNightMode ? style.itemNightTitle : style.itemTitle}>{Deutsch === 'deutsch' ? 'Japanisch' : '日文'}</h5>
                                          <div className={style.languageItem}>
                                                <div className={isNightMode ? style.languageNightBar : style.languageBar}>
                                                      <div className={style.indicatorBar5}></div>
                                                </div>
                                                <span className={isNightMode ? style.languageNightLevel : style.languageLevel}>Level 2</span>
                                          </div>
                                    </div>
                              </Col>

                        </Row>
                  </Container>
            </div>
      )
}
