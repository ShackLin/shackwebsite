import React, { useContext, useRef, useEffect, useCallback } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DeContext } from '../ContextComponent/ChangeGerman'
import { NightModeContext } from '../ContextComponent/ChangeNight';
import style from '../ModuleCSS/TodoListStyle.module.css'

export default function TodoList() {
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
                              if (entry.target.classList.contains(style.TodoColRight)) {
                                    entry.target.style.right = '0';
                              } else {
                                    entry.target.style.left = '0';
                              }
                              entry.target.style.opacity = '1';
                        } else {
                              if (entry.target.classList.contains(style.TodoColRight)) {
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
                  <div>
                        <div className={style.TodoShopContainer} >
                              <Container fluid >
                                    <Row className={style.TodoRow}>
                                          <Col md={6} xs={12} className={style.TodoColLeft} ref={colRefLeft}>
                                                <a href='https://react-todo-lists.pages.dev/' target="_blank" rel="noreferrer">
                                                      <div className={style.TodoImageContainer}>
                                                            <div className={style.TodoImage}></div>
                                                      </div>
                                                </a>
                                          </Col>
                                          <Col md={6} xs={12} className={style.TodoColRight} ref={colRefRight} >
                                                <div className={style.subTitleSection}>
                                                      <h3 className={isNightMode ? style.subNightTitle : style.subTitle}>
                                                            {Deutsch === 'deutsch' ? 'Übungsarbeit - React Todo Lists' : '練習作品- React Todo Lists'} </h3>
                                                      <span className={isNightMode ? style.subNightTitleLine : style.subTitleLine}></span>
                                                </div>
                                                <div className={style.paraSection}>
                                                      <div className={isNightMode ? style.paraNightTitle : style.paraTitle}> {Deutsch === 'deutsch' ? 'Arbeitskonzept' : '作品概念'}</div>
                                                      <div className={isNightMode ? style.Nightpara : style.para}>
                                                            {Deutsch === 'deutsch' ? 'Entwerfe ich einfache TodoLists mit useReducer-Hook und einfachem CSS-Stil, einschließlich der Statusfunktion zum Erstellen, Speichern und Löschen von Listenelementen' : '藉由useReducer Hook、簡單的Css Style設計一個簡單的TodoLists，包含建、儲存、刪除List Item的狀態功能'}</div>
                                                      <div className={isNightMode ? style.paraNightTitle : style.paraTitle}> {Deutsch === 'deutsch' ? 'Verwendete Programmiersprache' : '使用程式語言'}</div>
                                                      <div className={style.toolIcon}>
                                                            <ImHtmlFive className={isNightMode ? style.NightIcon : style.Icon} />
                                                            <FaReact className={isNightMode ? style.NightIcon : style.Icon} />
                                                            <IoLogoCss3 className={isNightMode ? style.NightIcon : style.Icon} />
                                                            <IoLogoJavascript className={isNightMode ? style.NightIcon : style.Icon} />
                                                      </div>
                                                </div>
                                          </Col>
                                    </Row>
                              </Container>
                        </div>
                  </div>
            </div>
      )
}
