
import React from 'react';
import { Badge } from '@/components/ui/badge';

const Gallery = () => {
  const portfolioItems = [
    {
      category: "Cosmetics",
      title: "Premium Skincare Bottles",
      description: "Elegant heat transfer labels with metallic accents"
    },
    {
      category: "Food & Beverage",
      title: "Artisan Sauce Jars",
      description: "Full-wrap labels with photographic quality printing"
    },
    {
      category: "Automotive",
      title: "Motor Oil Containers",
      description: "Durable labels with superior chemical resistance"
    },
    {
      category: "Household",
      title: "Cleaning Product Line",
      description: "Vibrant multi-color designs with 360° coverage"
    },
    {
      category: "Paints",
      title: "Premium Paint Cans",
      description: "Professional labeling with scratch resistance"
    },
    {
      category: "Personal Care",
      title: "Shampoo Bottles",
      description: "Waterproof labels with luxury finish"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800">Portfolio Gallery</Badge>
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Transforming Products Worldwide
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our diverse portfolio of successful projects across industries. 
            Each product showcases the superior quality and aesthetic appeal 
            achieved through our advanced heat transfer technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-slate-400 opacity-50">📦</div>
                </div>
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-blue-100 text-blue-800 text-xs">
                  {item.category}
                </Badge>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to See Your Products Transformed?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl">
              Contact our team to discuss your specific requirements and see how 
              our heat transfer labels can enhance your product's appeal and market presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Request Samples
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
