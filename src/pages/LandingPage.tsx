import React from 'react';
import { Link } from 'react-router-dom';
import landingImage from '../assets/pix.jpg'; // Import the image
import Sonyimg from '../assets/company-logo/sony.webp';
import paypayimg from '../assets/company-logo/paypal.webp';
import danoeimg from '../assets/company-logo/danoe.webp';

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Navigation Bar */}
       

      {/* Hero Section */}
      <div
        className="flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${landingImage})`, // Use the imported image
        }}
      >
        <div className="text-center p-10 bg-white bg-opacity-50 rounded-lg shadow-lg max-w-lg transform transition-transform hover:scale-105">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4 text-shadow animate__animated animate__fadeIn">
            Welcome to Our Store!
          </h1>
          <p className="text-lg text-gray-700 mb-6 font-medium sm:text-base">
            Explore our exclusive collection of products. Start shopping now and enjoy amazing deals!
          </p>
          <Link
            to="/products"
            className="bg-blue-500 text-white px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-700 sm:px-6 sm:py-3"
            aria-label="Shop Now"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Promo Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          Limited Time Offer!
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Get 20% off your first purchase when you sign up for our newsletter.
        </p>
        <Link
          to="/signup"
          className="bg-green-500 text-white px-10 py-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
          Sign Up Now
        </Link>
      </section>

      {/* Trusted by Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          Trusted by Leading Brands
        </h2>
        <div className="flex justify-center gap-8 flex-wrap">
          <img
            src={Sonyimg}
            alt="Sony"
            className="h-12 max-w-full object-contain transition-transform transform hover:scale-110"
          />
          <img
            src={paypayimg}
            alt="PayPay"
            className="h-12 max-w-full object-contain transition-transform transform hover:scale-110"
          />
          <img
            src={danoeimg}
            alt="Danoe"
            className="h-12 max-w-full object-contain transition-transform transform hover:scale-110"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
          What Our Customers Are Saying
        </h2>
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg text-gray-600 mb-4">"Great quality products and fast shipping! Will definitely shop here again."</p>
            <p className="font-bold text-gray-800">John D.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg text-gray-600 mb-4">"A fantastic shopping experience, I love the variety of items."</p>
            <p className="font-bold text-gray-800">Sarah W.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg text-gray-600 mb-4">"Amazing customer service and a great selection of products!"</p>
            <p className="font-bold text-gray-800">Michael T.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <Link to="/" className="text-3xl font-extrabold text-blue-500 hover:text-blue-300">
              OurStore
            </Link>
          </div>
          <div className="flex justify-center gap-8 mb-6">
            <Link to="/about" className="hover:text-blue-400">About</Link>
            <Link to="/contact" className="hover:text-blue-400">Contact</Link>
            <Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-400">Terms of Service</Link>
          </div>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} OurStore. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
