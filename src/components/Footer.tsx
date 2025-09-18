import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Elixir Pharma Logo"
                className="h-12 md:h-14 lg:h-12 object-contain"
              />
            </Link>
            <p className="text-gray-300 text-sm">
              Enriching health. Empowering lives through innovative skincare and
              wellness solutions, backed by science.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              {/* Address */}
              <li className="flex items-center">
                <div className="bg-gray-900 w-8 h-8 flex items-center justify-center rounded-lg mr-3 flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <p className="text-white text-sm">
                  Tycoon Center, Unit 902, Pearl Drive,
                  <br />
                  San Antonio, Pasig City
                  <br />
                  Philippines
                </p>
              </li>

              {/* Phone */}
              <li className="flex items-center">
                <div className="bg-gray-900 w-8 h-8 flex items-center justify-center rounded-lg mr-3 flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a
                  href="tel:+63231048859"
                  aria-label="Call Support"
                  className="text-white hover:underline text-sm"
                >
                  02-31048859 (Support)
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center">
                <div className="bg-gray-900 w-8 h-8 flex items-center justify-center rounded-lg mr-3 flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a
                  href="mailto:admin@elixirpharma.ph"
                  aria-label="Send email to admin@elixirpharma.ph"
                  className="text-white hover:underline text-sm"
                >
                  admin@elixirpharma.ph
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to receive updates on new products and health tips.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-gray-900 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 Elixir Pharma Inc. All rights reserved.
          </p>
          {/* <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <Phone className="w-4 h-4" />
              <span className="text-sm">02-31048859</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail className="w-4 h-4" />
              <span className="text-sm">admin@elixirpharma.ph</span>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
