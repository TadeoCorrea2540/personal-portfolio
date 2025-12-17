import { ScrollReveal } from './ScrollReveal';

export function About() {
  return (
    <section id="about" className="py-12 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 pb-6 md:pb-24">
      <div className="max-w-4xl mx-auto">
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
              About Me
            </h2>
          </div>
        </ScrollReveal>

        {/* Content - structured, rational paragraphs */}
        <div className="space-y-5 md:space-y-6 text-[#e0e0db]" style={{ lineHeight: 1.7 }}>
          <ScrollReveal delay={0.1}>
            <p className="text-base md:text-lg">
              I am an <span className="text-[#0EA5E9] font-medium">AI Engineering</span> student at Universidad Autónoma de Nuevo León (UANL), 
              with a strong foundation in education and cognitive science. My academic journey 
              combines <span className="text-[#0EA5E9] font-medium">technical expertise</span> with a deep understanding of learning systems and 
              human cognition.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-base md:text-lg">
              I hold a Bachelor's Degree in Primary Education from ENMFM, where I achieved 
              a final GPA of 9.3/10. I've also completed a specialization in Teaching Spanish 
              as a Foreign Language at UEMC, and I'm Cambridge English certified at the <span className="text-[#0EA5E9] font-medium">C1 level</span>.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-base md:text-lg">
              Currently, I am focused on strengthening my technical skills in programming 
              (<span className="text-[#0EA5E9] font-medium">Python</span>, <span className="text-[#0EA5E9] font-medium">C++</span>, <span className="text-[#0EA5E9] font-medium">SQL</span>, <span className="text-[#0EA5E9] font-medium">Git</span>, and others), data analysis, and artificial intelligence, 
              while leveraging my educational and linguistic expertise to contribute to 
              innovative AI projects.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-base md:text-lg">
              Expanding my skill set in machine learning and deep learning frameworks, 
              including <span className="text-[#0EA5E9] font-medium">PyTorch</span> (industry standard), <span className="text-[#0EA5E9] font-medium">TensorFlow</span>, as well as <span className="text-[#0EA5E9] font-medium">NumPy</span> and 
              <span className="text-[#0EA5E9] font-medium">Pandas</span> for data analysis and scientific computing.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}