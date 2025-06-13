import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-backgroundGrey mt-auto">
      <div className="mx-auto px-4 sm:px-6 lg:px-[80px] pt-16 md:pt-36 pb-12 font-montserrat">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
          <div className="w-full md:w-auto">
            {/* Logo and Social Media */}
            <div className="space-y-4">
              <div className="flex items-center space-x-1">
                <img src='logo2.png' alt='footer-logo' className="h-10" />
              </div>
              <hr className="border-gray-300" />

              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Social media</h3>
                <div className="flex space-x-3">
                  <a href="#" className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                    <Facebook className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                    <Twitter className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                    <Youtube className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full md:w-auto flex flex-col sm:flex-row justify-between gap-8 sm:gap-16'>
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Home</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Browse Listings</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Post a Property</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">How It works</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Safety Tips</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Blogs</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="w-full sm:w-64">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Newsletter Sign-Up</h3>
              <p className="text-sm text-gray-600 mb-4">
                Stay updated on new listings, tips, and housing deals.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-orange-500 text-white rounded-r-md hover:bg-orange-600 text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center md:text-left">© 2025 Staud. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;