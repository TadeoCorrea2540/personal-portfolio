import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import portraitImage from '../../assets/1166803fccd3667408161375dea841d3c74e3587.png';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 md:px-12 lg:px-20 pt-24 md:pt-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Typography */}
          <motion.div 
            className="space-y-6 md:space-y-8 order-1 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Small intro text */}
            <motion.p 
              className="text-xs sm:text-sm text-[#9ca3af] tracking-wide uppercase mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hi, I'm Angel Tadeo Correa Torres
            </motion.p>

            {/* Main headline - mobile-first responsive sizing */}
            <motion.h1 
              className="text-[#f5f5f0]"
              style={{
                fontSize: 'clamp(1.75rem, 8vw, 4.5rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              AI Engineering Student | Educator
            </motion.h1>

            {/* Subtitle - improved mobile readability */}
            <motion.p 
              className="text-sm sm:text-base text-[#d1d5db] max-w-xl"
              style={{ lineHeight: 1.7 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Focused on <span className="text-[#0EA5E9]">AI and software engineering foundations</span> (Python, C++, SQL, Git), 
              applying educational and language expertise to EdTech and AI projects. 
              <span className="text-[#0EA5E9]"> Open to internships.</span>
            </motion.p>

            {/* CTAs - mobile optimized */}
            <motion.div 
              className="flex flex-col gap-3 pt-2 md:pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {/* Primary CTA - LinkedIn - full width on mobile */}
              <a 
                href="https://www.linkedin.com/in/angel-tadeo-correa-torres-a694a525b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border-2 border-[#0EA5E9] text-[#0EA5E9] rounded-md hover:bg-[#0EA5E9] hover:text-[#1a1a1a] transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] flex items-center justify-center gap-2.5"
              >
                {/* LinkedIn Icon */}
                <svg 
                  className="w-5 h-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                My LinkedIn
              </a>

              {/* Secondary CTA - full width on mobile */}
              <a 
                href="https://github.com/TadeoCorrea2540" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 border border-[#0EA5E9]/50 text-[#e0e0db] hover:bg-[#0EA5E9] hover:text-[#1a1a1a] hover:border-[#0EA5E9] hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-300 rounded-md flex items-center justify-center gap-2.5 group"
              >
                {/* GitHub Icon (Official Octocat) */}
                <svg 
                  className="w-5 h-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Portfolio
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Portrait - below text on mobile, beside on desktop */}
          <motion.div 
            className="relative flex justify-center lg:justify-end order-2 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Subtle geometric background shapes - scaled for mobile */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Large circle - top right */}
              <motion.div 
                className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 w-48 sm:w-80 h-48 sm:h-80 rounded-full border border-[#0EA5E9]/10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 1.2 }}
              />
              
              {/* Small circle - bottom left */}
              <motion.div 
                className="absolute bottom-16 sm:bottom-32 -left-5 sm:-left-10 w-24 sm:w-40 h-24 sm:h-40 rounded-full bg-[#0EA5E9]/5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 1.2 }}
              />
              
              {/* Grid pattern - very subtle - hidden on small mobile */}
              <div className="absolute inset-0 opacity-5 hidden sm:block">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0EA5E9" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>

            {/* Portrait container with card and depth - mobile optimized */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[400px]">
              {/* Soft background card */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a]/40 to-[#0E1A2B]/30 rounded-2xl transform translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-6 blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                  boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
                }}
              />
              
              {/* Main portrait card */}
              <motion.div 
                className="relative bg-gradient-to-br from-[#2a2a2a]/60 to-[#0E1A2B]/40 p-4 sm:p-6 rounded-2xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{
                  boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(14, 165, 233, 0.1)',
                }}
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl">
                  {/* Subtle accent border inside card */}
                  <motion.div 
                    className="absolute inset-0 border border-[#0EA5E9]/20 rounded-xl pointer-events-none z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  />
                  
                  {/* Image with soft inner shadow for depth */}
                  <div className="relative w-full h-full">
                    <ImageWithFallback
                      src={portraitImage}
                      alt="Angel Tadeo Correa Torres"
                      className="w-full h-full object-cover rounded-xl"
                      style={{
                        boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.1)',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}