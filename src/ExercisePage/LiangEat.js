import React, { useContext, useRef, useEffect, useCallback } from 'react'
import { DeContext } from '../ContextComponent/ChangeGerman'
import { NightModeContext } from '../ContextComponent/ChangeNight';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import style from '../ModuleCSS/LiangStyle.module.css'

export default function LiangEat() {
      const { Deutsch } = useContext(DeContext)
      const { isNightMode } = useContext(NightModeContext);
      const colRefRight = useRef(null);
      const colRefLeft = useRef(null)
      const colRefCallback = useCallback((node) => {
            if (node !== null) {
                  colRefRight.current = node;
                  colRefLeft.current = node;
            }
      }, []);

      useEffect(() => {
            console.log('useEffect triggered');
            const options = {
                  root: null,
                  rootMargin: '0px',
                  threshold: 0.5, // Adjust this value as needed
            };

            const handleIntersect = (entries, observer) => {
                  entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                              if (entry.target.classList.contains(style.LiangColRight)) {
                                    entry.target.style.right = '0';
                              } else {
                                    entry.target.style.left = '0';
                              }
                              entry.target.style.opacity = '1';
                        } else {
                              if (entry.target.classList.contains(style.LiangColRight)) {
                                    entry.target.style.right = '-80px';
                              } else {
                                    entry.target.style.left = '-80px';
                              }
                              entry.target.style.opacity = '0';
                        }
                  });
            };

            const observer = new IntersectionObserver(handleIntersect, options);
            observer.observe(colRefRight.current);
            observer.observe(colRefLeft.current)

            // return () => {
            //       observer.unobserve(colRefRight.current);
            //       observer.unobserve(colRefLeft.current)
            // };
      }, [colRefCallback]);
      return (
            <div>
                  <div className={style.LiangContainer}>
                        <Container fluid>
                              <Row className={style.LiangRow}>
                                    <Col md={6} xs={12} className={style.LiangColLeft} ref={colRefLeft}>
                                          <a href='https://taiwanfood-demo.pages.dev/brand' target="_blank" rel="noreferrer">
                                                <div className={style.LiangImageContainer}>
                                                      <div className={style.LiangImage}></div>
                                                </div>
                                          </a>
                                    </Col>
                                    <Col md={6} xs={12} className={style.LiangColRight} ref={colRefRight}>
                                          <div className={style.subTitleSection} >
                                                <h3 className={isNightMode ? style.subNightTitle : style.subTitle}>
                                                      {Deutsch === 'deutsch' ? 'Übungsarbeit - React LiangEat' : '練習作品- React LiangEat'} </h3>
                                                <span className={isNightMode ? style.subNightTitleLine : style.subTitleLine}></span>
                                          </div>
                                          <div className={style.paraSection}>
                                                <div className={isNightMode ? style.paraNightTitle : style.paraTitle}> {Deutsch === 'deutsch' ? 'Arbeitskonzept' : '作品概念'}</div>
                                                <div className={isNightMode ? style.Nightpara : style.para}>
                                                      {Deutsch === 'deutsch' ? 'Imitiere ich die Website-Architektur von Liang Shehan für Übungen in der englischen Version, indem ich in der Mitte gestaltete Komponenten verwenden React-Hook, React-Router-Dom und CSS-Einstellungen.' : '仿梁社漢網站架構作英文版本練習，中間使用styled component react-hook、react-router-dom 以及css 設定'}</div>
                                                <div className={isNightMode ? style.paraNightTitle : style.paraTitle}> {Deutsch === 'deutsch' ? 'Verwendete Programmiersprachen und Frameworks' : '使用程式語言及框架'}</div>
                                                <div className={style.toolIcon}>
                                                      <FaReact className={isNightMode ? style.NightIcon : style.Icon} />
                                                      <ImHtmlFive className={isNightMode ? style.NightIcon : style.Icon} />
                                                      <IoLogoCss3 className={isNightMode ? style.NightIcon : style.Icon} />
                                                      <IoLogoJavascript className={isNightMode ? style.NightIcon : style.Icon} />
                                                </div>
                                          </div>
                                    </Col>
                              </Row>
                        </Container>
                  </div>
            </div>
      )
}
