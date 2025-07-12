import React, { useState } from 'react';
import { ArrowRight, Award, Globe, Palette, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProjectInquiryForm from './ProjectInquiryForm';
import DemoModal from './DemoModal';

const Hero = () => {
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section className="pt-24 pb-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
                🚀 Leading Heat Transfer Technology
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-slate-800">Premium</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Heat Transfer
                </span>
                <br />
                <span className="text-slate-800">Solutions</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Transform your products with world-class decorative solutions. 
                Achieve the "no-label" look with our advanced heat transfer labels 
                and hot stamping foils - delivering <span className="text-primary font-semibold">photographic quality printing</span> 
                across 14 colors on 1000mm width.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-primary text-white px-8 py-4 text-lg hover:opacity-90 transition-all hover-lift animate-glow"
                onClick={() => setIsProjectFormOpen(true)}
              >
                Start Your Project <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg border-2 hover:bg-accent transition-all hover-lift group"
                onClick={() => setIsDemoModalOpen(true)}
              >
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform animate-glow">
                  <Award className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-1">14</div>
                <div className="text-sm text-muted-foreground font-medium">Color Printing</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 gradient-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-1">5+</div>
                <div className="text-sm text-muted-foreground font-medium">Continents</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Star className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-1">360°</div>
                <div className="text-sm text-muted-foreground font-medium">Application</div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Main Feature Card */}
            <div className="relative z-10 bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover-lift">
              <div className="absolute -top-4 -right-4 w-8 h-8 gradient-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Why Choose Anaspaltic?</h3>
              <div className="space-y-4">
                {[
                  "Cost-effective compared to traditional printing",
                  "Scratch & water resistant with strong adhesion",
                  "Fully recyclable mono-component containers",
                  "Simple, fast transfer process"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-blue-500/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-purple-500/20 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ProjectInquiryForm 
        isOpen={isProjectFormOpen} 
        onClose={() => setIsProjectFormOpen(false)} 
      />
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;
