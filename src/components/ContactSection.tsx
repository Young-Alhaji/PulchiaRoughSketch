"use client";

export default function ContactSection() {
  return (
    <section
      className="py-20 px-4 bg-gradient-to-br from-pink-400 via-rose-300 to-pink-500 animate-gradient-x"
      data-scroll-animation="fade-in-scale"
    >
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-5xl font-bold mb-4 animate-slide-in-from-top">
          Let's Create Magic Together ✨
        </h2>
        <p className="text-xl mb-8 text-pink-100 animate-fade-in-up animation-delay-300">
          Ready to capture your beautiful story? I can't wait to meet you!
        </p>

        <div
          className="grid md:grid-cols-2 gap-8 mb-12"
          data-stagger-children="true"
        >
          <div
            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl animate-slide-in-from-left animation-delay-500 hover:scale-105 hover:bg-white/20 transition-all duration-300"
            data-scroll-animation="slide-up"
            data-stagger-item
          >
            <h3 className="text-xl font-semibold mb-3 animate-bounce-gentle">
              📧 Email Me
            </h3>
            <p className="text-pink-100">hello@thepulchialab.com</p>
          </div>
          <div
            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl animate-slide-in-from-right animation-delay-500 hover:scale-105 hover:bg-white/20 transition-all duration-300"
            data-scroll-animation="slide-up"
            data-stagger-item
          >
            <h3 className="text-xl font-semibold mb-3 animate-bounce-gentle">
              📱 Call/Text
            </h3>
            <p className="text-pink-100">(555) 123-PINK</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up animation-delay-700">
          <button className="bg-white text-pink-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulse-gentle">
            Book Your Session Now 💕
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-pink-500 hover:scale-105 transition-all duration-300">
            Follow on Instagram 📱
          </button>
        </div>

        <div className="text-pink-100 animate-fade-in-up animation-delay-900">
          <p className="mb-2">Follow along for daily doses of inspiration ✨</p>
          <div className="flex justify-center gap-4">
            <span className="animate-bounce-gentle">💕</span>
            <span className="animate-pulse-gentle">@thepulchialab</span>
            <span className="animate-bounce-gentle">💕</span>
          </div>
        </div>
      </div>
    </section>
  );
}
