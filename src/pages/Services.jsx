import { motion } from "framer-motion";
import { Brush, Printer, Monitor, PenTool, Palette, Camera, Globe, Zap } from "lucide-react";

function Services() {
  const services = [
    {
      icon: Brush,
      title: "Brand Identity",
      description: "Create memorable brands that stand out in the market",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
      price: "Starting from $500",
      delivery: "2-3 weeks"
    },
    {
      icon: Printer,
      title: "Print Design",
      description: "High-quality creative print materials",
      features: ["Business Cards", "Brochures", "Packaging", "Posters"],
      price: "Starting from $300",
      delivery: "1-2 weeks"
    },
    {
      icon: Monitor,
      title: "Digital Graphics",
      description: "Modern digital visuals for web and social media",
      features: ["Social Media", "Web Graphics", "Digital Ads", "Email Marketing"],
      price: "Starting from $200",
      delivery: "1 week"
    },
    {
      icon: PenTool,
      title: "Creative Graphics",
      description: "Attract and engage your audience",
      features: ["Illustrations", "Infographics", "Custom Graphics", "Icon Sets"],
      price: "Starting from $150",
      delivery: "3-5 days"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions",
      features: ["Wireframing", "Prototyping", "User Research", "Interface Design"],
      price: "Starting from $800",
      delivery: "3-4 weeks"
    },
    {
      icon: Camera,
      title: "Photo Editing",
      description: "Professional image enhancement and manipulation",
      features: ["Retouching", "Color Correction", "Background Removal", "Photo Manipulation"],
      price: "Starting from $100",
      delivery: "2-3 days"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Understanding your brand, goals, and target audience"
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Creating initial concepts and design directions"
    },
    {
      step: "03",
      title: "Design Creation",
      description: "Developing the final design with your feedback"
    },
    {
      step: "04",
      title: "Refinement",
      description: "Perfecting the design based on your input"
    },
    {
      step: "05",
      title: "Delivery",
      description: "Providing final files and brand guidelines"
    }
  ];

  return (
    <>
      {/* Header */}
      <section className="px-8 md:px-20 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-6">Services</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive design solutions to help your business grow and succeed. 
            From brand identity to digital graphics, I provide professional design services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="p-8 rounded-3xl bg-gray-800/50 border border-gray-700 card-hover text-center group"
            >
              <service.icon
                className="mx-auto mb-6 text-red-500 group-hover:text-red-400 transition-colors duration-300"
                size={48}
              />
              <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
              <ul className="text-sm text-gray-500 space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-center gap-2"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-red-400 font-semibold mb-2">{service.price}</p>
                <p className="text-gray-500 text-sm">Delivery: {service.delivery}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Design Process */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Design Process</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A proven methodology that ensures quality results and client satisfaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto mb-20">
          {process.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">{step.step}</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Me */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Me?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience, creativity, and dedication to delivering exceptional results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-red-500" size={32} />
            </div>
            <h4 className="text-xl font-semibold mb-3">Fast Delivery</h4>
            <p className="text-gray-400">
              Quick turnaround times without compromising on quality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="text-red-500" size={32} />
            </div>
            <h4 className="text-xl font-semibold mb-3">Global Experience</h4>
            <p className="text-gray-400">
              Worked with clients from various industries worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brush className="text-red-500" size={32} />
            </div>
            <h4 className="text-xl font-semibold mb-3">Creative Excellence</h4>
            <p className="text-gray-400">
              Award-winning designs that exceed expectations.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Services;
