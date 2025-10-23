"use client";

export default function InvestmentSection() {
  return (
    <section
      className="py-20 px-4 bg-white"
      data-scroll-animation="fade-in-scale"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 bg-clip-text text-transparent animate-slide-in-from-top">
          Rate Card 💎
        </h2>
        <p className="text-center text-rose-400 text-xl mb-12 italic animate-fade-in animation-delay-200">
          Beautiful memories deserve beautiful investment
        </p>

        <div className="grid md:grid-cols-3 gap-8" data-stagger-children="true">
          {/* Package 1 */}
          <div
            className="bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100 p-8 rounded-3xl shadow-lg border-2 border-rose-200 animate-slide-in-from-left animation-delay-300 hover:scale-105 hover:-rotate-2 transition-all duration-500 hover:shadow-2xl"
            data-scroll-animation="slide-up"
            data-stagger-item
          >
            <h3 className="text-2xl font-bold text-rose-500 mb-4 text-center animate-bounce-gentle">
              Mini Session ✨
            </h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-pink-500 animate-pulse-gentle">
                50k
              </span>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center animate-fade-in animation-delay-500">
                <span className="text-pink-400 mr-2 animate-bounce-gentle">
                  💕
                </span>
                30 minute session
              </li>
              <li className="flex items-center animate-fade-in animation-delay-600">
                <span className="text-pink-400 mr-2 animate-bounce-gentle">
                  📸
                </span>
                15+ edited photos
              </li>
              <li className="flex items-center animate-fade-in animation-delay-700">
                <span className="text-pink-400 mr-2 animate-bounce-gentle">
                  🌸
                </span>
                Online gallery
              </li>
              <li className="flex items-center animate-fade-in animation-delay-800">
                <span className="text-pink-400 mr-2 animate-bounce-gentle">
                  ✨
                </span>
                Perfect for couples/individuals
              </li>
            </ul>
          </div>

          {/* Package 2 - Featured */}
          <div
            className="bg-gradient-to-b from-rose-100 via-pink-100 to-rose-200 p-8 rounded-3xl shadow-xl border-2 border-rose-300 transform scale-105"
            data-scroll-animation="scale-up"
            data-stagger-item
          >
            <div className="bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 text-white px-4 py-1 rounded-full text-sm text-center mb-4">
              Most Popular 💖
            </div>
            <h3 className="text-2xl font-bold text-rose-600 mb-4 text-center">
              Standard Session 💕
            </h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-pink-500">85k</span>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">💕</span>1 hour session
              </li>
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">📸</span>
                30+ edited photos
              </li>
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">🌸</span>
                Online gallery + USB
              </li>
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">✨</span>2 outfit changes
              </li>
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">💎</span>
                Location scouting included
              </li>
            </ul>
          </div>

          {/* Package 3 */}
          <div
            className="bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100 p-8 rounded-3xl shadow-lg border-2 border-rose-200"
            data-scroll-animation="slide-up"
            data-stagger-item
          >
            <h3 className="text-2xl font-bold text-rose-500 mb-4 text-center">
              Premium Session 👑
            </h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-pink-500">100k</span>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">💕</span>2 hour session
              </li>
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">📸</span>
                50+ edited photos
              </li>
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">🌸</span>
                Online gallery + USB + prints
              </li>
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">✨</span>
                Multiple outfit changes
              </li>
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">💎</span>
                Custom location scouting
              </li>
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">👑</span>
                Same-day sneak peeks
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
