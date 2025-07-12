
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: ["info@anaspaltic.com", "sales@anaspaltic.com"],
      action: "Send Email"
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      action: "Call Now"
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      details: ["Industrial District", "Manufacturing Hub, City"],
      action: "Get Directions"
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      action: "Schedule Visit"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Get In Touch</Badge>
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to transform your products with world-class heat transfer labels? 
            Our expert team is here to help you find the perfect solution for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Industry
                    </label>
                    <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors">
                      <option value="">Select your industry</option>
                      <option value="paints">Paints & Coatings</option>
                      <option value="food">Food & Beverage</option>
                      <option value="cosmetics">Cosmetics & Personal Care</option>
                      <option value="automotive">Automotive & Lubricants</option>
                      <option value="household">Household Products</option>
                      <option value="agro">Agro-Chemicals & Fertilizers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-vertical"
                      placeholder="Tell us about your project requirements, materials, quantities, and timeline..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-blue-600 mt-1">{info.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800 mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-slate-600 text-sm mb-1">
                          {detail}
                        </p>
                      ))}
                      <button className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors mt-2">
                        {info.action} →
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="shadow-lg bg-gradient-to-br from-blue-600 to-purple-700 text-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MessageSquare size={24} className="mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Quick Response</h4>
                    <p className="text-sm opacity-90 mb-3">
                      Need immediate assistance? Our technical team typically responds within 2-4 hours during business days.
                    </p>
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                      Chat With Expert
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
