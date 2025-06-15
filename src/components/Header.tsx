
import React from 'react';
import { Recycle, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-green-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Recycle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              ReLoop
            </h1>
            <p className="text-xs text-gray-600">Zugdidi E-Waste Management</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#tracking" className="text-gray-700 hover:text-green-600 transition-colors">Device Tracking</a>
          <a href="#credits" className="text-gray-700 hover:text-green-600 transition-colors">Eco Credits</a>
          <a href="#dao" className="text-gray-700 hover:text-green-600 transition-colors">DAO</a>
          <a href="#futures" className="text-gray-700 hover:text-green-600 transition-colors">Futures</a>
          <a href="#impact" className="text-gray-700 hover:text-green-600 transition-colors">Impact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:block">Connect Wallet</Button>
          <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
            Join DAO
          </Button>
          <Button variant="ghost" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
