import { Link } from 'react-router-dom';

const WaitlistFooter = () => {
  return (
    <footer className="bg-wekit-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img src="/lovable-uploads/db13bc26-be3a-46c4-852b-6148fcd3edae.png" alt="WeKIT" className="h-10 mb-4 brightness-0 invert" />
          <p className="text-sm text-gray-400 italic">Discover. Decide. Succeed.</p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.linkedin.com/in/yvonne1roberts/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">Instagram</a>
          </div>
        </div>

        {/* Platform */}
        <div>
          <h4 className="font-montserrat font-semibold text-sm mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">How It Works</button></li>
            <li><button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Features</button></li>
            <li><button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">FAQ</button></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-montserrat font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><button onClick={() => document.getElementById('founder')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Our Team</button></li>
            <li><Link to="/investors" className="hover:text-white transition-colors">Investors</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-montserrat font-semibold text-sm mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>hello@wekit.in</li>
            <li>India</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} We-KIT International Pvt Limited — Wot Kareer Is iT? All rights reserved.</p>
      </div>
    </footer>
  );
};

export default WaitlistFooter;
