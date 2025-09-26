import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle } from "lucide-react";

const Certification = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "ISTQB - Foundation Level CTFL 4.0",
      issuer: "International Software Testing Qualifications Board",
      color: "from-gold-rich to-gold-light",
      verified: true
    },
    {
      title: "Oracle Certified Associate - Java SE 8 Programmer",
      issuer: "Oracle Corporation", 
      color: "from-accent to-gold-rich",
      verified: true
    },
    {
      title: "CompTIA Security+",
      issuer: "CompTIA",
      color: "from-gold-light to-navy-light",
      verified: true
    },
    {
      title: "CI/CD with Jenkins and Azure DevOps",
      issuer: "LinkedIn Learning",
      color: "from-accent to-gold-light",
      verified: false
    }
  ];

  return (
    <section id="certification" className="py-20 relative">
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
              Certifications & <span className="text-gradient">Training</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="glass-card group hover:shadow-luxury transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  {cert.verified && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                </div>

                <h3 className="text-lg font-poppins font-bold text-gradient mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certification;