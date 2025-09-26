import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronUp, Linkedin, Github, Mail, Heart } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/vidyullatha-kodeboyana",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    // {
    //   icon: Github,
    //   url: "#",
    //   label: "GitHub", 
    //   color: "hover:text-gray-300"
    // },
    // {
    //   icon: Mail,
    //   url: "mailto:kodeboyanavidyullatha@gmail.com",
    //   label: "Email",
    //   color: "hover:text-gold-rich"
    // }
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0 
        }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shadow-luxury hover:shadow-glow-gold transition-all duration-300"
      >
        <ChevronUp className="w-6 h-6 text-navy-deep" />
      </motion.button>

      <footer className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gold-rich rounded-full blur-2xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 0],
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent rounded-full blur-xl"
          />
        </div>

        <div className="container mx-auto px-6 py-16 relative z-10" ref={ref}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Footer Content */}
            <div className="grid lg:grid-cols-3 gap-12 mb-12">
              
              {/* Left Column - Branding */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center">
                    <span className="text-navy-deep font-bold text-xl">V</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-poppins font-bold text-white">
                      Vidyullatha Kodeboyana
                    </h3>
                    <p className="text-gold-light text-sm">Quality Assurance Engineer</p>
                  </div>
                </div>
                
                <p className="text-black leading-relaxed max-w-md">
                  Passionate about delivering exceptional quality through comprehensive testing, 
                  automation frameworks, and continuous improvement in software development processes.
                </p>

                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 rounded-lg glass border border-white/20 hover:border-gold-rich/50 flex items-center justify-center transition-all duration-300 text-white ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Center Column - Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-6"
              >
                <h4 className="text-lg font-poppins font-semibold text-white">
                  Quick Links
                </h4>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "About", to: "about" },
                    { name: "Experience", to: "experience" },
                    { name: "Projects", to: "projects" },
                    { name: "Skills", to: "skills" },
                    { name: "Education", to: "education" },
                    { name: "Contact", to: "contact" },
                  ].map((link, index) => (
                    <Link
                      key={link.name}
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="text-black hover:text-gold-rich transition-colors duration-300 cursor-pointer text-sm"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Right Column - Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="space-y-6"
              >
                <h4 className="text-lg font-poppins font-semibold text-white">
                  Get In Touch
                </h4>
                
                <div className="space-y-3 text-sm">
                  <div className="text-black">
                    <span className="text-gold-light">Location:</span><br />
                    Philadelphia, PA
                  </div>
                  <div className="text-black">
                    <span className="text-gold-light">Phone:</span><br />
                    +1 (813)-724-7237
                  </div>
                  <div className="text-black">
                    <span className="text-gold-light">Email:</span><br />
                    kodeboyanavidyullatha@gmail.com
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass border border-white/10 p-4 rounded-xl"
                >
                  <p className="text-sm text-black">
                    <span className="text-gold-light font-medium">Available for:</span><br />
                    Full-time opportunities, contract work, and consulting projects
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="border-t border-white/10 pt-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-silver">
                 <span className="text-gold-light font-medium">VIDYULLATHA KODEBOYANA</span>. 
          
                </div>
                
                {/* <div className="flex items-center gap-2 text-sm text-silver">
                  Built with <Heart className="w-4 h-4 text-red-400 animate-pulse-glow" /> and React
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;