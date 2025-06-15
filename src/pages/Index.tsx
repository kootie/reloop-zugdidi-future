
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import DeviceTracking from '../components/DeviceTracking';
import EcoCreditDashboard from '../components/EcoCreditDashboard';
import DAOGovernance from '../components/DAOGovernance';
import FuturesMarketplace from '../components/FuturesMarketplace';
import ImpactMetrics from '../components/ImpactMetrics';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      <Header />
      <Hero />
      <DeviceTracking />
      <EcoCreditDashboard />
      <DAOGovernance />
      <FuturesMarketplace />
      <ImpactMetrics />
      <Footer />
    </div>
  );
};

export default Index;
