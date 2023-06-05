import React, { useState, useContext, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Slider from 'react-slick'
import IM1 from '../WienImage/IM1.jpg'
import IM2 from '../WienImage/IM2.jpg'
import IM3 from '../WienImage/IM3.jpg'
import IM4 from '../WienImage/IM4.jpg'
import IM5 from '../WienImage/IM5.jpg'
import IM6 from '../WienImage/IM6.jpg'
import IM7 from '../WienImage/IM7.jpg'
import IM8 from '../WienImage/IM8.jpg'
import IM9 from '../WienImage/IM9.jpg'
import IM10 from '../WienImage/IM10.JPG'
import IM11 from '../WienImage/IM11.JPG'
import IM12 from '../WienImage/IM12.jpg'
import { DeContext } from '../ContextComponent/ChangeGerman'
import { NightModeContext } from '../ContextComponent/ChangeNight';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import '../Css/Ausland.css'
const images = [IM1, IM2, IM3, IM4, IM5, IM6, IM7, IM8, IM9, IM10, IM11, IM12]
const texts = [
      '與奧地利朋友共同製作Youtube Video介紹台奧之差異',
      '在維也納聯合國中心之湖享受夏天',
      '與奧地利朋友在維也納城市公園享受仲夏夜野餐',
      '帶奧地利小女孩Miri搭區間車前往下奧地利州小旅行(Babysitter打工)',
      '帶奧地利小女孩Miri搭區間車前往下奧地利州小旅行(Babysitter打工)',
      '登上下奧地利州的觀星塔準備夜晚之實作觀星',
      '給自己一個微笑，完成維也納馬拉松',
      '與自己永遠的妹妹Miri一同合影，探望維也納兒童之家',
      '帶俄羅斯小男孩一同製作台式飯糰(Babysitter 打工)',
      '走訪貝多芬的安息地，維也納公墓',
      '與奧地利朋友共同採集野生熊蔥(Bärlauch)',
      '與Miri在維也納Domkirche St. Stephan',
];
const textDeutsch = [
      'Koproduziertes Youtube-Video mit österreichischen Freunden, um die Unterschiede zwischen Taiwan und Österreich vorzustellen',
      'Genieße ich den Sommer am See des UN-Zentrums Wien',
      'Genieße ich ein Mittsommerabend-Picknick mit österreichischen Freunden in einem Wiener Stadtpark',
      'Mitnahme der österreichischen Kleinen Miri zu einem kleinen Ausflug mit dem Shuttlebus nach Niederösterreich (Babysitter-Nebenjob)',
      'Mitnahme der österreichischen Kleinen Miri zu einem kleinen Ausflug mit dem Shuttlebus nach Niederösterreich (Babysitter-Nebenjob)',
      'Besteige ich den Sternenbeobachtungsturm in Niederösterreich, um sich auf die eigentliche Sternenbeobachtung bei Nacht vorzubereiten',
      'Schenke ich sich ein Lächeln und beende ich den Wien-Marathon',
      'Mache ich ein Foto mit meiner ewigen Schwester Miri und besuche ich das Wiener Kinderheim',
      'Mit einem kleinen russischen Jungen taiwanesische Reisbällchen zubereiten (Teilzeitjob als Babysitter)',
      'Besuche ich Beethovens Ruhestätte, den Wiener Friedhof',
      'Sammeln ich mit österreichischen Freunden Bärlauch',
      'Mit Miri in der Domkirche St. Stephan in Wien',
];
export default function WienLeben() {
      const { Deutsch } = useContext(DeContext)
      const { isNightMode } = useContext(NightModeContext);
      const handleArrowClick = () => {
            setAutoplay(!autoplay);
      };
      const NextArrow = ({ onClick }) => {
            return (
                  <div className={isNightMode ? 'arrowNight next' : 'arrow next'} onClick={() => {
                        onClick();
                        handleArrowClick();
                  }}>
                        <FaArrowRight />
                  </div>
            );
      };

      const PrevArrow = ({ onClick }) => {
            return (
                  <div className={isNightMode ? 'arrowNight prev' : 'arrow prev'} onClick={() => {
                        onClick();
                        handleArrowClick();
                  }}>
                        <FaArrowLeft />
                  </div>
            );
      };
      const [imageIndex, setImageIndex] = useState(0);
      const [autoplay, setAutoplay] = useState(true);

      const [isFlipped, setIsFlipped] = useState(false);
      useEffect(() => {
            const timeout = setTimeout(() => {
                  setIsFlipped(!isFlipped);
            }, 2000);

            return () => clearTimeout(timeout);
      }, [isFlipped]);
      const settings = {
            infinite: true,
            lazyLoad: true,
            speed: 300,
            slidesToShow: 2.5,
            centerMode: true,
            centerPadding: 0,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            initialSlide: imageIndex,
            beforeChange: (current, next) => setImageIndex(next),
            autoplay: autoplay,
            autoplaySpeed: 1000,
      };

      return (
            <div className={isNightMode ? 'auslandNightContainer' : 'auslandContainer'}>
                  <p className={isNightMode ? 'auslandNightTitle' : 'auslandTitle'}> {isFlipped ? (Deutsch === 'deutsch' ? 'Leben in Wien' : '維也納生活') : (Deutsch === 'deutsch' ? '維也納生活' : 'Leben in Wien')}</p>
                  <Slider {...settings}>
                        {images.map((img, idx) => (
                              <Container fluid key={idx}>
                                    <Row className="auslandRow">

                                          <div className={idx === imageIndex ? "slide activeSlide" : "slide"} key={idx}>
                                                <Col xs={8} className="auslandCol">
                                                      <div className="imageContainer">
                                                            <div style={{ backgroundImage: `url(${img})` }} className=
                                                                  'auslandImage'></div>
                                                      </div>
                                                </Col>
                                                <Col className="auslandCol">
                                                      {idx === imageIndex && (
                                                            <div className={idx === imageIndex ? 'explanatory-text activeText' : 'explanatory-text'}>
                                                                  <p className={isNightMode ? 'NightPara' : 'Para'}>{Deutsch === 'deutsch' ? textDeutsch[idx] : texts[idx]}</p>
                                                            </div>
                                                      )}
                                                </Col>
                                          </div>
                                    </Row>
                              </Container>
                        ))}
                  </Slider>
            </div>
      )
}
