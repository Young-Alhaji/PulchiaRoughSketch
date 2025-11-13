import Link from "next/link";
import { Navbar } from "@/components";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 bg-clip-text text-transparent mb-6 font-dancing-script leading-tight py-2">
              My Portfolio ✨
            </h1>
            <p className="text-xl md:text-2xl text-rose-400 mb-6 font-poppins">
              A collection of beautiful moments captured with love
            </p>
            <div className="text-6xl text-rose-300 mb-8">📷</div>
          </div>
        </section>

        {/* Portfolio Gallery Categories */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                All
              </button>
              <button className="border-2 border-rose-300 text-rose-500 px-6 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors">
                Maternity
              </button>
              <button className="border-2 border-rose-300 text-rose-500 px-6 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors">
                Engagement
              </button>
              <button className="border-2 border-rose-300 text-rose-500 px-6 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors">
                Bridal
              </button>
              <button className="border-2 border-rose-300 text-rose-500 px-6 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors">
                Family
              </button>
              <button className="border-2 border-rose-300 text-rose-500 px-6 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors">
                Newborn
              </button>
            </div>

            {/* Photo Grid - Ready for your images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Placeholder for portfolio images */}
              <div className="col-span-full text-center py-20">
                <div className="max-w-lg mx-auto">
                  <h3 className="text-2xl font-semibold text-rose-400 mb-4 font-poppins">
                    Portfolio Coming Soon
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Beautiful photography work will be showcased here soon!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home & Contact Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Your Story? ✨
            </h2>
            <p className="text-xl mb-8 text-pink-100">
              Let's capture your beautiful moments together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-white text-pink-500 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform flex items-center gap-2 justify-center"
                prefetch={true}
              >
                Back to Home
                <i className="fas fa-home"></i>
              </Link>
              <a
                href="https://wa.me/2349030406284?text=Hi%20Pulchia!%20I'm%20interested%20in%20booking%20a%20photography%20session.%20Can%20we%20discuss%20the%20details?"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-pink-500 transition-colors"
              >
                Book Your Session 💕
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
