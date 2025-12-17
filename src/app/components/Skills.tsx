import { ScrollReveal } from './ScrollReveal';
import mensaLogo from '../../assets/90f192905f1f767691dd880e5b5afa54ba045068.png';

// Technology icons as SVG components
const TechIcon = ({ name }: { name: string }) => {
  const iconSize = 48;
  
  switch (name) {
    case 'Python':
      return (
        <svg viewBox="0 0 24 24" width={iconSize} height={iconSize} fill="currentColor">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
        </svg>
      );
    case 'C':
      return (
        <svg viewBox="0 0 24 24" width={iconSize} height={iconSize} fill="currentColor">
          <path d="M16.5921 9.1962C16.2401 8.0512 15.5831 7.0612 14.7171 6.3162C13.8511 5.5712 12.8121 5.0952 11.7091 4.9372C10.6061 4.7792 9.4841 4.9452 8.4771 5.4172C7.4701 5.8892 6.6201 6.6472 6.0341 7.6002C5.4481 8.5532 5.1511 9.6612 5.1791 10.7852C5.2071 11.9092 5.5591 13.0002 6.1931 13.9252C6.8271 14.8502 7.7171 15.5682 8.7491 15.9922C9.7811 16.4162 10.9101 16.5272 12.0001 16.3112C12.9571 16.1212 13.8491 15.6832 14.5831 15.0392C15.3171 14.3952 15.8701 13.5652 16.1881 12.6362L14.4691 11.9362C14.2541 12.5682 13.8781 13.1292 13.3831 13.5632C12.8881 13.9972 12.2921 14.2892 11.6541 14.4112C11.0161 14.5332 10.3591 14.4812 9.7481 14.2602C9.1371 14.0392 8.5931 13.6572 8.1701 13.1512C7.7471 12.6452 7.4601 12.0332 7.3371 11.3762C7.2141 10.7192 7.2591 10.0402 7.4681 9.4052C7.6771 8.7702 8.0431 8.2002 8.5311 7.7492C9.0191 7.2982 9.6131 6.9812 10.2581 6.8262C10.9031 6.6712 11.5771 6.6832 12.2161 6.8612C12.8551 7.0392 13.4371 7.3772 13.9091 7.8442C14.3811 8.3112 14.7271 8.8922 14.9151 9.5342L16.5921 9.1962Z"/>
        </svg>
      );
    case 'C++':
      return (
        <svg viewBox="0 0 48 48" width={iconSize} height={iconSize} fill="currentColor">
          {/* Hexagon background */}
          <path d="M24 4L8 13V35L24 44L40 35V13L24 4Z" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
          {/* Large C */}
          <path d="M24 14C18.48 14 14 18.48 14 24C14 29.52 18.48 34 24 34C26.76 34 29.21 32.77 30.88 30.85L28.24 28.95C27.24 30.08 25.71 30.8 24 30.8C20.51 30.8 17.7 27.99 17.7 24.5C17.7 21.01 20.51 18.2 24 18.2C25.71 18.2 27.24 18.92 28.24 20.05L30.88 18.15C29.21 16.23 26.76 15 24 15V14Z" fillOpacity="0.9"/>
          {/* First + (left) */}
          <path d="M30.5 22.5H32V21H33.5V22.5H35V24H33.5V25.5H32V24H30.5V22.5Z" fillOpacity="0.9"/>
          {/* Second + (right) */}
          <path d="M35.5 22.5H37V21H38.5V22.5H40V24H38.5V25.5H37V24H35.5V22.5Z" fillOpacity="0.9"/>
        </svg>
      );
    case 'HTML5':
      return (
        <svg viewBox="0 0 24 24" width={iconSize} height={iconSize} fill="currentColor">
          <path d="M12 17.56l4.07-1.13.55-6.1H9.38L9.2 8.3h7.6l.2-1.99H7l.56 6.01h6.89l-.23 2.58-2.22.6-2.22-.6-.14-1.66H7.63l.29 3.19L12 17.56M4.07 3h15.86L18.5 19.2 12 21l-6.5-1.8L4.07 3z"/>
        </svg>
      );
    case 'CSS3':
      return (
        <svg viewBox="0 0 24 24" width={iconSize} height={iconSize} fill="currentColor">
          <path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"/>
        </svg>
      );
    case 'Java':
      return (
        <svg viewBox="0 0 24 24" width={iconSize} height={iconSize} fill="currentColor">
          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
        </svg>
      );
    case 'Figma':
      return (
        <svg viewBox="0 0 24 24" width={iconSize} height={iconSize} fill="currentColor">
          <path d="M8 2a3 3 0 0 0 0 6 3 3 0 0 0 0 6 3 3 0 1 0 3 3V2H8zm3 0h3a3 3 0 1 1 0 6h-3V2zm0 6h3a3 3 0 1 1 0 6h-3V8z"/>
        </svg>
      );
    case 'SQL':
      return (
        <svg viewBox="0 0 64 64" width={iconSize} height={iconSize} fill="none">
          {/* Database cylinder stack - 3 layers with 3D effect */}
          
          {/* Bottom cylinder */}
          <ellipse cx="32" cy="45" rx="18" ry="6" fill="currentColor" fillOpacity="0.5"/>
          <rect x="14" y="38" width="36" height="7" fill="currentColor" fillOpacity="0.5"/>
          <ellipse cx="32" cy="38" rx="18" ry="6" fill="currentColor" fillOpacity="0.6"/>
          
          {/* Middle cylinder */}
          <ellipse cx="32" cy="33" rx="18" ry="6" fill="currentColor" fillOpacity="0.65"/>
          <rect x="14" y="26" width="36" height="7" fill="currentColor" fillOpacity="0.65"/>
          <ellipse cx="32" cy="26" rx="18" ry="6" fill="currentColor" fillOpacity="0.75"/>
          
          {/* Top cylinder */}
          <ellipse cx="32" cy="21" rx="18" ry="6" fill="currentColor" fillOpacity="0.8"/>
          <rect x="14" y="14" width="36" height="7" fill="currentColor" fillOpacity="0.8"/>
          <ellipse cx="32" cy="14" rx="18" ry="6" fill="currentColor" fillOpacity="0.9"/>
          
          {/* Highlight on top to add depth */}
          <ellipse cx="32" cy="14" rx="14" ry="4.5" fill="currentColor" fillOpacity="0.3"/>
        </svg>
      );
    default:
      return null;
  }
};

