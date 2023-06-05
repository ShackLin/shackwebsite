import React, { useState, useContext, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Slider from 'react-slick'
import IM1 from '../DeNatureImage/IM1.jpg'
import IM2 from '../DeNatureImage/IM2.jpg'
import IM3 from '../DeNatureImage/IM3.jpg'
import IM4 from '../DeNatureImage/IM4.jpg'
import IM5 from '../DeNatureImage/IM5.jpg'
import IM6 from '../DeNatureImage/IM6.jpg'
import IM7 from '../DeNatureImage/IM7.jpg'
import IM8 from '../DeNatureImage/IM8.jpg'
import IM9 from '../DeNatureImage/IM9.jpg'
import IM10 from '../DeNatureImage/IM10.jpg'
import IM11 from '../DeNatureImage/IM11.jpg'
import IM12 from '../DeNatureImage/IM12.jpg'
import IM13 from '../DeNatureImage/IM13.jpg'
import IM14 from '../DeNatureImage/IM14.jpg'
import IM15 from '../DeNatureImage/IM15.jpg'
import IM16 from '../DeNatureImage/IM16.jpg'
import IM17 from '../DeNatureImage/IM17.jpg'
import { DeContext } from '../ContextComponent/ChangeGerman'
import { NightModeContext } from '../ContextComponent/ChangeNight';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import '../Css/Ausland.css'
const images = [IM1, IM2, IM3, IM4, IM5, IM6, IM7, IM8, IM9, IM10, IM11, IM12, IM13, IM14, IM15, IM16, IM17]
const texts = [
      '初春慕尼黑的伊薩爾河，Isar Fluss',
      '有千年歷史的慕尼黑舊南公墓Alter Südfriedhof',
      '位於巴登-符騰堡州洲南邊的腓特烈港(Friedrichshafen)，緊鄰波登湖(Bodensee)的北邊',
      '位於巴登-符騰堡州洲的波登湖(Bodensee)之藍天一景',
      '位於薩克森國家公園(Saxon Switzerland National Park)的仲夏夜星空',
      '慕尼黑奧林匹亞公園清晨五點半的初春柔陽',
      '慕尼黑南邊郊區的伊薩爾河(Isar Fluss)河畔',
      '薩克森國家公園(Saxon Switzerland National Park)的峭壁風光',
      '萊比錫(Leizpzig)的城市公園之草原廣場',
      '德列斯登(Dresden)市立舊南公墓園',
      '巴伐利亞州的新天鵝堡(Schloss Neuschwanstein)之景色',
      '慕尼黑北郊區的風力發電',
      '慕尼黑市區內的小河流，鬧區中的大自然',
      '傳統巴伐利亞州山區的小屋及草原',
      '慕尼黑奧林匹亞公園內的河畔景色',
      '暮冬大雪的巴伐利亞州',
      '初春但白雪皚皚的慕尼黑',
]
const textDeutsch = [
      'Isar in München im zeitigen Frühjahr, Isar Fluss',
      'Der tausendjährige Alte Südfriedhof auf dem Alten Südfriedhof München',
      'Liegt in Friedrichshafen im Süden Baden-Württembergs,am Nordufer des Bodensees.',
      'Ein Blick in den blauen Himmel am Bodensee in Baden-Württemberg',
      'Mittsommernacht-Sternenhimmel im Nationalpark Sächsische Schweiz',
      'Die sanfte Sonne im Vorfrühling um 5:30 Uhr morgens im Olympiapark in München',
      'Am Ufer der Isar in den südlichen Vororten Münchens',
      'Klippenlandschaft im Nationalpark Sächsische Schweiz',
      'Prairie Square, ein Stadtpark in Leipzig',
      'Städtischer Alter Südpark Dresden',
      'Blick auf Schloss Neuschwanstein in Bayern',
      'Windkraft in den nördlichen Vororten Münchens',
      'Der kleine Fluss im Stadtgebiet von München, die Natur im Innenstadtbereich',
      'Traditionelle bayerische Berghütten und Wiesen',
      'Blick auf den Flussufer im Münchner Olympiapark',
      'Bayern im Spätwinterschnee',
      'Vorfrühling, aber verschneites München',
]


export default function DeNature() {
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
                  <p className={isNightMode ? 'auslandNightTitle' : 'auslandTitle'}>{isFlipped ? (Deutsch === 'deutsch' ? 'Deutschland Naturlandschaft' : '德國自然景色') : (Deutsch === 'deutsch' ? '德國自然景色' : 'Deutschland Naturlandschaft')}</p>
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
