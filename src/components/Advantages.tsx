
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Target, Zap, DollarSign, Palette, Shield } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: <Palette size={32} />,
      title: "No-Label Look & 360° Application",
      description: "Achieve seamless integration with your product design through our advanced transfer technology that creates an invisible label appearance with complete surface coverage."
    },
    {
      icon: <DollarSign size={32} />,
      title: "Cost-Effective Solution",
      description: "Significantly reduce costs compared to traditional and modern printing processes while eliminating secondary operations and reducing material waste."
    },
    {
      icon: <Palette size={32} />,
      title: "Photographic Quality Printing",
      description: "Multi-colored pictures and photographic quality printing with up to 14 colors on 1000mm width - achieving unmatched visual impact and brand recognition."
    },
    {
      icon: <Shield size={32} />,
      title: "Superior Durability",
      description: "Exceptional scratch and water resistance, strong adhesion properties, squeeze and product resistance, outstanding lightfastness, and high ink opacity for long-lasting results."
    },
    {
      icon: <Target size={32} />,
      title: "Precision & Speed",
      description: "Simple and fast transfer process with accurate label placement, eliminating secondary operations for retail packaging and reducing production time."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Enhanced Product Value",
      description: "Transform ordinary products into premium branded experiences, increasing perceived value and aesthetic appeal while maintaining cost efficiency."
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Why Choose Anaspaltic</Badge>
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Unmatched Advantages in Heat Transfer Technology
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience the perfect combination of technical excellence, cost efficiency, 
            and aesthetic appeal that sets Anaspaltic apart in the industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="group p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{advantage.title}</h3>
              <p className="text-slate-600 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Products?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join hundreds of satisfied customers worldwide who trust Anaspaltic 
            for their heat transfer labeling needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Quote Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
