import { motion } from "framer-motion";
import { ChevronDown, Download, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-scroll";
import heroPortrait from "../../public/profileimage.png";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-rich/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Greeting */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full glass border border-gold-rich/20 text-sm font-medium text-gold-rich"
            >
              <span className="w-2 h-2 bg-gold-rich rounded-full mr-2 animate-pulse-glow"></span>
              Available for new opportunities
            </motion.div> */}

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-7xl font-poppins font-extrabold">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="text-gradient animate-shimmer">
                  Vidyullatha
                </span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-poppins font-bold text-gold-light">
                Quality Assurance Engineer
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-black leading-relaxed max-w-lg"
            >
              Proactive QA Engineer with 4 years of experience in UI/API automation, 
              payments testing, and cloud-native SaaS applications. Expertise in building 
              robust automation frameworks and ensuring zero-defect releases.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-6 text-sm text-silver"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-rich" />
                <span className="text-black">Philadelphia, PA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-rich" />
                <span className="text-black">+1 (813)-724-7237</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-rich" />
                <span className="text-black">kodeboyanavidyullatha@gmail.com</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-hero flex items-center gap-2"
                >
                  <Mail className="w-5 h-5 text-black" />
                  <span className="text-black">Get In Touch</span>
                </motion.button>
              </Link>
              
              {/* <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex  flex items-center gap-2 px-8 py-4 rounded-full glass border border-gold-rich/30 hover:border-gold-rich/60 text-white font-semibold transition-all duration-300"
              >
            <a href="RESUME_VIDYULLATHA KODEBOYANA_QAE.pdf" download>
                <Download className="w-5 h-5" />
                Download CV
                </a>
              </motion.button> */}

              <motion.a
  href="RESUME_VIDYULLATHA KODEBOYANA_QAE.pdf"
  download="RESUME_VIDYULLATHA_KODEBOYANA_QAE.pdf"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center gap-2 px-8 py-4 rounded-full glass border border-gold-rich/30 hover:border-gold-rich/60 text-white font-semibold transition-all duration-300 cursor-pointer"
>
  <Download className="w-5 h-5" />
  Download resume
</motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image Section - Centered */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.0, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-center"
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-3xl mx-auto"
              >
                <img
                  src={heroPortrait}
                  alt="Vidyullatha Kodeboyana - Quality Assurance Engineer"
                  className="w-96 h-96 object-cover rounded-3xl"
                />
              </motion.div>

              {/* Floating Elements */}
              {/* 4+ Years Experience Card - Positioned at top right of image */}
              {/* <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top--2 right-1 glass-card p-4 text-center"
              >
                <div className="text-2xl font-bold text-gradient">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </motion.div> */}
              
              {/* Defects Found Card - Positioned at bottom left of image */}
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 glass-card p-4 text-center"
              >
                <div className="text-2xl font-bold text-gradient">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
              {/* <div className="absolute top-8 left-8 w-full h-full bg-gradient-gold rounded-3xl opacity-20"></div> */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-rich/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center cursor-pointer group"
            >
              <span className="text-sm text-silver mb-2 group-hover:text-gold-rich transition-colors">
                Scroll to explore
              </span>
              <ChevronDown className="w-6 h-6 text-gold-rich animate-pulse-glow" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;