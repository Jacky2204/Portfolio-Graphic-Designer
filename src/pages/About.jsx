import { motion } from "framer-motion";
import { Award, Users, Star, Calendar, MapPin, GraduationCap, Heart } from "lucide-react";

function About() {
  const stats = [
    { icon: Award, number: "15+", label: "Awards Won" },
    { icon: Users, number: "150+", label: "Happy Clients" },
    { icon: Star, number: "4.9", label: "Client Rating" },
    { icon: Calendar, number: "10+", label: "Years Experience" }
  ];

  const education = [
    {
      degree: "Bachelor of Fine Arts",
      school: "Parsons School of Design",
      year: "2014",
      description: "Graphic Design & Visual Communication"
    },
    {
      degree: "Master of Design",
      school: "Rhode Island School of Design",
      year: "2016",
      description: "Advanced Design Studies & Brand Strategy"
    }
  ];

  const interests = [
    "Typography & Lettering",
    "Color Theory & Psychology",
    "Brand Strategy",
    "Digital Art",
    "Photography",
    "Travel & Culture"
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
          <h1 className="text-6xl font-bold mb-6">About Ajinkya</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A passionate creative professional with over a decade of experience in transforming ideas into 
            compelling visual experiences that connect brands with their audiences.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">My Story</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              I am Ajinkya Pandit, a passionate and creative graphic designer with 10+ years of
              experience in creating visual content that captivates and resonates. I
              thrive on collaboration and enjoy working closely with clients to
              bring their vision to life.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              My journey began at Parsons School of Design, where I discovered my love for 
              visual communication and brand storytelling. Since then, I've worked with 
              clients ranging from startups to Fortune 500 companies, always striving to 
              create designs that not only look great but also serve their purpose effectively.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              I believe that great design is born from understanding - understanding the brand, 
              the audience, and the message. This philosophy has guided my work and helped me 
              deliver exceptional results for my clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
          <div className="w-full h-96 flex items-center justify-center overflow-hidden">
            <div className="w-64 h-64 rounded-full overflow-hidden">
              <img 
                src="./../../public/boy.jpg" 
                alt="Ajinkya Pandit - Portfolio Person" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          </motion.div>
        </div>

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
              <stat.icon className="mx-auto mb-4 text-red-500" size={32} />
              <div className="text-3xl font-bold text-red-500 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Education & Training</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development have been key to my success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-red-500" size={24} />
                <span className="text-red-400 font-semibold">{edu.year}</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
              <p className="text-red-400 mb-3">{edu.school}</p>
              <p className="text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Personal Information</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get to know me better beyond just my professional work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700"
          >
            <h4 className="text-xl font-semibold mb-4">Location & Background</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="text-red-500" size={20} />
                <span className="text-gray-300">Mumbai, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="text-red-500" size={20} />
                <span className="text-gray-300">Passionate about creative design</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700"
          >
            <h4 className="text-xl font-semibold mb-4">Interests & Hobbies</h4>
            <div className="grid grid-cols-2 gap-2">
              {interests.map((interest, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm">{interest}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center p-12 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-3xl border border-red-500/20"
        >
          <h2 className="text-3xl font-bold mb-6">My Mission</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            "To create meaningful, impactful designs that not only capture attention but also 
            communicate messages effectively, helping brands connect with their audiences on a deeper level. 
            I believe that great design has the power to inspire, engage, and drive results."
          </p>
        </motion.div>
      </section>
    </>
  );
}

export default About;
