import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "../components/ContactForm";
import Card from "../components/Card";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or need personalized
            recommendations? We're here to help you on your health and wellness
            journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Main Contact */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">admin@elixirpharma.ph</p>
                    {/* <p className="text-gray-600">sales@elixirpharma.ph</p> */}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    {/* <p className="text-gray-600">0908 -884-0589</p> */}
                    <p className="text-gray-600">02-31048859(Support)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      Tycoon Center, Unit 902, Pearl Drive,
                      <br />
                      San Antonio, Pasig City
                      <br />
                      Philippines
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM PHT
                      <br />
                      Saturday: Closed
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Office Locations */}
            {/* <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Our Locations</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-700 pl-4">
                  <h3 className="font-semibold text-gray-900">Headquarters</h3>
                  <p className="text-gray-600">Boston, MA</p>
                  <p className="text-sm text-gray-500">Research & Development</p>
                </div>
                <div className="border-l-4 border-teal-600 pl-4">
                  <h3 className="font-semibold text-gray-900">Manufacturing</h3>
                  <p className="text-gray-600">Chicago, IL</p>
                  <p className="text-sm text-gray-500">Production Facility</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-gray-900">West Coast Office</h3>
                  <p className="text-gray-600">San Francisco, CA</p>
                  <p className="text-sm text-gray-500">Sales & Marketing</p>
                </div>
              </div>
            </Card> */}

            {/* Emergency Contact */}
            {/* <Card className="p-6 bg-red-50 border-red-200">
              <h2 className="text-xl font-bold text-red-800 mb-4">Emergency Contact</h2>
              <p className="text-red-700 mb-2">
                For product-related emergencies or adverse reactions:
              </p>
              <p className="font-semibold text-red-800">24/7 Hotline: +1 (555) 911-HELP</p>
              <p className="text-sm text-red-600 mt-2">
                Available 24 hours a day, 7 days a week for urgent medical concerns.
              </p>
            </Card> */}
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Map Section */}
        {/* <div className="mt-12">
          <Card className="overflow-hidden">
            <div className="p-6 bg-blue-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Visit Our Headquarters</h2>
              <p>123 Innovation Drive, Boston, MA 02101</p>
            </div>
            <div className="h-96 bg-gray-300 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p className="text-lg font-semibold">Interactive Map</p>
                <p className="text-sm">Google Maps integration would be implemented here</p>
                <p className="text-xs mt-2">
                  Latitude: 42.3601° N, Longitude: 71.0589° W
                </p>
              </div>
            </div>
          </Card>
        </div> */}

        {/* FAQ Section */}
        <div className="mt-12">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How long does shipping take?
                </h3>
                <p className="text-gray-600">
                  Standard shipping takes 3-5 business days. Express shipping
                  options are available for 1-2 business day delivery.
                </p>
              </div>
              {/* <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you offer international shipping?
                </h3>
                <p className="text-gray-600">
                  Yes, we ship to most countries worldwide. International shipping times and costs vary by destination.
                </p>
              </div> */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What is your return policy?
                </h3>
                <p className="text-gray-600">
                  Products can be returned within three months before or after
                  the expiry date. Please contact our support team for
                  assistance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Are your products FDA approved?
                </h3>
                <p className="text-gray-600">
                  Our facilities are FDA registered and we follow all FDA
                  guidelines for cosmetic and supplement manufacturing.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
