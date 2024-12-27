import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden pt-32"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-indigo-100/50 blur-3xl" />
        <div className="absolute top-40 -left-32 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left lg:max-w-2xl">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-600/20 animate-fade-in">
                ✨ Platform Terbaik untuk Bisnis Anda
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                <span className="block text-gray-900">Selamat datang di</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 mt-2">
                  Platform Kami
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Kami menyediakan solusi terbaik untuk kebutuhan Anda. Dengan
                teknologi terkini dan tim ahli, kami siap membantu Anda mencapai
                tujuan Anda.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-105"
                >
                  Mulai Sekarang
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
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 ring-1 ring-gray-200 hover:ring-gray-300 transition-all duration-200 hover:scale-105"
                >
                  Pelajari Lebih Lanjut
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">
                  Dipercaya oleh perusahaan terkemuka:
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt="Amazon"
                  />
                  <img
                    className="h-8 w-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                    alt="Microsoft"
                  />
                  <img
                    className="h-8 w-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt="Facebook"
                  />
                  <img
                    className="h-8 w-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                    alt="LinkedIn"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                <img
                  className="w-full h-auto"
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                  alt="Team working together"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 inset-0 transform translate-x-4 translate-y-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600/20 to-blue-500/20 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
