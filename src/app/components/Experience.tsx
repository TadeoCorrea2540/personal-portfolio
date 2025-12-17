import { ScrollReveal } from './ScrollReveal';
import teachingImage from '../../assets/b4761577ac254ab972ae2746ec9e64e335ad16fe.png';
import italkiLogo from '../../assets/86084bd3d75b1b41a0a78904ccc6c95afac71c76.png';
import udemyLogo from '../../assets/b0d82affcf524908019c28ad4584b7c5c8bbea6c.png';
import { VideoTestimonials } from './VideoTestimonials';

export function Experience() {
  const experiences = [
    {
      role: "Spanish & English Teacher",
      company: "italki",
      location: "Remote",
      period: "Dec 2021 – Jun 2025",
      highlights: [
        "Delivered 6,000+ hours of online classes to international students.",
        "Maintained a 5/5 instructor rating, focused on structured and efficient learning.",
      ],
      metrics: ["6,000+", "5/5"],
    },
    {
      role: "Founder",
      company: "Elite Spanish Classes",
      location: "Remote",
      period: "Nov 2022 – Dec 2024",
      highlights: [
        "Founded and led an online education project connecting Mexican teachers with international learners.",
        "Designed scalable teaching systems and digital learning workflows.",
      ],
      metrics: [],
    },
    {
      role: "Instructor & Course Creator",
      company: "Udemy",
      location: "Remote",
      period: "Aug 2021 – Aug 2022",
      highlights: [
        "Published a conversational English course with 16,000+ enrolled students.",
        "Achieved a 4.5/5 instructor rating, emphasizing clarity and structure.",
      ],
      metrics: ["16,000+", "4.5/5"],
    },
    {
      role: "Elementary School Teacher",
      company: "Secretaría de Educación Pública (SEP)",
      location: "Monterrey, Mexico",
      period: "Nov 2019 – Jul 2020",
      highlights: [
        "Completed one year of social service as a primary school teacher.",
        "Planned and delivered classes aligned with the national curriculum.",
      ],
      metrics: [],
    },
  ];

  // Helper function to highlight metrics in text
  const highlightMetrics = (text: string, metrics: string[]) => {
    if (metrics.length === 0) return text;
    
    let highlighted = text;
    metrics.forEach(metric => {
      highlighted = highlighted.replace(
        metric,
        `<span class="text-[#0EA5E9] font-medium">${metric}</span>`
      );
    });
    return highlighted;
  };

  return (
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#1a1a1a]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          {/* Section label */}
          <div className="mb-12 md:mb-16">
            <div className="h-px w-12 bg-[#0EA5E9] mb-6"></div>
            <h2 
              className="text-[#f5f5f0] mb-3"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
              }}
            >
              Experience
            </h2>
            <p className="text-[#9ca3af] text-sm md:text-base max-w-2xl" style={{ lineHeight: 1.6 }}>
              Applied experience in education, systems, and scalable learning.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="space-y-10 md:space-y-12">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="relative pl-10 md:pl-12 lg:pl-16">
                {/* Vertical line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-[15px] md:left-[19px] top-10 bottom-0 w-px bg-[#0EA5E9]/20"></div>
                )}

                {/* Dot */}
                <div className="absolute left-0 md:left-1 top-1 w-8 h-8 bg-[#2d2d2d] border-2 border-[#0EA5E9] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#0EA5E9] rounded-full"></div>
                </div>

                {/* Content */}
                <div className="bg-[#2d2d2d]/50 border border-[#3d3d3d] rounded-lg p-5 md:p-6 hover:border-[#0EA5E9]/30 transition-all duration-300 group">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start gap-3 mb-2">
                      {/* italki logo for Spanish & English Teacher */}
                      {exp.company === "italki" && (
                        <div className="shrink-0 mt-0.5">
                          <img 
                            src={italkiLogo} 
                            alt="italki" 
                            className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover ring-2 ring-[#0EA5E9]/20 group-hover:ring-[#0EA5E9]/50 transition-all duration-300"
                          />
                        </div>
                      )}
                      {/* Udemy logo for Instructor & Course Creator */}
                      {exp.company === "Udemy" && (
                        <div className="shrink-0 mt-0.5">
                          <img 
                            src={udemyLogo} 
                            alt="Udemy" 
                            className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover ring-2 ring-[#0EA5E9]/20 group-hover:ring-[#0EA5E9]/50 transition-all duration-300"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl text-[#f5f5f0] mb-1 font-medium group-hover:text-[#0EA5E9] transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <p className="text-[#0EA5E9] mb-1 font-medium text-sm md:text-base">{exp.company}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs md:text-sm text-[#9ca3af]">
                          <span>{exp.location}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4 text-sm md:text-base text-[#e0e0db]" style={{ lineHeight: 1.7 }}>
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[#0EA5E9] mt-1.5 shrink-0">•</span>
                        <span dangerouslySetInnerHTML={{ __html: highlightMetrics(highlight, exp.metrics) }} />
                      </li>
                    ))}
                  </ul>

                  {/* Metrics */}
                  {exp.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-3 pt-3 border-t border-[#3d3d3d]">
                      {exp.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#9ca3af]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]"></div>
                          <span className="text-[#0EA5E9] font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Performance Metrics Capsule - italki only */}
                {exp.company === "italki" && (
                  <a
                    href="https://www.italki.com/en/teacher/9012342"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 relative group/metrics cursor-pointer"
                  >
                    <div 
                      className="relative bg-gradient-to-br from-[#0E1A2B]/40 to-[#1a1a1a]/60 backdrop-blur-md border border-[#0EA5E9]/25 md:border-2 md:border-[#0EA5E9]/40 rounded-xl p-4 md:p-6 transition-all duration-300 hover:border-[#0EA5E9]/60 md:hover:border-[#0EA5E9] hover:shadow-[0_0_20px_rgba(14,165,233,0.25)] md:hover:shadow-[0_0_35px_rgba(14,165,233,0.4)] md:hover:scale-[1.01]"
                      style={{
                        backdropFilter: 'blur(12px)',
                      }}
                    >
                      {/* Pulsing glow effect - desktop only */}
                      <div className="hidden md:block absolute inset-0 rounded-xl bg-[#0EA5E9]/5 opacity-0 group-hover/metrics:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Header - streamlined for mobile */}
                      <div className="relative mb-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm md:text-base font-semibold text-[#f5f5f0]">Performance Metrics</h4>
                          {/* Response Rate Badge - mobile */}
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0EA5E9]/15 border border-[#0EA5E9]/30">
                            <span className="text-xs font-semibold text-white">100%</span>
                            <span className="text-[10px] text-[#64748b] uppercase tracking-wide">Response</span>
                          </div>
                        </div>
                      </div>

                      {/* Metrics Grid - 2 columns on mobile, 4 columns on desktop */}
                      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        {/* Rating */}
                        <div className="flex flex-col items-center text-center p-3 rounded-lg bg-[#0EA5E9]/5 border border-[#0EA5E9]/10">
                          <div className="flex items-center gap-1 mb-1">
                            <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#0EA5E9]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-lg md:text-xl font-semibold text-white">5.0</span>
                          </div>
                          <span className="text-[10px] md:text-xs text-[#64748b] uppercase tracking-wide">Rating</span>
                        </div>

                        {/* Students */}
                        <div className="flex flex-col items-center text-center p-3 rounded-lg bg-[#0EA5E9]/5 border border-[#0EA5E9]/10">
                          <span className="text-lg md:text-xl font-semibold text-white mb-1">640</span>
                          <span className="text-[10px] md:text-xs text-[#64748b] uppercase tracking-wide">Students</span>
                        </div>

                        {/* Lessons */}
                        <div className="flex flex-col items-center text-center p-3 rounded-lg bg-[#0EA5E9]/5 border border-[#0EA5E9]/10">
                          <span className="text-lg md:text-xl font-semibold text-white mb-1">5,909</span>
                          <span className="text-[10px] md:text-xs text-[#64748b] uppercase tracking-wide">Lessons</span>
                        </div>

                        {/* Attendance Rate */}
                        <div className="flex flex-col items-center text-center p-3 rounded-lg bg-[#0EA5E9]/5 border border-[#0EA5E9]/10">
                          <span className="text-lg md:text-xl font-semibold text-white mb-1">99%</span>
                          <span className="text-[10px] md:text-xs text-[#64748b] uppercase tracking-wide">Attendance</span>
                        </div>
                      </div>

                      {/* CTA Button - Full width for mobile, optimized for thumb interaction */}
                      <div className="relative pt-3 border-t border-[#0EA5E9]/20">
                        <div className="flex items-center justify-center gap-2 px-4 py-3 md:py-2.5 rounded-lg bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 group-hover/metrics:bg-[#0EA5E9]/20 group-hover/metrics:border-[#0EA5E9]/60 transition-all duration-300">
                          <svg 
                            className="w-4 h-4 text-[#0EA5E9] group-hover/metrics:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span className="text-xs md:text-sm font-medium text-[#0EA5E9] group-hover/metrics:text-white transition-colors duration-300">
                            View full italki profile
                          </span>
                          <svg 
                            className="w-4 h-4 text-[#0EA5E9] group-hover/metrics:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                )}

                {/* Teaching Visual Evidence - Elite Spanish Classes only */}
                {exp.company === "Elite Spanish Classes" && (
                  <div className="mt-4 mx-auto relative group/teaching overflow-hidden rounded-xl border border-[#0EA5E9]/20 bg-gradient-to-br from-[#0E1A2B]/30 to-[#1a1a1a]/50 p-1 transition-all duration-500 hover:border-[#0EA5E9]/60 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] max-w-2xl">
                    {/* Animated border gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5E9]/0 via-[#0EA5E9]/20 to-[#0EA5E9]/0 opacity-0 group-hover/teaching:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Inner container */}
                    <div className="relative bg-[#0a0a0a] rounded-lg overflow-hidden">
                      {/* Image with futuristic overlay effects */}
                      <div className="relative">
                        {/* Scanline effect overlay */}
                        <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover/teaching:opacity-30 transition-opacity duration-500">
                          <div className="absolute inset-0" style={{
                            backgroundImage: 'linear-gradient(0deg, transparent 50%, rgba(14, 165, 233, 0.03) 50%)',
                            backgroundSize: '100% 4px',
                          }}></div>
                        </div>
                        
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-[#0EA5E9]/40 z-10 transition-all duration-500 group-hover/teaching:w-16 group-hover/teaching:h-16 md:group-hover/teaching:w-20 md:group-hover/teaching:h-20 group-hover/teaching:border-[#0EA5E9]"></div>
                        <div className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-[#0EA5E9]/40 z-10 transition-all duration-500 group-hover/teaching:w-16 group-hover/teaching:h-16 md:group-hover/teaching:w-20 md:group-hover/teaching:h-20 group-hover/teaching:border-[#0EA5E9]"></div>
                        
                        {/* The actual image */}
                        <img 
                          src={teachingImage} 
                          alt="Teaching session with Garret Faulkes"
                          className="w-full h-auto transition-all duration-500 group-hover/teaching:scale-[1.02]"
                        />
                        
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent opacity-60 group-hover/teaching:opacity-80 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Caption with futuristic styling */}
                      <div className="relative p-3 md:p-4 bg-gradient-to-br from-[#0E1A2B]/60 to-[#0a0a0a]/90 backdrop-blur-sm border-t border-[#0EA5E9]/20">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent"></div>
                        
                        <div className="flex items-start gap-3">
                          {/* Icon */}
                          <div className="shrink-0 mt-0.5">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 flex items-center justify-center group-hover/teaching:bg-[#0EA5E9]/20 group-hover/teaching:border-[#0EA5E9]/60 transition-all duration-300">
                              <svg className="w-4 h-4 md:w-5 md:h-5 text-[#0EA5E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            </div>
                          </div>
                          
                          {/* Text content */}
                          <div className="flex-1">
                            <p className="text-xs md:text-sm text-[#64748b] uppercase tracking-wider mb-1.5 font-medium">Live Teaching Session</p>
                            <p className="text-sm md:text-base text-[#f5f5f0] leading-relaxed">
                              Teaching my student <span className="text-[#0EA5E9] font-medium">Garret Faulkes</span>, from California
                            </p>
                          </div>
                          
                          {/* Verification badge */}
                          <div className="shrink-0">
                            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#0EA5E9]/10 border border-[#0EA5E9]/30">
                              <svg className="w-3.5 h-3.5 text-[#0EA5E9]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-[10px] text-[#0EA5E9] font-semibold uppercase tracking-wide">Verified</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Video Testimonials - Elite Spanish Classes only */}
                {exp.company === "Elite Spanish Classes" && (
                  <VideoTestimonials />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}