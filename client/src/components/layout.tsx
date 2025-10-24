import { MapPin, Mail, Download } from "lucide-react";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { Link, useLocation } from "wouter";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  const emails = [
    "aneelakantan@syr.edu",
    "adithya.neelakantan@gmail.com"
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/adithyaneelakantan", icon: SiGithub },
    { label: "LinkedIn", href: "https://linkedin.com/in/adithyaneelakantan", icon: SiLinkedin },
    { label: "Instagram", href: "https://instagram.com/adithyaneelakantan", icon: SiInstagram }
  ];

  const navItems = [
    { label: "About", path: "/" },
    { label: "Academic Projects", path: "/academic-projects" },
    { label: "Experience", path: "/experience" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 h-[60px]">
        <div className="flex items-center justify-between px-8 h-full">
          <h1 className="text-[1.8rem] font-bold text-[#A20597]" data-testid="text-header-name">
            Adithya Neelakantan
          </h1>
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-[1.8rem] hover:underline font-medium ${
                  location === item.path ? 'text-[#A20597] underline' : 'text-[#A20597]'
                }`}
                data-testid={`link-nav-${item.label.toLowerCase().replace(/ /g, '-')}`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 text-[#A20597] hover:underline font-medium text-[1.2rem]"
              data-testid="link-resume"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex pt-[60px]">
        {/* Fixed Left Sidebar - 30% */}
        <aside className="fixed left-0 top-[60px] bottom-0 w-[30%] bg-white overflow-y-auto">
          <div className="p-8 space-y-6">
            {/* Profile Photo */}
            <div className="flex justify-start">
              <img
                src="/profile.jpg"
                alt="Adithya Neelakantan"
                className="w-64 h-64 object-cover"
                data-testid="img-profile"
              />
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-black">
              <MapPin className="w-[1.4rem] h-[1.4rem] flex-shrink-0" />
              <span className="text-[1.2rem]" data-testid="text-location">Portland, OR</span>
            </div>

            {/* Email Addresses */}
            <div className="space-y-2">
              {emails.map((email, index) => (
                <div key={index} className="flex items-start gap-2 text-black">
                  <Mail className="w-[1.4rem] h-[1.4rem] flex-shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${email}`}
                    className="text-[1.2rem] text-[#A20597] hover:underline break-all"
                    data-testid={`link-email-${index}`}
                  >
                    {email}
                  </a>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-3 pt-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#A20597] hover:underline group"
                    data-testid={`link-${link.label.toLowerCase()}`}
                  >
                    <Icon className="w-[1.4rem] h-[1.4rem] flex-shrink-0" />
                    <span className="text-[1.2rem]">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Scrollable Right Content Area - 70% */}
        <main className="ml-[30%] w-[70%] min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
