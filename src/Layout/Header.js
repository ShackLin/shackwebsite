import React, { useState, useContext } from 'react'
import style from '../ModuleCSS/HeaderStyle.module.css'
import NightButton from '../ButtonComponent/NightButton'
import GermanButton from '../ButtonComponent/GermanButton'
import { Link, useNavigate } from 'react-router-dom';
import { DeContext } from '../ContextComponent/ChangeGerman'
import { GoogleUserAuth } from '../ContextComponent/GoogleSignUp';
import { GithubUserAuth } from '../ContextComponent/GithubSignUp';
import { NightModeContext } from '../ContextComponent/ChangeNight';
import { UserAuth } from '../ContextComponent/EmailSignUp';
import { MdEmail } from "react-icons/md";
// import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";




export default function Header() {
      const { user, logout } = UserAuth();
      const { user3, GooglelogOut } = GoogleUserAuth();
      const { user2, GithubLogOut } = GithubUserAuth()
      // 各類驗證方法的Logout function 
      const handleLogoutEmail = async () => {
            try {
                  await logout()
            } catch (err) {
                  console.log(err)
            }
      }
      const handleLogoutGoogle = async () => {
            try {
                  await GooglelogOut()
            } catch (err) {
                  console.log(err)
            }
      }
      const handleLogouGithun = async () => {
            try {
                  await GithubLogOut()
            } catch (err) {
                  console.log(err)
            }
      }

      const navigate = useNavigate();
      const [showMenu, setShowMenu] = useState(false);
      //設定觸發新的Nav-Container被點擊時的狀態
      const [showIcon, setShowIcon] = useState(false);
      // 設定觸發漢堡列被點擊時的狀態
      // const [showMask, setShowMask] = useState(false);
      // //設定觸發遮罩顯示時點的狀態
      const { Deutsch } = useContext(DeContext)
      //  使用從DeUmtauschen傳的Deutsch狀態變數
      const { isNightMode } = useContext(NightModeContext);

      const openMenu = () => {
            setShowMenu(prevShowMenu => !prevShowMenu);
            setShowIcon(prevShowIcon => !prevShowIcon);
            document.body.classList.add(style.noScroll);
      }
      const closeMenu = () => {
            setShowIcon(false);
            setShowMenu(false);
            document.body.classList.remove(style.noScroll);
      };

      function handleNavItemClickAbout() {
            closeMenu();
            navigate('/about');
      }

      const handleNavItemClick = path => {
            navigate(path);
            closeMenu();
      };



      return (
            <>
                  <div className={`${style.navbar} ${isNightMode ? style.nightMode : style.navbar}`}>
                        <div className={style.navbarContainer}>
                              <NightButton />
                              <ul className={style.navItems}>
                                    <li className={style.navItem}>
                                          <Link to="/" className={isNightMode ? style.navLink : style.whiteText}>      {Deutsch === 'deutsch' ? 'Home' : '首頁'}</Link>
                                    </li>
                                    <li className={style.navItem}>
                                          <Link to="/about" className={isNightMode ? style.navLink : style.whiteText}>      {Deutsch === 'deutsch' ? 'Über mich' : '關於我'}</Link>
                                    </li>
                                    <li className={style.navItem}>
                                          <Link className={isNightMode ? style.navLink : style.whiteText} to='/ausland'>  {Deutsch === 'deutsch' ? 'Auslandserfahrung' : '國外經驗'}</Link>
                                    </li>
                                    <li className={style.navItem}><Link className={isNightMode ? style.navLink : style.whiteText} to='/ubung'>{Deutsch === 'deutsch' ? 'Übungssammlung' : '練習集合'}</Link>
                                    </li>
                                    <div className={style.IconsContainer}>
                                          {user ? (<Link className={isNightMode ? style.navLink : style.whiteText} to='/' onClick={handleLogoutEmail}><MdEmail className={style.iconSign} />{Deutsch === 'deutsch' ? 'LogOut' : '登出'}</Link>
                                          ) : (<Link className={isNightMode ? style.navLink : style.whiteText} to='/mainsign' ><MdEmail className={style.iconSign} />{Deutsch === 'deutsch' ? 'LogIn' : '登入'}</Link>)}

                                          {user2?.displayName ? (<Link className={isNightMode ? style.navLink : style.whiteText} to='/' onClick={handleLogouGithun}><BsGithub className={style.iconSign} />{Deutsch === 'deutsch' ? 'LogOut' : '登出'}</Link>
                                          ) : (<Link className={isNightMode ? style.navLink : style.whiteText} to='/mainsign' ><BsGithub className={style.iconSign} />{Deutsch === 'deutsch' ? 'LogIn' : '登入'}</Link>)}

                                          {user3?.displayName ? (<Link className={isNightMode ? style.navLink : style.whiteText} to='/' onClick={handleLogoutGoogle}><FcGoogle className={style.iconSign} />{Deutsch === 'deutsch' ? 'LogOut' : '登出'}</Link>
                                          ) : (<Link className={isNightMode ? style.navLink : style.whiteText} to='/mainsign' ><FcGoogle className={style.iconSign} />{Deutsch === 'deutsch' ? 'LogIn' : '登入'}</Link>)}
                                    </div>

                              </ul>
                              <GermanButton />
                              <div className={`${style.menuIcon} ${showIcon ? style.cross : ''}`}
                                    onClick={openMenu} >
                                    <span className={style.iconLine} ></span>
                                    <span className={style.iconLine}></span>
                                    <span className={style.iconLine}></span>
                              </div>
                        </div>
                  </div>
                  {showMenu && (
                        <>
                              <div className={`${style.mask} ${showMenu ? style.maskVisible : ''}`} onClick={closeMenu}></div>

                              <div className={style.menuContainer}  >
                                    <ul className={style.navItems2}>
                                          <li className={style.navItem2}>
                                                <Link to='/about' className={style.navLink2} onClick={() => handleNavItemClickAbout()}>關於我</Link>
                                          </li>
                                          <li className={style.navItem2}>
                                                <Link to='/ausland' className={style.navLink2} onClick={() => handleNavItemClick('/ausland')}>國外經驗</Link>
                                          </li>
                                          <li className={style.navItem2}>
                                                <Link to='/ubung' className={style.navLink2} onClick={() => handleNavItemClick('/ubung')}>練習集合</Link>
                                          </li>
                                    </ul>
                              </div>

                        </>
                  )}

            </>
      )
}
