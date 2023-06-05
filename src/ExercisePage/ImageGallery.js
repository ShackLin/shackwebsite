import React, { useContext, useRef, useEffect, useCallback } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from '../ModuleCSS/GelleryStyle.module.css'
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { DeContext } from '../ContextComponent/ChangeGerman'
import { NightModeContext } from '../ContextComponent/ChangeNight';

export default function ImageGallery() {
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
                  threshold: 0.5,
            };

            const handleIntersect = (entries, observer) => {
                  entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                              if (entry.target.classList.contains(style.GelleryColRight)) {
                                    entry.target.style.right = '0';
                              } else {
                                    entry.target.style.left = '0';
                              }
                              entry.target.style.opacity = '1';
                        } else {
                              if (entry.target.classList.contains(style.GelleryColRight)) {
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


      }, [colRefCallback]);
      return (
            <div className={style.GelleryContainer}>
                  <Container fluid>
                        <Row className={style.GelleryRow}>
                              <Col md={6} xs={12} className={style.GelleryColLeft} ref={colRefLeft}>
                                    <a href="https://searchbar.pages.dev/" target="_blank" rel="noreferrer">
                                          <div className={style.GelleryImageContainer}>
                                                <div className={style.GelleryImage}>
                                                </div>
                                          </div>
                                    </a>
                              </Col>
                              <Col md={6} xs={12} className={`${style.GelleryColRight} `} ref={colRefRight}>
                                    <div className={style.subTitleSection}>
                                          <h3 className={isNightMode ? style.subNightTitle : style.subTitle}>{Deutsch === 'deutsch' ? 'Übungsarbeit - ImageGellery' : '練習作品- ImageGellery'}</h3>
                                          <span className={isNightMode ? style.subNightTitleLine : style.subTitleLine}></span>
                                    </div>
                                    <div className={style.paraSection}>
                                          <div className={isNightMode ? style.paraNightTitle : style.paraTitle}>
                                                {Deutsch === 'deutsch' ? 'Arbeitskonzept' : '作品概念'}</div>
                                          <div className={isNightMode ? style.Nightpara : style.para}>
                                                {Deutsch === 'deutsch' ? 'Hole ich mich Bilder von der Pixaby-API, verwende ich die Abrufmethode von Javascript mit CSS-Stil und erstelle ich eine Bild-Gellery, die verschiedene Themen abfragen kann' : '從Pixaby的API獲取圖片，用Javasript的fetch方法搭配Css Style，製作可查詢不同主題的圖片Gellery'}
                                          </div>
                                          <div className={isNightMode ? style.paraNightTitle : style.paraTitle}>
                                                {Deutsch === 'deutsch' ? 'Verwendete Programmiersprache' : '使用程式語言'}</div>
                                          <div className={style.toolIcon}>
                                                <ImHtmlFive className={isNightMode ? style.NightIcon : style.Icon} />
                                                <IoLogoCss3 className={isNightMode ? style.NightIcon : style.Icon} />
                                                <IoLogoJavascript className={isNightMode ? style.NightIcon : style.Icon} />
                                          </div>
                                    </div>
                              </Col>
                        </Row>
                  </Container>
            </div>
      )
}
