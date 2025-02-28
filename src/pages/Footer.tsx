 
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul>
              <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-gray-400">Terms & Conditions</a></li>
              <li><a href="/faq" className="hover:text-gray-400">FAQ</a></li>
              <li><a href="/returns" className="hover:text-gray-400">Returns & Exchanges</a></li>
            </ul>
          </div>

          {/* Shop by Category */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Shop</h5>
            <ul>
              <li><a href="/mens" className="hover:text-gray-400">Men's Apparel</a></li>
              <li><a href="/womens" className="hover:text-gray-400">Women's Apparel</a></li>
              <li><a href="/shoes" className="hover:text-gray-400">Shoes</a></li>
              <li><a href="/accessories" className="hover:text-gray-400">Accessories</a></li>
              <li><a href="/electronics" className="hover:text-gray-400">Electronics</a></li>
              <li><a href="/sale" className="hover:text-gray-400">Sale</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Customer Service</h5>
            <ul>
              <li><a href="/shipping" className="hover:text-gray-400">Shipping Information</a></li>
              <li><a href="/track-order" className="hover:text-gray-400">Track Your Order</a></li>
              <li><a href="/order-history" className="hover:text-gray-400">Order History</a></li>
              <li><a href="/gift-cards" className="hover:text-gray-400">Gift Cards</a></li>
              <li><a href="/size-guide" className="hover:text-gray-400">Size Guide</a></li>
              <li><a href="/payment" className="hover:text-gray-400">Payment Methods</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Stay Connected</h5>
            <ul className="flex space-x-4">
              <li>
                <a href="https://facebook.com" className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">© 2025 [Store Name]. All Rights Reserved.</p>
          <p className="text-sm text-gray-400 mt-2">Powered by [Platform Name]</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
