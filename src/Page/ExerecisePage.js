import React, { useContext } from 'react'
import style from '../ModuleCSS/ExerciseStyle.module.css'
import Container from 'react-bootstrap/Container';
import ImageGallery from '../ExercisePage/ImageGallery'
import CalTypeScript from '../ExercisePage/CalTypeScript';
import LiangEat from '../ExercisePage/LiangEat';
import CardShop from '../ExercisePage/CardShop';
import TodoList from '../ExercisePage/TodoList';
import { DeContext } from '../ContextComponent/ChangeGerman'
import { NightModeContext } from '../ContextComponent/ChangeNight';


export default function ExerecisePage() {
      const { Deutsch } = useContext(DeContext)
      const { isNightMode } = useContext(NightModeContext);
      return (

            <div className={isNightMode ? style.UbungNightContainer : style.UbungContainer}>
                  <Container className={style.portoContainer} fluid>
                        <div className={style.portoSection}>
                              <h2 className={isNightMode ? style.portoNightTitle : style.portoTitle}>{Deutsch === 'deutsch' ? 'Übungssammlung' : '練習集合'}</h2>
                        </div>
                  </Container>
                  <CardShop />
                  <div style={{ width: "100%", height: "80px" }}></div>
                  <TodoList />
                  <div style={{ width: "100%", height: "80px" }}></div>
                  <CalTypeScript />
                  <div style={{ width: "100%", height: "80px" }}></div>
                  <ImageGallery />
                  <div style={{ width: "100%", height: "80px" }}></div>
                  <LiangEat />

            </div>
      )
}
