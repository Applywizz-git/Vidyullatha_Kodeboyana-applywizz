
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Shield, Zap, Target, Database, GitBranch, Cloud, Smartphone } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sections = [
    {
      title: "Core Expertise",
      icon: Shield,
      cards: [
        {
          icon: Code,
          title: "Test Automation",
          description: "Selenium, Cypress, Playwright, and REST Assured frameworks",
          stats: "99% coverage",
          color: "from-blue-500 to-cyan-500"
        },
        {
          icon: Zap,
          title: "Performance Testing",
          description: "JMeter and Gatling for 10k+ concurrent users",
          stats: "99.99% uptime",
          color: "from-green-500 to-emerald-500"
        },
        {
          icon: Database,
          title: "Backend Validation",
          description: "SQL/NoSQL database testing and API validation",
          stats: "100% accuracy",
          color: "from-purple-500 to-pink-500"
        }
      ]
    },
    {
      title: "Technical Skills",
      icon: Code,
      cards: [
        {
          icon: GitBranch,
          title: "CI/CD Integration",
          description: "Jenkins, GitHub Actions, Azure DevOps pipelines",
          stats: "Zero-defect gates",
          color: "from-orange-500 to-red-500"
        },
        {
          icon: Cloud,
          title: "Cloud Technologies",
          description: "Docker, Kubernetes, AWS, Azure cloud testing",
          stats: "Cloud-native",
          color: "from-indigo-500 to-blue-500"
        },
        {
          icon: Smartphone,
          title: "Mobile Testing",
          description: "Appium for mobile automation testing and API validation",
          stats: "Cross-platform",
          color: "from-teal-500 to-green-500"
        }
      ]
    },
    {
      title: "Methodologies",
      icon: Target,
      cards: [
        {
          icon: Shield,
          title: "Agile/Scrum",
          description: "Sprint planning, test strategy, defect management",
          stats: "Agile expert",
          color: "from-yellow-500 to-amber-500"
        },
        {
          icon: Zap,
          title: "BDD Framework",
          description: "Cucumber with Gherkin syntax for behavior testing",
          stats: "BDD approach",
          color: "from-rose-500 to-pink-500"
        },
        {
          icon: Target,
          title: "Test Planning",
          description: "End-to-end test strategies and risk analysis",
          stats: "Comprehensive",
          color: "from-violet-500 to-purple-500"
        }
      ]
    },
    {
      title: "Achievements",
      icon: Zap,
      cards: [
        {
          icon: Shield,
          title: "Quality Metrics",
          description: "Maintained 99%+ test coverage across projects",
          stats: "4+ years",
          color: "from-cyan-500 to-blue-500"
        },
        {
          icon: Database,
          title: "Defect Management",
          description: "120+ critical defects identified and resolved",
          stats: "Zero escapes",
          color: "from-emerald-500 to-green-500"
        },
        {
          icon: Cloud,
          title: "Process Improvement",
          description: "50% efficiency gain in validate testing processes",
          stats: "Optimized",
          color: "from-amber-500 to-orange-500"
        }
      ]
    }
  ];

  const stats = [
    { number: "4+", label: "Years Experience", icon: Shield },
    { number: "120+", label: "Defects Found", icon: Zap },
    { number: "99%", label: "Test Coverage", icon: Target },
    { number: "50%", label: "Efficiency Gain", icon: Code },
    { number: "15+", label: "Frameworks Built", icon: Database },
    { number: "10K+", label: "Users Tested", icon: Cloud }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-smoke/30 to-background"></div>
      
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
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive overview of my skills, expertise, and achievements in quality assurance engineering
            </p>
          </motion.div>

          {/* Main Content Grid - 4 Sections */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Left Column - Professional Summary */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="glass-card p-8">
                <h3 className="text-2xl font-poppins font-bold text-gradient mb-4">
                  Professional Summary
                </h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Proactive Quality Assurance Engineer with 4 years of experience in UI and API automation, 
                    payments testing, and cloud-native SaaS applications. Expertise in building robust Selenium, 
                    Cypress, Playwright, Postman, and REST Assured automation frameworks.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Skilled in designing end-to-end test strategies, SQL/NoSQL backend validation, and performance/load 
                    testing with JMeter and Gatling. Strong command over CI/CD pipelines using Jenkins, GitHub Actions, 
                    Azure DevOps with Docker/Kubernetes.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Adept at Agile/Scrum collaboration, test planning, defect management, and traceability, ensuring 
                    high-quality, zero-defect releases for various platforms.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Statistics Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card text-center p-6 group hover:shadow-gold transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-navy-deep" />
                  </div>
                  <div className="text-2xl font-poppins font-bold text-gradient mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* 4 Sections Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.2 + sectionIndex * 0.2, duration: 0.6 }}
                className="space-y-6"
              >
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-navy-deep" />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-gradient">
                    {section.title}
                  </h3>
                </div>

                {/* Cards for this section */}
                <div className="space-y-4">
                  {section.cards.map((card, cardIndex) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 1.4 + sectionIndex * 0.2 + cardIndex * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="glass-card p-4 group hover:shadow-gold transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 bg-gradient-to-r ${card.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <card.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-poppins font-semibold text-sm mb-1 group-hover:text-accent transition-colors">
                            {card.title}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                            {card.description}
                          </p>
                          <div className="text-xs font-medium text-gradient">
                            {card.stats}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;