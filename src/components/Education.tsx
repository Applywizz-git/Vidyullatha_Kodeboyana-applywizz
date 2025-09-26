import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Master of Science in Information Technology",
      institution: "University of North Texas",
      location: "USA",
      period: "Aug 2022 – May 2024",
      type: "Graduate Degree",
      description: "Advanced coursework in information systems, software engineering, and technology management with focus on quality assurance methodologies.",
      highlights: [
        "Advanced Software Testing & Quality Assurance",
        "Information Systems Analysis & Design", 
        "Database Management Systems",
        "Software Project Management",
        "Cybersecurity & Risk Management"
      ],
      gpa: "3.8/4.0",
      color: "from-gold-rich to-gold-light",
      icon: GraduationCap
    },
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "CVSR College of Engineering",
      location: "India", 
      period: "Aug 2016 – Apr 2020",
      type: "Undergraduate Degree",
      description: "Comprehensive foundation in computer science principles, programming, and software development with specialization in testing methodologies.",
      highlights: [
        "Software Engineering & Testing",
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Systems",
        "Computer Networks & Security",
        "Web Technologies"
      ],
      gpa: "3.7/4.0",
      color: "from-accent to-gold-rich",
      icon: BookOpen
    }
  ];

  const academicAchievements = [
    {
      title: "Academic Excellence",
      description: "Maintained high GPA throughout both degree programs",
      icon: Award,
      value: "3.75+ GPA"
    },
    {
      title: "Research Projects",
      description: "Completed multiple software testing and automation projects",
      icon: BookOpen,
      value: "5+ Projects"
    },
    {
      title: "Leadership",
      description: "Active participation in student organizations and tech clubs",
      icon: Users,
      value: "2+ Clubs"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-smoke/20 via-transparent to-navy-deep/5"></div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">
              Educational <span className="text-gradient">Background</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Strong academic foundation in computer science and information technology
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="relative mb-16">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-rich via-accent to-gold-light transform md:-translate-x-1/2"></div>

            {/* Education Cards */}
            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ delay: 0.4 + index * 0.3, duration: 0.8 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-gradient-gold rounded-full transform -translate-x-1/2 border-4 border-background z-10 flex items-center justify-center">
                    <edu.icon className="w-3 h-3 text-navy-deep" />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`ml-16 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="glass-card group hover:shadow-luxury transition-all duration-500">
                      {/* Institution Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-poppins font-bold text-foreground group-hover:text-gradient transition-colors duration-300 mb-2">
                            {edu.institution}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center`}>
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Degree Info */}
                      <div className="mb-4">
                        <div className="text-lg font-semibold text-accent mb-2">
                          {edu.degree}
                        </div>
                        <div className="flex items-center gap-4 text-muted-foreground text-sm mb-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                          {/* <div className="flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            <span>GPA: {edu.gpa}</span>
                          </div> */}
                        </div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-gold-rich/10 to-accent/10 text-xs font-medium text-gold-rich border border-gold-rich/20">
                          {edu.type}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {edu.description}
                      </p>

                      {/* Key Courses */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground">Key Coursework:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {edu.highlights.map((course, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ delay: 0.6 + index * 0.3 + i * 0.1, duration: 0.4 }}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-gold-rich rounded-full flex-shrink-0"></div>
                              <span>{course}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Academic Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-poppins font-bold text-center text-gradient mb-8">
              Academic Achievements
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {academicAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card text-center group"
                >
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-6 h-6 text-navy-deep" />
                  </div>
                  <h4 className="text-lg font-poppins font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {achievement.description}
                  </p>
                  {/* <div className="text-xl font-bold text-gradient">
                    {achievement.value}
                  </div> */}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-center"
          >
            <div className="glass-card max-w-3xl mx-auto">
              <h3 className="text-xl font-poppins font-semibold text-gradient mb-4">
                Educational Foundation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Strong academic background in computer science and information technology, 
                with specialized coursework in software testing, quality assurance, and automation. 
                Both degrees provided comprehensive understanding of software development lifecycle, 
                testing methodologies, and modern technology stack management.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;