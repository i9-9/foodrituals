'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoSplash() {
  const [showSplash, setShowSplash] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    // Verificar si ya vio el splash en esta sesión
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowSplash(true);
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    // Esperar un poco antes de ocultar completamente
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  };

  if (!showSplash) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: videoEnded ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 z-[100] bg-black"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <video
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover"
          >
            <source src="/videos/FOOD RITUALS_LANDING SPLASH.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

