import { motion } from "framer-motion";
import { Card } from "../components/ui/card";
import {
  Brush,
  ArrowRight,
  ExternalLink,
  X,
  Play,
  Calendar,
  Tag,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Branding",
      description: "Complete brand identity for tech startup",
      image: "/brand-identity.jpg",
      tags: ["Logo Design", "Brand Guidelines", "Visual Identity"],
      year: "2024",
      fullDescription:
        "A comprehensive brand identity project for TechStart, a revolutionary fintech startup. This project included logo design, brand guidelines, color palette, typography system, and complete visual identity guidelines. The design focuses on trust, innovation, and accessibility, using a modern geometric approach with a carefully selected color scheme that conveys both professionalism and forward-thinking.",
      client: "TechStart Inc.",
      duration: "3 weeks",
      tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
      deliverables: [
        "Primary Logo",
        "Secondary Logos",
        "Brand Guidelines",
        "Business Cards",
        "Letterhead",
        "Social Media Templates",
      ],
      challenge:
        "Create a brand that stands out in the crowded fintech space while maintaining trust and credibility.",
      solution:
        "Developed a distinctive geometric logo with a modern color palette and comprehensive brand system that scales across all touchpoints.",
    },
    {
      id: 2,
      title: "Marketing Campaign",
      category: "Digital Marketing",
      description: "Social media campaign for retail brand",
      image: "/marketing-campaign.jpg",
      tags: ["Social Media", "Digital Ads", "Content Creation"],
      year: "2024",
      fullDescription:
        "A comprehensive digital marketing campaign for RetailPlus, including social media graphics, digital advertisements, and content creation. The campaign focused on seasonal promotions and brand awareness, resulting in significant engagement increases and sales growth.",
      client: "RetailPlus",
      duration: "6 weeks",
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Canva Pro"],
      deliverables: [
        "Social Media Graphics",
        "Digital Ads",
        "Email Templates",
        "Banner Designs",
        "Content Calendar",
      ],
      challenge:
        "Create engaging content that drives both brand awareness and sales conversions.",
      solution:
        "Developed a cohesive visual strategy with consistent branding and compelling call-to-actions across all platforms.",
    },
    {
      id: 3,
      title: "Print Design Collection",
      category: "Print Design",
      description: "Brochures, business cards, and packaging",
      image: "/print-design.jpg",
      tags: ["Print", "Packaging", "Marketing Materials"],
      year: "2023",
      fullDescription:
        "A complete print design collection for EcoProducts, including product packaging, marketing brochures, and business materials. The design emphasizes sustainability and eco-friendliness while maintaining strong visual appeal.",
      client: "EcoProducts",
      duration: "4 weeks",
      tools: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"],
      deliverables: [
        "Product Packaging",
        "Marketing Brochures",
        "Business Cards",
        "Letterhead",
        "Product Catalogs",
      ],
      challenge:
        "Design packaging that reflects eco-friendly values while being commercially appealing.",
      solution:
        "Used sustainable design principles with natural color palettes and organic shapes that communicate environmental responsibility.",
    },
    {
      id: 4,
      title: "Web Graphics & UI",
      category: "Digital Design",
      description: "Website graphics and user interface elements",
      image: "/web-graphics.jpg",
      tags: ["UI/UX", "Web Design", "Digital Graphics"],
      year: "2023",
      fullDescription:
        "Modern web graphics and UI elements for NextGen, a technology consulting company. The project included website graphics, user interface components, and digital assets that enhance user experience and brand consistency.",
      client: "NextGen",
      duration: "5 weeks",
      tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
      deliverables: [
        "Website Graphics",
        "UI Components",
        "Icon Sets",
        "Digital Assets",
        "Style Guide",
      ],
      challenge:
        "Create intuitive and visually appealing UI elements that improve user experience.",
      solution:
        "Developed a clean, modern design system with consistent visual language and intuitive navigation elements.",
    },
    {
      id: 5,
      title: "Product Packaging",
      category: "Packaging",
      description: "Creative packaging design for consumer products",
      image: "/packaging.jpg",
      tags: ["Packaging", "Product Design", "Branding"],
      year: "2023",
      fullDescription:
        "Innovative packaging design for Creative Solutions' premium product line. The packaging combines functionality with aesthetic appeal, using sustainable materials and modern design principles to create memorable unboxing experiences.",
      client: "Creative Solutions",
      duration: "4 weeks",
      tools: ["Adobe Illustrator", "Adobe InDesign", "3D Mockup Tools"],
      deliverables: [
        "Primary Packaging",
        "Secondary Packaging",
        "Display Materials",
        "Installation Guide",
      ],
      challenge:
        "Design packaging that protects products while creating an engaging unboxing experience.",
      solution:
        "Created layered packaging with premium materials and thoughtful design details that enhance product perception.",
    },
    {
      id: 6,
      title: "Event Branding",
      category: "Event Design",
      description: "Complete branding for major industry conference",
      image: "/event-branding.jpg",
      tags: ["Event Design", "Branding", "Marketing"],
      year: "2022",
      fullDescription:
        "Complete event branding for DesignCon 2022, a major design industry conference. The project included logo design, promotional materials, stage design, and all event collateral that created a cohesive and memorable brand experience.",
      client: "DesignCon",
      duration: "8 weeks",
      tools: ["Adobe Creative Suite", "Sketch", "Figma"],
      deliverables: [
        "Event Logo",
        "Promotional Materials",
        "Stage Design",
        "Digital Assets",
        "Print Collateral",
      ],
      challenge:
        "Create a memorable brand experience that unifies all aspects of the conference.",
      solution:
        "Developed a dynamic visual system that adapts across all touchpoints while maintaining strong brand recognition.",
    },
  ];

  const categories = [
    "All",
    "Branding",
    "Digital Marketing",
    "Print Design",
    "Digital Design",
    "Packaging",
    "Event Design",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleViewDemo = (project) => {
    // Simulate opening a live demo
    alert(
      `Opening live demo for: ${project.title}\n\nThis would typically open the actual project demo in a new tab or show an interactive preview.`
    );
  };

  const handleDownloadCaseStudy = (project) => {
    // Simulate downloading a case study
    alert(
      `Downloading case study for: ${project.title}\n\nThis would typically download a PDF case study document.`
    );
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    // Add smooth scroll to projects section
    const projectsSection = document.querySelector(".projects-grid");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <h1 className="text-6xl font-bold mb-6">My Portfolio</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my latest creative projects and see how I bring ideas to
            life through design. Each project represents a unique challenge and
            creative solution.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-red-600 text-white shadow-lg shadow-red-500/25"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 projects-grid"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden rounded-2xl shadow-lg card-hover p-0">
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <Brush size={64} className="text-red-500/50" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-red-500/90 text-white text-sm rounded-full">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h4 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h4>
                      <p className="text-red-400 mb-3">{project.category}</p>
                      <p className="text-gray-300 text-sm mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => openProjectModal(project)}
                        className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors duration-300 bg-red-500/10 hover:bg-red-500/20 px-4 py-2 rounded-lg"
                      >
                        View Project <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your creative vision to life. Get in
            touch to discuss your project.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="p-8 border-b border-gray-800">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-4xl font-bold mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-red-400 text-xl">
                    {selectedProject.category}
                  </p>
                </div>
                <button
                  onClick={closeProjectModal}
                  className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-300"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <Calendar className="text-red-500" size={20} />
                  <div>
                    <p className="text-gray-400 text-sm">Duration</p>
                    <p className="font-semibold">{selectedProject.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-red-500" size={20} />
                  <div>
                    <p className="text-gray-400 text-sm">Client</p>
                    <p className="font-semibold">{selectedProject.client}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Tag className="text-red-500" size={20} />
                  <div>
                    <p className="text-gray-400 text-sm">Year</p>
                    <p className="font-semibold">{selectedProject.year}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Project Image */}
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl h-80 flex items-center justify-center">
                  <Brush size={80} className="text-red-500/50" />
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Project Overview
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">
                      The Challenge
                    </h4>
                    <p className="text-gray-300">{selectedProject.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">The Solution</h4>
                    <p className="text-gray-300">{selectedProject.solution}</p>
                  </div>
                </div>
              </div>

              {/* Tools & Deliverables */}
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Deliverables</h4>
                  <ul className="space-y-2">
                    {selectedProject.deliverables.map((deliverable, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8 pt-8 border-t border-gray-800">
                <motion.button
                  onClick={() => handleViewDemo(selectedProject)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Play className="inline mr-2" size={20} />
                  View Live Demo
                </motion.button>
                <motion.button
                  onClick={() => handleDownloadCaseStudy(selectedProject)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-transparent border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Download Case Study
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default Work;
