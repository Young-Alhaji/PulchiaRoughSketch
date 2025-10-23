"use client";

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 bg-clip-text text-transparent animate-slide-in-from-top opacity-0"
          data-scroll-animation="slide-up"
        >
          About Me ✨
        </h2>
        <p
          className="text-center text-rose-400 text-xl mb-12 italic animate-fade-in animation-delay-200 opacity-0"
          data-scroll-animation="fade-in-scale"
        >
          The heart behind the lens
        </p>

        <div
          className="grid md:grid-cols-2 gap-12 items-center"
          data-stagger-children="true"
        >
          <div data-stagger-item>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 animate-slide-in-from-left animation-delay-400">
              Hi beautiful! I'm Pulchia, and I believe every person has a story
              worth telling through photography. With 5+ years of capturing
              life's most precious moments, I specialize in creating dreamy,
              romantic images that feel like fairy tales come to life.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 animate-slide-in-from-left animation-delay-500">
              My passion lies in making you feel comfortable, confident, and
              absolutely radiant during our time together. Whether it's your
              engagement, maternity journey, or family milestone, I'm here to
              create magic that you'll treasure forever.
            </p>
            <div className="flex items-center gap-4 animate-slide-in-from-left animation-delay-600">
              <span className="text-pink-400 text-2xl animate-bounce-gentle">
                💕
              </span>
              <p className="text-rose-500 font-semibold italic">
                "Creating memories, one frame at a time"
              </p>
            </div>
          </div>
          <div data-stagger-item>
            <div
              className="bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 h-96 rounded-3xl flex items-center justify-center shadow-lg border-2 border-rose-300 animate-slide-in-from-right animation-delay-400 hover:scale-105 transition-transform duration-500 opacity-0"
              data-scroll-animation="slide-up"
            >
              <span className="text-rose-500 text-2xl font-bold animate-pulse-gentle">
                Pulchia's Photo Coming Soon 📷✨
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
