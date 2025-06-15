
import React from 'react';
import { ArrowRight, Shield, Users, Coins } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Blockchain-Powered E-Waste Management for Zugdidi
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Building transparency, inclusion, and sustainability into e-waste management through 
            device lifecycle tracking, community rewards, and futures-based funding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
              Track Your Device <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 bg-white/60 backdrop-blur-sm border-green-200 hover:border-green-300 transition-all duration-300 hover:scale-105">
            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Blockchain Transparency</h3>
            <p className="text-gray-600">Every device tracked with immutable records from sale to recycling</p>
          </Card>
          
          <Card className="p-6 bg-white/60 backdrop-blur-sm border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Community DAO</h3>
            <p className="text-gray-600">Decentralized governance by citizens, recyclers, and stakeholders</p>
          </Card>
          
          <Card className="p-6 bg-white/60 backdrop-blur-sm border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:scale-105">
            <Coins className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Eco Credit Rewards</h3>
            <p className="text-gray-600">Earn tokens for recycling and redeem for local services</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
