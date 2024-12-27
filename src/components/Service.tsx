import React, { useState } from "react";

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
  category: string;
}

const services: Service[] = [
  {
    title: "Desain Modern",
    description:
      "Kami menawarkan desain yang estetis dan modern untuk memberikan pengalaman terbaik bagi pengguna.",
    icon: (
      <svg
        className="w-12 h-12 text-indigo-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h11M9 21V3m0 18l-7-7m7 7l7-7"
        />
      </svg>
    ),
    category: "Desain",
  },
  {
    title: "Desain Grafis",
    description:
      "Solusi desain grafis untuk branding dan pemasaran yang efektif.",
    icon: (
      <svg
        className="w-12 h-12 text-indigo-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-3-3v6m7-9l-3 3m0 0l3 3m-3-3H3"
        />
      </svg>
    ),
    category: "Desain",
  },
  {
    title: "Kecepatan & Performa",
    description:
      "Aplikasi kami dirancang untuk bekerja dengan cepat dan efisien, meningkatkan produktivitas Anda.",
    icon: (
      <svg
        className="w-12 h-12 text-indigo-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
      </svg>
    ),
    category: "Performa",
  },
  {
    title: "Optimasi Kecepatan",
    description:
      "Optimasi kecepatan aplikasi untuk pengalaman pengguna yang lebih baik.",
    icon: (
      <svg
        className="w-12 h-12 text-indigo-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 14l2 2 4-4m-6 0L8 10l-2 2"
        />
      </svg>
    ),
    category: "Performa",
  },
  {
    title: "Fleksibilitas",
    description:
      "Layanan kami mendukung berbagai jenis kebutuhan, memastikan fleksibilitas untuk semua pengguna.",
    icon: (
      <svg
        className="w-12 h-12 text-indigo-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 19V6l-2 2m0 0l-2-2m2 2v11"
        />
      </svg>
    ),
    category: "Fleksibilitas",
  },
  {
    title: "Kustomisasi Layanan",
    description:
      "Kami menyediakan layanan yang dapat disesuaikan dengan kebutuhan spesifik Anda.",
    icon: (
      <svg
        className="w-12 h-12 text-indigo-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v8l4 4" />
      </svg>
    ),
    category: "Fleksibilitas",
  },
  {
    title: "Desain UI/UX",
    description:
      "Desain antarmuka yang intuitif dan pengalaman pengguna yang menyenangkan.",
    icon: (
      <svg
        className="w-12 h-12 text-indigo-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h11M9 21V3m0 18l-7-7m7 7l7-7"
        />
      </svg>
    ),
    category: "Desain",
  },
  {
    title: "Analisis Performa",
    description: "Analisis mendalam untuk meningkatkan performa aplikasi Anda.",
    icon: (
      <svg
        className="w-12 h-12 text-indigo-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
      </svg>
    ),
    category: "Performa",
  },
  {
    title: "Integrasi Sistem",
    description:
      "Integrasi sistem yang mulus untuk meningkatkan efisiensi operasional.",
    icon: (
      <svg
        className="w-12 h-12 text-indigo-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 19V6l-2 2m0 0l-2-2m2 2v11"
        />
      </svg>
    ),
    category: "Fleksibilitas",
  },
];

const categories = Array.from(
  new Set(services.map((service) => service.category))
);

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filteredServices = selectedCategory
    ? services.filter((service) => service.category === selectedCategory)
    : services;

  return (
    <section
      id="services"
      className="py-10 px-4 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Layanan Kami
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Temukan layanan terbaik yang kami tawarkan untuk membantu Anda
            mencapai tujuan Anda.
          </p>
        </div>

        {/* Categories */}
        <div className="text-center mb-10">
          <span className="font-semibold text-gray-800">Filter:</span>
          <div className="flex flex-wrap justify-center mt-2">
            <button
              className={`px-4 py-2 mx-2 my-1 rounded-lg ${
                !selectedCategory
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setSelectedCategory("")}
            >
              Semua
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 mx-2 my-1 rounded-lg ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-indigo-600 hover:underline"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
