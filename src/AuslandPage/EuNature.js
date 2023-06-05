import React, { useState, useContext, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Slider from 'react-slick'
import IM1 from '../EuImage/IM1.JPG'
import IM2 from '../EuImage/IM2.JPG'
import IM3 from '../EuImage/IM3.JPG'
import IM4 from '../EuImage/IM4.JPG'
import IM5 from '../EuImage/IM5.JPG'
import IM6 from '../EuImage/IM6.JPG'
import IM7 from '../EuImage/IM7.JPG'
import IM8 from '../EuImage/IM8.JPG'
import IM9 from '../EuImage/IM9.jpg'
import IM10 from '../EuImage/IM10.jpg'
import IM11 from '../EuImage/IM11.jpg'

import { DeContext } from '../ContextComponent/ChangeGerman'
import { NightModeContext } from '../ContextComponent/ChangeNight';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import '../Css/Ausland.css'
const images = [IM1, IM2, IM3, IM4, IM5, IM6, IM7, IM8, IM9, IM10, IM11]
const texts = [
      '維也納中央公墓，貝多芬及莫札特安息處',
      '春天的維也納聯合國公園',
      '維也納Lainzer Tiergarten 野生動物公園',
      '春天維也納郊區的Pötzleinsdorfer Schlosspark',
      '初春維也納郊區的Oberlaa',
      '初春維也納別墅區的Türkenschanzpark',
      '初秋的維也納Stadtwanderwege10，維也納登山路徑10',
      '下奧地利州的Laxenburg城堡',
      '斯洛伐克首都Bratislava郊區的Devínsky hrad城堡',
      '斯洛伐克首都Bratislava郊區的Devínsky hrad城堡',
      '從Waldseilpark Kahlenberg眺望多瑙河畔的維也納'
];
const textDeutsch = [
      'Wiener Zentralfriedhof, Ruhestätte von Beethoven und Mozart',
      'Wiener UN-Park im Frühling',
      'Wildpark Lainzer Tiergarten Wien',
      'Pötzleinsdorfer Schlosspark am Stadtrand von Wien im Frühling',
      'Oberlaa am Stadtrand von Wien im Vorfrühling',
      'Türkenschanzpark im Wiener Villenviertel im Vorfrühling',
      'Wiener Stadtwanderwege10 im Frühherbst, Wiener Wanderweg 10',
      'Schloss Laxenburg in Niederösterreich',
      'Burg Devínsky hrad am Stadtrand von Bratislava, der Hauptstadt der Slowakei',
      'Burg Devínsky hrad am Stadtrand von Bratislava, der Hauptstadt der Slowakei',
      'Blick auf Wien an der Donau vom Waldseilpark Kahlenberg'
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
                  <p className={isNightMode ? 'auslandNightTitle' : 'auslandTitle'}>{isFlipped ? (Deutsch === 'deutsch' ? 'Europäische Naturlandschaft' : '歐洲自然風光') : (Deutsch === 'deutsch' ? '歐洲自然風光' : 'Europäische Naturlandschaft')}</p>
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
