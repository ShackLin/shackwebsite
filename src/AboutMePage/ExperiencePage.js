import React, { useContext, useRef, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { DeContext } from '../ContextComponent/ChangeGerman'
import { NightModeContext } from '../ContextComponent/ChangeNight';
import style from '../ModuleCSS/ExperienceStyle.module.css'

export default function ExperiencePage() {
      const { Deutsch } = useContext(DeContext)
      const { isNightMode } = useContext(NightModeContext);
      const containerRef = useRef(null)
      const titleRef = useRef(null)
      const colRef = useRef(null)
      const RightColRef = useRef(null)
      const imageRef = useRef(null);
      useEffect(() => {
            const handleScroll = () => {
                  const containerElement = containerRef.current;
                  const titleElement = titleRef.current;
                  const ColElementRight = RightColRef.current;
                  if (
                        // containerElement &&
                        titleElement &&
                        window.scrollY <= containerElement.offsetTop
                  ) {
                        titleElement.style.transition = 'top 0.5s';
                        titleElement.style.top = '0';
                  } else {
                        titleElement.style.transition = 'top 0.5s';
                        titleElement.style.top = '-50px';
                        ColElementRight.style.opacity = '0'
                  }
            };

            window.addEventListener('scroll', handleScroll);
            return () => {
                  window.removeEventListener('scroll', handleScroll);
            };
      }, []);
      useEffect(() => {
            const handleScrollCol = () => {
                  const containerElement = containerRef.current;
                  const ColElement = colRef.current;
                  const ColElementRight = RightColRef.current;
                  if (
                        containerElement &&
                        ColElement &&
                        window.scrollY >= containerElement.offsetTop + containerElement.offsetHeight / 1.5
                  ) {
                        ColElement.style.transition = 'left 1s';
                        ColElement.style.left = '0px';
                        ColElementRight.style.opacity = '1'

                  } else {
                        ColElement.style.transition = 'left 1s';
                        ColElement.style.left = '-800px';
                  }
            };

            window.addEventListener('scroll', handleScrollCol);
            return () => {
                  window.removeEventListener('scroll', handleScrollCol);
            };
      }, []);
      useEffect(() => {
            const handleScroll = () => {
                  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                  const imageElement = imageRef.current;

                  if (imageElement) {
                        const transformValue = `translateY(${scrollTop * 0.095}px)`;
                        imageElement.style.transform = transformValue;
                  }
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                  window.removeEventListener('scroll', handleScroll);
            };
      }, []);

      return (
            <ParallaxProvider >
                  <div className={isNightMode ? style.experienceNightContainer : style.experienceContainer} ref={containerRef} >
                        < Parallax speed={-10}>
                              <h2 className={isNightMode ? style.experienceNightTitle : style.experienceTitle} ref={titleRef}>{Deutsch === 'deutsch' ? 'Erfahrung' : '經歷'}</h2>
                        </Parallax>
                        <Container fluid>
                              <Row className={style.experienceRow}>
                                    <Col md={6} xs={12} className={style.experienceColLeft} ref={colRef} >
                                          <Parallax speed={15}>
                                                <div className={style.subtitleSection}  >
                                                      <h4 className={isNightMode ? style.subtitleNight : style.subtitle}>
                                                            {Deutsch === 'deutsch' ? 'FIA – Einstellung von wissenschaftlichen Mitarbeitern' :
                                                                  '財政部財政資訊中心—聘用助研員'
                                                            }</h4>
                                                      <h5 className={isNightMode ? style.NighttimeLine : style.timeLine}>2022/11-Now</h5>
                                                </div>
                                                <ul className={style.listItems} >
                                                      <li className={isNightMode ? style.listNightItem : style.listItem}>
                                                            {Deutsch === 'deutsch' ? 'Unterstütze das Steuerhilfssystem bei der Integration der Tests und Wartung des lokalen Steuersystems.' : '協助稅輔系統整合地方稅務系統之測試及維護。'}

                                                      </li>
                                                      <li className={isNightMode ? style.listNightItem : style.listItem}>
                                                            {Deutsch === 'deutsch' ? 'Unterstütze dem Back-End-Ingenieur verschiedene Probleme zu melden und dem Fragesteller ein Systemschnittstellen- oder SQL-Problem zu erklären.' : '協助將各類問題回報後端工程師並向提問者解釋為系統介接或是SQL之問題。'}

                                                      </li>
                                                      <li className={isNightMode ? style.listNightItem : style.listItem}>
                                                            {Deutsch === 'deutsch' ? 'Empfange ausländische Gäste, die das Informationszentrum aus dem Ausland besuchen.' : '接待國外參訪資訊中心的外賓。'}
                                                      </li>
                                                </ul>
                                                <div className={style.subtitleSection}>
                                                      <h4 className={isNightMode ? style.subtitleNight : style.subtitle}>{Deutsch === 'deutsch' ? 'Universität Wien - Masterstudium Astronomie (Drop-off)' : '維也納大學—天文學系碩士(肄業)'}</h4>
                                                      <h5 className={isNightMode ? style.NighttimeLine : style.timeLine}>2020/01-2022/06</h5>
                                                </div>
                                                <ul className={style.listItems}>
                                                      <li className={isNightMode ? style.listNightItem : style.listItem}>
                                                            {Deutsch === 'deutsch' ? 'Lerne  grundlegende Astronomie, Sterne und Galaxientheorie.' : ' 學習基礎天文學、恆星、星系理論。'}
                                                      </li>
                                                      <li className={isNightMode ? style.listNightItem : style.listItem}>
                                                            {Deutsch === 'deutsch' ? 'Lerne  Python-Übungen in der Vorlesung, um einfache Analysemodelle zu erstellen.' : '課堂學習Python練習製作簡易分析模型。'}
                                                      </li>
                                                      <li className={isNightMode ? style.listNightItem : style.listItem}>
                                                            {Deutsch === 'deutsch' ? 'Nach der Vorlesung ist er hauptberuflich als Babysitter für besondere Kinder tätig.' : ' 課餘間當任特殊孩童之全時間Babysitter。'}

                                                      </li>
                                                </ul>
                                                <div className={style.subtitleSection}>
                                                      <h4 className={isNightMode ? style.subtitleNight : style.subtitle}>
                                                            {Deutsch === 'deutsch' ? 'Working Holiday in Deutschand' : '德國打工度假'}</h4>
                                                      <h5 className={isNightMode ? style.NighttimeLine : style.timeLine}>2018/01-2019/06</h5>
                                                </div>
                                                <ul className={style.listItems}>
                                                      <li className={isNightMode ? style.listNightItem : style.listItem}>
                                                            {Deutsch === 'deutsch' ? 'Arbeitete als Hilfslehrer für Chinesisch an der Chinesisch-Sprachschule in München.' :
                                                                  '於慕尼黑中文學擔任助理中文老師'}
                                                      </li>
                                                      <li className={isNightMode ? style.listNightItem : style.listItem}>
                                                            {Deutsch === 'deutsch' ? 'Arbeitete als Dokumentzusteller. im Städtischen Krankenhaus Dresden.' :
                                                                  '於Dresden市立醫院擔任文書傳遞員。'}
                                                      </li>
                                                </ul>
                                                <div className={style.subtitleSection}>
                                                      <h4 className={isNightMode ? style.subtitleNight : style.subtitle}>
                                                            {Deutsch === 'deutsch' ? 'Sekretariat der Stadtregierung von Taipeh – Vertrauliche Mitglieder des Rekrutierungsteams' :
                                                                  '台北市政府秘書處—機要聘用組員'}</h4>
                                                      <h5 className={isNightMode ? style.NighttimeLine : style.timeLine}>2016/01-2018/01</h5>
                                                </div>
                                                <ul className={style.listItems}>
                                                      <li className={isNightMode ? style.listNightItem : style.listItem}>
                                                            {Deutsch === 'deutsch' ? 'Horizontale Verbindung zwischen Rat und Stadtregierung. Zum Beispiel, wenn Mitglieder Informationen anfordern, Fragen stellen usw.' : ' 議會與市府間橫向聯繫。如議員索資、質詢等。'}

                                                      </li>
                                                      <li className={isNightMode ? style.listNightItem : style.listItem}>
                                                            {Deutsch === 'deutsch' ? 'Der Vorarbeitsprozess und die Nachbereitungsaufzeichnungen der wöchentlichen Gemeindeversammlung.' : ' 每週市政會議的前置作業流程及後續紀錄整理。'}
                                                      </li>
                                                </ul>
                                                <div className={style.subtitleSection}>
                                                      <h4 className={isNightMode ? style.subtitleNight : style.subtitle}>
                                                            {Deutsch === 'deutsch' ? 'Haftanstalt Keelung – Wachverwalter' : '基隆看守所-戒護管理員'}
                                                      </h4>
                                                      <h5 className={isNightMode ? style.NighttimeLine : style.timeLine}>2014/01-2015/12</h5>
                                                </div>
                                                <ul className={style.listItems}>
                                                      <li className={isNightMode ? style.listNightItem : style.listItem}>
                                                            {Deutsch === 'deutsch' ? 'Kümmer sich um die Verfahren für neue Inhaftierte und begleiten Sie die Inhaftierten zur medizinischen Behandlung.' : '新羈押犯人之流程辦理，收容人戒護就醫之陪同。'}

                                                      </li>
                                                      <li className={isNightMode ? style.listNightItem : style.listItem}>
                                                            {Deutsch === 'deutsch' ? 'Kontrolliere  nachts die Wohnheime und leiste  Nothilfe.' : '夜間舍房之巡邏，緊急狀況支援。'}

                                                      </li>
                                                </ul>
                                                <div className={style.subtitleSection}>
                                                      <h4 className={isNightMode ? style.subtitleNight : style.subtitle}>
                                                            {Deutsch === 'deutsch' ? 'Absolvent der Abteilung für Angewandte Wissenschaften der Donghua-Universität' : '東華大學應用科學系學士畢業'}</h4>
                                                      <h5 className={isNightMode ? style.NighttimeLine : style.timeLine}>2008/09-2012/06</h5>
                                                </div>
                                          </Parallax>
                                    </Col>

                                    <Col className={style.ExperienceCol} md={6} xs={12} ref={RightColRef} >
                                          <div className={style.ExperienceImageContainer}>
                                                <div className={style.ExperienceImage} ref={imageRef}></div>
                                          </div>
                                    </Col>
                              </Row>
                        </Container>
                  </div>
            </ParallaxProvider>
      )
}

