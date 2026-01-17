import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Brand & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">KeyBoardHub</h2>
          <p className="text-gray-400">
            Premium mechanical keyboards for gamers, developers, and creators. 
            Join our community and never miss a drop.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#hero" className="hover:text-indigo-400 transition">Home</a>
            </li>
            <li>
              <a href="items" className="hover:text-indigo-400 transition">Keyboards</a>
            </li>
            {/* <li>
              <a href="#products" className="hover:text-indigo-400 transition">Products</a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-indigo-400 transition">Reviews</a>
            </li>
            <li>
              <a href="#blog" className="hover:text-indigo-400 transition">Blog</a>
            </li> */}
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 mb-6 text-lg">
            <a href="#" className="hover:text-blue-600 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-700 transition"><FaLinkedinIn /></a>
          </div>

          <h3 className="font-semibold mb-2">Subscribe</h3>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-full bg-gray-200 text-black focus:outline-none"
            />
            <button className="px-4 py-2 rounded-r-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      <p className="text-center text-gray-500 text-sm">
        &copy; 2026 KeyZone. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
