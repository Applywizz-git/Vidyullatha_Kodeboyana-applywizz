import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Cloud, Settings } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming & Scripting",
      icon: Code,
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C#", "Shell", "PowerShell"],
      color: "from-gold-rich to-gold-light"
    },
    {
      title: "UI & Mobile Automation", 
      icon: Settings,
      skills: ["Selenium WebDriver", "Cypress", "Playwright", "Appium", "Espresso", "XCUITest"],
      color: "from-accent to-gold-rich"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["Oracle", "MySQL", "PostgreSQL", "MongoDB", "Snowflake", "DynamoDB"],
      color: "from-navy-light to-accent"
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["AWS"],
      color: "from-gold-light to-navy-light"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-smoke/30 via-transparent to-gold-rich/5"></div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="glass-card group hover:shadow-luxury transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-poppins font-semibold text-gradient">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-gold-rich/10 to-accent/10 text-foreground border border-gold-rich/20 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;