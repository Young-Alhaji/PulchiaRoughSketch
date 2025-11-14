"use client";

import Link from "next/link";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Floating decorative elements - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-20 left-10 text-pink-300 text-4xl animate-bounce-gentle opacity-60">
          🌸
        </div>
        <div className="absolute top-32 right-16 text-rose-300 text-3xl animate-pulse-gentle opacity-50">
          ✨
        </div>
        <div className="absolute bottom-40 left-20 text-pink-400 text-5xl animate-wave opacity-40">
          💕
        </div>
        <div className="absolute bottom-20 right-10 text-rose-400 text-4xl animate-bounce-gentle opacity-60">
          🦋
        </div>
        <div className="absolute top-1/3 right-12 text-rose-200 text-5xl animate-wave opacity-35">
          🎀
        </div>
      </div>

      <div className="text-center max-w-5xl relative z-10 px-2">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 bg-clip-text text-transparent mb-4 md:mb-6 animate-pulse-gentle font-dancing-script">
          The Pulchia Lab
        </h1>

        {/* Decorative underline - Smaller on mobile */}
        <div className="flex items-center justify-center mb-6 md:mb-8">
          <div className="h-0.5 md:h-1 w-12 md:w-20 bg-gradient-to-r from-transparent via-pink-300 to-transparent rounded-full"></div>
          <span className="mx-2 md:mx-4 text-pink-400 text-lg md:text-2xl animate-bounce-gentle">
            💖
          </span>
          <div className="h-0.5 md:h-1 w-12 md:w-20 bg-gradient-to-r from-transparent via-pink-300 to-transparent rounded-full"></div>
        </div>

        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-rose-400 mb-4 md:mb-6 animate-fade-in-up animation-delay-300 font-semibold font-poppins px-2">
          ✨ Capturing Love, Light & Life ✨
        </p>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl md:max-w-3xl mx-auto animate-fade-in-up animation-delay-500 leading-relaxed font-inter px-2">
          Where every frame tells a story of beauty, connection, and magic. <br />
          Professional photography with a touch of whimsy and a whole lot of
          heart. Let's create memories that sparkle!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center animate-fade-in-up animation-delay-700 px-2">
          <Link
            href="/portfolio"
            className="group border-3 border-rose-300 text-rose-500 px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 hover:scale-110 hover:border-pink-400 hover:text-pink-500 transition-all duration-500 relative overflow-hidden cursor-pointer text-center"
            prefetch={true}
          >
            <span className="relative z-10">
              View Portfolio {"\uD83D\uDCF8"}
            </span>
            <div className="absolute inset-0 bg-rose-100 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </Link>

          <a
            href="https://wa.me/2349030406284?text=Hi%20Pulchia!%20I'm%20interested%20in%20booking%20a%20photography%20session.%20Can%20we%20discuss%20the%20details?"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:shadow-2xl hover:scale-110 transition-all duration-500 animate-pulse-gentle relative overflow-hidden cursor-pointer text-center"
          >
            <span className="relative z-10">
              Book Your Session {"\uD83D\uDC95"}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
        </div>

        {/* Additional sparkle effect - Simplified on mobile */}
        <div className="mt-8 md:mt-12 flex justify-center space-x-4 md:space-x-8 animate-fade-in-up animation-delay-1000">
          <span className="text-pink-400 text-lg md:text-xl animate-wave animation-delay-600">
            🌟
          </span>
          <span className="text-rose-400 text-xl md:text-2xl animate-bounce-gentle animation-delay-800">
            💫
          </span>
        </div>
      </div>
    </section>
  );
}
