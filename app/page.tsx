'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoSplash from '@/components/VideoSplash';
import PastEventsGallery from '@/components/PastEventsGallery';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <>
      <VideoSplash />
      
      <div className="home-page">
        <Header showBottomMenu={true} />
        {/* Intro con Video */}
        <section id="FoodRituals">
          <div className="intro">
            <video
              rel="preload"
              width="100%"
              id="video_background"
              poster="/images/coverlow.webp"
              loop
              autoPlay
              muted
              playsInline
            >
              <source src="/videos/introfr.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section id="WhoWeAre">
          <div className="whoweare">
            <div className="centered">
              <div className="text-section">
                <span>
                  Food Rituals is a series of immersive celebrations around the ritual essence of eating, 
                  based on the thousands of rites and beliefs existing throughout the world.
                </span>
                <br /><br />
                <span>
                  Visual arts, food, music, history, staging and many more disciplines come together 
                  in the shape of a playful theater function, engaging every sense of the guests.
                </span>
                <br /><br />
                <span>
                  A Food Rituals event is an inviting experience where diners become feasters and take 
                  part in a ceremony that brings them beyond their personal realities and, hopefully, 
                  roots them back into a sense of humanity and community most needed in current times.
                </span>
              </div>

              <img 
                src="/images/arrow-down.svg" 
                alt=""
                style={{ paddingBottom: '10px' }}
              />
              <div className="knowmore">
                <Link 
                  href="/about" 
                  style={{ color: '#000000' }}
                >
                  TO KNOW MORE
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FOOD RITES THEATRE */}
        <section id="foodritestheatre">
          <div className="foodritestheatre">
            <div className="centered">
              <div className="frt-container">
                {/* Desktop */}
                <div className="title-section frt-text desktop">
                  <div className="frt-00" style={{ width: '100%', display: 'block' }}>
                    <div className="frt-01" style={{ padding: 0, paddingBottom: '80px' }}>
                      THEATRE
                    </div>
                    <div style={{ display: 'inline-flex' }}>
                      <div className="frt-01" style={{ padding: 0, paddingRight: '300px', paddingBottom: '60px', display: 'inline-block', position: 'relative' }}>
                        FOOD
                      </div>
                      <div className="frt-01" style={{ padding: 0, paddingLeft: '300px', paddingBottom: '60px', display: 'inline-block', position: 'relative' }}>
                        RITES
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%', display: 'block' }}>
                    <span className="frt-02">
                      <img src="/images/apf.svg" alt="A Playful Function" />
                    </span>
                  </div>
                </div>

                {/* Mobile */}
                <div className="title-section frt-text mobile">
                  <div className="frt-00" style={{ width: '100%', display: 'block' }}>
                    <span className="frt-01">FOOD</span>
                    <span className="frt-01">RITES</span>
                    <span className="frt-01">THEATRE</span>
                  </div>
                  <div style={{ width: '100%', display: 'block' }}>
                    <span className="frt-02">
                      <img src="/images/apf.svg" alt="A Playful Function" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRIVATE EVENTS */}
        <section id="PrivateEvents">
          <div className="privateevents">
            <div className="centered">
              <div className="title-section">
                PRIVATE EVENTS
              </div>
              
              <div className="text-section">
                Tailored-made adaptations of our existing functions or original creations of feasts 
                to fit the needs of private clients (art fairs and institutions, governmental and 
                nonprofit organizations, special projects and venues) - always keeping intact the 
                essence of our approach, mission and vision.
              </div>

              <img 
                src="/images/arrow-down.svg" 
                alt=""
                style={{ paddingBottom: '10px' }}
              />
              <div className="knowmore">
                <Link 
                  href="/contact" 
                  style={{ color: '#000000' }}
                >
                  CONTACT US TO KNOW MORE
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* PAST EVENTS - Galería horizontal */}
      <PastEventsGallery />

      <Footer />
    </>
  );
}
