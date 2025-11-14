export default function InvestmentSection() {
  return (
    <section
      id="investment"
      className="py-16 md:pt-16 px-4 bg-white opacity-100"
      data-scroll-animation="fade-in-scale"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 bg-clip-text text-transparent opacity-0"
          data-scroll-animation="slide-up"
        >
          Rate Card 💎
        </h2>
        <p
          className="text-center text-rose-400 text-lg md:text-xl mb-12 italic opacity-0"
          data-scroll-animation="fade-in-scale"
        >
          Beautiful memories deserve beautiful investment
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Package 1 */}
          <div
            className="bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100 p-8 rounded-3xl shadow-lg border-2 border-rose-200 hover:scale-105 hover:-rotate-2 transition-all duration-500 hover:shadow-2xl opacity-0"
            data-scroll-animation="fade-in-scale"
          >
            <h3 className="text-2xl font-bold text-rose-500 mb-4 text-center animate-bounce-gentle">
              IPhone 📱
            </h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-pink-500 animate-pulse-gentle">
                50k
              </span>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-pink-400 mr-2 animate-bounce-gentle">
                  ✨
                </span>
                5 Edited Photos
              </li>
              <li className="flex items-center">
                <span className="text-pink-400 mr-2 animate-bounce-gentle">
                  📁
                </span>
                Raw Pictures
              </li>
            </ul>
          </div>

          {/* Package 2 */}
          <div
            className="bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100 p-8 rounded-3xl shadow-lg border-2 border-rose-200 opacity-0"
            data-scroll-animation="fade-in-scale"
          >
            <h3 className="text-2xl font-bold text-rose-500 mb-4 text-center">
              IPhone 📱
            </h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-pink-500">70k</span>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">✨</span>5 edited photos
              </li>
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">🎬</span>A Reel Video
              </li>
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">📁</span>
                Raw Pictures
              </li>
            </ul>
          </div>

          {/* Package 3 - Featured */}
          <div
            className="bg-gradient-to-b from-rose-100 via-pink-100 to-rose-200 p-8 rounded-3xl shadow-xl border-2 border-rose-300 opacity-0"
            data-scroll-animation="fade-in-scale"
          >
            <div className="bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 text-white px-4 py-1 rounded-full text-sm text-center mb-4">
              Most Popular 💖
            </div>
            <h3 className="text-2xl font-bold text-rose-600 mb-4 text-center">
              Digital Camera 📷
            </h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-pink-500">85k</span>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">✨</span>5 Edited Photos
              </li>
              <li className="flex items-center">
                <span className="text-pink-400 mr-2">📁</span>
                Raw Pictures
              </li>
            </ul>
          </div>

          {/* Package 4 - New */}
          <div
            className="bg-gradient-to-b from-purple-50 via-pink-50 to-purple-100 p-8 rounded-3xl shadow-lg border-2 border-purple-200 hover:scale-105 hover:rotate-2 transition-all duration-500 hover:shadow-2xl opacity-0"
            data-scroll-animation="fade-in-scale"
          >
            <h3 className="text-2xl font-bold text-purple-500 mb-4 text-center animate-bounce-gentle">
              Digital Camera 📷
            </h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-purple-500 animate-pulse-gentle">
                100k
              </span>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-purple-400 mr-2 animate-bounce-gentle">
                  ✨
                </span>
                5 edited photos
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2 animate-bounce-gentle">
                  🎬
                </span>
                A Reel Video
              </li>
              <li className="flex items-center">
                <span className="text-purple-400 mr-2 animate-bounce-gentle">
                  📁
                </span>
                Raw Pictures
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
