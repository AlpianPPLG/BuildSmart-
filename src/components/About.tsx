import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-purple-100/50 blur-3xl" />
        <div className="absolute bottom-40 -left-32 w-96 h-96 rounded-full bg-pink-100/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left lg:max-w-2xl">
            <div className="space-y-6">
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                Tentang Kami
              </h2>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Kami adalah tim yang berdedikasi untuk membantu Anda mencapai
                kesuksesan. Dengan inovasi, pengalaman, dan komitmen, kami
                menawarkan solusi terbaik yang dirancang untuk kebutuhan Anda.
              </p>

              {/* Features */}
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <svg
                    className="w-6 h-6 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Inovasi dalam setiap langkah
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <svg
                    className="w-6 h-6 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Keahlian tim yang terpercaya
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <svg
                    className="w-6 h-6 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Fokus pada kebutuhan Anda
                  </span>
                </li>
              </ul>

              {/* CTA Button */}
              <div>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 text-base font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 shadow-lg shadow-pink-500/25 transition-all duration-200 hover:scale-105"
                >
                  Pelajari Lebih Lanjut
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full lg:order-first">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                <img
                  className="w-full h-auto"
                  src="/img/image1.jpg"
                  alt="Our mission"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
