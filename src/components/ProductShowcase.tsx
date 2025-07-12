
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, Palette, Shield, Recycle, ArrowRight, Sparkles } from 'lucide-react';

const ProductShowcase = () => {
  const products = [
    {
      title: "Heat Transfer Labels (HTLs)",
      description: "Advanced decorative labels that create the perfect 'no-label' look with 360-degree application capability.",
      features: [
        "Up to 14 colors in single pass",
        "1000mm maximum width",
        "Photographic quality printing",
        "Multi-surface compatibility"
      ],
      icon: <Palette className="text-white" size={32} />,
      gradient: "from-blue-500 to-purple-600",
      delay: "0s"
    },
    {
      title: "Hot Stamping Foils",
      description: "Premium metallic and holographic foils for luxury product decoration and brand enhancement.",
      features: [
        "Metallic and holographic effects",
        "Superior adhesion properties",
        "High-temperature resistance",
        "Precise application control"
      ],
      icon: <Zap className="text-white" size={32} />,
      gradient: "from-purple-500 to-pink-600",
      delay: "0.2s"
    }
  ];

  const benefits = [
    {
      icon: <Shield size={28} />,
      title: "Ultimate Durability",
      description: "Scratch resistance, water resistance, and exceptional lightfastness for long-lasting results.",
      gradient: "from-emerald-500 to-blue-500"
    },
    {
      icon: <Recycle size={28} />,
      title: "Eco-Friendly",
      description: "Fully recyclable mono-component containers supporting sustainable packaging solutions.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Sparkles size={28} />,
      title: "Cost-Effective",
      description: "Superior alternative to traditional printing with reduced secondary operations and material waste.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white to-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-6 py-3 text-base font-medium">
            🎯 Our Products
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-8">
            World-Class
            <span className="block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Decorative Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Leading international-level printing capabilities with innovative 
            heat transfer technology that transforms ordinary products into 
            <span className="text-primary font-semibold"> premium branded experiences</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift bg-white/70 backdrop-blur-sm overflow-hidden"
              style={{animationDelay: product.delay}}
            >
              <CardContent className="p-8 relative">
                {/* Background gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.gradient} rounded-full opacity-10 -translate-y-16 translate-x-16`}></div>
                
                <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform animate-glow`}>
                  {product.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  {product.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-4 group/item">
                      <div className={`w-3 h-3 bg-gradient-to-r ${product.gradient} rounded-full group-hover/item:scale-125 transition-transform`}></div>
                      <span className="text-slate-700 group-hover/item:text-slate-900 transition-colors font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group/btn hover:bg-primary hover:text-white transition-all">
                  Learn More
                  <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group hover-lift">
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-3xl mb-6 text-white group-hover:scale-110 transition-transform animate-glow`}>
                {benefit.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors">
                {benefit.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
