'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  variant?: 'dark' | 'light';
  showBottomMenu?: boolean;
}

export default function Header({ variant = 'dark', showBottomMenu = true }: HeaderProps) {
  const pathname = usePathname();
  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';
  const logo = isDark ? '/images/menu-logo.png' : '/images/menu-logo-invert.png';

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  return (
    <>
      {/* Header Superior */}
      <header className="block w-full my-0 mx-auto flex absolute z-10">
        <div className="menu-header">
          <motion.div {...fadeInUp} className={`menu-whoweare heder-element ${textColor}`}>
            <Link href={pathname === '/' ? '#WhoWeAre' : '/'}>
              {pathname === '/' ? 'WHO WE ARE' : 'BACK'}
            </Link>
          </motion.div>
          
          <motion.div {...fadeInUp} className="menu-logo heder-element">
            <div className="centericon">
              <Link href="/">
                <Image 
                  src={logo} 
                  alt="Food Rituals Logo" 
                  width={90}
                  height={90}
                  className="max-md:w-[44px] max-md:h-[44px]"
                  priority
                />
              </Link>
            </div>
          </motion.div>
          
          <motion.div {...fadeInUp} className={`menu-contact heder-element ${textColor}`}>
            <Link href="/contact">
              CONTACT
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Header Inferior (solo en home) */}
      {showBottomMenu && (
        <div className="header-bottom">
          <div className="menu-header-bottom">
            <motion.div {...fadeInUp} className={`menu-whoweare heder-element ${textColor}`}>
              <Link href="#PrivateEvents">
                PRIVATE EVENTS
              </Link>
            </motion.div>
            
            <motion.div {...fadeInUp} className={`menu-contact heder-element ${textColor}`}>
              <Link href="#PastEvents">
                PAST EVENTS
              </Link>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}

