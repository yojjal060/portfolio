"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Menu, User, Building } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { motion } from "framer-motion"
import {
  ChevronDown,
  Code,
  Award,
  Briefcase,
  Sparkles,
  ExternalLink,
  Download,
  Database,
  LayoutDashboard,
  Globe,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("")

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "education", "skills", "projects", "certificates", "organizations", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <User className="h-5 w-5 text-theme-primary" />
            <span className="text-theme-primary">Yojjal</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("about")
              }}
              className={`text-sm font-medium transition-colors ${activeSection === "about" ? "text-theme-primary" : "text-foreground hover:text-theme-primary"}`}
            >
              About
            </Link>
            <Link
              href="#education"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("education")
              }}
              className={`text-sm font-medium transition-colors ${activeSection === "education" ? "text-theme-primary" : "text-foreground hover:text-theme-primary"}`}
            >
              Education
            </Link>
            <Link
              href="#skills"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("skills")
              }}
              className={`text-sm font-medium transition-colors ${activeSection === "skills" ? "text-theme-primary" : "text-foreground hover:text-theme-primary"}`}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("projects")
              }}
              className={`text-sm font-medium transition-colors ${activeSection === "projects" ? "text-theme-primary" : "text-foreground hover:text-theme-primary"}`}
            >
              Projects
            </Link>
            <Link
              href="#certificates"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("certificates")
              }}
              className={`text-sm font-medium transition-colors ${activeSection === "certificates" ? "text-theme-primary" : "text-foreground hover:text-theme-primary"}`}
            >
              Certificates
            </Link>
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact")
              }}
              className={`text-sm font-medium transition-colors ${activeSection === "contact" ? "text-theme-primary" : "text-foreground hover:text-theme-primary"}`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 mt-8">
                  <Link
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("about")
                      document.querySelector("[data-radix-collection-item]")?.click()
                    }}
                    className="text-lg font-medium"
                  >
                    About
                  </Link>
                  <Link
                    href="#education"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("education")
                      document.querySelector("[data-radix-collection-item]")?.click()
                    }}
                    className="text-lg font-medium"
                  >
                    Education
                  </Link>
                  <Link
                    href="#skills"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("skills")
                      document.querySelector("[data-radix-collection-item]")?.click()
                    }}
                    className="text-lg font-medium"
                  >
                    Skills
                  </Link>
                  <Link
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("projects")
                      document.querySelector("[data-radix-collection-item]")?.click()
                    }}
                    className="text-lg font-medium"
                  >
                    Projects
                  </Link>
                  <Link
                    href="#certificates"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("certificates")
                      document.querySelector("[data-radix-collection-item]")?.click()
                    }}
                    className="text-lg font-medium"
                  >
                    Certificates
                  </Link>
                  <Link
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("contact")
                      document.querySelector("[data-radix-collection-item]")?.click()
                    }}
                    className="text-lg font-medium"
                  >
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Button
            asChild
            size="sm"
            className="bg-theme-primary hover:bg-theme-primary/90 transition-colors hidden md:flex"
          >
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact")
              }}
            >
              Get in Touch
            </Link>
          </Button>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-20 md:py-32 flex flex-col items-center text-center space-y-10 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-theme-primary/10 blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-theme-secondary/10 blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-theme-accent/5 blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <motion.div
            className="space-y-4 max-w-3xl relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-theme-primary/10 text-theme-primary">
                <Code className="w-4 h-4 mr-2" /> MERN-Stack Developer
              </span>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-tighter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Hi, I'm{" "}
              <span className="text-theme-primary relative">
                Yojjal Sharma
                <span className="absolute bottom-0 left-0 w-full h-1 bg-theme-primary/30 rounded-full"></span>
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              A passionate developer creating intuitive and functional user interfaces
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-theme-primary hover:bg-theme-primary/90 transition-colors group relative overflow-hidden"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("projects")
              }}
            >
              <Link href="#projects">
                <span className="relative z-10 flex items-center">
                  View My Work <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-theme-primary text-theme-primary hover:bg-theme-primary/10 transition-colors group"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact")
              }}
            >
              <Link href="#contact">
                <span className="flex items-center">
                  Contact Me <Mail className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 scroll-mt-16 relative">
          <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-theme-secondary/5 blur-3xl -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              className="rounded-lg overflow-hidden relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-theme-primary/20 to-theme-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="./Profile-image.jpg"
                alt="Profile"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 border-4 border-theme-primary/0 group-hover:border-theme-primary/20 transition-all duration-500 rounded-lg transform scale-95 group-hover:scale-100"></div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2">
                <div className="h-px w-8 bg-theme-primary"></div>
                <h2 className="text-3xl font-bold tracking-tighter text-theme-primary">About Me</h2>
              </div>

              <p className="text-muted-foreground relative pl-4">
                <span className="absolute left-0 top-0 h-full w-1 bg-theme-primary/20 rounded-full"></span>
                BSc. CSIT student with a solid foundation in ReactJS and a growing passion for full-stack development.
                Skilled in crafting intuitive and functional user interfaces, with a strong focus on design and
                usability.
              </p>

              <p className="text-muted-foreground relative pl-4">
                <span className="absolute left-0 top-0 h-full w-1 bg-theme-primary/20 rounded-full"></span>A proactive
                learner and effective team player, eager to contribute to innovative projects while enhancing technical
                expertise.
              </p>

              <Button
                asChild
                className="bg-theme-primary hover:bg-theme-primary/90 transition-colors group relative overflow-hidden"
              >
                <Link href="/CV.pdf" target="_blank">
                  <span className="relative z-10 flex items-center">
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </span>
                  <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 scroll-mt-16 relative">
          <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full bg-theme-accent/5 blur-3xl -z-10"></div>

          <div className="space-y-10">
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center space-x-2 mb-2">
                <div className="h-px w-8 bg-theme-primary"></div>
                <h2 className="text-3xl font-bold tracking-tighter text-theme-primary">Education</h2>
                <div className="h-px w-8 bg-theme-primary"></div>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">My academic journey and qualifications</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  degree: "BSc.CSIT",
                  institution: "Prithvi Narayan Campus",
                  year: "Present",
                  location: "Pokhara",
                  color: "bg-theme-primary/10 text-theme-primary",
                  icon: <Code className="h-5 w-5" />,
                  delay: 0.1,
                },
                {
                  degree: "Class-XII | NEB",
                  institution: "Liverpool Higher Secondary School",
                  year: "2021",
                  location: "Kathmandu",
                  color: "bg-theme-secondary/10 text-theme-secondary",
                  icon: <Award className="h-5 w-5" />,
                  delay: 0.3,
                },
                {
                  degree: "SEE",
                  institution: "Future Brighter Secondary School",
                  year: "2018",
                  location: "Baglung",
                  color: "bg-theme-accent/10 text-theme-accent",
                  icon: <Award className="h-5 w-5" />,
                  delay: 0.5,
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: edu.delay, duration: 0.6 }}
                >
                  <Card className="overflow-hidden group hover:shadow-md transition-all duration-300 border-none bg-background/50 backdrop-blur-sm">
                    <CardHeader className={`${edu.color} relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 p-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                          {edu.icon}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <CardDescription className={edu.color.includes("text-") ? "" : "text-foreground/80"}>
                        {edu.institution}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4 relative">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium flex items-center">
                          <Building className="h-4 w-4 mr-1 opacity-70" /> {edu.location}
                        </span>
                        <span className="text-sm text-muted-foreground">{edu.year}</span>
                      </div>
                      <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-theme-primary/50 to-theme-secondary/50 transition-all duration-500"></div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 scroll-mt-16 relative">
          <div className="absolute top-40 right-0 w-80 h-80 rounded-full bg-theme-primary/5 blur-3xl -z-10"></div>

          <div className="space-y-10">
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center space-x-2 mb-2">
                <div className="h-px w-8 bg-theme-primary"></div>
                <h2 className="text-3xl font-bold tracking-tighter text-theme-primary flex items-center">
                  <Sparkles className="h-6 w-6 mr-2 text-theme-primary/70" /> My Skills
                </h2>
                <div className="h-px w-8 bg-theme-primary"></div>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I've worked with a variety of technologies and tools throughout my journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Technical Skills",
                  description: "Programming languages and frameworks",
                  skills: ["JavaScript (ES6+)", "React.js", "TailwindCSS", "HTML5", "CSS3", "MySQL", "Git", "C", "C++"],
                  color: "bg-theme-primary/10 text-theme-primary",
                  icon: <Code className="h-5 w-5" />,
                  delay: 0.1,
                },
                {
                  title: "Tools & Platforms",
                  description: "Development environments and deployment platforms",
                  skills: ["GitHub", "Linux", "AWS", "Netlify", "Vercel"],
                  color: "bg-theme-secondary/10 text-theme-secondary",
                  icon: <Briefcase className="h-5 w-5" />,
                  delay: 0.3,
                },
                {
                  title: "Soft Skills",
                  description: "Professional attributes and interpersonal abilities",
                  skills: ["Communication", "Problem Solving", "Time Management", "Team Work"],
                  color: "bg-theme-accent/10 text-theme-accent",
                  icon: <User className="h-5 w-5" />,
                  delay: 0.5,
                },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: skill.delay, duration: 0.6 }}
                >
                  <Card className="overflow-hidden group hover:shadow-md transition-all duration-300 h-full border-none bg-background/50 backdrop-blur-sm">
                    <CardHeader className={`${skill.color} relative`}>
                      <div className="absolute top-0 right-0 p-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                          {skill.icon}
                        </div>
                      </div>
                      <CardTitle>{skill.title}</CardTitle>
                      <CardDescription className={skill.color.includes("text-") ? "" : "text-foreground/80"}>
                        {skill.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="flex flex-wrap gap-2">
                        {skill.skills.map((s, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i + skill.delay, duration: 0.4 }}
                            className={`px-3 py-1 text-sm rounded-full ${skill.color} opacity-80 hover:opacity-100 transition-all duration-300 hover:shadow-sm transform hover:-translate-y-1`}
                          >
                            {s}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 scroll-mt-16 relative">
          <div className="absolute top-40 left-0 w-72 h-72 rounded-full bg-theme-primary/5 blur-3xl -z-10"></div>
          <div className="absolute bottom-40 right-0 w-80 h-80 rounded-full bg-theme-secondary/5 blur-3xl -z-10"></div>

          <div className="space-y-10">
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center space-x-2 mb-2">
                <div className="h-px w-8 bg-theme-primary"></div>
                <h2 className="text-3xl font-bold tracking-tighter text-theme-primary flex items-center">
                  <Briefcase className="h-6 w-6 mr-2 text-theme-primary/70" /> My Projects
                </h2>
                <div className="h-px w-8 bg-theme-primary"></div>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Here are some of my recent projects. Each project represents a unique challenge and solution.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Godam Management App",
                  description:
                    "Built an inventory management web app with user login, admin dashboard, and features for managing products, suppliers, employees, and sales.",
                  technologies: ["HTML", "CSS", "JavaScript", "PHP"],
                  accentColor: "#4F46E5",
                  techColor: "bg-theme-primary/10 text-theme-primary",
                  image: "/sales-management-tracking-software-ss1.png?height=200&width=400",
                  delay: 0.1,
                },
                {
                  title: "Smart Serve",
                  description:
                    "Created a Figma design for an app focused on taking orders, selecting menu items, and managing billing, emphasizing a user-friendly and intuitive interface.",
                  technologies: ["Figma", "UI/UX Design"],
                  accentColor: "#3B82F6",
                  techColor: "bg-theme-secondary/10 text-theme-secondary",
                  image: "/Screenshot 2025-04-11 173446.png?height=200&width=400",
                  delay: 0.3,
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: project.delay, duration: 0.7 }}
                >
                  <Card className="overflow-hidden group hover:shadow-lg transition-all duration-500 h-full border-none bg-background/50 backdrop-blur-sm">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="w-full bg-white/20 backdrop-blur-sm text-white border-none"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" /> View Project
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <div
                          className="w-2 h-2 rounded-full mr-2"
                          style={{ backgroundColor: project.accentColor }}
                        ></div>
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i + project.delay + 0.2, duration: 0.4 }}
                            className={`px-2 py-1 text-xs rounded-md ${project.techColor} transition-all duration-300 hover:shadow-sm transform hover:-translate-y-1`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates & Courses Section */}
        <section id="certificates" className="py-20 scroll-mt-16 relative">
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full bg-theme-accent/5 blur-3xl -z-10"></div>

          <div className="space-y-10">
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center space-x-2 mb-2">
                <div className="h-px w-8 bg-theme-primary"></div>
                <h2 className="text-3xl font-bold tracking-tighter text-theme-primary flex items-center">
                  <Award className="h-6 w-6 mr-2 text-theme-primary/70" /> Certificates & Courses
                </h2>
                <div className="h-px w-8 bg-theme-primary"></div>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional certifications and academic coursework
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="overflow-hidden border-none bg-background/50 backdrop-blur-sm relative group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theme-primary to-theme-primary/50"></div>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="h-5 w-5 mr-2 text-theme-primary" /> Certificates
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <motion.li
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-theme-primary/10 text-theme-primary shrink-0 mt-0.5">
                          <Code className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="font-medium">Intermediate JavaScript</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Mastering advanced JavaScript concepts and patterns
                          </p>
                        </div>
                      </motion.li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Card className="overflow-hidden border-none bg-background/50 backdrop-blur-sm relative group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theme-secondary to-theme-secondary/50"></div>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-theme-secondary" /> Courses
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        { title: "Data Structure & Algorithm", icon: <Code className="h-4 w-4" />, delay: 0.1 },
                        { title: "Database Management System", icon: <Database className="h-4 w-4" />, delay: 0.2 },
                        {
                          title: "System Analysis & Design",
                          icon: <LayoutDashboard className="h-4 w-4" />,
                          delay: 0.3,
                        },
                        { title: "Web Technology", icon: <Globe className="h-4 w-4" />, delay: 0.4 },
                      ].map((course, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: course.delay, duration: 0.5 }}
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-theme-secondary/10 text-theme-secondary shrink-0 mt-0.5">
                            {course.icon}
                          </div>
                          <div>
                            <h3 className="font-medium">{course.title}</h3>
                            <div className="h-1 w-12 bg-theme-secondary/20 rounded-full mt-2"></div>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 scroll-mt-16 relative">
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-theme-primary/5 blur-3xl -z-10"></div>

          <div className="space-y-10">
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center space-x-2 mb-2">
                <div className="h-px w-8 bg-theme-primary"></div>
                <h2 className="text-3xl font-bold tracking-tighter text-theme-primary flex items-center">
                  <Mail className="h-6 w-6 mr-2 text-theme-primary/70" /> Get In Touch
                </h2>
                <div className="h-px w-8 bg-theme-primary"></div>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Card className="overflow-hidden border-none bg-background/50 backdrop-blur-sm h-full relative group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theme-primary to-theme-primary/50"></div>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="h-5 w-5 mr-2 text-theme-primary" /> Contact Information
                    </CardTitle>
                    <CardDescription>Here's how you can reach me</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        icon: <Mail className="h-5 w-5" />,
                        text: "Yojjal878@gmail.com",
                        href: "mailto:Yojjal878@gmail.com",
                        color: "bg-theme-primary/10 text-theme-primary",
                        delay: 0.1,
                      },
                      {
                        icon: <Linkedin className="h-5 w-5" />,
                        text: "Yojjal Sharma",
                        href: "https://www.linkedin.com/in/yojjal-sharma-cool/",
                        color: "bg-theme-secondary/10 text-theme-secondary",
                        delay: 0.2,
                      },
                      {
                        icon: <Github className="h-5 w-5" />,
                        text: "yojjal060",
                        href: "https://github.com/yojjal060",
                        color: "bg-theme-accent/10 text-theme-accent",
                        delay: 0.3,
                      },
                      {
                        icon: <Building className="h-5 w-5" />,
                        text: "Pokhara, Nepal",
                        href: "#",
                        color: "bg-theme-primary/10 text-theme-primary",
                        delay: 0.4,
                      },
                    ].map((contact, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: contact.delay, duration: 0.5 }}
                      >
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${contact.color}`}>
                          {contact.icon}
                        </div>
                        <a
                          href={contact.href}
                          target={contact.href.startsWith("http") ? "_blank" : undefined}
                          rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="hover:text-theme-primary transition-colors group"
                        >
                          {contact.text}
                          <span className="block h-0.5 w-0 group-hover:w-full bg-theme-primary/30 transition-all duration-300"></span>
                        </a>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Card className="overflow-hidden border-none bg-background/50 backdrop-blur-sm relative group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theme-secondary to-theme-secondary/50"></div>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-theme-secondary" /> Send Me a Message
                    </CardTitle>
                    <CardDescription>I'll get back to you as soon as possible</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2 group">
                          <label
                            htmlFor="name"
                            className="text-sm font-medium group-focus-within:text-theme-primary transition-colors"
                          >
                            Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            className="w-full p-2 rounded-md border border-input bg-background focus:border-theme-primary focus:ring-1 focus:ring-theme-primary transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2 group">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium group-focus-within:text-theme-primary transition-colors"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="w-full p-2 rounded-md border border-input bg-background focus:border-theme-primary focus:ring-1 focus:ring-theme-primary transition-colors"
                            placeholder="Your email"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 group">
                        <label
                          htmlFor="subject"
                          className="text-sm font-medium group-focus-within:text-theme-primary transition-colors"
                        >
                          Subject
                        </label>
                        <input
                          id="subject"
                          type="text"
                          className="w-full p-2 rounded-md border border-input bg-background focus:border-theme-primary focus:ring-1 focus:ring-theme-primary transition-colors"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="space-y-2 group">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium group-focus-within:text-theme-primary transition-colors"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full p-2 rounded-md border border-input bg-background resize-none focus:border-theme-primary focus:ring-1 focus:ring-theme-primary transition-colors"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-theme-secondary hover:bg-theme-secondary/90 transition-colors group relative overflow-hidden">
                      <span className="relative z-10 flex items-center">
                        <Mail className="mr-2 h-4 w-4" /> Send Message
                      </span>
                      <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 bg-theme-light/30 dark:bg-theme-dark/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50"></div>
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-theme-primary/10 text-theme-primary">
              <User className="h-4 w-4" />
            </div>
            <span className="font-bold text-theme-primary">Yojjal Sharma</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Yojjal Sharma. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/yojjal060"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-theme-accent/10 hover:text-theme-accent transition-all duration-300 transform hover:-translate-y-1"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/yojjal-sharma-cool"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-theme-secondary/10 hover:text-theme-secondary transition-all duration-300 transform hover:-translate-y-1"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:Yojjal878@gmail.com"
              aria-label="Email"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-theme-primary/10 hover:text-theme-primary transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Education Card Component
