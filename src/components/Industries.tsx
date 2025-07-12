
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const Industries = () => {
  const materials = [
    "PP", "PS", "PET", "ABS", "SAN", "PC", "PVC", "PE", "HDPE", "LDPE", "HIPS", "GIPS"
  ];

  const industries = [
    {
      name: "Paints & Coatings",
      description: "Professional labeling for paint cans and coating containers with chemical resistance.",
      applications: ["Paint cans", "Primer containers", "Specialty coatings"]
    },
    {
      name: "Food & Beverage",
      description: "Food-safe labels that maintain quality and appearance throughout the supply chain.",
      applications: ["Bottles", "Jars", "Containers", "Packaging"]
    },
    {
      name: "Cosmetics & Personal Care",
      description: "Premium aesthetic labels that enhance brand appeal and product differentiation.",
      applications: ["Bottles", "Tubes", "Compacts", "Dispensers"]
    },
    {
      name: "Automotive & Lubricants",
      description: "Durable labels for oil containers and automotive products with superior adhesion.",
      applications: ["Oil bottles", "Fluid containers", "Automotive parts"]
    },
    {
      name: "Household Products",
      description: "Versatile labeling solutions for cleaning products and home care items.",
      applications: ["Detergent bottles", "Cleaning supplies", "Storage containers"]
    },
    {
      name: "Agro-Chemicals & Fertilizers",
      description: "Chemical-resistant labels designed for agricultural and industrial applications.",
      applications: ["Chemical containers", "Fertilizer bags", "Agricultural products"]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">Industries & Applications</Badge>
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Versatile Solutions Across Industries
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our heat transfer labels and hot stamping foils work seamlessly across 
            diverse materials and industries, providing consistent quality and performance.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
            Compatible Materials & Surfaces
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {materials.map((material, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="font-semibold text-slate-700">{material}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-slate-600">
              <span className="font-semibold">Plus:</span> Wood, Steel, Metal, Ceramics, Glass, and all Thermoplastics
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-slate-800 mb-3">{industry.name}</h4>
                <p className="text-slate-600 mb-4">{industry.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-700">Applications:</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.applications.map((app, appIndex) => (
                      <Badge key={appIndex} variant="secondary" className="text-xs">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
