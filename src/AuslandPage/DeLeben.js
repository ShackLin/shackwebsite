import React, { useState, useContext, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Slider from 'react-slick'
import IM1 from '../DeLebenImage/IM1.jpg'
import IM2 from '../DeLebenImage/IM2.jpg'
import IM3 from '../DeLebenImage/IM3.jpg'
import IM4 from '../DeLebenImage/IM4.jpg'
import IM5 from '../DeLebenImage/IM5.jpg'
import IM6 from '../DeLebenImage/IM6.jpg'
import IM7 from '../DeLebenImage/IM7.jpg'
import IM8 from '../DeLebenImage/IM8.jpg'
import IM9 from '../DeLebenImage/IM9.jpg'
import IM10 from '../DeLebenImage/IM10.jpg'
import IM11 from '../DeLebenImage/IM11.jpg'
import IM12 from '../DeLebenImage/IM12.jpg'
import IM13 from '../DeLebenImage/IM13.jpg'
import IM14 from '../DeLebenImage/IM14.jpg'
import IM15 from '../DeLebenImage/IM15.jpg'
import IM16 from '../DeLebenImage/IM16.jpg'
import IM17 from '../DeLebenImage/IM17.jpg'
import IM18 from '../DeLebenImage/IM18.jpg'
import IM19 from '../DeLebenImage/IM19.jpg'
import IM20 from '../DeLebenImage/IM20.jpg'
import { DeContext } from '../ContextComponent/ChangeGerman'
import { NightModeContext } from '../ContextComponent/ChangeNight';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import '../Css/Ausland.css'
const images = [IM1, IM2, IM3, IM4, IM5, IM6, IM7, IM8, IM9, IM10, IM11, IM12, IM13, IM14, IM15, IM16, IM17, IM18, IM19, IM20]
const texts = [
      '位於薩克森州(Sachsen)州的州議會選舉看板',
      '位於柏林(Berlin)的大學聯考考場',
      '與語言班同學共同走訪慕尼黑的德國博物館(Deutsch Mesuem)',
      '靜謐的德國假日，耶穌受難日(der Karfreitag)',
      '位於德列斯頓(Dresden)強調多元融合社會的公車廣告',
      '德國公寓的特色庭院(Hof)，可於屋內陽台享受自然陽光',
      '位於柏林(Berlin)的莫肯橋站(Möckernbrücke)',
      '在旅行社面前準備購買旅遊促銷的德國退休老人們',
      '克隆火車站前(Köln)提倡養殖農業對雞的傷害之年輕人',
      '德列斯登的技職就業博覽會(Messe Dresden)，給讀完13年級的年輕人的另一種選擇',
      '德國連鎖藥妝店DM所販售的花草包，食藥療法在德國是流行的',
      '德國非常有名的約會軟體Parship之公車廣告',
      '德國國會議員選舉，社會民主黨(SPD)的競選廣告',
      '慕尼黑奧林匹亞公園的狗狗訓練學校，讓飼主更認識狗狗的初階課程',
      '做素食台灣料理給德國的好朋友吃',
      '慕尼黑市立圖書館之入口一景',
      '慕尼黑斯薩爾河畔特有的裸體解放文化(FKK)',
      '在連鎖平價超市LIDL購買的一般德國民眾',
      '慕尼黑有名的約會勝地，黑客橋(Hacker Brücker)',
      '德國的老人長顧工作人員'
]
const textDeutsch = [
      'Landeswahlvorstand im Land Sachsen',
      'Hochschulaufnahmeprüfungszentrum in Berlin',
      'Besuche ich mit den Sprachschülern das Deutsche Museum in München',
      'Ruhiger deutscher Feiertag, Karfreitag (der Karfreitag)',
      'Eine Buswerbung in Dresden, die Vielfalt und Integration betont',
      'Der charakteristische Hof der deutschen Wohnung kann auf dem Balkon des Hauses natürliches Sonnenlicht genießen.',
      'Bahnhof Möckernbrücke in Berlin',
      'Deutsche im Ruhestand bereiten sich darauf vor, vor Reisebüros Reiseangebote zu kaufen',
      'Jugendliche vor dem Kölner Bahnhof plädieren für die Schädigung der Hühnerhaltung durch die Hühnerhaltung',
      'Messe Dresden, eine Alternative für Jugendliche ab der 13. Klasse',
      'Kräuterpackungen, verkauft von DM, einer Drogeriekette in Deutschland, Lebensmittel- und Arzneimitteltherapie sind in Deutschland beliebt',
      'Die Buswerbung von Parship, einer in Deutschland sehr bekannten Dating-Software',
      'Deutsche Bundestagswahl, Wahlkampfanzeige für die Sozialdemokratische Partei (SPD)',
      'Die Hundeschule im Münchner Olympiapark, ein Einführungskurs für Hundehalter, um mehr über Hunde zu erfahren',
      'Koche Ich vegetarisches taiwanesisches Essen für gute Freunde in Deutschland',
      'Eingang zur Stadtbibliothek München',
      'Die einzigartige Nackt-Befreiungskultur am Saarufer in München (FKK)',
      'Normale Deutsche, die bei der Supermarktkette LIDL einkaufen',
      'Hacker Brücker, Münchens berühmter Dating-Spot',
      'Altenpflegekräfte in Deutschland'
]



export default function DeLeben() {
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
                  <p className={isNightMode ? 'auslandNightTitle' : 'auslandTitle'}>{isFlipped ? (Deutsch === 'deutsch' ? 'Beobachtungstagebuch' : '德國觀察手紀') : (Deutsch === 'deutsch' ? '德國觀察手紀' : 'Beobachtungstagebuch')}</p>
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
