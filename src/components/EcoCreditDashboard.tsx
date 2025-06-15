
import React from 'react';
import { Coins, Gift, Users, TrendingUp, Recycle } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const EcoCreditDashboard = () => {
  const userStats = {
    balance: 1247,
    earned: 2150,
    recycled: 12,
    referrals: 8
  };

  const rewardActions = [
    { action: "Device Drop-off", credits: 50, icon: Recycle },
    { action: "Community Referral", credits: 25, icon: Users },
    { action: "Awareness Campaign", credits: 100, icon: Gift },
    { action: "DAO Participation", credits: 75, icon: TrendingUp }
  ];

  return (
    <section id="credits" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Eco-Credit Token System
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Earn ECT tokens for positive environmental actions and redeem them for municipal services, 
            local goods, or convert to other cryptocurrencies.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Your ECT Wallet</h3>
                <Coins className="w-8 h-8" />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold">{userStats.balance}</p>
                  <p className="text-green-100">Current Balance</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">{userStats.earned}</p>
                  <p className="text-green-100">Total Earned</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">{userStats.recycled}</p>
                  <p className="text-green-100">Items Recycled</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">{userStats.referrals}</p>
                  <p className="text-green-100">Referrals Made</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Earning Opportunities</h3>
              <div className="space-y-4">
                {rewardActions.map((reward, index) => {
                  const Icon = reward.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="font-medium">{reward.action}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-green-600">+{reward.credits} ECT</span>
                        <Button size="sm" variant="outline">Take Action</Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Redemption Options</h3>
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-2">Municipal Services</h4>
                  <p className="text-sm text-gray-600 mb-3">Waste pickup, utility discounts</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">50 ECT = 10% discount</span>
                    <Button size="sm">Redeem</Button>
                  </div>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-2">Local Marketplace</h4>
                  <p className="text-sm text-gray-600 mb-3">Food, goods from local vendors</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">100 ECT = 25 GEL</span>
                    <Button size="sm">Browse</Button>
                  </div>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-2">Crypto Exchange</h4>
                  <p className="text-sm text-gray-600 mb-3">Convert to USDC or other tokens</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Rate: 1 ECT = $0.02</span>
                    <Button size="sm">Exchange</Button>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Monthly Challenge</h3>
              <p className="text-sm text-blue-700 mb-4">Recycle 5 devices this month for bonus rewards!</p>
              <Progress value={40} className="mb-3" />
              <div className="flex justify-between text-sm">
                <span className="text-blue-600">2 of 5 devices</span>
                <span className="font-medium text-blue-800">+500 ECT Bonus</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoCreditDashboard;
