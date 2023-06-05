import React, { useContext, useRef, useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { DeContext } from '../ContextComponent/ChangeGerman'
import { NightModeContext } from '../ContextComponent/ChangeNight';
import IntroductionPage from '../AboutMePage/IntroductionPage';
import ExperiencePage from '../AboutMePage/ExperiencePage';
import SkillPage from '../AboutMePage/SkillPage';
import LanguagePage from '../AboutMePage/LanguagePage';
import style from '../ModuleCSS/AboutMeStyle.module.css'
// import { Link } from 'react-router-dom'


export default function AboutMe() {
      const [prevScrollPos, setPrevScrollPos] = useState(0);
      const [visible, setVisible] = useState(true);
      useEffect(() => {
            const handleScroll = () => {
                  const currentScrollPos = window.pageYOffset;
                  const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 30;

                  setPrevScrollPos(currentScrollPos);
                  setVisible(isVisible);
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                  window.removeEventListener('scroll', handleScroll);
            };
      }, [prevScrollPos]);
      const { Deutsch } = useContext(DeContext)
      const { isNightMode } = useContext(NightModeContext);
      const introductionRef = useRef(null);
      const experienceRef = useRef(null);
      const skillRef = useRef(null);
      const languageRef = useRef(null)
      const handleIntroductionClick = () => {
            introductionRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

      const handleExperienceClick = () => {
            experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

      const handleSkillClick = () => {
            skillRef.current?.scrollIntoView({ behavior: 'smooth' });
      };
      const handleLanguageClick = () => {
            languageRef.current?.scrollIntoView({ behavior: 'smooth' });
      };
      return (
            <>
                  <Navbar className={`${style.Navbar} ${isNightMode ? style.NavNight : style.Navbar} ${visible ? '' : style.hidden}`}>
                        <Container >
                              <div className={style.navContainer}>
                                    <Nav className={style.navItems}>
                                          <Nav.Link className={isNightMode ? style.ItemNight : style.navItem} onClick={handleIntroductionClick}> {Deutsch === 'deutsch' ? 'Einführung' : '簡介'}</Nav.Link>
                                          <Nav.Link className={isNightMode ? style.ItemNight : style.navItem} onClick={handleExperienceClick}> {Deutsch === 'deutsch' ? 'Erfahrung' : '經歷'}</Nav.Link>

                                          <Nav.Link className={isNightMode ? style.ItemNight : style.navItem} onClick={handleSkillClick}>{Deutsch === 'deutsch' ? 'Fachmännische Fähigkeit' : '專業技能'}</Nav.Link>
                                          <Nav.Link className={isNightMode ? style.ItemNight : style.navItem} onClick={handleLanguageClick}>{Deutsch === 'deutsch' ? 'Sprachkenntnisse' : '語言能力'}</Nav.Link>
                                    </Nav>
                              </div>
                        </Container>
                  </Navbar>
                  <img src="https://d33wubrfki0l68.cloudfront.net/34bc1d928c3f73ced3569d70201559f9a3175e19/e8f74/svg/bg-dec1.svg" alt="" className={style.decImage} />

                  <div ref={introductionRef} >
                        <IntroductionPage />
                  </div>
                  <div ref={experienceRef} >
                        <ExperiencePage />
                        <img src="https://d33wubrfki0l68.cloudfront.net/7ae3cff515c66ffb7f24e943b73a02e7f1281a13/415bd/svg/bg-dec2.svg" alt="" className={style.decImage2} />
                  </div>
                  <div ref={skillRef}  >
                        <SkillPage />
                  </div>
                  <img src="https://d33wubrfki0l68.cloudfront.net/7ae3cff515c66ffb7f24e943b73a02e7f1281a13/415bd/svg/bg-dec2.svg" alt="" className={style.decImage2} />
                  <div ref={languageRef} >
                        <LanguagePage />
                  </div>
            </>
      )
}