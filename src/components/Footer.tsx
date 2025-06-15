
import React from 'react';
import { Recycle, Github, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const partners = [
    "UNDP Georgia",
    "Zugdidi Municipality", 
    "Youth for Future Georgia",
    "Green Movement Georgia",
    "Batumi Recycling Co.",
    "TechHub Kutaisi"
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Recycle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">ReLoop</h2>
                <p className="text-gray-400">Blockchain-Powered E-Waste Management</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Building a transparent, community-led e-waste management system for Zugdidi that aligns with 
              UN Sustainable Development Goals and creates lasting environmental impact.
            </p>
            
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Zugdidi, Samegrelo Region, Georgia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@reloop.ge</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+995 555 123 456</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#tracking" className="hover:text-green-400 transition-colors">Device Tracking</a></li>
              <li><a href="#credits" className="hover:text-green-400 transition-colors">Eco Credits</a></li>
              <li><a href="#dao" className="hover:text-green-400 transition-colors">DAO Governance</a></li>
              <li><a href="#futures" className="hover:text-green-400 transition-colors">Futures Market</a></li>
              <li><a href="#impact" className="hover:text-green-400 transition-colors">Impact Metrics</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">API Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">Join DAO</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Community Forum</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Discord Server</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Telegram Group</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Developer Resources</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Partnership Inquiries</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Ecosystem Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm text-gray-400">
              {partners.map((partner, index) => (
                <div key={index} className="text-center p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
                  {partner}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-center md:text-right text-gray-400 text-sm">
              <p>&copy; 2024 ReLoop. Open source project for sustainable e-waste management.</p>
              <p className="mt-1">
                Licensed under MIT • Built with ❤️ for the environment • 
                <a href="#" className="text-green-400 hover:underline ml-1">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
