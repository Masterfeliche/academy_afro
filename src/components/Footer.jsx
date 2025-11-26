const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-10 pb-6 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h5 className="font-bold text-secondary text-xl mb-4">AFRO-EURO Soccer Academy</h5>
          <p className="text-sm text-gray-400 mb-4">
            Empowering young talent across Africa with world-class coaching, academic support, and professional pathways.
          </p>
          <div className="flex gap-4 text-xl text-secondary">
            <a href="#" aria-label="Instagram" className="hover:text-white">📸</a>
            <a href="#" aria-label="Twitter" className="hover:text-white">🐦</a>
            <a href="#" aria-label="Facebook" className="hover:text-white">📘</a>
            <a href="#" aria-label="TikTok" className="hover:text-white">🎵</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h6 className="text-secondary font-semibold uppercase mb-4">Quick Links</h6>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/" className="hover:text-secondary">Home</a></li>
            <li><a href="/blog" className="hover:text-secondary">Blog</a></li>
            <li><a href="#programs" className="hover:text-secondary">Programs</a></li>
            <li><a href="#contact" className="hover:text-secondary">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h6 className="text-secondary font-semibold uppercase mb-4">Contact Us</h6>
          <div className="space-y-3 text-sm text-gray-400">
            <p className="flex items-center">📍 123 Champion St., Capital City</p>
            <p className="flex items-center">✉️ info@afroeuroacademy.com</p>
            <p className="flex items-center">📞 +255 762 674 000</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-xs text-gray-500">
        <p>&copy; 2025 AFRO-EURO Soccer Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;