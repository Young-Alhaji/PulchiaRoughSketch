export default function PoliciesSection() {
  return (
    <section
      id="policies"
      className="py-16 md:pt-16 px-4 bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100 opacity-100"
      data-scroll-animation="fade-in-scale"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500 bg-clip-text text-transparent">
          Policies 📋
        </h2>
        <p className="text-center text-rose-400 text-xl mb-16 italic">
          Let's make this experience magical together
        </p>
        {/* First Section - 5 Policies */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-rose-600">
            📝 Booking & Appointment
          </h3>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-stagger-children="true"
          >
            {/* Policy 1 */}
            <div
              className="bg-white p-6 rounded-2xl shadow-lg border-2 border-rose-200 hover:shadow-xl transition-all duration-300"
              data-scroll-animation="slide-up"
              data-stagger-item
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                A 50% deposit is required to validate your booking and we have a
                strict no refund policy.
              </p>
            </div>

            {/* Policy 2 */}
            <div
              className="bg-white p-6 rounded-2xl shadow-lg border-2 border-rose-200 hover:shadow-xl transition-all duration-300"
              data-scroll-animation="slide-up"
              data-stagger-item
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                Rescheduling must be done at least 24 hours to the shoot. If
                done on your appointment day, it attracts additional 10k.
              </p>
            </div>

            {/* Policy 3 */}
            <div
              className="bg-white p-6 rounded-2xl shadow-lg border-2 border-rose-200 hover:shadow-xl transition-all duration-300"
              data-scroll-animation="slide-up"
              data-stagger-item
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                Shoot takes 1 hour and you're expected to be at the location at
                the exact time you booked your appointment for, as we have a
                very strict schedule.
              </p>
            </div>

            {/* Policy 4 */}
            <div
              className="bg-white p-6 rounded-2xl shadow-lg border-2 border-rose-200 hover:shadow-xl transition-all duration-300"
              data-scroll-animation="slide-up"
              data-stagger-item
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                A 30 minute waiting period is allowed after which a lateness fee
                of 15k will be charged.
              </p>
            </div>

            {/* Policy 5 */}
            <div
              className="bg-white p-6 rounded-2xl shadow-lg border-2 border-rose-200 hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1"
              data-scroll-animation="slide-up"
              data-stagger-item
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                In a situation where I have other appointments after you, the
                appointment will be cancelled. However, you're free to use your
                slot another day with 50% off your initial deposit.
              </p>
            </div>
          </div>
        </div>
        {/* Second Section - 8 Policies */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-rose-600">
            🚫 Rescheduling and Cancellation
          </h3>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            data-stagger-children="true"
          >
            {/* Policy 6 */}
            <div
              className="bg-gradient-to-b from-white to-pink-50 p-6 rounded-2xl shadow-lg border-2 border-pink-200 hover:shadow-xl transition-all duration-300"
              data-scroll-animation="slide-up"
              data-stagger-item
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                Full payment must be made immediately after the shoot. <br />
                We do not accept same day bookings and we do not shoot past 9pm.
              </p>
            </div>

            {/* Policy 7 */}
            <div
              className="bg-gradient-to-b from-white to-pink-50 p-6 rounded-2xl shadow-lg border-2 border-pink-200 hover:shadow-xl transition-all duration-300"
              data-scroll-animation="slide-up"
              data-stagger-item
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                Editing takes 72 hours after the shoot is done and N.B express
                delivery costs an extra fee of N10,000. The duration for
                delivery is 24 hours.
              </p>
            </div>

            {/* Policy 9 */}
            <div
              className="bg-gradient-to-b from-white to-pink-50 p-6 rounded-2xl shadow-lg border-2 border-pink-200 hover:shadow-xl transition-all duration-300"
              data-scroll-animation="slide-up"
              data-stagger-item
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                For restaurant shoots, kindly note that patronizing the
                establishment is expected for a smooth and comfortable session.{" "}
                <br />
                N.B Minimum spend in a resturant is at 25k per head.
              </p>
            </div>

            {/* Policy 10 */}
            <div
              className="bg-gradient-to-b from-white to-pink-50 p-6 rounded-2xl shadow-lg border-2 border-pink-200 hover:shadow-xl transition-all duration-300"
              data-scroll-animation="slide-up"
              data-stagger-item
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                Kindly refrain from coming with extra individuals for resturant
                shoots.
              </p>
            </div>

            {/* Policy 11 */}
            <div
              className="bg-gradient-to-b from-white to-pink-50 p-6 rounded-2xl shadow-lg border-2 border-pink-200 hover:shadow-xl transition-all duration-300"
              data-scroll-animation="slide-up"
              data-stagger-item
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                We do not work on sundays and we only work within Lekki, VI and
                Ikoyi.
              </p>
            </div>

            {/* Policy 12 */}
            <div
              className="bg-gradient-to-b from-white to-pink-50 p-6 rounded-2xl shadow-lg border-2 border-pink-200 hover:shadow-xl transition-all duration-300"
              data-scroll-animation="slide-up"
              data-stagger-item
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                Extra charges for working past 9pm is 15k.
              </p>
            </div>
          </div>
        </div>{" "}
        <br />
        <div>
          <p className="text-center text-rose-400 text-xl mb-16 italic">
            Please read through before making payment, We appreciate your
            patronage and cooperation.
          </p>
        </div>
      </div>
    </section>
  );
}
