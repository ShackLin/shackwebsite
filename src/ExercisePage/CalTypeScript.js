import React, { useContext, useRef, useEffect, useCallback } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { DeContext } from '../ContextComponent/ChangeGerman'
import { NightModeContext } from '../ContextComponent/ChangeNight';
import style from '../ModuleCSS/CalTypeStyle.module.css'

export default function CalTypeScript() {
      const { Deutsch } = useContext(DeContext)
      const { isNightMode } = useContext(NightModeContext);
      const colRefRight = useRef(null)
      const colRefLeft = useRef(null)
      const colRefCallback = useCallback((node) => {
            if (node !== null) {
                  colRefRight.current = node;
                  colRefLeft.current = node;
            }
      }, [])
      useEffect(() => {
            console.log('useEffect triggered');
            const options = {
                  root: null,
                  rootMargin: '0px',
                  threshold: 0.5
            }
            const handleIntersect = (entries, observer) => {
                  entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                              if (entry.target.classList.contains(style.CalColRight)) {
                                    entry.target.style.right = '0'
                              } else {
                                    entry.target.style.left = '0'
                              }
                              entry.target.style.opacity = '1';
                        } else {
                              if (entry.target.classList.contains(style.CalColRight)) {
                                    entry.target.style.right = '-80px'
                              } else {
                                    entry.target.style.left = '-80px'
                              }
                              entry.target.style.opacity = '0';
                        }
                  })
            }
            const observer = new IntersectionObserver(handleIntersect, options)
            observer.observe(colRefRight.current)
            observer.observe(colRefLeft.current)
            // return () => {
            //       observer.unobserve(colRefRight.current);
            //       observer.unobserve(colRefLeft.current)
            // };
      }, [colRefCallback])
      return (
            <div className={style.CalContainer}>
                  <Container fluid>
                        <Row className={style.CalRow}>
                              <Col md={6} xs={12} className={style.CalColLeft} ref={colRefLeft}>
                                    <a href='https://simplecalculator-with-typescript.pages.dev/' target="_blank" rel="noreferrer">
                                          <div className={style.CalImageContainer}>
                                                <div className={style.CalImage}></div>
                                          </div>
                                    </a>
                              </Col>
                              <Col md={6} xs={12} className={style.CalColRight} ref={colRefRight}>
                                    <div className={style.subTitleSection}>
                                          <h3 className={isNightMode ? style.subNightTitle : style.subTitle}>
                                                {Deutsch === 'deutsch' ? 'Übungsarbeit - TypeScript Cal' : '練習作品- TypeScript Cal'} </h3>
                                          <span className={isNightMode ? style.subNightTitleLine : style.subTitleLine}></span>
                                    </div>
                                    <div className={style.paraSection}>
                                          <div className={isNightMode ? style.paraNightTitle : style.paraTitle}> {Deutsch === 'deutsch' ? 'Arbeitskonzept' : '作品概念'}</div>
                                          <div className={isNightMode ? style.Nightpara : style.para}>
                                                {Deutsch === 'deutsch' ? 'Verwende ich TypeScript als Grundgerüst mit einfachen HTML- und CSS-Stilen, um einen einfachen Computer zu vervollständigen' : '以TypeScript作為骨架，搭配簡單的HTML及CSS樣式完成簡易的計算機'}</div>
                                          <div className={isNightMode ? style.paraNightTitle : style.paraTitle}> {Deutsch === 'deutsch' ? 'Verwendete Programmiersprache' : '使用程式語言'}</div>
                                          <div className={style.toolIcon}>
                                                <ImHtmlFive className={isNightMode ? style.NightIcon : style.Icon} />
                                                <IoLogoCss3 className={isNightMode ? style.NightIcon : style.Icon} />
                                                <SiTypescript className={isNightMode ? style.NightIcon : style.Icon} />
                                          </div>
                                    </div>
                              </Col>
                        </Row>
                  </Container>
            </div>
      )
}
