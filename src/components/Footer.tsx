
import { socialLinks } from "../data/socials";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Copyright */}
          <p className="text-sm text-gray-300 text-center md:text-left">
            &copy; {currentYear} Abdoullahi Salihou.
            All rights reserved.
          </p>

          {/* Social media links */}
          <div className="flex items-center gap-5">
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
