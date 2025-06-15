
import React from 'react';
import { Vote, Users, MessageSquare, Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const DAOGovernance = () => {
  const proposals = [
    {
      id: "DAO-001",
      title: "Increase ECT rewards for school collection programs",
      description: "Proposal to boost rewards from 50 to 75 ECT per device for educational institutions",
      status: "active",
      votes: { for: 127, against: 23, total: 150 },
      timeLeft: "3 days",
      category: "Rewards"
    },
    {
      id: "DAO-002", 
      title: "Partnership with Batumi recycling facility",
      description: "Establish formal partnership for large appliance processing",
      status: "passed",
      votes: { for: 89, against: 12, total: 101 },
      timeLeft: "Ended",
      category: "Partnerships"
    },
    {
      id: "DAO-003",
      title: "Mobile app development funding",
      description: "Allocate 50,000 ECT from treasury for native mobile application",
      status: "discussion",
      votes: { for: 0, against: 0, total: 0 },
      timeLeft: "5 days to vote",
      category: "Development"
    }
  ];

  const members = [
    { role: "Citizens", count: 487, icon: Users },
    { role: "Recyclers", count: 12, icon: CheckCircle },
    { role: "Youth Volunteers", count: 156, icon: MessageSquare },
    { role: "CSOs", count: 8, icon: Calendar }
  ];

  return (
    <section id="dao" className="py-20 px-4 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Community DAO Governance
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Transparent, community-led decision making through decentralized governance. 
            Every stakeholder has a voice in shaping Zugdidi's e-waste future.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Active Proposals</h3>
                <Button className="bg-gradient-to-r from-green-500 to-blue-600">
                  <Vote className="w-4 h-4 mr-2" />
                  Submit Proposal
                </Button>
              </div>
              
              <div className="space-y-4">
                {proposals.map((proposal) => (
                  <Card key={proposal.id} className="p-4 border-l-4 border-l-green-500">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold">{proposal.title}</h4>
                          <Badge 
                            variant={
                              proposal.status === "active" ? "default" :
                              proposal.status === "passed" ? "secondary" : "outline"
                            }
                          >
                            {proposal.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{proposal.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>ID: {proposal.id}</span>
                          <span>Category: {proposal.category}</span>
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {proposal.timeLeft}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {proposal.status === "active" && (
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Support: {proposal.votes.for} votes</span>
                          <span>Against: {proposal.votes.against} votes</span>
                        </div>
                        <Progress 
                          value={(proposal.votes.for / proposal.votes.total) * 100} 
                          className="h-2"
                        />
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-green-500 hover:bg-green-600">Vote For</Button>
                          <Button size="sm" variant="outline">Vote Against</Button>
                          <Button size="sm" variant="ghost">Discuss</Button>
                        </div>
                      </div>
                    )}
                    
                    {proposal.status === "passed" && (
                      <div className="flex items-center text-green-600 text-sm">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Proposal passed with {((proposal.votes.for / proposal.votes.total) * 100).toFixed(1)}% support
                      </div>
                    )}
                    
                    {proposal.status === "discussion" && (
                      <div className="flex items-center text-blue-600 text-sm">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        In discussion phase - voting opens soon
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <h3 className="text-xl font-bold mb-4">DAO Membership</h3>
              <div className="space-y-4">
                {members.map((member, index) => {
                  const Icon = member.icon;
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5" />
                        <span>{member.role}</span>
                      </div>
                      <span className="font-bold">{member.count}</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/20">
                <div className="text-center">
                  <p className="text-2xl font-bold">663</p>
                  <p className="text-blue-100">Total Active Members</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Governance Features</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Smart contract voting</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Transparent treasury management</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Weighted voting by contribution</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Automated proposal execution</span>
                </div>
              </div>
              
              <Button className="w-full mt-4" variant="outline">
                Join DAO Today
              </Button>
            </Card>
            
            <Card className="p-6 bg-amber-50 border-amber-200">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-800 mb-2">Upcoming Vote</h4>
                  <p className="text-sm text-amber-700">Municipal budget allocation proposal opens tomorrow at 10:00 GMT+4</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DAOGovernance;
