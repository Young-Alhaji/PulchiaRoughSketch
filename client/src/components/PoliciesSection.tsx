"use client";

export default function PoliciesSection() {
  return (
    <section
      className="py-20 px-4 bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100"
      data-scroll-animation="fade-in-scale"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 bg-clip-text text-transparent">
          Studio Policies 📋
        </h2>
        <p className="text-center text-rose-400 text-xl mb-12 italic">
          Let's make this experience magical together
        </p>

        <div className="space-y-8" data-stagger-children="true">
          <div
            className="bg-white p-6 rounded-2xl shadow-lg border-2 border-rose-200"
            data-scroll-animation="slide-up"
            data-stagger-item
          >
            <h3 className="text-xl font-semibold text-rose-500 mb-3 flex items-center">
              <span className="text-pink-400 mr-2">💕</span>
              Booking & Payment
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A 50% retainer and signed contract are required to secure your
              session date. The remaining balance is due on the day of your
              session. We accept cash, check, or card payments.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-2xl shadow-lg border-2 border-rose-200"
            data-scroll-animation="slide-up"
            data-stagger-item
          >
            <h3 className="text-xl font-semibold text-rose-500 mb-3 flex items-center">
              <span className="text-pink-400 mr-2">🌤️</span>
              Weather & Rescheduling
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Outdoor sessions may be rescheduled due to inclement weather.
              We'll monitor forecasts and communicate any necessary changes
              24-48 hours in advance. Indoor backup locations are always
              available.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-2xl shadow-lg border-2 border-rose-200"
            data-scroll-animation="slide-up"
            data-stagger-item
          >
            <h3 className="text-xl font-semibold text-rose-500 mb-3 flex items-center">
              <span className="text-pink-400 mr-2">📸</span>
              Gallery Delivery
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your beautifully edited photos will be delivered within 2-3 weeks
              via an online gallery. Sneak peeks are shared within 48 hours
              because we know you're excited!
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-2xl shadow-lg border-2 border-rose-200"
            data-scroll-animation="slide-up"
            data-stagger-item
          >
            <h3 className="text-xl font-semibold text-rose-500 mb-3 flex items-center">
              <span className="text-pink-400 mr-2">✨</span>
              Usage Rights
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You receive full personal usage rights to your images. The Pulchia
              Lab retains rights for portfolio, marketing, and social media use
              with proper credit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
