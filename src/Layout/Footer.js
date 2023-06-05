import React, { useContext } from 'react'
import style from '../ModuleCSS/FooterStyle.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { NightModeContext } from '../ContextComponent/ChangeNight';
import { DeContext } from '../ContextComponent/ChangeGerman'

export default function Footer() {
      const { isNightMode } = useContext(NightModeContext);
      const { Deutsch } = useContext(DeContext)
      return (
            <div className={isNightMode ? style.blackMode : style.footerContainer}>
                  <div className={style.contentContainer}>
                        <div className={style.contentList}>
                              <div className={style.contentItem}>
                                    <a href='mailto:g0972222165@gmail.com' style={{ color: isNightMode ? 'white' : 'black' }} >
                                          <FontAwesomeIcon icon={faEnvelope} size='2xl' className={style.footerIcon} />
                                    </a>

                              </div>
                              <div className={style.contentItem}>
                                    <a href='tel:+886-905324765' style={{ color: isNightMode ? 'white' : 'black' }}>
                                          <FontAwesomeIcon icon={faPhone} size='2xl' className={style.footerIcon} />
                                    </a>
                              </div>
                              <div className={style.contentItem}>
                                    <a href='https://www.facebook.com/profile.php?id=100002679121730' style={{ color: isNightMode ? 'white' : 'black' }} target="_blank" rel="noreferrer">
                                          <FontAwesomeIcon icon={faFacebook} size='2xl' className={style.footerIcon} />
                                    </a>

                              </div>
                              <div className={style.contentItem}>
                                    <a href='https://wa.me/8860905324765?text=%E6%AD%A1%E8%BF%8E%E8%88%87Shack%20%E9%96%8B%E5%A7%8B%E5%B0%8D%E8%A9%B1%20!%0AWillkommen,%20um%20ein%20Gespr%C3%A4ch%20mit%20Shack%20zu%20beginnen' target="_blank" rel="noreferrer" style={{ color: isNightMode ? 'white' : 'black' }} >
                                          <FontAwesomeIcon icon={faWhatsapp} size='2xl' className={style.footerIcon} />
                                    </a>
                              </div>
                        </div>
                        <span className={`${style.copyRight} ${isNightMode ? style.blackMode2 : style.copyRight}`}> {Deutsch === 'deutsch' ? ' Copyright © 2023 SHACK LIN' : '2023 © SHACK LIN 版權所有'}</span>
                  </div>

            </div>
      )
}
