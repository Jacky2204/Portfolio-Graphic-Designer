import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Professional, timely, and creative! Delivered outstanding results that exceeded my expectations!",
      author: "John Doe",
      position: "CEO, TechStart",
      rating: 5,
      company: "TechStart Inc.",
      project: "Brand Identity Design",
    },
    {
      quote:
        "The design work was exceptional and helped us increase our brand recognition significantly.",
      author: "Sarah Johnson",
      position: "Marketing Director, InnovateCorp",
      rating: 5,
      company: "InnovateCorp",
      project: "Marketing Campaign",
    },
    {
      quote:
        "Working with Ajinkya was a game-changer for our brand. Highly recommended!",
      author: "Mike Chen",
      position: "Founder, Creative Solutions",
      rating: 5,
      company: "Creative Solutions",
      project: "Complete Brand Overhaul",
    },
    {
      quote:
        "Ajinkya's attention to detail and creative vision transformed our packaging design completely.",
      author: "Emily Rodriguez",
      position: "Product Manager, EcoProducts",
      rating: 5,
      company: "EcoProducts",
      project: "Product Packaging Design",
    },
    {
      quote:
        "Fast delivery, excellent communication, and stunning results. Couldn't ask for more!",
      author: "David Kim",
      position: "Startup Founder, NextGen",
      rating: 5,
      company: "NextGen",
      project: "Logo & Brand Guidelines",
    },
    {
      quote:
        "The social media graphics Ajinkya created helped us double our engagement rates.",
      author: "Lisa Thompson",
      position: "Social Media Manager, RetailPlus",
      rating: 5,
      company: "RetailPlus",
      project: "Social Media Campaign",
    },
  ];

  const stats = [
    { number: "150+", label: "Happy Clients" },
    { number: "4.9", label: "Average Rating" },
    { number: "200+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
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
          <h1 className="text-6xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear what my clients have to say about working together. These
            testimonials represent the trust and satisfaction that comes from
            delivering exceptional design results.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700"
            >
              <div className="text-4xl font-bold text-red-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700 h-full card-hover">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-500 fill-current"
                      size={20}
                    />
                  ))}
                </div>

                <div className="mb-6">
                  <Quote className="text-red-500/30 mb-4" size={32} />
                  <p className="text-lg text-gray-300 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-red-400 text-sm">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500">
                    <div className="font-medium text-gray-400">
                      {testimonial.company}
                    </div>
                    <div>Project: {testimonial.project}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold mb-6">
            Ready to Join These Happy Clients?
          </h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing for your brand. Get
            in touch to start your project today.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              Start Your Project
            </a>
            <a
              href="/work"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Testimonials;
