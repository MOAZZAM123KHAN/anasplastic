
import React, { useState } from 'react';
import { X, Send, Package, Palette, Globe, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectInquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectInquiryForm = ({ isOpen, onClose }: ProjectInquiryFormProps) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    industry: '',
    productType: '',
    applicationSurface: '',
    colorRequirement: '',
    quantity: '',
    timeline: '',
    additionalRequirements: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const industries = [
    'Paints & Coatings', 'Lubrication Oil', 'Household Products', 
    'Food Packaging', 'Cosmetics', 'Writing Instruments', 
    'Toys', 'Fertilizers', 'Batteries', 'Agro-Chemicals'
  ];

  const surfaces = [
    'PP (Polypropylene)', 'PS (Polystyrene)', 'PET', 'ABS', 
    'PC (Polycarbonate)', 'PVC', 'PE (Polyethylene)', 'Wood', 
    'Steel/Metal', 'Ceramics', 'Glass'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Project inquiry submitted:', formData);
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  if (!isOpen) return null;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
          <div className="w-16 h-16 mx-auto mb-6 gradient-primary rounded-full flex items-center justify-center">
            <CheckCircle className="text-white" size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-slate-800">Thank You!</h3>
          <p className="text-muted-foreground mb-6">
            Your project inquiry has been submitted successfully. Our team will contact you within 24 hours to discuss your requirements.
          </p>
          <Button onClick={onClose} className="gradient-primary text-white">
            Close
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-border p-6 rounded-t-3xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Start Your Project</h2>
              <p className="text-muted-foreground">Get a custom quote for your heat transfer needs</p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X size={24} />
            </Button>
          </div>
          
          {/* Progress Indicator */}
          <div className="flex items-center mt-4 space-x-2">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep ? 'gradient-primary text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step}
                </div>
                {step < 3 && <div className={`w-8 h-0.5 ${step < currentStep ? 'bg-primary' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Step 1: Company Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <Package className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-slate-800">Company Information</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company Name *</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Contact Name *</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Industry *</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  required
                >
                  <option value="">Select your industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Step 2: Project Requirements */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <Palette className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-slate-800">Project Requirements</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Product Type *</label>
                  <select
                    name="productType"
                    value={formData.productType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    required
                  >
                    <option value="">Select product type</option>
                    <option value="heat-transfer-labels">Heat Transfer Labels</option>
                    <option value="hot-stamping-foils">Hot Stamping Foils</option>
                    <option value="both">Both Products</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Application Surface *</label>
                  <select
                    name="applicationSurface"
                    value={formData.applicationSurface}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    required
                  >
                    <option value="">Select surface type</option>
                    {surfaces.map((surface) => (
                      <option key={surface} value={surface}>{surface}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Color Requirement</label>
                  <input
                    type="text"
                    name="colorRequirement"
                    value={formData.colorRequirement}
                    onChange={handleInputChange}
                    placeholder="e.g., 4 colors, full color, metallic"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Expected Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    placeholder="e.g., 10,000 pieces"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Project Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="">Select timeline</option>
                  <option value="urgent">Urgent (1-2 weeks)</option>
                  <option value="standard">Standard (3-4 weeks)</option>
                  <option value="flexible">Flexible (1-2 months)</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Additional Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-slate-800">Additional Information</h3>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Additional Requirements or Special Instructions
                </label>
                <textarea
                  name="additionalRequirements"
                  value={formData.additionalRequirements}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Please describe any specific requirements, design considerations, or questions you have about your project..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                />
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Our technical team will review your requirements</li>
                  <li>• We'll contact you within 24 hours to discuss details</li>
                  <li>• You'll receive a detailed quote and timeline</li>
                  <li>• We can provide samples for testing if needed</li>
                </ul>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={currentStep === 1 ? 'invisible' : ''}
            >
              Previous
            </Button>
            
            {currentStep < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="gradient-primary text-white"
              >
                Next Step
              </Button>
            ) : (
              <Button
                type="submit"
                className="gradient-primary text-white"
              >
                <Send className="mr-2" size={18} />
                Submit Inquiry
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectInquiryForm;
