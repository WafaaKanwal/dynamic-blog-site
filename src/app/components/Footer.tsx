import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 TechInsights. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/wafa-kanwal-467376279/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

