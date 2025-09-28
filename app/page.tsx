import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-medium text-primary mb-6 animate-fade-in">
            Hi, I'm{" "}
            <span className="text-accent">Samyeak Maharjan</span>
          </h1>
          <p className="text-xl lg:text-2xl text-primary-secondary mb-4 max-w-4xl mx-auto animate-slide-up">
            Full-stack .NET developer with 7+ years' experience building scalable ERP and fintech platforms
          </p>
          <p className="text-lg text-primary-secondary mb-8 max-w-3xl mx-auto animate-slide-up">
            Specialized in architecting microservices, leading development teams, and solving complex business problems through robust technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-border text-primary font-medium rounded-lg hover:bg-card transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-surface py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-primary mb-6">About Me</h2>
              <p className="text-primary-secondary text-lg mb-4">
                I'm a software engineer from Nepal with over 7 years of hands-on experience building
                enterprise-level web applications. I specialize in .NET ecosystem, microservices
                architecture, and leading development teams.
              </p>
              <p className="text-primary-secondary text-lg mb-6">
                Currently working as a Technical Consultant, I've successfully delivered scalable
                solutions for fintech, ERP, and government sector applications across multiple companies.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-accent hover:text-accent-hover font-medium"
              >
                Learn more about me →
              </Link>
            </div>
            <div className="bg-card rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-border rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-muted text-sm">SM</span>
              </div>
              <h3 className="text-xl font-medium text-primary mb-2">Samyeak Maharjan</h3>
              <p className="text-primary-secondary">Software Engineer</p>
              <p className="text-primary-muted text-sm mt-2">Nepal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-primary mb-4">Featured Projects</h2>
            <p className="text-primary-secondary text-lg">
              A selection of projects I've worked on recently
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-surface rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-card rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-primary-muted">Project {i}</span>
                </div>
                <h3 className="text-xl font-medium text-primary mb-2">Project Title {i}</h3>
                <p className="text-primary-secondary text-sm mb-4">
                  Brief description of the project and technologies used.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-card text-primary-secondary text-xs rounded-full">React</span>
                  <span className="px-3 py-1 bg-card text-primary-secondary text-xs rounded-full">Next.js</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center text-accent hover:text-accent-hover font-medium"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