function EducationCard({ degree, institution, year, location, color = "bg-muted text-foreground" }) {
  return (
    <Card className="overflow-hidden group hover:shadow-sm transition-shadow duration-300">
      <CardHeader className={color}>
        <CardTitle className="text-lg">{degree}</CardTitle>
        <CardDescription className={color.includes("text-") ? "" : "text-foreground/80"}>{institution}</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">{location}</span>
          <span className="text-sm text-muted-foreground">{year}</span>
        </div>
      </CardContent>
    </Card>
  )
}

// Project Card Component
function ProjectCard({ title, description, technologies, accentColor, techColor }) {
  return (
    <Card className="overflow-hidden group border-t-4" style={{ borderTopColor: accentColor || "#4F46E5" }}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs rounded-md ${techColor || "bg-theme-primary/10 text-theme-primary"}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Skill Card Component
function SkillCard({ title, description, skills, color = "bg-muted text-foreground" }) {
  return (
    <Card className="overflow-hidden group hover:shadow-sm transition-shadow duration-300">
      <CardHeader className={color}>
        <CardTitle>{title}</CardTitle>
        <CardDescription className={color.includes("text-") ? "" : "text-foreground/80"}>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-sm rounded-full ${color} opacity-80 hover:opacity-100 transition-opacity`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
