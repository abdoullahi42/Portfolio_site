/* eslint-disable react/no-unescaped-entities */
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-2">
            Contact Me
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Let's connect
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8 max-w-md mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-100 rounded-full">
              <FaEnvelope className="text-blue-600 text-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <a 
                href="mailto:abdoullahisalihou2@gmail.com" 
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                abdoullahisalihou2@gmail.com
              </a>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Find me online</h3>
            <div className="flex justify-center gap-4">
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-gray-700 text-xl" />
              </a>
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-gray-700 text-xl" />
              </a>
              <a 
                href="https://twitter.com/yourhandle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-gray-700 text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;