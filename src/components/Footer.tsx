
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Heat Transfer Labels', href: '#products' },
    { name: 'Hot Stamping Foils', href: '#products' },
    { name: 'Industries', href: '#industries' },
    { name: 'Applications', href: '#applications' }
  ];

  const company = [
    { name: 'About Anaspaltic', href: '#about' },
    { name: 'Global Reach', href: '#global' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Quality Standards', href: '#quality' }
  ];

  const support = [
    { name: 'Technical Support', href: '#support' },
    { name: 'Request Quote', href: '#contact' },
    { name: 'Sample Request', href: '#samples' },
    { name: 'Documentation', href: '#docs' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">Anaspaltic</div>
            <p className="text-slate-300 mb-6">
              Leading manufacturer of premium heat transfer labels and hot stamping foils, 
              serving industries worldwide with innovative decorative solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail size={16} />
                <span className="text-sm">info@anaspaltic.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone size={16} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={16} />
                <span className="text-sm">Industrial District, Manufacturing Hub</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-300 text-sm">
              © 2024 Anaspaltic. All rights reserved. | Leading the future of heat transfer technology.
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
