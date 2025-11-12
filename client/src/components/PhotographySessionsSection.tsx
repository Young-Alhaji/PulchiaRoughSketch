"use client";

export default function PhotographySessionsSection() {
  return (
    <section
      id="photography-sessions"
      className="py-20 px-4 bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 bg-clip-text text-transparent opacity-0"
          data-scroll-animation="slide-up"
        >
          Photography Sessions 📷
        </h2>
        <p
          className="text-center text-rose-400 text-lg md:text-xl mb-12 italic opacity-0"
          data-scroll-animation="fade-in-scale"
        >
          Recent captures from the heart
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Session 1 */}
          <div
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-rose-200 hover:scale-105 hover:rotate-1 group opacity-0"
            data-scroll-animation="fade-in-scale"
          >
            <div className="h-64 bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300 flex items-center justify-center group-hover:from-pink-300 group-hover:via-rose-300 group-hover:to-pink-400 transition-all duration-500">
              <span className="text-rose-600 text-lg font-medium animate-pulse-gentle">
                Maternity Bliss ✨
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-rose-500 mb-2 group-hover:text-pink-600 transition-colors">
                Golden Hour Maternity
              </h3>
              <p className="text-gray-600 text-sm">
                Celebrating new life with soft, dreamy vibes
              </p>
            </div>
          </div>

          {/* Session 2 */}
          <div
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-rose-200 hover:scale-105 hover:-rotate-1 group opacity-0"
            data-scroll-animation="fade-in-scale"
          >
            <div className="h-64 bg-gradient-to-br from-rose-200 via-pink-200 to-rose-300 flex items-center justify-center group-hover:from-rose-300 group-hover:via-pink-300 group-hover:to-rose-400 transition-all duration-500">
              <span className="text-rose-600 text-lg font-medium animate-bounce-gentle">
                Couple Goals 💕
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-rose-500 mb-2 group-hover:text-pink-600 transition-colors">
                Engagement Dreams
              </h3>
              <p className="text-gray-600 text-sm">
                Love story session in bloom
              </p>
            </div>
          </div>

          {/* Session 3 */}
          <div
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-rose-200 hover:scale-105 hover:rotate-1 group opacity-0"
            data-scroll-animation="fade-in-scale"
          >
            <div className="h-64 bg-gradient-to-br from-pink-300 via-rose-300 to-pink-400 flex items-center justify-center group-hover:from-pink-400 group-hover:via-rose-400 group-hover:to-pink-500 transition-all duration-500">
              <span className="text-white text-lg font-medium animate-pulse-gentle">
                Bridal Beauty 👰
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-rose-500 mb-2 group-hover:text-pink-600 transition-colors">
                Bridal Portraits
              </h3>
              <p className="text-gray-600 text-sm">
                Ethereal bridal session magic
              </p>
            </div>
          </div>

          {/* Session 4 */}
          <div
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-rose-200 hover:scale-105 hover:-rotate-1 group opacity-0"
            data-scroll-animation="fade-in-scale"
          >
            <div className="h-64 bg-gradient-to-br from-rose-300 via-pink-300 to-rose-400 flex items-center justify-center group-hover:from-rose-400 group-hover:via-pink-400 group-hover:to-rose-500 transition-all duration-500">
              <span className="text-white text-lg font-medium animate-wave">
                Family Love 👨‍👩‍👧‍👦
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-rose-500 mb-2 group-hover:text-pink-600 transition-colors">
                Family Session
              </h3>
              <p className="text-gray-600 text-sm">
                Capturing generational love
              </p>
            </div>
          </div>

          {/* Session 5 */}
          <div
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-rose-200 hover:scale-105 hover:rotate-1 group opacity-0"
            data-scroll-animation="fade-in-scale"
          >
            <div className="h-64 bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 flex items-center justify-center group-hover:from-pink-500 group-hover:via-rose-500 group-hover:to-pink-600 transition-all duration-500">
              <span className="text-white text-lg font-medium animate-bounce-gentle">
                Baby Bliss 👶
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-rose-500 mb-2 group-hover:text-pink-600 transition-colors">
                Newborn Magic
              </h3>
              <p className="text-gray-600 text-sm">Tiny fingers, big dreams</p>
            </div>
          </div>

          {/* Session 6 */}
          <div
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-rose-200 hover:scale-105 hover:-rotate-1 group opacity-0"
            data-scroll-animation="fade-in-scale"
          >
            <div className="h-64 bg-gradient-to-br from-rose-400 via-pink-400 to-rose-500 flex items-center justify-center group-hover:from-rose-500 group-hover:via-pink-500 group-hover:to-rose-600 transition-all duration-500">
              <span className="text-white text-lg font-medium animate-pulse-gentle">
                Portrait Art 🌸
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-rose-500 mb-2 group-hover:text-pink-600 transition-colors">
                Senior Portraits
              </h3>
              <p className="text-gray-600 text-sm">
                Celebrating milestone moments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
