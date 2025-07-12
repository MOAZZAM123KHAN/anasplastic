
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Globe, MapPin, Users, Award } from 'lucide-react';

const GlobalReach = () => {
  const regions = [
    { name: "Europe", markets: ["Germany", "France", "UK", "Netherlands"] },
    { name: "Americas", markets: ["USA", "Brazil", "Mexico", "Argentina"] },
    { name: "Africa", markets: ["South Africa", "Nigeria", "Egypt", "Kenya"] },
    { name: "Middle East", markets: ["UAE", "Saudi Arabia", "Turkey", "Iran"] },
    { name: "Southeast Asia", markets: ["Thailand", "Vietnam", "Malaysia", "Indonesia"] }
  ];

  const stats = [
    { icon: <Globe size={32} />, number: "5+", label: "Continents Served" },
    { icon: <MapPin size={32} />, number: "25+", label: "Countries Reached" },
    { icon: <Users size={32} />, number: "500+", label: "Satisfied Clients" },
    { icon: <Award size={32} />, number: "15+", label: "Years Experience" }
  ];

  return (
    <section id="global" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-600 text-white">Global Presence</Badge>
          <h2 className="text-4xl font-bold mb-6">
            Trusted Worldwide for Excellence
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our world-class decorative designs have earned praise from customers 
            across the globe, establishing Anaspaltic as a leading force in 
            international heat transfer technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4 text-white">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {regions.map((region, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-blue-400">{region.name}</h3>
              <ul className="space-y-2">
                {region.markets.map((market, marketIndex) => (
                  <li key={marketIndex} className="text-slate-300 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    {market}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Leading International Capabilities
            </h3>
            <p className="text-lg mb-6 opacity-90">
              With our advanced 14-color printing technology on 1000mm width, 
              we deliver international-level quality that meets the highest 
              global standards for decorative labeling solutions.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Partner With Us Globally
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
