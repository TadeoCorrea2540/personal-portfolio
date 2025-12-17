import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'personal', label: 'Interests' },
  ];

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of navItems) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-12 lg:px-20 py-3 md:py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        backdropFilter: 'blur(12px)',
        background: 'rgba(26, 26, 26, 0.7)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left: Brand / Name */}
          <button
            onClick={handleLogoClick}
            className="text-[#0EA5E9] hover:text-[#0284C7] transition-colors duration-300"
            style={{
              fontSize: '1.0625rem', // Increased from 1rem (+1px desktop enhancement)
              fontWeight: 500,
              letterSpacing: '0.025em', // Increased from 0.02em
            }}
          >
            Tadeo Correa
          </button>
          
          {/* Right: Navigation Links */}
          <ul className="flex gap-8 lg:gap-12">
            {navItems.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleClick(section.id)}
                  className="relative text-[#d1d5db] hover:text-[#0EA5E9] transition-colors duration-300 group"
                  style={{
                    fontSize: '0.96875rem', // Increased from 0.9375rem (+3px = 15.5px, subtle improvement)
                    fontWeight: 400,
                    letterSpacing: '0.02em', // Increased from 0.01em for premium feel
                  }}
                >
                  {section.label}
                  
                  {/* Hover underline effect */}
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#0EA5E9] transition-all duration-300 group-hover:w-full"
                    style={{ bottom: '-4px' }}
                  />
                  
                  {/* Active indicator - subtle blue dot */}
                  {activeSection === section.id && (
                    <motion.span 
                      className="absolute left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#0EA5E9]"
                      style={{ bottom: '-10px' }}
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation - Hamburger Menu */}
        <div className="md:hidden flex items-center justify-between">
          <button
            onClick={handleLogoClick}
            className="text-[#0EA5E9] tracking-wide"
            style={{ fontSize: '1.125rem', fontWeight: 600 }}
          >
            Tadeo Correa
          </button>
          
          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-[#d1d5db] hover:text-[#0EA5E9] transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span 
                className="w-full h-0.5 bg-current"
                animate={isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="w-full h-0.5 bg-current"
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="w-full h-0.5 bg-current"
                animate={isMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 mt-0"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                backdropFilter: 'blur(12px)',
                background: 'rgba(26, 26, 26, 0.95)',
              }}
            >
              <ul className="pt-5 px-4 pb-4 flex flex-col gap-3.5">
                {navItems.map((section, index) => (
                  <motion.li 
                    key={section.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <button
                      onClick={() => handleClick(section.id)}
                      className={`w-full text-left px-4 min-h-[48px] flex items-center rounded-lg transition-all duration-300 relative ${
                        activeSection === section.id 
                          ? 'bg-[#0EA5E9]/10 text-[#0EA5E9]' 
                          : 'text-[#d1d5db] hover:bg-[#2a2a2a] hover:text-[#0EA5E9]'
                      }`}
                      style={{
                        fontSize: '1.125rem', // 18px
                        fontWeight: 500,
                        letterSpacing: '0.01em',
                      }}
                    >
                      <span className="flex-1">{section.label}</span>
                      
                      {/* Active indicator - blue dot on the right */}
                      {activeSection === section.id && (
                        <motion.span 
                          className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] ml-2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        />
                      )}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}