import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://github.com/samyeak", label: "GitHub" },
    { href: "https://linkedin.com/in/samyeak", label: "LinkedIn" },
    { href: "mailto:samyeakmhj@protonmail.com", label: "Email" },
    { href: "https://samyeak.com.np", label: "Website" },
  ];

  return (
    <footer className="bg-surface border-t border-border-light">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-primary-muted text-sm mb-4 md:mb-0">
            © {currentYear} Samyeak Maharjan. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-secondary hover:text-accent transition-colors text-sm font-medium"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-8 border-t border-border-light text-center">
          <p className="text-primary-muted text-xs">
            Built with Next.js, Tailwind CSS, and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;