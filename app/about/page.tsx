import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Samyeak Maharjan",
  description: "Learn more about my background as a full-stack .NET developer with 7+ years of experience in enterprise applications",
};

export default function About() {
  const skills = [
    "C#", ".NET Core", "ASP.NET MVC", "Web API", "Entity Framework", "LINQ",
    "SQL Server", "T-SQL", "JavaScript", "TypeScript", "React", "jQuery",
    "MongoDB", "PostgreSQL", "AWS", "Docker", "Microservices", "Identity Server 4",
    "Azure DevOps", "Git", "Flutter", "Node.js", "Socket.io", "Bootstrap"
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-medium text-primary mb-6">About Me</h1>
        <p className="text-xl text-primary-secondary max-w-2xl mx-auto">
          I'm passionate about creating digital experiences that make a difference
        </p>
      </div>

      {/* Profile Section */}
      <div className="grid lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-1">
          <div className="bg-card rounded-2xl p-8 text-center">
            <div className="w-48 h-48 bg-border rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-primary-muted text-2xl font-medium">SM</span>
            </div>
            <h2 className="text-2xl font-medium text-primary mb-2">Samyeak Maharjan</h2>
            <p className="text-primary-secondary mb-2">Software Engineer</p>
            <p className="text-primary-muted text-sm mb-4">Nepal</p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/samyeak" className="text-accent hover:text-accent-hover" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/samyeak" className="text-accent hover:text-accent-hover" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:samyeakmhj@protonmail.com" className="text-accent hover:text-accent-hover">Email</a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-2xl font-medium text-primary mb-6">My Story</h3>
          <div className="space-y-4 text-primary-secondary">
            <p>
              I'm a software engineer with more than 7 years of hands-on experience building
              enterprise-level web applications. My journey started with a passion for solving
              complex business problems through robust technology solutions.
            </p>
            <p>
              I specialize in the .NET ecosystem with strong expertise in C#, ASP.NET Core,
              SQL Server, and modern web technologies. I've led development teams and successfully
              delivered scalable solutions for fintech, ERP, and government sector applications.
            </p>
            <p>
              Currently working as a Technical Consultant, I'm passionate about clean code,
              DevOps automation, and architecting microservice architectures. I hold an MBA
              and continuously stay updated with emerging technologies to deliver effective solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-20">
        <h3 className="text-2xl font-medium text-primary mb-8 text-center">Skills & Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-surface border border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
            >
              <span className="text-primary font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <h3 className="text-2xl font-medium text-primary mb-8 text-center">Experience</h3>
        <div className="space-y-8">
          {[
            {
              title: "Technical Consultant",
              company: "Freelance",
              period: "January 2025 - Present",
              description: "Providing technical consulting services for enterprise applications and system optimization."
            },
            {
              title: "Lead Software Engineer",
              company: "Microcode Technologies Pvt. Ltd.",
              period: "December 2023 - January 2025",
              description: "Developed robust software solutions using Microsoft's .NET ecosystem for LMS and Insurance platforms. Led cross-functional teams and refactored legacy codebases."
            },
            {
              title: "Software Engineer",
              company: "Scopic Software (Remote)",
              period: "August 2022 - October 2023",
              description: "Collaborated with diverse international clients on Jenne e-commerce platform and Codeaid coding assessment platform. Optimized application performance and redesigned legacy systems."
            },
            {
              title: "Software Engineer",
              company: "VoiceWorx (Remote)",
              period: "August 2021 - August 2022",
              description: "Built Alexa Skills, Zoom Chatbots, and mobile applications. Integrated AWS services and implemented real-time communication features using Socket.IO and Firebase."
            },
            {
              title: "Sr. Software Engineer",
              company: "InfoDevelopers Pvt. Ltd.",
              period: "May 2018 - August 2021",
              description: "Led a team of 7 developers on enterprise financial applications. Revamped legacy systems, ensured ISO compliance, and optimized complex SQL queries for better performance."
            }
          ].map((job, index) => (
            <div key={index} className="bg-surface border border-border rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-medium text-primary">{job.title}</h4>
                  <p className="text-accent font-medium">{job.company}</p>
                </div>
                <span className="text-primary-muted text-sm">{job.period}</span>
              </div>
              <p className="text-primary-secondary">{job.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-20">
        <h3 className="text-2xl font-medium text-primary mb-8 text-center">Education</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-surface border border-border rounded-xl p-6">
            <h4 className="text-xl font-medium text-primary mb-2">Master in Business Administration</h4>
            <p className="text-accent font-medium mb-2">Techspire College, Asia Pacific University of Technology & Innovation (APU)</p>
            <p className="text-primary-muted">2024</p>
          </div>
          <div className="bg-surface border border-border rounded-xl p-6">
            <h4 className="text-xl font-medium text-primary mb-2">Bachelor of Computer Science and Information Technology</h4>
            <p className="text-accent font-medium mb-2">Patan Multiple Campus, Tribhuvan University</p>
            <p className="text-primary-muted">2015 - 2019</p>
          </div>
        </div>
      </div>
    </div>
  );
}