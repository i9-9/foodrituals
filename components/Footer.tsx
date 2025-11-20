'use client';

import Link from 'next/link';
import Newsletter from './Newsletter';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* Mobile Newsletter - Top */}
        <div className="newsletter fblock mobile">
          NEWSLETTER <br /> <span className="disappearbr"><br /></span>
          WILL YOU PLAY A PART IN THE FEAST?
          <span className="formspace"></span>
          <Newsletter />
        </div>

        {/* Back to Top - Desktop */}
        <div className="backtotop fblock desktop">
          <a style={{ color: '#000000' }} href="#FoodRituals">(BACK TO TOP)</a>
        </div>

        {/* Social */}
        <div className="social fblock">
          SOCIAL <br /><br />
          <a style={{ color: '#000000' }} href="https://www.instagram.com/foodritualss/" target="_blank" rel="noopener noreferrer">
            INSTAGRAM
          </a><br />
          <a style={{ color: '#000000' }} href="https://vimeo.com/user168817888" target="_blank" rel="noopener noreferrer">
            VIMEO
          </a><br />
          <a style={{ color: '#000000' }} href="mailto:hello@food-rituals.com">
            MAIL
          </a>
        </div>

        {/* Back to Top - Mobile */}
        <div className="backtotop fblock mobile">
          <a style={{ color: '#000000' }} href="#FoodRituals">(BACK TO TOP)</a>
        </div>

        {/* Newsletter - Desktop */}
        <div className="newsletter fblock desktop">
          NEWSLETTER <br /> <span className="disappearbr"><br /></span>
          WILL YOU PLAY A PART IN THE FEAST?
          <span className="formspace"></span>
          <Newsletter />
        </div>
      </div>
    </div>
  );
}

