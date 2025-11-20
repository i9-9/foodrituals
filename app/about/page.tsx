'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  const [hoveredPerson, setHoveredPerson] = useState<'antonella' | 'sandie' | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <>
      <Header variant="light" showBottomMenu={false} />

      <main className="bg-cream text-black min-h-screen">
        <section id="About" className="min-h-screen flex items-center justify-center pt-[180px] pb-20 px-8 max-md:pt-[90px]">
          <div className="max-w-[1200px] w-full flex items-start gap-8 max-lg:flex-col max-lg:items-center">
            
            {/* Columna de imágenes - Desktop */}
            <div className="w-2/5 relative min-h-[600px] max-lg:hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredPerson === 'antonella' ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className="absolute top-[20vh] pr-[60px]"
              >
                <Image
                  src="/images/Antonella.png"
                  alt="Antonella"
                  width={400}
                  height={500}
                  className="w-auto h-auto"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredPerson === 'sandie' ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-0 pl-[60px]"
              >
                <Image
                  src="/images/Sandie.png"
                  alt="Sandie"
                  width={400}
                  height={500}
                  className="w-auto h-auto"
                />
              </motion.div>
            </div>

            {/* Columna de texto */}
            <div className="w-3/5 max-w-[538px] max-lg:w-full">
              {/* Antonella */}
              <motion.div
                {...fadeInUp}
                onMouseEnter={() => setHoveredPerson('antonella')}
                onMouseLeave={() => setHoveredPerson(null)}
                className="mb-12"
              >
                <h2 className="text-[30px] leading-[30px] mb-4 max-md:text-[26px]">
                  ANTONELLA
                </h2>
                <p className="text-[16px] leading-[18px]">
                  Artista visual, performer y "cocinera de rituales" argentina, radicada en NYC. 
                  Su trabajo busca explorar la antropología de los rituales cotidianos, 
                  transformándolos en experiencias sensoriales inmersivas que desafían las 
                  fronteras entre el arte, la comida y la ceremonia. A través de sus proyectos, 
                  invita a los participantes a reconectar con los aspectos más primitivos y 
                  sagrados de la alimentación, explorando cómo los rituales colectivos pueden 
                  ser herramientas de transformación y conexión humana.
                </p>
              </motion.div>

              {/* Imagen Antonella - Mobile */}
              <motion.div {...fadeInUp} className="lg:hidden mb-12 text-center">
                <Image
                  src="/images/Antonella.png"
                  alt="Antonella"
                  width={350}
                  height={400}
                  className="w-auto h-auto mx-auto"
                />
              </motion.div>

              {/* Sandie */}
              <motion.div
                {...fadeInUp}
                onMouseEnter={() => setHoveredPerson('sandie')}
                onMouseLeave={() => setHoveredPerson(null)}
                className="mb-12"
              >
                <h2 className="text-[30px] leading-[30px] mb-4 max-md:text-[26px]">
                  SANDIE
                </h2>
                <p className="text-[16px] leading-[18px]">
                  Directora de teatro, escenógrafa y conceptualizadora de experiencias 
                  inmersivas. Con una formación en dramaturgia y diseño espacial, Sandie 
                  trae una sensibilidad única para construir mundos teatrales que integran 
                  todos los sentidos. Su enfoque combina elementos de teatro experimental, 
                  instalación artística y performance participativa, creando espacios donde 
                  los límites entre espectador y performer se disuelven, permitiendo que 
                  cada participante se convierta en parte activa de la narrativa.
                </p>
              </motion.div>

              {/* Imagen Sandie - Mobile */}
              <motion.div {...fadeInUp} className="lg:hidden text-center">
                <Image
                  src="/images/Sandie.png"
                  alt="Sandie"
                  width={350}
                  height={400}
                  className="w-auto h-auto mx-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="light" />
    </>
  );
}

