import React, { useContext } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DeContext } from '../ContextComponent/ChangeGerman'
import { NightModeContext } from '../ContextComponent/ChangeNight';
import style from '../ModuleCSS/CardShopStyle.module.css'

export default function CardShop() {
      const { Deutsch } = useContext(DeContext)
      const { isNightMode } = useContext(NightModeContext);
      return (
            <div>
                  <div className={style.CardShopContainer}>
                        <Container fluid>
                              <Row className={style.CardShopRow}>
                                    <Col md={6} xs={12} className={style.CardShopCol}>
                                          <a href='https://simple-card-shop.pages.dev/' target="_blank" rel="noreferrer">
                                                <div className={style.CardShopImageContainer}>
                                                      <div className={style.CardShopImage}></div>
                                                </div>
                                          </a>
                                    </Col>
                                    <Col md={6} xs={12} className={style.CardShopCol} >
                                          <div className={style.subTitleSection}>
                                                <h3 className={isNightMode ? style.subNightTitle : style.subTitle}>
                                                      {Deutsch === 'deutsch' ? 'Übungsarbeit - React CardS Shop' : '練習作品- React CardS Shop'} </h3>
                                                <span className={isNightMode ? style.subNightTitleLine : style.subTitleLine}></span>
                                          </div>
                                          <div className={style.paraSection}>
                                                <div className={isNightMode ? style.paraNightTitle : style.paraTitle}> {Deutsch === 'deutsch' ? 'Arbeitskonzept' : '作品概念'}</div>
                                                <div className={isNightMode ? style.Nightpara : style.para}>
                                                      {Deutsch === 'deutsch' ? 'Entwerfe ich eine einfache Shopping-Website mit useContext Hook, Intersectionobserver, Pixabay und Firebase' : '藉由useContext Hook、Intersectionobserver、Pixabay及Firebase設計一個簡單的購物網頁'}</div>
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
      )
}
