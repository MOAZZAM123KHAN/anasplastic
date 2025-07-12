
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Recycle, Leaf, Globe, Award } from 'lucide-react';

const Sustainability = () => {
  const features = [
    {
      icon: <Recycle size={32} />,
      title: "Fully Recyclable",
      description: "Our mono-component containers are 100% recyclable, supporting circular economy principles and reducing environmental impact."
    },
    {
      icon: <Leaf size={32} />,
      title: "Eco-Friendly Process",
      description: "Advanced transfer technology eliminates waste from secondary operations, reducing material consumption and production footprint."
    },
    {
      icon: <Globe size={32} />,
      title: "Sustainable Innovation",
      description: "Continuous development of environmentally conscious solutions that don't compromise on quality or performance."
    },
    {
      icon: <Award size={32} />,
      title: "Industry Leadership",
      description: "Setting new standards for sustainable labeling practices while maintaining the highest quality decorative results."
    }
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">Sustainability</Badge>
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Environmental Responsibility Meets Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            At Anaspaltic, we believe that premium quality and environmental 
            responsibility go hand in hand. Our innovative solutions deliver 
            outstanding results while protecting our planet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                Sustainable by Design
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Reduced Waste Stream</h4>
                    <p className="text-slate-600">Elimination of secondary operations significantly reduces production waste and material consumption.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Energy Efficiency</h4>
                    <p className="text-slate-600">Streamlined transfer process requires less energy compared to traditional multi-step printing methods.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Chemical Reduction</h4>
                    <p className="text-slate-600">Advanced formulations minimize the use of harmful chemicals while maintaining superior performance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Our Commitment</h4>
              <p className="text-lg leading-relaxed">
                "We're dedicated to advancing sustainable labeling technologies 
                that protect our environment while delivering the premium quality 
                our customers expect. Every innovation we develop considers both 
                performance and environmental impact."
              </p>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="font-semibold">Anaspaltic Leadership Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
