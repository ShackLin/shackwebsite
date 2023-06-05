import React, { useContext, useEffect, useRef } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import style from '../ModuleCSS/IntroduceStyle.module.css'
import { DeContext } from '../ContextComponent/ChangeGerman'
import { NightModeContext } from '../ContextComponent/ChangeNight';


export default function IntroductionPage() {
      const { Deutsch } = useContext(DeContext)
      const { isNightMode } = useContext(NightModeContext);
      const imageRef = useRef(null);

      useEffect(() => {
            const handleScroll = () => {
                  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                  const imageElement = imageRef.current;

                  if (imageElement) {
                        const transformValue = `translateY(${scrollTop * 0.08}px)`;
                        imageElement.style.transform = transformValue;
                  }
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                  window.removeEventListener('scroll', handleScroll);
            };
      }, []);

      return (
            <ParallaxProvider>
                  <div className={` ${isNightMode ? style.NightAboutMe : style.aboutMeContainer}`}>
                        <Container fluid>
                              <Parallax speed={5}>
                                    <h2 className={`${style.aboutMeTitle} ${isNightMode ? style.NightTitle : style.aboutMeTitle}`} >{Deutsch === 'deutsch' ? 'Einführung' : '簡介'}</h2>
                              </Parallax>

                              <Row className={style.aboutMeRow}>
                                    <Col md={5} xs={12} className={`${style.aboutMeCol} ${style.flexCenter} ${style.offsetCol}`} >
                                          <div className={style.IntroImageContainer}>
                                                <div className={style.IntroImage} ref={imageRef}></div>
                                          </div>
                                    </Col>
                                    <Col md={7} xs={12} className={`${style.aboutMeColRight} ${style.flexCenter}`} >
                                          <Parallax speed={8}>
                                                <div className={style.paraSection}>

                                                      <p className={`${Deutsch === 'deutsch' ? style.paraGerman : style.para} ${isNightMode ? style.NightPara : style.para}`} >
                                                            {Deutsch === 'deutsch' ? 'Nach meinem BA war ich hauptsächlich im öffentlichen Sektor tätig. Ich habe als Gefängnisverwalter und auch als Generalsekretär der Stadtregierung von Taipeh und stellvertretender Sekretär des Bürgermeisters gedient. Als 6/2-Produzent erlebe ich Menschen und Dinge in verschiedenen Lebensabschnitten immer umfassend und lerne tiefgreifend durch Try and Error, die Konnotationserfahrung, die wirklich zu mir gehört. Während dieses Prozesses lernte ich fließend Deutsch, Englisch und Kantonesisch und überwand die Unannehmlichkeiten, in einem fremden Land zu leben.' :
                                                                  '學士畢業後，我主要在公部門任職。我當任過監所管理員也做過台北市政府秘書長及市長的襄助秘書。身為一位6 / 2生產者，我總是全然地體驗不同人生階段的人事物，從Try and Error 中深刻學到真正屬於自己的內涵經驗。這之中我學會了流利的德文、英文、粵語，克服異國生活的不適。'
                                                            }
                                                      </p>

                                                      <p className={`${Deutsch === 'deutsch' ? style.paraGerman : style.para} ${isNightMode ? style.NightPara : style.para}`} >
                                                            {Deutsch === 'deutsch' ? 'Als ich 29 Jahre alt war, ging ich an die Universität Wien, um Astronomie zu studieren. Im Unterricht musste ich oft Python verwenden, um Vorhersagemodelle für eine einfache Analyse der Galaxientheorie zu entwerfen. Daraus entwickelte sich allmählich mein Interesse für Codierung. Nach meiner Rückkehr nach Taiwan lernte ich die Front-End-Codierungstechnologie kennen, die die zentrale Grundlage für benutzerorientiertes Design darstellt. Die Bühnenerwartung für mich besteht darin, in den Bereich FrondEnd einzusteigen und die Fähigkeit zu entwickeln, Fälle professionell anzunehmen und anschließend das Design künstlicher Intelligenz zu erlernen und zu verbessern.' :
                                                                  '29歲時我前往維也納大學攻讀天文學，課堂上經常需要使用到Python設計簡易分析星系理論的預測模型，我從中漸漸產生對Coding的興趣。回台後，我學習以使用者為主要設計核心基礎的Front-end Coding技術。給自己的階段期許是能踏入FrondEnd的領域並培養有專業接案的能力，後學習並精進有關人工智慧的設計。'
                                                            }
                                                      </p>

                                                </div>
                                          </Parallax>
                                    </Col>

                              </Row>
                        </Container>
                  </div>
            </ParallaxProvider>
      )
}
