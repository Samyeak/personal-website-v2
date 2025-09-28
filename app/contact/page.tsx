"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      label: "Email",
      value: "samyeakmhj@protonmail.com",
      href: "mailto:samyeakmhj@protonmail.com",
    },
    // {
    //   label: "Phone",
    //   value: "+977-9849837174",
    //   href: "tel:+9779849837174",
    // },
    {
      label: "Location",
      value: "Nepal",
      href: "#",
    },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/samyeak" },
    { name: "LinkedIn", href: "https://linkedin.com/in/samyeak" },
    { name: "Website", href: "https://samyeak.com.np" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-medium text-primary mb-6">
          Get In Touch
        </h1>
        <p className="text-xl text-primary-secondary max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or
          interesting projects. Whether you need technical consultation or want
          to work together, feel free to reach out.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-primary font-medium mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-surface focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-primary font-medium mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-surface focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-primary font-medium mb-2"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-surface focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-primary font-medium mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-border rounded-lg bg-surface focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-colors resize-none"
                placeholder="Tell me about your project or just say hello..."
              />
            </div>

            {submitStatus === "success" && (
              <div className="p-4 bg-accent-secondary/10 border border-accent-secondary/20 rounded-lg text-accent-secondary">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                Something went wrong. Please try again or contact me directly.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent text-white font-medium py-3 px-6 rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <div className="bg-card rounded-xl p-6 mb-6">
            <h3 className="text-lg font-medium text-primary mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label}>
                  <p className="text-primary-muted text-sm">{info.label}</p>
                  <a
                    href={info.href}
                    className="text-primary hover:text-accent transition-colors"
                  >
                    {info.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl p-6">
            <h3 className="text-lg font-medium text-primary mb-6">Follow Me</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="block text-primary-secondary hover:text-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-primary-muted text-sm">
              Typically responds within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