export function Skills() {
  const skillCategories = [
    {
      category: "Artificial Intelligence & Computer Science",
      skills: [
        { name: "C++", level: "Learning" },
        { name: "Python", level: "Learning" },
        { name: "Data Science", level: "Learning" },
        { name: "Full Stack Development", level: "Learning" },
        { name: "HTML", level: "Learning" },
        { name: "CSS", level: "Learning" },
        { name: "Java", level: "Learning" },
      ],
    },
    {
      category: "Cognitive & Analytical Skills",
      skills: [
        { name: "Systems Thinking", level: "Core Strength" },
        { name: "High-Level Problem Solving", level: "Core Strength" },
        { name: "Pattern Recognition", level: "Core Strength" },
        { name: "Planning", level: "Core Strength" },
        { name: "Adaptability", level: "Core Strength" },
      ],
    },
    {
      category: "Languages & Education",
      skills: [
        { name: "English", level: "C1 (Cambridge Certified)" },
        { name: "Spanish", level: "Native" },
        { name: "Teaching & Education", level: "Professional" },
        { name: "Applied Linguistics", level: "Professional" },
      ],
    },
    {
      category: "Leadership & Project Management",
      skills: [
        { name: "Leadership", level: "Professional / Applied" },
        { name: "Communication", level: "Professional / Applied" },
        { name: "Project Management", level: "Professional / Applied" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          {/* Section label */}
          <div className="mb-8 md:mb-12">
            <div className="h-px w-12 bg-[#0EA5E9] mb-6"></div>
            <h2 
              className="text-[#f5f5f0]"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
              }}
            >
              Skills & Expertise
            </h2>
          </div>
        </ScrollReveal>

        {/* Technical Stack Ticker - Compact */}
        <ScrollReveal delay={0.1}>
          <div className="mb-10 md:mb-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm md:text-base text-[#9ca3af] uppercase tracking-wider font-medium">
                Technical Stack
              </h3>
              <span className="text-xs text-[#0EA5E9]/70">Learning</span>
            </div>
            
            {/* Horizontal scrolling tech icons */}
            <div className="relative overflow-hidden rounded-xl bg-[#2d2d2d]/30 border border-[#404040]/50 p-3 md:p-4">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-r from-[#2d2d2d]/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-l from-[#2d2d2d]/80 to-transparent z-10 pointer-events-none"></div>
              
              {/* Scrolling container */}
              <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide hover:pause-animation">
                <div className="flex gap-4 md:gap-6 animate-scroll-slow">
                  {['Python', 'C', 'C++', 'SQL', 'HTML5', 'CSS3', 'Java', 'Figma'].map((tech) => (
                    <div 
                      key={tech}
                      className="group/tech flex-shrink-0 flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-[#1a1a1a]/60 border border-[#404040]/60 hover:border-[#0EA5E9]/50 transition-all duration-300 hover:scale-105"
                    >
                      {/* Icon */}
                      <div className="text-white/80 group-hover/tech:text-[#0EA5E9] transition-colors duration-300">
                        <div className="scale-[0.65] md:scale-75">
                          <TechIcon name={tech} />
                        </div>
                      </div>
                      
                      {/* Tech name */}
                      <span className="text-xs md:text-sm text-[#e0e0db] group-hover/tech:text-[#f5f5f0] transition-colors whitespace-nowrap">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Duplicate for seamless loop */}
                <div className="flex gap-4 md:gap-6 animate-scroll-slow" aria-hidden="true">
                  {['Python', 'C', 'C++', 'SQL', 'HTML5', 'CSS3', 'Java', 'Figma'].map((tech) => (
                    <div 
                      key={`duplicate-${tech}`}
                      className="group/tech flex-shrink-0 flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-[#1a1a1a]/60 border border-[#404040]/60 hover:border-[#0EA5E9]/50 transition-all duration-300 hover:scale-105"
                    >
                      {/* Icon */}
                      <div className="text-white/80 group-hover/tech:text-[#0EA5E9] transition-colors duration-300">
                        <div className="scale-[0.65] md:scale-75">
                          <TechIcon name={tech} />
                        </div>
                      </div>
                      
                      {/* Tech name */}
                      <span className="text-xs md:text-sm text-[#e0e0db] group-hover/tech:text-[#f5f5f0] transition-colors whitespace-nowrap">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={categoryIndex} delay={categoryIndex * 0.1}>
              <div 
                className="bg-[#2d2d2d]/40 border border-[#404040] rounded-lg p-5 md:p-6 hover:border-[#0EA5E9]/50 transition-all duration-300 group"
              >
                {/* Category title with subtle blue highlight */}
                <h3 className="text-base md:text-lg text-[#f5f5f0] mb-5 md:mb-6 font-medium pb-3 border-b border-[#0EA5E9]/30 group-hover:border-[#0EA5E9]/60 transition-colors">
                  {category.category}
                </h3>

                {/* Skills list */}
                <ul className="space-y-3 md:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex flex-col gap-1">
                      <span className="text-[#e0e0db] text-sm md:text-base">
                        {skill.name}
                      </span>
                      <span className="text-xs text-[#9ca3af]">
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
          
          {/* Mensa México Credential Badge */}
          <ScrollReveal delay={0.4}>
            <div className="relative group/badge bg-[#2d2d2d]/40 border border-[#404040] rounded-lg p-5 md:p-6 hover:border-[#0EA5E9]/50 transition-all duration-300 flex flex-col items-center justify-center text-center">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-lg bg-[#0EA5E9]/20 blur-xl opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500"></div>
              
              {/* Logo container */}
              <div className="relative mb-4">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-[#0E1A2B]/60 to-[#1a1a1a]/80 backdrop-blur-md border border-[#0EA5E9]/30 shadow-[0_0_20px_rgba(14,165,233,0.2)] p-4 flex items-center justify-center group-hover/badge:border-[#0EA5E9]/60 group-hover/badge:shadow-[0_0_30px_rgba(14,165,233,0.4)] transition-all duration-300"
                  style={{
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <img 
                    src={mensaLogo} 
                    alt="Mensa México"
                    className="w-full h-full object-contain opacity-90 group-hover/badge:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
              
              {/* Badge text */}
              <div className="relative flex flex-col items-center gap-2 mb-3">
                <h3 className="text-base md:text-lg text-[#f5f5f0] font-medium pb-3 border-b border-[#0EA5E9]/30 group-hover/badge:border-[#0EA5E9]/60 transition-colors w-full">
                  Mensa México
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  Cognitive Excellence
                </p>
              </div>
              
              {/* Verification badge */}
              <div className="relative flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0EA5E9]/10 border border-[#0EA5E9]/30">
                <svg className="w-4 h-4 text-[#0EA5E9]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-[#0EA5E9] font-semibold uppercase tracking-wide">
                  Verified
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}