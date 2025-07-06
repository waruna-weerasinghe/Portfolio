
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-700/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Waruna Weerasinghe</h3>
              <p className="text-gray-400 leading-relaxed">
                Undergraduate IT student passionate about creating innovative solutions 
                through code and continuous learning.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left"
                >
                  About
                </button>
                <button 
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left"
                >
                  Skills
                </button>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left"
                >
                  Projects
                </button>
                <button 
                  onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left"
                >
                  Education
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-gray-400">warunaweerasinghe2001@gmail.com</p>
                <p className="text-gray-400">+94765599723</p>
                <p className="text-gray-400">69/3,Demalagama, Sri Lanka</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Waruna Weerasinghe. 
              </p>
              
              <button
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;