import { motion } from "framer-motion";
import { Instagram, Linkedin, Github, Twitter, Heart } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="px-8 md:px-20 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Ajinkya Pandit
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming ideas into stunning visual experiences. Let's create
              something extraordinary together.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/25"
              >
                <Instagram size={20} className="text-white" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
              >
                <Linkedin size={20} className="text-white" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-800 hover:bg-gray-900 border border-gray-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-gray-500/25"
              >
                <Github size={20} className="text-white" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-sky-500 hover:bg-sky-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/25"
              >
                <Twitter size={20} className="text-white" />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/work"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Brand Identity</li>
              <li className="text-gray-400">Print Design</li>
              <li className="text-gray-400">Digital Graphics</li>
              <li className="text-gray-400">UI/UX Design</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Ajinkya Pandit. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>by Ajinkya Pandit</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
