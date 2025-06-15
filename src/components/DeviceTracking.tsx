
import React from 'react';
import { Smartphone, Tv, Refrigerator, QrCode, MapPin, Clock } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const DeviceTracking = () => {
  const devices = [
    {
      id: "MOB-2024-001",
      type: "smartphone",
      icon: Smartphone,
      name: "Samsung Galaxy A54",
      status: "Active Use",
      location: "Zugdidi Center",
      lifecycle: 75,
      nftId: "#12847",
      owner: "0x742d...3f9a"
    },
    {
      id: "TV-2024-045",
      type: "television",
      icon: Tv,
      name: "LG Smart TV 43\"",
      status: "Collection Point",
      location: "School #12",
      lifecycle: 95,
      nftId: "#12848",
      owner: "Collection Center"
    },
    {
      id: "REF-2023-289",
      type: "refrigerator",
      icon: Refrigerator,
      name: "Bosch KGN Series",
      status: "Processing",
      location: "ReLoop Facility",
      lifecycle: 100,
      nftId: "#12849",
      owner: "Recycling Partner"
    }
  ];

  return (
    <section id="tracking" className="py-20 px-4 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Device Lifecycle Tracking
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Every electronic device gets a digital twin on the blockchain, enabling full transparency 
            from purchase to responsible recycling.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {devices.map((device) => {
              const Icon = device.icon;
              return (
                <Card key={device.id} className="p-6 bg-white/80 backdrop-blur-sm border-l-4 border-l-green-500 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{device.name}</h3>
                        <p className="text-sm text-gray-600">ID: {device.id}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={device.status === "Active Use" ? "default" : device.status === "Collection Point" ? "secondary" : "destructive"}
                      className="ml-2"
                    >
                      {device.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Lifecycle Progress</span>
                      <span className="font-medium">{device.lifecycle}%</span>
                    </div>
                    <Progress value={device.lifecycle} className="h-2" />
                    
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{device.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <QrCode className="w-4 h-4" />
                        <span>NFT {device.nftId}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">How It Works</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold">Device Registration</h4>
                  <p className="text-white/90 text-sm">Each device gets a unique QR/NFC tag linked to blockchain NFT</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold">Lifecycle Tracking</h4>
                  <p className="text-white/90 text-sm">All transactions, repairs, and movements are recorded immutably</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold">Responsible Recycling</h4>
                  <p className="text-white/90 text-sm">Full transparency in disposal and material recovery processes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceTracking;
