export function Footer() {
  return (
    <footer className="py-10 md:py-12 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-[#404040]/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-6">
          {/* Left: Name and tagline */}
          <div className="text-center md:text-left">
            <p className="text-[#f5f5f0] font-medium mb-1 text-sm md:text-base">
              Angel Tadeo Correa Torres
            </p>
            <p className="text-xs md:text-sm text-[#9ca3af]">
              AI Engineering • Systems Thinking • Education
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex gap-5 md:gap-6">
            <a 
              href="https://github.com/TadeoCorrea2540" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#9ca3af] hover:text-[#0EA5E9] transition-colors duration-300 text-xs md:text-sm"
            >
              GitHub Portfolio
            </a>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-[#404040]/30 text-center">
          <p className="text-xs text-[#9ca3af]">
            © {new Date().getFullYear()} Angel Tadeo Correa Torres. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}