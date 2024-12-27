import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-700/20 py-10 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-10 md:items-start lg:flex-nowrap">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <a href="/">
              <img
                alt="Logo"
                className="h-12"
                src="https://www.svgrepo.com/show/340614/logo-slack.svg"
              />
            </a>
            <p className="my-4 text-gray-700">
              Welcome to YourService.io, where innovation meets reliability. Our
              mission is to empower developers and businesses with cutting-edge
              tools and services to seamlessly build, deploy, and scale robust
              applications. At YourService.io, we prioritize performance,
              scalability, and security, ensuring that your full-stack
              applications meet the highest standards.
            </p>
          </div>
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-3 sm:gap-10 md:grid-cols-4">
              <div>
                <h3 className="font-bold uppercase text-gray-700">Pages</h3>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li>
                    <a href="/#features">Features</a>
                  </li>
                  <li>
                    <a href="/pricing">Pricing</a>
                  </li>
                  <li>
                    <a href="/#faq">FAQ</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold uppercase text-gray-700">Support</h3>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li>
                    <a href="mailto:support@yourservice.io">Request Feedback</a>
                  </li>
                  <li>
                    <a href="mailto:support@yourservice.io">Submit Bugs</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold uppercase text-gray-700">Legal</h3>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold uppercase text-gray-700">Contact</h3>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <a
                      href="mailto:hello@yourservice.io"
                      className="inline-flex items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-mail"
                      >
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                        <path d="M3 7l9 6l9 -6"></path>
                      </svg>
                      hello@yourservice.io
                    </a>
                  </li>
                  <li className="flex w-auto items-center justify-start gap-2">
                    <a
                      href="https://twitter.com/yourserviceio"
                      className="inline-flex items-center gap-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-brand-twitter"
                      >
                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
                      </svg>
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-between text-sm text-gray-700">
          <div>© 2024 YourService.io All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
