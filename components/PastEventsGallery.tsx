'use client';

import { useRef } from 'react';
import type { ReactNode } from 'react';

interface Event {
  id: string;
  number: string;
  title: string | ReactNode;
  date: string | ReactNode;
  images: Array<{ src: string; className: string }>;
  width: string;
  widthMobile: string;
}

const events: Event[] = [
  {
    id: 'MIDSOMMAR',
    number: '01',
    title: 'MIDSOMMAR',
    date: (
      <>
        Saturday 2nd <span className="space"></span> October<span className="space"></span> 2021
      </>
    ),
    width: '3251px',
    widthMobile: '3137px',
    images: [
      { src: '01.png', className: 'img01' },
      { src: '02.png', className: 'img02' },
      { src: '03.png', className: 'img03' },
      { src: '04.png', className: 'img04' },
      { src: '05.png', className: 'img05' },
      { src: '06.png', className: 'img06' }
    ]
  },
  {
    id: 'THETAROTTABLE',
    number: '02',
    title: 'THE TAROT TABLE',
    date: (
      <>
        Saturday <span className="space"></span> 19th June<span className="space"></span> 2021
      </>
    ),
    width: '3550px',
    widthMobile: '3385px',
    images: [
      { src: '07.png', className: 'img07' },
      { src: '08.png', className: 'img08' },
      { src: '09.png', className: 'img09' },
      { src: '10.png', className: 'img10' },
      { src: '11.png', className: 'img11' },
      { src: '12.png', className: 'img12' },
      { src: '13.png', className: 'img13' }
    ]
  },
  {
    id: 'THEDEATHDANCE',
    number: '03',
    title: 'SAMHAIN',
    date: (
      <>
        Sunday 31st <span className="space"></span> October<span className="space"></span> 2021
      </>
    ),
    width: '2935px',
    widthMobile: '2971px',
    images: [
      { src: '14.png', className: 'img14' },
      { src: '15.png', className: 'img15' },
      { src: '16.png', className: 'img16' },
      { src: '17.png', className: 'img17' },
      { src: '18.png', className: 'img18' }
    ]
  },
  {
    id: 'ELBANQUETEDEPLATON',
    number: '04',
    title: (
      <>
        <br />
        EL BANQUETE <br /> DE PLATÓN
      </>
    ),
    date: (
      <>
        Thursday 26th <span className="space"></span> May<span className="space"></span> 2022
      </>
    ),
    width: '3160px',
    widthMobile: '3307px',
    images: [
      { src: '19.png', className: 'img19' },
      { src: '20.png', className: 'img20' },
      { src: '21.png', className: 'img21' },
      { src: '22.png', className: 'img22' },
      { src: '23.png', className: 'img23' },
      { src: '24.png', className: 'img24' }
    ]
  }
];

export default function PastEventsGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div id="PastEvents" className="pastevents">
      <div style={{ paddingTop: '60px' }} className="title-section">
        PAST EVENTS
      </div>

      {/* Galería horizontal con scroll */}
      <div 
        id="overflow-scroll"
        ref={scrollContainerRef}
        className="container"
      >
        <div id="wrap" className="wrap">
          {events.map((event) => (
            <section
              key={event.id}
              id={event.id}
              className="section homeStage"
            >
              <div className="title-box unselecteable">
                <div className="title">
                  {event.number} <span className="titlespace"><br /></span> {event.title}
                </div>
                <div className="date">
                  {event.date}
                </div>
              </div>

              <div className="images-box">
                {event.images.map((img) => (
                  <div
                    key={img.src}
                    className={`img-inside ${img.className}`}
                  >
                    <img src={`/images/${img.src}`} alt="" />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Navegación de eventos */}
      <div className="menu-pastevents">
        <div className="menu-pe2">
          <a className="ancla" href="#MIDSOMMAR">01&nbsp;&nbsp;MIDSOMMAR</a>
          <a className="ancla" href="#THETAROTTABLE">02&nbsp;&nbsp;THE TAROT TABLE</a>
          <a className="ancla" href="#THEDEATHDANCE">03&nbsp;&nbsp;SAMHAIN</a>
          <a className="ancla" href="#ELBANQUETEDEPLATON">04&nbsp;&nbsp;EL BANQUETE DE PLATÓN</a>
          <div className="arrow-right">
            <img src="/images/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
