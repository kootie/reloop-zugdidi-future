
import React from 'react';
import { Target, TreePine, Users, Building, Award, Globe } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ImpactMetrics = () => {
  const currentMetrics = [
    { label: "Devices Tracked", value: 10000, target: 10000, unit: "", icon: Target },
    { label: "E-waste Collected", value: 25, target: 50, unit: "tons", icon: TreePine },
    { label: "DAO Members", value: 663, target: 1000, unit: "", icon: Users },
    { label: "Partner Organizations", value: 12, target: 20, unit: "", icon: Building }
  ];

  const sdgGoals = [
    {
      number: 11,
      title: "Sustainable Cities",
      description: "Cleaner public spaces through community-led e-waste management",
      progress: 75,
      color: "bg-orange-500"
    },
    {
      number: 12,
      title: "Responsible Consumption",
      description: "Circular economy through extended producer responsibility",
      progress: 68,
      color: "bg-yellow-500"
    },
    {
      number: 13,
      title: "Climate Action",
      description: "Reduced emissions from proper e-waste recycling",
      progress: 82,
      color: "bg-green-500"
    },
    {
      number: 16,
      title: "Strong Institutions",
      description: "Transparent governance and community trust building",
      progress: 71,
      color: "bg-blue-500"
    }
  ];

  const futureProjections = [
    { year: "2024", devices: "25K", waste: "62T", members: "1.5K" },
    { year: "2025", devices: "50K", waste: "125T", members: "3K" },
    { year: "2026", devices: "100K", waste: "250T", members: "5K" }
  ];

  return (
    <section id="impact" className="py-20 px-4 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Impact Metrics & SDG Alignment
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Tracking our progress toward sustainable e-waste management and measuring our contribution 
            to the UN Sustainable Development Goals.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Year 1 Progress</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {currentMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  const progress = (metric.value / metric.target) * 100;
                  
                  return (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{metric.label}</h4>
                          <p className="text-sm text-gray-600">
                            {metric.value.toLocaleString()} {metric.unit} / {metric.target.toLocaleString()} {metric.unit}
                          </p>
                        </div>
                      </div>
                      <Progress value={progress} className="h-2" />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{progress.toFixed(0)}% complete</span>
                        <span className={progress >= 100 ? "text-green-600 font-medium" : ""}>
                          {progress >= 100 ? "Target Achieved! 🎉" : `${(metric.target - metric.value).toLocaleString()} ${metric.unit} remaining`}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">SDG Alignment & Progress</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {sdgGoals.map((goal, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className={`w-12 h-12 ${goal.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                        {goal.number}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{goal.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{goal.description}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span className="font-medium">{goal.progress}%</span>
                          </div>
                          <Progress value={goal.progress} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-green-500 to-blue-600 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-8 h-8" />
                <h3 className="text-xl font-bold">Trust Score Improvement</h3>
              </div>
              
              <div className="text-center mb-4">
                <div className="text-4xl font-bold mb-2">+23%</div>
                <p className="text-green-100">Community satisfaction increase</p>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Transparency Rating:</span>
                  <span className="font-bold">9.2/10</span>
                </div>
                <div className="flex justify-between">
                  <span>Participation Rate:</span>
                  <span className="font-bold">87%</span>
                </div>
                <div className="flex justify-between">
                  <span>Government Trust:</span>
                  <span className="font-bold">74% (+17%)</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Future Projections</h3>
              <div className="space-y-4">
                {futureProjections.map((projection, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-lg text-center mb-3">{projection.year}</h4>
                    <div className="grid grid-cols-3 gap-2 text-center text-sm">
                      <div>
                        <p className="font-bold text-green-600">{projection.devices}</p>
                        <p className="text-gray-600">Devices</p>
                      </div>
                      <div>
                        <p className="font-bold text-blue-600">{projection.waste}</p>
                        <p className="text-gray-600">E-waste</p>
                      </div>
                      <div>
                        <p className="font-bold text-purple-600">{projection.members}</p>
                        <p className="text-gray-600">Members</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 bg-blue-50 border-blue-200">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-blue-800">Global Replication</h3>
              </div>
              <p className="text-sm text-blue-700 mb-3">
                ReLoop's open-source model is designed for global adoption, with interest from municipalities in:
              </p>
              <div className="text-sm space-y-1 text-blue-600">
                <div>• Batumi, Georgia</div>
                <div>• Kutaisi, Georgia</div>
                <div>• Tirana, Albania</div>
                <div>• Skopje, North Macedonia</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
