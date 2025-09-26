import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Briefcase, TrendingUp } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Amazon.com Services LLC",
      location: "Malvern, PA",
      position: "Quality Assurance Engineer I",
      period: "Nov 2024 – May 2025",
      achievements: [
        "Automated UI/API testing for subscription billing & digital wallet (99% coverage)",
        "Built Selenium + TestNG regression suites (50% less manual effort)",
        "Detected 120+ API defects with Postman & REST Assured", 
        "SQL-driven backend validations improved accuracy 30%",
        "JMeter load tests validated 10k+ concurrent users (99.99% uptime)",
        "Integrated pipelines in GitHub Actions + AWS CodePipeline",
        "Defect analysis in JIRA cut resolution time by 20%",
        "Confluence dashboards summarized coverage & defects"
      ],
      color: "from-gold-rich to-gold-light"
    },
    {
      company: "TekSharks Inc",
      location: "Remote, USA",
      position: "API QA Engineer",
      period: "Jan 2024 – Oct 2024",
      achievements: [
        "Automated API suites (Postman, Newman, REST Assured) cutting manual testing 40%",
        "Validated JSON/XML schemas, found 50+ defects",
        "SQL backend checks in MySQL ensured 99% transactional accuracy",
        "Jenkins CI pipelines enforced zero-defect promotion gates",
        "Built dashboards in Confluence for coverage & readiness"
      ],
      color: "from-accent to-gold-rich"
    },
    {
      company: "Capgemini Technology Services",
      location: "Bangalore, India",
      position: "QA Automation Engineer",
      period: "Apr 2020 – May 2022",
      achievements: [
        "Led UI/API testing for loan workflows (100% requirement traceability)",
        "Selenium + Cucumber suites caught 150+ defects",
        "Built REST Assured & SoapUI frameworks (40% coverage increase)",
        "Azure DevOps CI/CD pipelines with Docker + Kubernetes",
        "JMeter load tests validated banking workflows under peak load",
        "Splunk & Kafka logs reduced triage time by 35%",
        "Collaborated on GDPR & compliance validation"
      ],
      color: "from-navy-light to-accent"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/5 via-transparent to-gold-rich/5"></div>
      
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
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              4+ years of delivering exceptional quality assurance solutions across diverse industries
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-rich via-accent to-gold-light transform md:-translate-x-1/2"></div>

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-gold rounded-full transform -translate-x-1/2 border-4 border-background z-10">
                    <div className="absolute inset-0 bg-gradient-gold rounded-full animate-pulse-glow"></div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`ml-16 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="glass-card group hover:shadow-luxury transition-all duration-500">
                      {/* Company Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-poppins font-bold text-foreground group-hover:text-gradient transition-colors duration-300">
                            {exp.company}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Position & Period */}
                      <div className="mb-4">
                        <div className="text-lg font-semibold text-accent mb-2">
                          {exp.position}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.6 + index * 0.2 + i * 0.1, duration: 0.4 }}
                            className="flex items-start gap-3 group/item"
                          >
                            <TrendingUp className="w-4 h-4 text-gold-rich mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
                            <span className="text-sm text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors duration-200">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Companies", value: "3", icon: Briefcase },
              { label: "Total Experience", value: "4+ Years", icon: Calendar },
              { label: "Defects Found", value: "320+", icon: TrendingUp },
              { label: "Test Coverage", value: "99%", icon: TrendingUp },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card text-center group"
              >
                <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-navy-deep" />
                </div>
                <div className="text-lg font-poppins font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;