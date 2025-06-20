"use client"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Calendar,
  GraduationCap,
  Award,
  Code,
  Brain,
  Users,
  Lightbulb,
  Terminal,
  Database,
  Cpu,
  Zap,
  Globe,
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [typedText, setTypedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const techWords = ["AI Developer", "Problem Solver", "ML Engineer", "Full Stack Developer", "Data Scientist"]

  // Typing animation effect
  useEffect(() => {
    const currentWord = techWords[currentWordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setTypedText(currentWord.substring(0, typedText.length + 1))
          if (typedText === currentWord) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setTypedText(currentWord.substring(0, typedText.length - 1))
          if (typedText === "") {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % techWords.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, currentWordIndex, techWords])

  const skills = {
    languages: ["Python", "Java", "C", "JavaScript"],
    frameworks: ["React", "Node.js", "HTML", "CSS", "Figma"],
    domains: ["Data Structures", "Artificial Intelligence", "Machine Learning", "Data Science"],
    soft: ["Creative Writing", "Communication", "Team Collaboration"],
  }

  const projects = [
    {
      title: "FinBotX – GenAI Powered Financial Assistant",
      date: "Apr 2025",
      description:
        "Developed a multilingual AI chatbot that simplifies personal finance for users with varying financial literacy levels. Integrated personalized advisory logic based on user goals and risk profiles. Focused on scalable architecture and accessibility to empower users across India.",
      tech: ["GenAI", "Multilingual NLP", "Financial Tech", "Scalable Architecture"],
      github: "https://github.com/fatimahasan-82/FinBotX",
      category: "AI/ML",
    },
    {
      title: "AI-Powered Adaptive Traffic Signal Control",
      date: "May 2025",
      description:
        "Developed an AI-driven traffic control system that adapts in real-time based on live traffic conditions. Implemented machine learning models to optimize traffic signal timings and reduce congestion. Focused on improving urban traffic flow and minimizing commute times through data-driven decisions.",
      tech: ["AI", "Machine Learning", "Urban Mobility", "Real-time Systems", "Data Analytics"],
      github: "https://github.com/fatimahasan-82/AI-Powered-Adaptive-Traffic-Signal-Control.git",
      category: "AI/ML",
    },
  ]

  const hackathons = [
    {
      name: "Smart India Hackathon",
      status: "Internal Round Qualifier",
      description: "Worked on real-world problem statements with a focus on innovation and impact.",
    },
    {
      name: "GDG On Campus Solutions Challenge",
      organizer: "Hack2Skill",
      description:
        "Innovation-driven hackathon focused on solving real-world problems using Google technologies through collaboration and rapid prototyping.",
    },
    {
      name: "Intel AI Hackathon",
      organizer: "Hack2Skill",
      description: "Hands-on experience with AI-based solutions, teamwork under pressure, and time-bound delivery.",
    },
    {
      name: "IBM Prarambh 2025, Apexathon 2025",
      description: "Strengthened problem-solving, collaborative coding, and presentation skills.",
    },
  ]

  const interests = [
    "Urban Mobility and Smart Cities",
    "AI for Social Impact",
    "Natural Language Processing",
    "Data-driven Decision Making",
  ]

  // Floating tech icons animation
  const FloatingIcon = ({ icon: Icon, delay = 0, duration = 3 }) => (
    <div
      className="absolute opacity-10 animate-bounce"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      <Icon className="w-8 h-8 text-rose-300" />
    </div>
  )

  // Code typing animation component
  const CodeBlock = () => {
    const [codeText, setCodeText] = useState("")
    const fullCode = `function innovate() {
  const ideas = generateIdeas();
  const solution = implement(ideas);
  return solution.deploy();
}`

    useEffect(() => {
      let index = 0
      const interval = setInterval(() => {
        if (index < fullCode.length) {
          setCodeText(fullCode.substring(0, index + 1))
          index++
        } else {
          clearInterval(interval)
          setTimeout(() => {
            setCodeText("")
            index = 0
          }, 3000)
        }
      }, 100)

      return () => clearInterval(interval)
    }, [fullCode])

    return (
      <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 min-h-[120px] overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        <pre className="whitespace-pre-wrap">
          {codeText}
          <span className="animate-pulse">|</span>
        </pre>
      </div>
    )
  }

  // Binary rain animation
  const BinaryRain = () => {
    const [drops, setDrops] = useState<Array<{ id: number; left: number; delay: number }>>([])

    useEffect(() => {
      const newDrops = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
      }))
      setDrops(newDrops)
    }, [])

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {drops.map((drop) => (
          <div
            key={drop.id}
            className="absolute text-rose-200 opacity-20 animate-pulse font-mono text-xs"
            style={{
              left: `${drop.left}%`,
              animationDelay: `${drop.delay}s`,
              animationDuration: "4s",
              animationIterationCount: "infinite",
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 relative overflow-hidden"
      style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
    >
      {/* Floating tech icons */}
      <FloatingIcon icon={Terminal} delay={0} />
      <FloatingIcon icon={Database} delay={1} />
      <FloatingIcon icon={Cpu} delay={2} />
      <FloatingIcon icon={Globe} delay={3} />
      <FloatingIcon icon={Smartphone} delay={4} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-300 via-pink-300 to-orange-300 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <BinaryRain />

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-200/10 to-orange-200/10 rounded-full blur-3xl animate-spin-slow"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-white/15 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-white/25 animate-ping delay-1000"></div>

        <div className="relative container mx-auto px-4 py-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-8">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-rose-100 to-pink-100 bg-clip-text text-transparent leading-tight animate-fade-in">
                  Fatima Hasan
                </h1>

                {/* Typing animation */}
                <div className="text-2xl lg:text-3xl mb-8 h-12 flex items-center justify-center lg:justify-start">
                  <span className="text-rose-100">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2 text-sm font-medium animate-slide-in-left">
                    <Brain className="w-4 h-4 mr-2 animate-pulse" />
                    AI Enthusiast
                  </Badge>
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2 text-sm font-medium animate-slide-in-up">
                    <Code className="w-4 h-4 mr-2 animate-bounce" />
                    Developer
                  </Badge>
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2 text-sm font-medium animate-slide-in-right">
                    <Lightbulb className="w-4 h-4 mr-2 animate-pulse" />
                    Problem Solver
                  </Badge>
                </div>
              </div>

              <p className="text-xl lg:text-2xl mb-8 text-rose-50 leading-relaxed max-w-2xl animate-fade-in-up">
                Aspiring developer seeking to apply coding skills, problem-solving abilities, and hackathon experience.
                Eager to learn, collaborate, and contribute to innovative projects in a dynamic environment.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <Button
                  size="lg"
                  className="bg-white text-rose-600 hover:bg-rose-50 shadow-lg hover:shadow-xl transition-all duration-300 group animate-bounce-in"
                  asChild
                >
                  <a href="mailto:fatimahasan2404@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform animate-pulse" />
                    Get In Touch
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-rose-400 text-white hover:bg-rose-500 shadow-lg hover:shadow-xl transition-all duration-300 group border-0 animate-bounce-in delay-200"
                  asChild
                >
                  <a
                    href="https://github.com/fatimahasan-82"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-5 h-5 group-hover:rotate-12 transition-transform animate-spin-slow" />
                    View Projects
                  </a>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-rose-100 animate-fade-in-up delay-300">
                <div className="flex items-center gap-2 hover:text-white transition-colors"></div>
                <div className="flex items-center gap-2 hover:text-white transition-colors">
                  <MapPin className="w-4 h-4 animate-bounce" />
                  <span className="text-sm">Lucknow, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 animate-pulse" />
                  <a
                    href="https://www.linkedin.com/in/fatima-hasan-559580352"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-300 to-pink-300 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-8 border-white/30 shadow-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-500 animate-float">
                  <Image src="/fatima-photo.jpg" alt="Fatima Hasan" fill className="object-cover" priority />
                </div>

                {/* Orbiting tech icons around photo */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Code className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Database className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Code Block Animation */}
        <section className="text-center mb-16">
          <div className="max-w-md mx-auto">
            <CodeBlock />
          </div>
        </section>

        {/* Education Section */}
        <section className="animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Education</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-rose-50 to-pink-50 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0 group-hover:animate-bounce">
                    <GraduationCap className="w-8 h-8 text-white animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">B. Tech in Computer Science & Engineering</h3>
                    <p className="text-lg text-rose-700 font-semibold mb-2">
                      Shri Ramswaroop Memorial University, Lucknow
                    </p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 animate-pulse" />
                      <span>2023 – 2027</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
                    Senior Secondary (XII), CBSE - Science
                  </h3>
                  <p className="text-gray-700 mb-2">Lucknow Public School, Lucknow</p>
                  <p className="text-gray-600 text-sm">2023</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
                    Secondary (X), CBSE
                  </h3>
                  <p className="text-gray-700 mb-2">Lucknow Public School, Lucknow</p>
                  <p className="text-gray-600 text-sm">2021</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-rose-50 to-pink-50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Code className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-lg text-gray-800">Languages</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.languages.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-rose-100 text-rose-800 hover:bg-rose-200 transition-all duration-300 hover:scale-105 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Zap className="w-8 h-8 text-white group-hover:animate-bounce" />
                </div>
                <CardTitle className="text-lg text-gray-800">Frameworks & Tools</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.frameworks.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-orange-100 text-orange-800 hover:bg-orange-200 transition-all duration-300 hover:scale-105 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-pink-50 to-rose-50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Brain className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <CardTitle className="text-lg text-gray-800">Domains</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.domains.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-pink-100 text-pink-800 hover:bg-pink-200 transition-all duration-300 hover:scale-105 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-amber-50 to-yellow-50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Users className="w-8 h-8 text-white group-hover:animate-bounce" />
                </div>
                <CardTitle className="text-lg text-gray-800">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.soft.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-amber-100 text-amber-800 hover:bg-amber-200 transition-all duration-300 hover:scale-105 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section className="animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden relative"
              >
                <div className="h-2 bg-gradient-to-r from-rose-400 to-pink-400 group-hover:animate-pulse"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-rose-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-rose-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                        <Calendar className="w-4 h-4 animate-pulse" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="bg-rose-50 hover:bg-rose-100 transition-all duration-300 group-hover:scale-110"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4 animate-pulse" />
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-fade-in"
                        style={{ animationDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="inline-block border-0 shadow-lg bg-gradient-to-r from-rose-50 to-pink-50 group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">More projects available on my GitHub</p>
                <Button
                  variant="outline"
                  asChild
                  className="hover:bg-rose-50 transition-all duration-300 group-hover:scale-105"
                >
                  <a
                    href="https://github.com/fatimahasan-82"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4 animate-pulse" />
                    View All Projects
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research Interests */}
        <section className="animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Research & Technical Interests</h2>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-50 to-rose-50 group hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white/70 rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-105 animate-fade-in group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex-shrink-0 group-hover:animate-pulse"></div>
                    <span className="font-medium text-gray-800">{interest}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Hackathons & Experience */}
        <section className="animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Hackathons & Extracurriculars</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-300 to-amber-400 rounded-full flex items-center justify-center group-hover:animate-bounce">
                    <Award className="w-6 h-6 text-white animate-pulse" />
                  </div>
                  Major Hackathons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {hackathons.map((hackathon, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl hover:from-orange-50 hover:to-amber-50 transition-all duration-300 hover:scale-105 animate-fade-in group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex-shrink-0 mt-2 group-hover:animate-pulse"></div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="font-bold text-gray-800">{hackathon.name}</span>
                            {hackathon.status && (
                              <Badge className="bg-green-100 text-green-800 text-xs animate-pulse">
                                {hackathon.status}
                              </Badge>
                            )}
                            {hackathon.organizer && (
                              <Badge variant="outline" className="text-xs">
                                {hackathon.organizer}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{hackathon.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-rose-300 to-pink-400 rounded-full flex items-center justify-center group-hover:animate-bounce">
                    <GraduationCap className="w-6 h-6 text-white animate-pulse" />
                  </div>
                  Learning & Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl group-hover:shadow-lg transition-all duration-300">
                    <h4 className="font-bold text-rose-800 mb-4 text-lg">Workshops & Certifications</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 animate-fade-in">
                        <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-rose-700">Data Science</span>
                      </div>
                      <div className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-pink-700">AI/ML</span>
                      </div>
                      <div className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-orange-700">Web Development</span>
                      </div>
                      <div className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: "300ms" }}>
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-amber-700">UI/UX</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl group-hover:shadow-lg transition-all duration-300">
                    <p className="text-pink-800 text-sm font-medium leading-relaxed">
                      Attended certified workshops contributing to a well-rounded tech foundation and participated in
                      university-level coding contests and technical fests, enhancing logic-building and communication.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Let's Connect</h2>
          <Card className="max-w-2xl mx-auto border-0 shadow-xl bg-gradient-to-br from-rose-50 to-pink-50 group hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, and collaborations in AI and
                software development.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  asChild
                  className="shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 animate-bounce-in"
                >
                  <a href="mailto:fatimahasan2404@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-5 h-5 animate-pulse" />
                    Email Me
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 animate-bounce-in"
                  style={{ animationDelay: "100ms" }}
                >
                  <a
                    href="https://www.linkedin.com/in/fatima-hasan-559580352"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-5 h-5 animate-pulse" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 animate-bounce-in"
                  style={{ animationDelay: "200ms" }}
                >
                  <a
                    href="https://github.com/fatimahasan-82"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-5 h-5 animate-pulse" />
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-rose-200 to-pink-200 text-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Fatima Hasan</h3>
            <p className="text-gray-700 mb-6">Aspiring Developer | AI Enthusiast | Problem Solver</p>
            <div className="flex justify-center gap-6 mb-6">
              <a
                href="mailto:fatimahasan2404@gmail.com"
                className="text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110 animate-bounce"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/fatima-hasan-559580352"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110 animate-bounce"
                style={{ animationDelay: "100ms" }}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/fatimahasan-82"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110 animate-bounce"
                style={{ animationDelay: "200ms" }}
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-600 text-sm">© 2025 Fatima Hasan. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 0.6s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.6s ease-out; }
        .animate-slide-in-up { animation: slide-in-up 0.6s ease-out; }
        .animate-bounce-in { animation: bounce-in 0.8s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>
    </div>
  )
}
