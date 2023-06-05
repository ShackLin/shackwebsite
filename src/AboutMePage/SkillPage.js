import React, { useContext, useRef, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { DeContext } from '../ContextComponent/ChangeGerman'
import { NightModeContext } from '../ContextComponent/ChangeNight';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import style from '../ModuleCSS/SkillStyle.module.css'
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { SiJquery } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiNodedotjs } from "react-icons/si";



export default function SkillPage() {
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
                        containerElement && titleElement &&
                        window.scrollY >= (containerElement.offsetTop * 14.5)
                  ) {
                        titleElement.style.transition = '0.5s';
                        titleElement.style.opacity = '1';
                  } else {
                        titleElement.style.transition = ' 0.5s';
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
                        window.scrollY >= containerElement.offsetTop * 14 + containerElement.offsetHeight / 7
                  ) {
                        RowElement.style.transition = 'left 0.5s';
                        RowElement.style.left = '0px';
                  } else {
                        RowElement.style.transition = 'left 0.5s';
                        RowElement.style.left = '-800px';
                  }
            };

            window.addEventListener('scroll', handleScrollRow);
            return () => {
                  window.removeEventListener('scroll', handleScrollRow);
            };
      }, []);
      return (
            <ParallaxProvider>
                  <div className={isNightMode ? style.SkillNightContainer : style.SkillContainer} ref={containerRef}>
                        <Parallax scale={[0.75, 1.5]}
                              translateX={['-200px', '0px']}
                        // rotate={[0, 45]}
                        >
                              <h2 className={isNightMode ? style.skillNightTitle : style.skillTitle} ref={titleRef}>{Deutsch === 'deutsch' ? 'Fachmännische Fähigkeit' : '專業技能'}</h2>
                        </Parallax>
                        <Container fluid>
                              <Row className={style.skillRow} ref={rowRef}>
                                    <Parallax scale={[0.75, 1.5]}
                                          // rotate={[-180, 0]}
                                          translateX={['-200px', '0px']}>
                                          <h5 className={isNightMode ? style.skillNightTitle2 : style.skillTitle2}>{Deutsch === 'deutsch' ? 'Programmiersprache' : '程式語言'}</h5>
                                          <Col className={style.skillCol}>
                                                <div className={style.skillItems}>
                                                      <div className={style.skillItem}>
                                                            <div className={style.flexItem}>
                                                                  <div className={style.subtitleSection}>
                                                                        <h4 className={isNightMode ? style.Nightsubtitle : style.subtitle}>{Deutsch === 'deutsch' ? 'Kompetente Programmiersprache' : '熟練程式語言'}</h4>
                                                                  </div>
                                                                  <div className={style.tagSection}>
                                                                        <ImHtmlFive className={isNightMode ? style.NightIcon : style.Icon} />
                                                                        <IoLogoCss3 className={isNightMode ? style.NightIcon : style.Icon} />
                                                                        <IoLogoJavascript className={isNightMode ? style.NightIcon : style.Icon} />
                                                                        <SiJquery className={isNightMode ? style.NightIcon : style.Icon} />
                                                                        <FaReact className={isNightMode ? style.NightIcon : style.Icon} />
                                                                  </div>
                                                            </div>
                                                            <div className={style.flexItem}>
                                                                  <div className={style.subtitleSection}>
                                                                        <h4 className={isNightMode ? style.Nightsubtitle : style.subtitle}>{Deutsch === 'deutsch' ? 'Programmiersprachen auf der Grund- und Mittelstufe' : '初中階程式語言'}</h4>
                                                                  </div>
                                                                  <div className={style.tagSection}>
                                                                        <SiTypescript className={isNightMode ? style.NightIcon : style.Icon} />
                                                                        <FaPython className={isNightMode ? style.NightIcon : style.Icon} />
                                                                        <DiMongodb className={isNightMode ? style.NightIcon : style.Icon} />
                                                                        <SiNodedotjs className={isNightMode ? style.NightIcon : style.Icon} />
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </Col>
                                    </Parallax >
                              </Row>
                        </Container>
                  </div>
            </ParallaxProvider>

      )
}
