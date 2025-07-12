
import React from 'react';
import { X, Play, Download, FileText, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  if (!isOpen) return null;

  const demoVideos = [
    {
      title: "Heat Transfer Label Application Process",
      duration: "3:45",
      description: "Complete step-by-step guide showing how heat transfer labels are applied to various surfaces",
      thumbnail: "🎬",
      category: "Process Demo"
    },
    {
      title: "Hot Stamping Foil Techniques",
      duration: "2:30",
      description: "Professional demonstration of hot stamping foil application on different materials",
      thumbnail: "🔥",
      category: "Technique Guide"
    },
    {
      title: "Quality Testing & Durability",
      duration: "4:12",
      description: "See how our labels withstand scratch, water, and chemical resistance tests",
      thumbnail: "🔬",
      category: "Quality Assurance"
    },
    {
      title: "Multi-Color Printing Capabilities",
      duration: "3:20",
      description: "Showcase of our 14-color printing technology and photographic quality results",
      thumbnail: "🎨",
      category: "Technology"
    }
  ];

  const resources = [
    {
      title: "Product Specification Sheet",
      type: "PDF",
      size: "2.4 MB",
      icon: FileText,
      description: "Detailed technical specifications for all our products"
    },
    {
      title: "Application Guide",
      type: "PDF",
      size: "1.8 MB",
      icon: FileText,
      description: "Step-by-step application instructions and best practices"
    },
    {
      title: "Sample Gallery",
      type: "Images",
      size: "5.2 MB",
      icon: Image,
      description: "High-resolution images of completed projects across industries"
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-border p-6 rounded-t-3xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Demo & Resources</h2>
              <p className="text-muted-foreground">Explore our products and capabilities</p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X size={24} />
            </Button>
          </div>
        </div>

        <div className="p-6">
          {/* Demo Videos Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Demo Videos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {demoVideos.map((video, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 hover-lift group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {video.thumbnail}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {video.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{video.duration}</span>
                      </div>
                      <h4 className="font-semibold text-slate-800 mb-2 group-hover:text-primary transition-colors">
                        {video.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {video.description}
                      </p>
                      <Button size="sm" className="gradient-primary text-white">
                        <Play className="mr-2" size={16} />
                        Watch Demo
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Download Resources</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {resources.map((resource, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover-lift group cursor-pointer">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <resource.icon className="text-white" size={24} />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">{resource.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{resource.description}</p>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-4">
                      <span>{resource.type}</span>
                      <span>•</span>
                      <span>{resource.size}</span>
                    </div>
                    <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors">
                      <Download className="mr-2" size={14} />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Product Showcase */}
          <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Interactive Product Showcase</h3>
              <p className="text-muted-foreground">
                Explore our products in detail with interactive 3D models and before/after comparisons
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h4 className="font-semibold text-slate-800 mb-4">Heat Transfer Labels</h4>
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center animate-pulse">
                      <Play className="text-white" size={24} />
                    </div>
                    <p className="text-sm font-medium text-slate-700">Interactive 3D Model</p>
                  </div>
                </div>
                <Button className="w-full gradient-primary text-white">
                  Launch Interactive Demo
                </Button>
              </div>
              
              <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h4 className="font-semibold text-slate-800 mb-4">Hot Stamping Foils</h4>
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                      <Play className="text-white" size={24} />
                    </div>
                    <p className="text-sm font-medium text-slate-700">Before/After Gallery</p>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:opacity-90">
                  View Transformations
                </Button>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6">
                Get a personalized quote and technical consultation for your specific requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="gradient-primary text-white px-8">
                  Get Custom Quote
                </Button>
                <Button variant="outline" className="px-8">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
