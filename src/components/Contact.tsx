
import { FaEnvelope } from "react-icons/fa";
import { contactEmail, socialLinks } from "../data/socials";

function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Contact Me
          </p>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Let&apos;s connect
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto leading-relaxed">
            Have a project in mind or a professional opportunity?
            I would be happy to hear from you.
          </p>
        </div>

        {/* Contact card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 max-w-md mx-auto">

          {/* Email */}
          <div className="flex items-center gap-4 mb-8">
            <div className="shrink-0 p-3 bg-blue-100 rounded-full">
              <FaEnvelope className="text-blue-600 text-2xl" />
            </div>

            <div className="min-w-0">
              <h3 className="text-lg font-medium text-gray-900">
                Email
              </h3>

              <a
                href={`mailto:${contactEmail}`}
                className="text-sm sm:text-base text-blue-600 hover:text-blue-800 break-all transition-colors"
              >
                {contactEmail}
              </a>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">

            {/* Social media */}
            <h3 className="text-center text-base font-medium text-gray-900 mb-4">
              Find me online
            </h3>

            <div className="flex justify-center gap-4">
              {socialLinks.map(({ name, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="p-3 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors"
                >
                  <Icon className="text-gray-700 text-xl" />
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
