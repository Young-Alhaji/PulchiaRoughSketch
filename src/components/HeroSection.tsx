"use client";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center px-4 animate-gradient-x">
      <div className="text-center max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 bg-clip-text text-transparent mb-4 animate-bounce-gentle animate-pulse">
          The Pulchia Lab
        </h1>
        <p className="text-2xl md:text-3xl text-rose-400 mb-6 animate-fade-in-up animation-delay-300">
          ✨ Capturing Love, Light & Life ✨
        </p>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-500">
          Where every frame tells a story of beauty, connection, and magic.
          Professional photography with a touch of whimsy and a whole lot of
          heart.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-700">
          <button className="bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulse-gentle">
            Book Your Session 💕
          </button>
          <button className="border-2 border-rose-300 text-rose-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-50 hover:scale-105 transition-all duration-300">
            View Portfolio 📸
          </button>
        </div>
      </div>
    </section>
  );
}
