import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!name) newErrors.name = "Nama tidak boleh kosong.";
    if (!email) {
      newErrors.email = "Email tidak boleh kosong.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email tidak valid.";
    }
    if (!message) newErrors.message = "Pesan tidak boleh kosong.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true jika tidak ada error
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate email sending via mailto link
      const mailtoLink = `mailto:nova07pplg@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(
        name
      )}%0AEmail:%20${encodeURIComponent(
        email
      )}%0AMessage:%20${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;

      // Reset fields
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});

      // Show toast notification
      toast.success("Pesan telah berhasil dikirim!");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Hubungi Kami
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700" htmlFor="name">
                Nama
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={`mt-1 block w-full p-3 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`mt-1 block w-full p-3 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="message">
                Pesan
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className={`mt-1 block w-full p-3 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full inline-flex justify-center px-6 py-3 text-base font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 shadow-lg transition-all duration-200 hover:scale-105"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={true}
        />
      </div>
    </section>
  );
};

export default Contact;
