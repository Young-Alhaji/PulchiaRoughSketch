"use client";

export default function FAQSection() {
  return (
    <section
      className="py-20 px-4 bg-white"
      data-scroll-animation="fade-in-scale"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 bg-clip-text text-transparent">
          Frequently Asked Questions 💭
        </h2>
        <p className="text-center text-rose-400 text-xl mb-12 italic">
          Everything you need to know, beautifully answered
        </p>

        <div className="space-y-6" data-stagger-children="true">
          <div
            className="bg-gradient-to-r from-pink-50 via-rose-50 to-pink-100 p-6 rounded-2xl border-2 border-rose-200"
            data-scroll-animation="slide-up"
            data-stagger-item
          >
            <h3 className="text-lg font-semibold text-rose-500 mb-2">
              What should I wear for my session? 👗
            </h3>
            <p className="text-gray-600">
              Choose outfits that make you feel confident and beautiful! Soft,
              romantic colors work wonderfully. I provide a detailed styling
              guide after booking with specific recommendations based on your
              session type and location.
            </p>
          </div>

          <div
            className="bg-gradient-to-r from-rose-50 via-pink-50 to-rose-100 p-6 rounded-2xl border-2 border-rose-200"
            data-scroll-animation="slide-up"
            data-stagger-item
          >
            <h3 className="text-lg font-semibold text-rose-500 mb-2">
              How long will it take to get my photos? 📅
            </h3>
            <p className="text-gray-600">
              Your complete gallery will be ready within 2-3 weeks. I always
              send sneak peeks within 48 hours because I know you're dying to
              see them! Rush delivery is available for an additional fee.
            </p>
          </div>

          <div
            className="bg-gradient-to-r from-pink-50 via-rose-50 to-pink-100 p-6 rounded-2xl border-2 border-rose-200"
            data-scroll-animation="slide-up"
            data-stagger-item
          >
            <h3 className="text-lg font-semibold text-rose-500 mb-2">
              Can we bring props or include pets? 🐕
            </h3>
            <p className="text-gray-600">
              Absolutely! I love incorporating meaningful props and furry family
              members. Let's chat during our consultation about what would make
              your session extra special and personal.
            </p>
          </div>

          <div
            className="bg-gradient-to-r from-rose-50 via-pink-50 to-rose-100 p-6 rounded-2xl border-2 border-rose-200"
            data-scroll-animation="slide-up"
            data-stagger-item
          >
            <h3 className="text-lg font-semibold text-rose-500 mb-2">
              What happens if it rains? 🌧️
            </h3>
            <p className="text-gray-600">
              Don't worry! We'll monitor the weather closely and have backup
              plans ready. I know some gorgeous covered locations and indoor
              spots that create equally stunning images.
            </p>
          </div>

          <div
            className="bg-gradient-to-r from-pink-50 via-rose-50 to-pink-100 p-6 rounded-2xl border-2 border-rose-200"
            data-scroll-animation="slide-up"
            data-stagger-item
          >
            <h3 className="text-lg font-semibold text-rose-500 mb-2">
              Do you travel for sessions? ✈️
            </h3>
            <p className="text-gray-600">
              Yes! I love destination sessions and elopements. Travel fees apply
              for locations outside my local area, but I'm always up for an
              adventure to capture your special moments in dream locations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
