import { ScrollReveal } from './ScrollReveal';
import chessImage from '../../assets/90b3943b5a84e872fd392d0586022c44b600a6e1.png';

export function Performance() {
  const stats = [
    {
      metric: "Competitive Chess",
      value: "~1800",
      description: "Rating",
      icon: "♟️",
      link: null,
      hasBadge: false,
    },
    {
      metric: "Rubik's Cube 3×3",
      value: "13s",
      description: "Personal Best",
      icon: "🧩",
      link: null,
      hasBadge: false,
    },
    {
      metric: "Investment Portfolio",
      value: "Investing",
      description: "Long-term Strategy",
      icon: "📈",
      link: "https://bullaware.com/etoro/AngelTadeo2540",
      hasBadge: true,
    },
  ];

  return (
    <section id="personal" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#2d2d2d]/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          {/* Section label */}
          <div className="mb-12 md:mb-16">
            <div className="h-px w-12 bg-[#0EA5E9] mb-6"></div>
            <h2 
              className="text-[#f5f5f0]"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
              }}
            >
              Interests
            </h2>
          </div>
        </ScrollReveal>

        {/* Horizontal Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 mb-12 md:mb-16">
          {stats.map((stat, index) => {
            const CardContent = (
              <div 
                className="bg-[#1a1a1a]/60 border border-[#404040] rounded-lg p-6 md:p-8 hover:border-[#0EA5E9] hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] transition-all duration-300 group relative"
              >
                {/* Badge for Investment card */}
                {stat.hasBadge && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-br from-[#0EA5E9] to-[#0284c7] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-[#0EA5E9]/50 flex items-center gap-1.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>View Portfolio</span>
                    </div>
                  </div>
                )}
                
                {/* Icon */}
                <div className="text-3xl md:text-4xl mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {stat.icon}
                </div>

                {/* Value - large and prominent */}
                <div 
                  className="text-[#0EA5E9] mb-2"
                  style={{
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stat.value}
                </div>

                {/* Description */}
                <div className="text-xs md:text-sm text-[#9ca3af] mb-1">
                  {stat.description}
                </div>

                {/* Metric name */}
                <div className="text-[#e0e0db] font-medium text-sm md:text-base">
                  {stat.metric}
                </div>
              </div>
            );

            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                {stat.link ? (
                  <a 
                    href={stat.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {CardContent}
                  </a>
                ) : (
                  CardContent
                )}
              </ScrollReveal>
            );
          })}
        </div>

        {/* Chess image below - centered */}
        <ScrollReveal delay={0.4}>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start justify-center">
            {/* Chess Image - Smaller */}
            <div className="relative w-full max-w-[220px] sm:max-w-[280px] lg:max-w-[350px]" style={{ flexShrink: 0 }}>
              {/* Neural network decorations */}
              <svg className="hidden md:block absolute -left-8 -top-8 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                {/* Neural nodes */}
                <circle cx="10%" cy="20%" r="4" fill="#0EA5E9" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="90%" cy="15%" r="3" fill="#0EA5E9" opacity="0.5">
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="85%" cy="85%" r="3.5" fill="#0EA5E9" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="15%" cy="80%" r="3" fill="#0EA5E9" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.95;0.6" dur="3.2s" repeatCount="indefinite" />
                </circle>
                
                {/* Connection lines */}
                <line x1="10%" y1="20%" x2="90%" y2="15%" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.3" strokeDasharray="4,4">
                  <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite" />
                </line>
                <line x1="90%" y1="15%" x2="85%" y2="85%" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.25" strokeDasharray="4,4">
                  <animate attributeName="opacity" values="0.15;0.4;0.15" dur="3.5s" repeatCount="indefinite" />
                </line>
                <line x1="15%" y1="80%" x2="85%" y2="85%" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.3" strokeDasharray="4,4">
                  <animate attributeName="opacity" values="0.2;0.45;0.2" dur="3.8s" repeatCount="indefinite" />
                </line>
              </svg>
              
              {/* Chess image with organic shape */}
              <div className="relative" style={{ zIndex: 2 }}>
                <div 
                  className="relative overflow-hidden"
                  style={{
                    clipPath: 'polygon(30% 0%, 100% 0%, 100% 70%, 75% 100%, 0% 100%, 0% 25%)',
                    aspectRatio: '1',
                  }}
                >
                  <img 
                    src={chessImage} 
                    alt="Strategic chess thinking"
                    className="w-full h-full object-cover"
                    style={{ 
                      filter: 'brightness(0.9) contrast(1.1)',
                    }}
                  />
                </div>
              </div>
              
              {/* Caption */}
              <p className="mt-4 text-sm text-[#64748b] italic text-center">
                Strategic thinking through competitive chess.
              </p>
            </div>

            {/* Investment Badge & Explanation */}
            <div className="flex flex-col gap-6 lg:max-w-md w-full">
              {/* Quote Card - Leonardo da Vinci */}
              <div className="relative bg-gradient-to-br from-[#0B1A33] to-[#0E255A] rounded-2xl p-8 md:p-10 overflow-hidden">
                {/* Neural Network Background Pattern */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.08]" style={{ zIndex: 1 }}>
                  {/* Neural nodes grid pattern */}
                  <defs>
                    <pattern id="neuralPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                      <circle cx="0" cy="0" r="1.5" fill="#0EA5E9" />
                      <circle cx="40" cy="40" r="1.5" fill="#0EA5E9" />
                      <circle cx="80" cy="80" r="1.5" fill="#0EA5E9" />
                      <line x1="0" y1="0" x2="40" y2="40" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.5" />
                      <line x1="40" y1="40" x2="80" y2="80" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#neuralPattern)" />
                  
                  {/* Animated floating nodes */}
                  <circle cx="15%" cy="20%" r="2" fill="#0EA5E9" opacity="0.6">
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="85%" cy="30%" r="2.5" fill="#0EA5E9" opacity="0.5">
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="75%" cy="75%" r="2" fill="#0EA5E9" opacity="0.6">
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.8s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="20%" cy="80%" r="1.8" fill="#0EA5E9" opacity="0.5">
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.2s" repeatCount="indefinite" />
                  </circle>
                </svg>
                
                {/* Subtle ambient glow behind card */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#0EA5E9]/20 to-transparent rounded-2xl blur-xl opacity-60" style={{ zIndex: 0 }}></div>
                
                {/* Content */}
                <div className="relative" style={{ zIndex: 2 }}>
                  {/* Quote Text */}
                  <blockquote 
                    className="text-[#e0e0db] mb-6 leading-relaxed"
                    style={{
                      fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                      fontWeight: 600,
                      lineHeight: 1.7,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    "<span className="text-[#0EA5E9] font-semibold">Learning</span> never exhausts the mind."
                  </blockquote>
                  
                  {/* Author */}
                  <p 
                    className="text-[#9ca3af]"
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 400,
                      letterSpacing: '0.03em',
                    }}
                  >
                    — Leonardo da Vinci
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}