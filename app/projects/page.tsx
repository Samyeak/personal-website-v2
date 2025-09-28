import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects - Samyeak Maharjan",
  description:
    "A showcase of enterprise applications, fintech platforms, and innovative solutions I've developed",
};

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Artha LMS",
      description:
        "Enterprise-grade ERP platform for hire purchase organizations with integrated modules for Loan Management, Loan Origination, Accounting, HR, and payment gateway integrations.",
      image: "/placeholder-project.jpg",
      tags: [
        "ASP.NET Core",
        ".NET 6",
        "Entity Framework",
        "MSSQL",
        "React",
        "Docker",
        "Redis",
        "Microservices",
      ],
      github: "#",
      demo: "#",
      featured: true,
      company: "Microcode Technologies",
      period: "2023 - 2025",
    },
    {
      id: 2,
      title: "Empower/Infinity CBS",
      description:
        "Complete core banking system focused on Microfinance and Co-operative Institutions with comprehensive financial management features. ISO 9001:2015 Certified.",
      image: "/placeholder-project.jpg",
      tags: [
        "ASP.NET Framework",
        "Web Forms",
        "ADO.NET",
        "MS SQL Server",
        "Knockout JS",
        "MS Report Viewer",
      ],
      github: "#",
      demo: "#",
      featured: true,
      company: "InfoDevelopers Pvt. Ltd.",
      period: "2018 - 2021",
    },
    {
      id: 3,
      title: "NLK-WBS Enterprise Solution",
      description:
        "Complete enterprise solution for Citizen Investment Trust (CIT) with SOA architecture, Identity Server 4 implementation, and multiple integrated modules.",
      image: "/placeholder-project.jpg",
      tags: [
        "ASP.NET Core 2.2",
        "MVC",
        "SOA",
        "EF Core",
        "Identity Server 4",
        "Ocelot",
        "SQL Server",
      ],
      github: "#",
      demo: "#",
      featured: true,
      company: "InfoDevelopers Pvt. Ltd.",
      period: "2019 - 2020",
    },
    {
      id: 4,
      title: "SmartOffice AWS Orchestration Platform",
      description:
        "Orchestration platform to dynamically create and manage AWS services for enterprises, with Alexa Skills integration and comprehensive cloud service management.",
      image: "/placeholder-project.jpg",
      tags: [
        "ASP.NET MVC",
        "AWS",
        "Alexa Skills",
        "MSSQL",
        "MongoDB",
        "Amazon Services",
      ],
      github: "#",
      demo: "#",
      featured: false,
      company: "VoiceWorx",
      period: "2021 - 2022",
    },
    {
      id: 5,
      title: "Jenne E-commerce Platform",
      description:
        "Legacy e-commerce platform for wholesale computer hardware with enhanced functionality, performance optimization, and modern interface redesign.",
      image: "/placeholder-project.jpg",
      tags: [".NET MVC", ".NET WebAPI", "MSSQL", "ASP.NET WebForms"],
      github: "#",
      demo: "#",
      featured: false,
      company: "Scopic Software",
      period: "2022 - 2023",
    },
    {
      id: 6,
      title: "Codeaid Coding Assessment Platform",
      description:
        "Online coding assessment platform with engineered coding challenges, unit test design, and comprehensive evaluation system for technical assessments.",
      image: "/placeholder-project.jpg",
      tags: [".NET MVC", ".NET WebAPI", "MSSQL", "Unit Testing"],
      github: "#",
      demo: "#",
      featured: false,
      company: "Scopic Software",
      period: "2022 - 2023",
    },
    {
      id: 7,
      title: "VoiceWorx Zoom Chatbot",
      description:
        "Zoom marketplace integration chatbot with real-time communication capabilities and comprehensive project documentation for developers and clients.",
      image: "/placeholder-project.jpg",
      tags: [
        "Node.js",
        "Zoom Marketplace",
        "Socket.io",
        "Real-time Communication",
      ],
      github: "#",
      demo: "#",
      featured: false,
      company: "VoiceWorx",
      period: "2021 - 2022",
    },
    {
      id: 8,
      title: "SmartOffice Mobile App",
      description:
        "Mobile application for SmartOffice administrative portal built with Flutter, featuring Firebase Cloud Messaging for real-time notifications.",
      image: "/placeholder-project.jpg",
      tags: [
        "Flutter",
        "Firebase",
        "Mobile Development",
        "Real-time Notifications",
      ],
      github: "#",
      demo: "#",
      featured: false,
      company: "VoiceWorx",
      period: "2021 - 2022",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-medium text-primary mb-6">
          My Projects
        </h1>
        <p className="text-xl text-primary-secondary max-w-2xl mx-auto">
          A collection of projects I've worked on, from web applications to
          open-source contributions
        </p>
      </div>

      {/* Featured Projects */}
      <section className="mb-20">
        <h2 className="text-2xl font-medium text-primary mb-8">
          Featured Projects
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-surface border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="w-full h-64 bg-card flex items-center justify-center">
                <span className="text-xl font-medium">{project.title}</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-medium text-primary">
                    {project.title}
                  </h3>
                  <span className="text-primary-muted text-xs">
                    {project.period}
                  </span>
                </div>
                <p className="text-accent font-medium text-sm mb-2">
                  {project.company}
                </p>
                <p className="text-primary-secondary mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-card text-primary-secondary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <span className="text-primary-muted text-sm">
                    Enterprise Project
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section>
        <h2 className="text-2xl font-medium text-primary mb-8">
          Other Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="bg-surface border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium text-primary">
                  {project.title}
                </h3>
                <span className="text-primary-muted text-xs">
                  {project.period}
                </span>
              </div>
              <p className="text-accent font-medium text-sm mb-2">
                {project.company}
              </p>
              <p className="text-primary-secondary text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-card text-primary-secondary text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-1 bg-card text-primary-secondary text-xs rounded-full">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
              <div className="flex gap-4">
                <span className="text-primary-muted text-sm">
                  Enterprise Project
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mt-20 py-16 bg-card rounded-2xl">
        <h2 className="text-2xl font-medium text-primary mb-4">
          Interested in working together?
        </h2>
        <p className="text-primary-secondary mb-8">
          I'm always open to discussing new opportunities and interesting
          projects.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
        >
          Get In Touch
        </Link>
      </section>
    </div>
  );
}
