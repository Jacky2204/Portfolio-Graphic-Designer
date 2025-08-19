import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Github,
  Twitter,
  Send,
  Clock,
  Globe,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    description: "",
    budget: "",
    timeline: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7387970777",
      description: "Call me directly for urgent inquiries",
    },
    {
      icon: Mail,
      title: "Email",
      value: "hello@ajinkyapandit.com",
      description: "Send me a detailed message",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Mumbai, India",
      description: "Available for local and remote work",
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const workingHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM IST" },
    { day: "Saturday", time: "10:00 AM - 2:00 PM IST" },
    { day: "Sunday", time: "Closed" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call

      // Check if required fields are filled
      if (!formData.firstName || !formData.email || !formData.description) {
        throw new Error("Please fill in all required fields");
      }

      // Simulate successful submission
      setSubmitStatus("success");

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          projectType: "",
          description: "",
          budget: "",
          timeline: "",
        });
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.firstName && formData.email && formData.description;

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
          <h1 className="text-6xl font-bold mb-6">Let's Work Together</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your creative vision to life? Get in touch and let's
            discuss your project. I'm here to help you create something
            extraordinary.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700 text-center"
            >
              <method.icon className="mx-auto mb-6 text-red-500" size={48} />
              <h4 className="text-xl font-semibold mb-4">{method.title}</h4>
              <p className="text-red-400 font-semibold text-lg mb-2">
                {method.value}
              </p>
              <p className="text-gray-400">{method.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors duration-300"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors duration-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors duration-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select a project type</option>
                  <option value="branding">Brand Identity</option>
                  <option value="print">Print Design</option>
                  <option value="digital">Digital Graphics</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Project Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select budget range</option>
                  <option value="under-500">Under $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-2500">$1,000 - $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="over-5000">Over $5,000</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-2-weeks">1-2 weeks</option>
                  <option value="1-month">1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              {/* Submit Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/40 rounded-lg flex items-center gap-3 text-green-400"
                >
                  <CheckCircle size={20} />
                  <span>
                    Message sent successfully! I'll get back to you within 24
                    hours.
                  </span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/40 rounded-lg flex items-center gap-3 text-red-400"
                >
                  <AlertCircle size={20} />
                  <span>Please fill in all required fields and try again.</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting || !isFormValid}
                whileHover={isFormValid ? { scale: 1.02 } : {}}
                whileTap={isFormValid ? { scale: 0.98 } : {}}
                className={`w-full py-4 text-lg font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting || !isFormValid
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Quick Response */}
            <div className="p-8 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl border border-red-500/20">
              <h3 className="text-2xl font-bold mb-4">Quick Response</h3>
              <p className="text-gray-300 mb-4">
                I typically respond to all inquiries within 24 hours during
                business days. For urgent projects, feel free to call me
                directly.
              </p>
              <div className="flex items-center gap-2 text-red-400">
                <Clock size={20} />
                <span className="font-semibold">Response time: 24 hours</span>
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Working Hours</h3>
              <div className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-300">{schedule.day}</span>
                    <span className="text-red-400 font-semibold">
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <p className="text-gray-300 mb-6">
                Follow me on social media to see my latest work and design
                insights.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl ${
                      social.label === "Instagram"
                        ? "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600"
                        : social.label === "LinkedIn"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : social.label === "GitHub"
                        ? "bg-gray-800 hover:bg-gray-900 border border-gray-600"
                        : social.label === "Twitter"
                        ? "bg-sky-500 hover:bg-sky-600"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                  >
                    <social.icon
                      size={24}
                      className="text-white group-hover:text-white transition-colors duration-300"
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Location Info */}
            <div className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">
                Location & Availability
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-red-500" size={20} />
                  <span className="text-gray-300">Mumbai, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="text-red-500" size={20} />
                  <span className="text-gray-300">
                    Available for remote work worldwide
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-red-500" size={20} />
                  <span className="text-gray-300">IST Timezone (UTC+5:30)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Contact;
