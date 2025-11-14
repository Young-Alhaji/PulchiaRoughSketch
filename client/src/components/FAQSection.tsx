export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-20 px-4 bg-white opacity-100"
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
              Do you offer editing classes or photography lessons? 📷
            </h3>
            <p className="text-gray-600">
              No, we do not offer training classes at the moment.
            </p>
          </div>

          <div
            className="bg-gradient-to-r from-pink-50 via-rose-50 to-pink-100 p-6 rounded-2xl border-2 border-rose-200"
            data-scroll-animation="slide-up"
            data-stagger-item
          >
            <h3 className="text-lg font-semibold text-rose-500 mb-2">
              Do you work on the mainland? 📍
            </h3>
            <p className="text-gray-600">No, we only work within the Island.</p>
          </div>

          <div
            className="bg-gradient-to-r from-rose-50 via-pink-50 to-rose-100 p-6 rounded-2xl border-2 border-rose-200"
            data-scroll-animation="slide-up"
            data-stagger-item
          >
            <h3 className="text-lg font-semibold text-rose-500 mb-2">
              Do you edit pictures you didn't take?
            </h3>
            <p className="text-gray-600">
              No, we only offer my editing services to my clients.
            </p>
          </div>

          <div
            className="bg-gradient-to-r from-pink-50 via-rose-50 to-pink-100 p-6 rounded-2xl border-2 border-rose-200"
            data-scroll-animation="slide-up"
            data-stagger-item
          >
            <h3 className="text-lg font-semibold text-rose-500 mb-2">
              Do you work on Sundays? 📅
            </h3>
            <p className="text-gray-600">No, we do not.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
