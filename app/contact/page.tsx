'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <>
      <Header variant="dark" showBottomMenu={false} />

      <main className="bg-black text-white">
        <section id="Contact" className="min-h-screen flex items-center justify-center px-8">
          <div className="centered text-center">
            <motion.div 
              {...fadeInUp}
              className="flex flex-col items-center gap-12 text-[34px] leading-[26px] max-md:text-[26px] max-md:gap-9"
            >
              <a 
                href="mailto:hello@food-rituals.com"
                className="hover:opacity-70 transition-opacity"
              >
                HELLO@FOOD-RITUALS.COM
              </a>
              
              <a 
                href="https://www.instagram.com/foodritualss/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                @FOODRITUALSS
              </a>
              
              <a 
                href="tel:+11234567890"
                className="hover:opacity-70 transition-opacity"
              >
                +1 (123) 456-7890
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

