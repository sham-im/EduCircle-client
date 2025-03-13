import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-6 text-center md:text-left">

        {/* Brand & About */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">StudySync</h2>
          <p className="mt-2 text-gray-400">
            A platform where friends collaborate, complete assignments, and grade each other’s work efficiently.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-300">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/assignments" className="text-gray-400 hover:text-white">Assignments</a></li>
            <li><a href="/create-assignment" className="text-gray-400 hover:text-white">Create Assignment</a></li>
            <li><a href="/my-attempted" className="text-gray-400 hover:text-white">My Attempted Assignments</a></li>
            <li><a href="/pending" className="text-gray-400 hover:text-white">Pending Assignments</a></li>
            <li><a href="/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-blue-300">Contact Us</h3>
          <p className="mt-2 text-gray-400">📍 Dhaka, Bangladesh</p>
          <p className="text-gray-400">📞 +880 1234-567890</p>
          <p className="text-gray-400">📧 support@studysync.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-blue-300">Follow Us</h3>
          <div className="mt-3 flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-400" aria-label="Facebook">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400" aria-label="Twitter">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400" aria-label="Instagram">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400" aria-label="LinkedIn">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} StudySync. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


