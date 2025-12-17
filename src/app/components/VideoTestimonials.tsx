import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

interface VideoTestimonial {
  id: string;
  title: string;
  videoUrl: string;
  thumbnail: string;
}

export function VideoTestimonials() {
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<VideoTestimonial | null>(null);

  const testimonials: VideoTestimonial[] = [
    {
      id: '2fpfALElmgg',
      title: 'Testimonial 1',
      videoUrl: 'https://www.youtube.com/embed/2fpfALElmgg',
      thumbnail: 'https://img.youtube.com/vi/2fpfALElmgg/hqdefault.jpg',
    },
    {
      id: 'whY6vMRjpok',
      title: 'Testimonial 2',
      videoUrl: 'https://www.youtube.com/embed/whY6vMRjpok',
      thumbnail: 'https://img.youtube.com/vi/whY6vMRjpok/maxresdefault.jpg',
    },
    {
      id: 'HvLQUeed-hw',
      title: 'Testimonial 3',
      videoUrl: 'https://www.youtube.com/embed/HvLQUeed-hw',
      thumbnail: 'https://img.youtube.com/vi/HvLQUeed-hw/hqdefault.jpg',
    },
    {
      id: 'Op1AkyqOzsU',
      title: 'Testimonial 4',
      videoUrl: 'https://www.youtube.com/embed/Op1AkyqOzsU',
      thumbnail: 'https://img.youtube.com/vi/Op1AkyqOzsU/maxresdefault.jpg',
    },
    {
      id: '8gkjhEB-vpU',
      title: 'Testimonial 5',
      videoUrl: 'https://www.youtube.com/embed/8gkjhEB-vpU',
      thumbnail: 'https://img.youtube.com/vi/8gkjhEB-vpU/maxresdefault.jpg',
    },
    {
      id: 'WjDIPUdqoiU',
      title: 'Testimonial 6',
      videoUrl: 'https://www.youtube.com/embed/WjDIPUdqoiU',
      thumbnail: 'https://img.youtube.com/vi/WjDIPUdqoiU/maxresdefault.jpg',
    },
    {
      id: 'M6v2qd3XFDA',
      title: 'Testimonial 7',
      videoUrl: 'https://www.youtube.com/embed/M6v2qd3XFDA',
      thumbnail: 'https://img.youtube.com/vi/M6v2qd3XFDA/maxresdefault.jpg',
    },
  ];

  return (
    <ScrollReveal delay={0.2}>
      <div className="mt-6 max-w-4xl mx-auto">
        {/* Compact Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-px h-4 bg-[#0EA5E9]"></div>
          <h3 className="text-xs text-[#64748b] uppercase tracking-wider font-medium">
            Student Testimonials
          </h3>
          <div className="flex-1 h-px bg-gradient-to-r from-[#0EA5E9]/30 to-transparent"></div>
          <span className="text-[10px] text-[#0EA5E9]/70">{testimonials.length} Reviews</span>
        </div>

        {/* Video Modal */}
        {playingVideo && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setPlayingVideo(null)}
          >
            <div 
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setPlayingVideo(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-2 text-sm"
              >
                <span>Close</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Video container */}
              <div 
                className="relative overflow-hidden rounded-xl border border-[#0EA5E9] shadow-[0_0_40px_rgba(14,165,233,0.4)]"
                style={{
                  background: 'linear-gradient(135deg, rgba(14, 26, 43, 0.5) 0%, rgba(26, 26, 26, 0.7) 100%)',
                }}
              >
                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#0EA5E9] z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#0EA5E9] z-10 pointer-events-none"></div>
                
                {/* Video iframe */}
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={`${playingVideo.videoUrl}?autoplay=1&mute=1&modestbranding=1&rel=0&controls=1`}
                    title={playingVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Horizontal scrolling container */}
        <div className="relative overflow-hidden rounded-xl bg-[#2d2d2d]/30 border border-[#404040]/50 p-3">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-[#2d2d2d]/90 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-[#2d2d2d]/90 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling video container */}
          <div 
            className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide"
            style={{
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* First set of videos */}
            <div 
              className="flex gap-3 md:gap-4 animate-scroll-videos"
              style={{
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              {testimonials.map((video, index) => (
                <div
                  key={video.id}
                  className="group/video relative flex-shrink-0 w-48 md:w-56"
                  onMouseEnter={() => setExpandedVideo(video.id)}
                  onMouseLeave={() => setExpandedVideo(null)}
                >
                  {/* Video container with glassmorphism */}
                  <div 
                    onClick={() => setPlayingVideo(video)}
                    className={`
                      relative overflow-hidden rounded-lg border transition-all duration-300 cursor-pointer
                      ${expandedVideo === video.id 
                        ? 'border-[#0EA5E9] shadow-[0_0_20px_rgba(14,165,233,0.3)] scale-105' 
                        : 'border-[#0EA5E9]/30 hover:border-[#0EA5E9]/50'
                      }
                    `}
                    style={{
                      background: 'linear-gradient(135deg, rgba(14, 26, 43, 0.3) 0%, rgba(26, 26, 26, 0.5) 100%)',
                    }}
                  >
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#0EA5E9]/50 z-10 pointer-events-none"></div>
                    
                    {/* Thumbnail image with play button */}
                    <div className="relative aspect-video bg-black overflow-hidden">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all group-hover/video:bg-black/20">
                        <div className="w-12 h-12 rounded-full bg-[#0EA5E9] flex items-center justify-center shadow-lg transition-transform group-hover/video:scale-110">
                          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Glow effect on hover */}
                    <div className={`
                      absolute inset-0 bg-[#0EA5E9]/5 opacity-0 transition-opacity duration-300 pointer-events-none
                      ${expandedVideo === video.id ? 'opacity-100' : ''}
                    `}></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div 
              className="flex gap-3 md:gap-4 animate-scroll-videos" 
              aria-hidden="true"
              style={{
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              {testimonials.map((video, index) => (
                <div
                  key={`duplicate-${video.id}`}
                  className="group/video relative flex-shrink-0 w-48 md:w-56"
                  onMouseEnter={() => setExpandedVideo(video.id)}
                  onMouseLeave={() => setExpandedVideo(null)}
                >
                  {/* Video container with glassmorphism */}
                  <div 
                    onClick={() => setPlayingVideo(video)}
                    className={`
                      relative overflow-hidden rounded-lg border transition-all duration-300 cursor-pointer
                      ${expandedVideo === video.id 
                        ? 'border-[#0EA5E9] shadow-[0_0_20px_rgba(14,165,233,0.3)] scale-105' 
                        : 'border-[#0EA5E9]/30 hover:border-[#0EA5E9]/50'
                      }
                    `}
                    style={{
                      background: 'linear-gradient(135deg, rgba(14, 26, 43, 0.3) 0%, rgba(26, 26, 26, 0.5) 100%)',
                    }}
                  >
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#0EA5E9]/50 z-10 pointer-events-none"></div>
                    
                    {/* Thumbnail image with play button */}
                    <div className="relative aspect-video bg-black overflow-hidden">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all group-hover/video:bg-black/20">
                        <div className="w-12 h-12 rounded-full bg-[#0EA5E9] flex items-center justify-center shadow-lg transition-transform group-hover/video:scale-110">
                          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Glow effect on hover */}
                    <div className={`
                      absolute inset-0 bg-[#0EA5E9]/5 opacity-0 transition-opacity duration-300 pointer-events-none
                      ${expandedVideo === video.id ? 'opacity-100' : ''}
                    `}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}