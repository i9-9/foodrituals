'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function About() {
  const [hoveredPerson, setHoveredPerson] = useState<'antonella' | 'sandie' | null>(null);

  return (
    <>
      <style jsx global>{`
        body {
          background: #FCF7EF !important;
          color: #000000 !important;
        }

        .about-page header {
          display: block;
          width: 100%;
          margin: auto;
          display: flex;
          position: absolute;
          z-index: 10;
        }

        .about-page .menu-header {
          display: inline-flex;
          height: auto;
          width: 100%;
          max-width: 1200px;
          margin: auto;
          font-size: 20px;
          padding-top: 60px;
        }

        .about-page .menu-header-bottom {
          display: inline-flex;
          height: auto;
          width: 100%;
          max-width: 1200px;
          margin: auto;
          font-size: 20px;
          padding-bottom: 60px;
          bottom: 60px;
          top: auto;
        }

        .about-page .heder-element {
          position: relative;
          margin: auto;
        }

        .about-page .menu-whoweare {
          margin-left: 30px;
        }

        .about-page .menu-contact {
          margin-right: 30px;
        }

        .about-page a {
          color: #000000;
          text-decoration: none;
        }

        .about-page .header-bottom {
          display: block;
          width: 100%;
          margin: auto;
          display: flex;
          position: absolute;
          z-index: 10;
          bottom: 0;
        }

        .about-page .menu-logo img {
          width: 90px;
          height: auto;
        }

        .about-page .fix-back2 {
          width: 105px;
          display: block;
        }

        .about {
          min-height: 100vh;
          height: 100%;
          align-items: center;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          padding-top: 190px;
        }

        .about-img {
          width: 40%;
          float: left;
          display: block;
          margin: 10px;
        }

        .about-text {
          width: 60%;
          float: right;
          display: block;
          max-width: 538px;
          z-index: 1;
          padding: 30px;
          padding-top: 0px;
        }

        .img-a {
          position: absolute;
          top: 20vh;
          padding-right: 60px;
          opacity: 0;
          transition: opacity .25s ease-in-out;
        }

        .img-a.show {
          opacity: 1;
          transition: opacity .25s ease-in-out;
        }

        .img-s {
          position: absolute;
          bottom: auto;
          padding-left: 60px;
          opacity: 0;
          transition: opacity .25s ease-in-out;
        }

        .img-s.show {
          opacity: 1;
          transition: opacity .25s ease-in-out;
        }

        .img01-break {
          display: none;
        }

        .img02-break {
          display: none;
        }

        .titleabout {
          font-size: 30px;
          line-height: 30px;
        }

        .textabout {
          font-size: 16px;
          line-height: 18px;
        }

        @media (max-width: 1400px) {
          .about {
            height: 100%;
            min-height: 100vh;
            padding-top: 180px;
          }
        }

        @media (max-width: 1200px) {
          .about-text {
            width: 80%;
          }

          .img-a {
            padding-top: 120px;
            top: 30vh;
          }

          .img-s {
            padding-top: 300px;
            bottom: auto;
          }

          .img01-break {
            display: table;
            margin: auto;
            padding-top: 50px;
            padding-bottom: 80px;
          }

          .img02-break {
            display: table;
            margin: auto;
            padding-top: 50px;
            padding-bottom: 80px;
          }

          .img-a {
            display: none;
          }

          .img-s {
            display: none;
          }

          .header-bottom {
            display: none;
          }

          .about-img {
            display: none;
          }

          .titleabout {
            font-size: 30px;
            line-height: 30px;
          }

          .textabout {
            font-size: 16px;
            line-height: 18px;
          }
        }

        @media (max-width: 800px) {
          .about-text {
            width: 100%;
            padding-top: 60px;
          }

          .about {
            padding-top: 90px;
          }

          .titleabout {
            font-size: 26px;
            line-height: 26px;
          }

          .textabout {
            font-size: 16px;
            line-height: 18px;
          }

          .about-page .menu-header {
            font-size: 14px;
            max-width: 600px;
            padding-top: 30px;
          }

          .about-page .menu-header-bottom {
            font-size: 14px;
            max-width: 600px;
            padding-bottom: 30px;
          }

          .about-page .menu-logo img {
            width: 44px;
            height: auto;
          }

          .about-page .fix-back2 {
            width: 50px;
            display: block;
          }

          .about-page .menu-logo {
            padding-left: 10px;
          }
        }
      `}</style>

      <div className="about-page">
        <header>
          <span id="FoodRituals"></span>
          <section id="about"></section>

          <div className="menu-header">
            <div className="menu-whoweare heder-element">
              <Link href="/">BACK</Link>
            </div>
            <div className="fix-back2"></div>
            <div className="menu-logo heder-element">
              <Link href="/">
                <img src="/images/menu-logo-invert.png" alt="Food Rituals" />
              </Link>
            </div>
            <div className="menu-contact heder-element">
              <Link href="/about">WHO WE ARE</Link>
            </div>
          </div>
        </header>

        <div className="header-bottom">
          <div className="menu-header-bottom">
            <div className="menu-whoweare heder-element"></div>
            <div className="menu-contact heder-element"></div>
          </div>
        </div>

        <section id="About">
          <div className="about">
            <div className="about-img">
              <div className={`img-a ${hoveredPerson === 'antonella' ? 'show' : ''}`}>
                <img src="/images/Antonella.png" alt="Antonella" />
              </div>
              <div className={`img-s ${hoveredPerson === 'sandie' ? 'show' : ''}`}>
                <img src="/images/Sandie.png" alt="Sandie" />
              </div>
            </div>

            <div className="about-text">
              <div
                className="hover-a"
                onMouseEnter={() => setHoveredPerson('antonella')}
                onMouseLeave={() => setHoveredPerson(null)}
              >
                <span className="titleabout">ANTONELLA</span>
                <br /> <br />
                <span className="textabout">
                  Antonella Tignanelli is a chef, creative director & food researcher.
                </span>
                <br /> <br />
                <span className="textabout">
                  She has been passionate about the history of food and the passing of cooking traditions from a very early age, introduced to the world of cooking through her grandmother's feasts. Born in Buenos Aires, she lived all around the globe, where she learnt different native food techniques and participated in many cultural celebrations. She has been part of the food industry for 15 years, where she started as a chef and then designed restaurant concepts in different countries. She spent the last few years creating Food Rituals, where she acts as the food & arts director.
                </span>
                <br /> <br />
              </div>

              <div className="img01-break">
                <img src="/images/Antonella.png" alt="Antonella" />
              </div>

              <div
                className="hover-b"
                onMouseEnter={() => setHoveredPerson('sandie')}
                onMouseLeave={() => setHoveredPerson(null)}
              >
                <br />
                <span className="titleabout">SANDIE</span>
                <br /> <br />
                <span className="textabout">
                  Sandie is a creative producer.
                </span>
                <br /> <br />
                <span className="textabout">
                  She was raised in France's Brittany, where she acquired a deep sense of conviviality and an unconditional love for feasts. When she moved to Mexico City (2013), she founded The Hidden Kitchen - monthly secret pop-up dinners in unusual locations, that now designs original food events playing with gastronomy, art and performance. Profoundly passionate about perpetuating the meaning, connection and pleasure that our traditions hold, Sandie co-founded the Food Rituals' event platform, through which she hosts one-of-a-kind celebrations.
                </span>
              </div>

              <div className="img02-break">
                <img src="/images/Sandie.png" alt="Sandie" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer borderTop={true} />
    </>
  );
}
