import { motion } from "framer-motion";
import { Brush, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Overview Section */}
      <section className="px-8 md:px-20 py-20 bg-gray-900/30">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-5xl font-bold mb-4">What I Do</h3>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I specialize in creating compelling visual experiences that help
            brands connect with their audience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center p-8"
          >
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brush size={40} className="text-red-500" />
            </div>
            <h4 className="text-xl font-semibold mb-4">Brand Identity</h4>
            <p className="text-gray-400 mb-6">
              Creating memorable logos, brand guidelines, and visual identities
              that stand out.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors duration-300"
            >
              Learn more <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-8"
          >
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brush size={40} className="text-red-500" />
            </div>
            <h4 className="text-xl font-semibold mb-4">Digital Design</h4>
            <p className="text-gray-400 mb-6">
              Modern digital graphics for web, social media, and digital
              marketing campaigns.
            </p>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors duration-300"
            >
              View work <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center p-8"
          >
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brush size={40} className="text-red-500" />
            </div>
            <h4 className="text-xl font-semibold mb-4">Print Design</h4>
            <p className="text-gray-400 mb-6">
              High-quality print materials including business cards, brochures,
              and packaging.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors duration-300"
            >
              Explore services <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;
