export default function AboutSection() {
  return (
    <section id="about-me" className="py-16 md:pt-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 bg-clip-text text-transparent opacity-0"
          data-scroll-animation="slide-up"
        >
          About Me ✨
        </h2>
        <p
          className="text-center text-rose-400 text-lg md:text-xl mb-12 italic opacity-0 flex items-center justify-center gap-3"
          data-scroll-animation="fade-in-scale"
        >
          <span className="text-pink-400 text-3xl animate-bounce-gentle">
            💕
          </span>
          The heart behind the lens
          <span className="text-pink-400 text-3xl animate-bounce-gentle">
            💕
          </span>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Text Content - Fades in */}
          <div className="opacity-0" data-scroll-animation="fade-in-scale">
            <div className="space-y-6">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Hi beautiful! I'm Pulchia, and I believe every person has a
                story worth telling through photography. With 5+ years of
                capturing life's most precious moments, I specialize in creating
                dreamy, romantic images that feel like fairy tales coming to life.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                My passion lies in making you feel comfortable, confident and
                absolutely radiant during our time together.  I'm here to
                create magic that you'll treasure forever.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <span className="text-pink-400 text-2xl animate-bounce-gentle">
                  💕
                </span>
                <p className="text-rose-500 font-semibold italic text-sm md:text-base">
                  "Creating memories, one frame at a time"
                </p>
              </div>
            </div>
          </div>

          {/* Image - Fades in */}
          <div className="opacity-0" data-scroll-animation="fade-in-scale">
            <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 h-64 md:h-80 lg:h-96 rounded-3xl flex items-center justify-center shadow-lg border-2 border-rose-300 hover:scale-105 transition-transform duration-500">
              <span className="text-rose-500 text-lg md:text-2xl font-bold animate-pulse-gentle text-center px-4">
                Pulchia's Photo Coming Soon 📷✨
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
