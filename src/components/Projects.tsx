import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { ExternalLink, Github, Code, Database, Server, Zap } from "lucide-react";

// Import your project images (replace with actual paths)
import project1Image from "../../public/image1.png";
import project2Image from "../../public/image2.png";
import project3Image from "../../public/image3.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const project = [
    {
      title: "Automated QA Framework for Cloud-Native E-Commerce Platform",
      description: "Comprehensive testing framework combining UI, API, and performance testing with integrated monitoring and reporting dashboards.",
      technologies: ["Selenium", "REST Assured", "JMeter", "Jenkins", "Docker", "Kubernetes", "Grafana"],
      highlights: [
        "Selenium + REST Assured + JMeter for UI, API, performance testing",
        "Jenkins + Docker + Kubernetes for parallel test execution",
        "Grafana dashboards monitored test coverage & defects"
      ],
      icon: Code,
      gradient: "from-gold-rich to-gold-light",
      image:  project1Image
    },
    {
      title: "Microservices Loan Application QA Framework",
      description: "BDD-driven automation framework for complex loan workflows with full CI/CD integration and comprehensive backend validation.",
      technologies: ["Cucumber", "JavaScript", "Postman", "Azure DevOps", "SQL", "JIRA"],
      highlights: [
        "Cucumber BDD automation in JavaScript for loan workflows",
        "Postman + Azure DevOps pipelines enforced CI/CD test gates",
        "SQL-driven backend checks + JIRA defects for full traceability"
      ],
      icon: Database,
      gradient: "from-accent to-gold-rich",
      image: project2Image
    },
    {
      title: "Payments API Automation for FinTech Platform",
      description: "High-coverage API testing suite for financial transactions with robust backend validation and zero-defect deployment gates.",
      technologies: ["REST Assured", "Postman", "SQL", "NoSQL", "Jenkins", "Newman"],
      highlights: [
        "REST Assured + Postman automation suite (99% endpoint coverage)",
        "SQL + NoSQL backend validations cut reconciliation errors 30%",
        "Jenkins CI/CD pipelines enforced zero-defect promotion"
      ],
      icon: Server,
      gradient: "from-navy-light to-accent",
      image: project3Image
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-smoke/20 to-background"></div>
      
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
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcase of comprehensive QA automation frameworks and testing solutions
            </p>
          </motion.div>

          {/* Projects Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-12"
          >
            <Swiper
              modules={[Autoplay, Pagination, EffectCoverflow]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
              }}
              effect="coverflow"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              loop={true} // Enable infinite looping
              speed={800} // Smooth transition speed
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              className="projects-swiper"
            >
              {project.map((project, index) => (
                <SwiperSlide key={project.title}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="h-full"
                  >
                    <div className="glass-card h-full group hover:shadow-luxury transition-all duration-500 overflow-hidden">
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                        
                        {/* Project Icon Overlay */}
                        <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                          <project.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        {/* Project Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-poppins font-bold text-foreground group-hover:text-gradient transition-colors duration-300 line-clamp-2">
                              {project.title}
                            </h3>
                          </div>
                          
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-2 mb-4">
                          {project.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <Zap className="w-4 h-4 text-gold-rich mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-gold-rich/10 to-accent/10 text-gold-rich border border-gold-rich/20 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Project Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Frameworks Built", value: "15+", icon: Code },
              { label: "Test Coverage", value: "99%", icon: Zap },
              { label: "Defects Caught", value: "320+", icon: Database },
              { label: "Efficiency Gain", value: "50%", icon: Server },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
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

      {/* Custom Swiper Styles */}
      <style>{`
        .projects-swiper .swiper-pagination {
          bottom: -50px !important;
        }
        
        .projects-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: hsl(var(--muted));
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        
        .projects-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, hsl(var(--gold-rich)), hsl(var(--gold-light)));
          opacity: 1;
          transform: scale(1.2);
        }
        
        .projects-swiper .swiper-slide {
          height: auto;
          padding-bottom: 60px;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;