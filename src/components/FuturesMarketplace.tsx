
import React from 'react';
import { TrendingUp, DollarSign, BarChart3, Target, Clock, Zap } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FuturesMarketplace = () => {
  const futuresContracts = [
    {
      id: "EWFT-2024-Q3",
      title: "E-Waste Futures Q3 2024",
      description: "500 device recycling capacity",
      price: 1.25,
      change: +0.08,
      volume: "2,150 EWFT",
      expiry: "Sep 30, 2024",
      backing: "Samsung Electronics",
      status: "active"
    },
    {
      id: "EWFT-2024-Q4",
      title: "E-Waste Futures Q4 2024",
      description: "750 device recycling capacity",
      price: 1.18,
      change: -0.03,
      volume: "1,875 EWFT",
      expiry: "Dec 31, 2024",
      backing: "LG Group",
      status: "active"
    },
    {
      id: "EWFT-2025-Q1",
      title: "E-Waste Futures Q1 2025",
      description: "1000 device recycling capacity",
      price: 1.10,
      change: +0.15,
      volume: "980 EWFT",
      expiry: "Mar 31, 2025",
      backing: "Pre-sale",
      status: "upcoming"
    }
  ];

  const revenueBreakdown = [
    { source: "Future Offsets (EWFTs)", allocation: "50% to recycling fund", percentage: 50, color: "bg-green-500" },
    { source: "DAO Treasury", allocation: "30% to community operations", percentage: 30, color: "bg-blue-500" },
    { source: "Investor Returns", allocation: "20% to platform sustainability", percentage: 20, color: "bg-purple-500" }
  ];

  return (
    <section id="futures" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Futures-Based Funding Model
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Revolutionary financing through E-Waste Futures Tokens (EWFTs). Manufacturers pay future offset fees, 
            creating sustainable funding for recycling operations today.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Active Futures Contracts</h3>
                <Button className="bg-gradient-to-r from-green-500 to-blue-600">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Create Contract
                </Button>
              </div>
              
              <div className="space-y-4">
                {futuresContracts.map((contract) => (
                  <Card key={contract.id} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold">{contract.title}</h4>
                          <Badge 
                            variant={contract.status === "active" ? "default" : "secondary"}
                          >
                            {contract.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{contract.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>ID: {contract.id}</span>
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            Expires: {contract.expiry}
                          </span>
                          <span>Backed by: {contract.backing}</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-lg font-bold">${contract.price}</span>
                          <span className={`text-sm ${contract.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {contract.change > 0 ? '+' : ''}{contract.change}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">Volume: {contract.volume}</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-green-500 hover:bg-green-600">Buy EWFT</Button>
                      <Button size="sm" variant="outline">Sell</Button>
                      <Button size="sm" variant="ghost">Details</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white">
              <h3 className="text-xl font-bold mb-4">How Futures Funding Works</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Manufacturers Pay</h4>
                  <p className="text-sm text-purple-100">$1 future offset fee per device sold in Zugdidi</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Tokens Created</h4>
                  <p className="text-sm text-purple-100">Fees tokenized into tradeable EWFT contracts</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Instant Funding</h4>
                  <p className="text-sm text-purple-100">Recyclers get operational capital immediately</p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Market Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Market Cap</span>
                  <span className="font-bold text-lg">$127,450</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">24h Volume</span>
                  <span className="font-medium">$8,230</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Active Contracts</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Avg. Price</span>
                  <span className="font-medium text-green-600">$1.18 <span className="text-xs">+2.1%</span></span>
                </div>
              </div>
              
              <Button className="w-full mt-4" variant="outline">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Full Analytics
              </Button>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Revenue Distribution</h3>
              <div className="space-y-4">
                {revenueBreakdown.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{item.source}</span>
                      <span>{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${item.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-600">{item.allocation}</p>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 bg-green-50 border-green-200">
              <h3 className="text-lg font-semibold mb-3 text-green-800">Investment Opportunity</h3>
              <p className="text-sm text-green-700 mb-4">
                Invest in EWFT tokens to support sustainable recycling while earning returns from device offset fees.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Projected Annual Return:</span>
                  <span className="font-bold text-green-600">12-18%</span>
                </div>
                <div className="flex justify-between">
                  <span>Minimum Investment:</span>
                  <span className="font-medium">$100</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                Start Investing
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturesMarketplace;
