import { ScrollReveal } from './ScrollReveal';
import { ImageWithFallback } from './figma/ImageWithFallback';
import bachelorImage from '../../assets/5993b853fc9b09fab41b316b77002e352e77d92c.png';
import cambridgeImage from '../../assets/557ef03eea9800ba339f20f37ae8cf51b00c3729.png';

export function Education() {
  const timeline = [
    {
      degree: "AI Engineering",
      institution: "Universidad Autónoma de Nuevo León (UANL)",
      detail: "Current",
      icon: "🤖",
      hasImage: false,
    },
    {
      degree: "Bachelor's Degree in Primary Education",
      institution: "Escuela Normal Miguel F. Martínez (ENMFM)",
      detail: "GPA: 9.3/10",
      icon: "🎓",
      hasImage: true,
      imageKey: "bachelor",
    },
    {
      degree: "Specialization in Spanish Teaching for Foreigners",
      institution: "Universidad Europea Miguel de Cervantes (UEMC)",
      detail: "Completed",
      icon: "🌍",
      hasImage: false,
    },
    {
      degree: "Cambridge English Certification",
      institution: "C1 Level",
      detail: "Advanced Proficiency",
      icon: "📜",
      hasImage: true,
      imageKey: "cambridge",
    },
  ];

  return (
    <section id="education" className="pt-6 pb-12 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#2d2d2d]/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
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
              Education
            </h2>
          </div>
        </ScrollReveal>

        {/* Two-column layout: Timeline left, Images right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start">
          {/* Left: Timeline */}
          <div className="space-y-6 md:space-y-8">
            {timeline.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="relative pl-10 md:pl-12">
                  {/* Vertical line */}
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-[15px] top-10 md:top-12 bottom-0 w-px bg-[#0EA5E9]/30"></div>
                  )}

                  {/* Icon/dot */}
                  <div className="absolute left-0 top-1 w-8 h-8 bg-[#1a1a1a] border-2 border-[#0EA5E9] rounded-full flex items-center justify-center text-xs">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="pb-6 md:pb-8 group hover:translate-x-2 transition-transform duration-300">
                    <h3 className="text-lg md:text-xl text-[#f5f5f0] mb-1 font-medium">
                      {item.degree}
                    </h3>
                    <p className="text-[#0EA5E9] mb-1 text-sm md:text-base">
                      {item.institution}
                    </p>
                    <p className="text-xs md:text-sm text-[#9ca3af]">
                      {item.detail}
                    </p>

                    {/* Mobile inline images */}
                    {item.imageKey === 'bachelor' && (
                      <div className="mt-4 lg:hidden">
                        <div className="relative inline-block">
                          <div className="relative w-32 rounded-md overflow-hidden" style={{
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                          }}>
                            <ImageWithFallback
                              src={bachelorImage}
                              alt="Bachelor's Degree Defense"
                              className="w-full h-auto object-cover"
                            />
                          </div>
                          <p 
                            className="mt-2 text-[#9ca3af] text-left"
                            style={{
                              fontSize: '0.65rem',
                              fontWeight: 400,
                              letterSpacing: '0.015em',
                              fontStyle: 'italic',
                            }}
                          >
                            Defense Photo
                          </p>
                        </div>
                      </div>
                    )}

                    {item.imageKey === 'cambridge' && (
                      <div className="mt-4 lg:hidden">
                        <div className="relative inline-block">
                          <div className="relative w-36 rounded-md overflow-hidden" style={{
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                          }}>
                            <ImageWithFallback
                              src={cambridgeImage}
                              alt="Cambridge C1 Certificate"
                              className="w-full h-auto object-cover"
                            />
                          </div>
                          <p 
                            className="mt-2 text-[#9ca3af] text-left"
                            style={{
                              fontSize: '0.65rem',
                              fontWeight: 400,
                              letterSpacing: '0.015em',
                              fontStyle: 'italic',
                            }}
                          >
                            C1 Certificate
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Right: Visual Evidence with Connector Lines (Desktop only) */}
          <div className="relative hidden lg:block">
            {/* SVG for curved connector lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
              {/* Connector from Bachelor's (item index 1) to first image */}
              <path
                d="M -60 140 Q -30 140, 0 160"
                stroke="#0EA5E9"
                strokeWidth="1.5"
                fill="none"
                opacity="0.4"
                strokeDasharray="4 4"
              />
              
              {/* Connector from Cambridge (item index 3) to second image */}
              <path
                d="M -60 440 Q -30 440, 0 420"
                stroke="#0EA5E9"
                strokeWidth="1.5"
                fill="none"
                opacity="0.4"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Image container */}
            <div className="relative space-y-12 pt-8">
              {/* Bachelor's Degree Defense Image */}
              <ScrollReveal delay={0.3}>
                <div className="relative">
                  {/* Ambient glow */}
                  <div className="absolute -inset-6 pointer-events-none">
                    <div 
                      className="absolute -inset-4 blur-2xl opacity-[0.06]"
                      style={{
                        background: 'radial-gradient(ellipse 60% 65% at 50% 45%, rgba(14, 165, 233, 1) 0%, transparent 60%)',
                      }}
                    />
                    <div 
                      className="absolute inset-0 blur-lg opacity-[0.2]"
                      style={{
                        background: 'radial-gradient(ellipse 50% 55% at 50% 50%, rgba(0, 0, 0, 1) 0%, transparent 65%)',
                        transform: 'translateY(6px)',
                      }}
                    />
                  </div>

                  {/* Image in rectangle */}
                  <div className="relative w-full max-w-[240px] rounded-lg overflow-hidden" style={{
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.25)',
                  }}>
                    <ImageWithFallback
                      src={bachelorImage}
                      alt="Bachelor's Degree Defense"
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Caption */}
                  <p 
                    className="mt-3 text-[#9ca3af] text-center"
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 400,
                      letterSpacing: '0.015em',
                      fontStyle: 'italic',
                    }}
                  >
                    Bachelor's Defense
                  </p>
                </div>
              </ScrollReveal>

              {/* Cambridge Certificate Image */}
              <ScrollReveal delay={0.4}>
                <div className="relative">
                  {/* Ambient glow */}
                  <div className="absolute -inset-6 pointer-events-none">
                    <div 
                      className="absolute -inset-4 blur-2xl opacity-[0.06]"
                      style={{
                        background: 'radial-gradient(ellipse 60% 65% at 50% 45%, rgba(14, 165, 233, 1) 0%, transparent 60%)',
                      }}
                    />
                    <div 
                      className="absolute inset-0 blur-lg opacity-[0.2]"
                      style={{
                        background: 'radial-gradient(ellipse 50% 55% at 50% 50%, rgba(0, 0, 0, 1) 0%, transparent 65%)',
                        transform: 'translateY(6px)',
                      }}
                    />
                  </div>

                  {/* Image in rectangle */}
                  <div className="relative w-full max-w-[280px] rounded-lg overflow-hidden" style={{
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.25)',
                  }}>
                    <ImageWithFallback
                      src={cambridgeImage}
                      alt="Cambridge C1 Certificate"
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Caption */}
                  <p 
                    className="mt-3 text-[#9ca3af] text-center"
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 400,
                      letterSpacing: '0.015em',
                      fontStyle: 'italic',
                    }}
                  >
                    Cambridge C1 Certificate
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}