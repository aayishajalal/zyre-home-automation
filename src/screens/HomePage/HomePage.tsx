import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  Play,
  Shield,
  Zap,
  Home,
  Smartphone,
  Users,
  Award,
  CheckCircle,
  Wifi,
  Settings,
  Power,
  Timer,
  Volume2,
  Lightbulb,
  Thermometer,
  Camera,
  Lock
} from "lucide-react";

export const HomePage = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const testimonials = [
    {
      id: 1,
      content: "Zyre's home automation system has completely transformed how we live. The smart switches are incredibly responsive and the mobile app is intuitive. Installation was professional and hassle-free.",
      name: "Rajesh Kumar",
      role: "Homeowner, Chennai",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 2,
      content: "As an interior designer, I recommend Zyre to all my clients. The sleek design blends perfectly with modern interiors, and the functionality is outstanding. Great value for money!",
      name: "Priya Sharma",
      role: "Interior Designer, Mumbai",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 3,
      content: "The voice control feature is amazing! Being able to control all our home devices from anywhere has made our lives so much easier. Highly recommend Zyre for smart home solutions.",
      name: "Amit Patel",
      role: "Tech Enthusiast, Bangalore",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const products = [
    {
      id: 1,
      name: "2 Switch Smart Panel",
      image: "https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
      price: "₹2,999",
      originalPrice: "₹3,999",
      features: ["WiFi Enabled", "Voice Control", "Mobile App", "Timer Function"],
      description: "Perfect for small rooms and apartments. Control 2 devices with smart automation."
    },
    {
      id: 2,
      name: "4 Switch Smart Panel",
      image: "https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₹4,999",
      originalPrice: "₹6,499",
      features: ["WiFi Enabled", "Voice Control", "Mobile App", "Scheduling", "Energy Monitor"],
      description: "Ideal for living rooms and bedrooms. Advanced control for 4 devices with energy monitoring.",
      popular: true
    },
    {
      id: 3,
      name: "8 Switch Smart Panel",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₹8,999",
      originalPrice: "₹11,999",
      features: ["WiFi Enabled", "Voice Control", "Mobile App", "Advanced Scheduling", "Energy Monitor", "Scene Control"],
      description: "Complete home automation solution. Control entire home with advanced features and scene management."
    },
    {
      id: 4,
      name: "Smart Door Lock",
      image: "https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₹12,999",
      originalPrice: "₹15,999",
      features: ["Fingerprint Access", "PIN Code", "Mobile App", "Auto Lock", "Battery Backup"],
      description: "Secure your home with biometric and PIN access. Remote monitoring and control."
    },
    {
      id: 5,
      name: "Smart Security Camera",
      image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₹6,999",
      originalPrice: "₹8,999",
      features: ["1080p HD", "Night Vision", "Motion Detection", "Cloud Storage", "Two-way Audio"],
      description: "Monitor your home 24/7 with HD video quality and smart motion detection alerts."
    },
    {
      id: 6,
      name: "Smart Thermostat",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₹9,999",
      originalPrice: "₹12,999",
      features: ["Temperature Control", "Humidity Monitor", "Energy Saving", "Mobile App", "Voice Control"],
      description: "Intelligent climate control with energy-saving algorithms and remote access."
    }
  ];

  const services = [
    {
      icon: <Home className="w-16 h-16 text-white" />,
      title: "Home Automation",
      description: "Complete smart home solutions for modern living",
      features: ["Light Control", "HVAC Control", "Voice Integration", "Mobile Connectivity", "Energy Management"],
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: <Shield className="w-16 h-16 text-white" />,
      title: "Commercial Solutions",
      description: "Smart automation for offices, stores and malls",
      features: ["AV Control Systems", "Automated Scheduling", "Dimming Controls", "Speed Control", "Centralized Management"],
      bgColor: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: <Zap className="w-16 h-16 text-white" />,
      title: "Industrial Automation",
      description: "Robust solutions for industrial applications",
      features: ["Motor Control", "HVAC Systems", "Dryer Control", "Process Automation", "Remote Monitoring"],
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers", icon: <Users className="w-8 h-8 text-green-600" /> },
    { number: "50+", label: "Projects Completed", icon: <Award className="w-8 h-8 text-green-600" /> },
    { number: "5+", label: "Years Experience", icon: <CheckCircle className="w-8 h-8 text-green-600" /> },
    { number: "24/7", label: "Support Available", icon: <Phone className="w-8 h-8 text-green-600" /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Exact Figma Design */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Figma Style */}
            <div className="flex items-center">
              <div className="text-2xl font-bold tracking-tight">
                <span className="text-green-600"><img src="./public/logo2.jpg" alt="" className="h-16 md:h-24"/></span>
              </div>
            </div>

            {/* Desktop Navigation - Figma Style */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm">HOME</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm">ABOUT</a>
              <a href="#products" className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm">PRODUCTS</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm">SERVICES</a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm">TESTIMONIALS</a>
              
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-sm font-medium">
                <a href="#contact" className="text-white hover:text-green-600 transition-colors font-medium text-sm">GET QUOTE</a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium text-sm">HOME</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium text-sm">ABOUT</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium text-sm">PRODUCTS</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium text-sm">SERVICES</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium text-sm">TESTIMONIALS</a>
              
              <div className="px-3 py-2">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium">
                  <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium text-sm">CONTACT</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Figma Design */}
      <section id="home" className="pt-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh] py-12">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                  Smart Home
                  <span className="block text-green-600">Automation</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transform your home into an intelligent living space with Zyre's 
                  cutting-edge automation solutions. Control everything with a touch.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-medium">
                  EXPLORE PRODUCTS
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-medium">
                  WATCH DEMO
                </Button>
              </div>

              {/* Stats - Figma Style */}
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="flex justify-center">{stat.icon}</div>
                    <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Right Content - Hero Visual */}
            <div className="relative">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Smart home automation"
                  className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
                
                {/* Floating Cards */}
                <div className="absolute top-6 right-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-900">System Online</span>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Thermometer className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="text-lg font-bold text-gray-900">24°C</div>
                      <div className="text-xs text-gray-600">Living Room</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Figma Design */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              About <span className="text-green-600">ZYRE</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the smart home revolution in India with innovative, affordable automation solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Zyre is a dynamic startup revolutionizing smart living in India by offering 
                  affordable, intuitive home automation solutions. From integrated security to 
                  energy-efficient controls, our customizable systems make it easy to control 
                  and monitor your home.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Guided by the motto <strong>"Be smart, live smart,"</strong> we blend innovation 
                  and simplicity to bring smart living within everyone's reach.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Affordable Solutions</h4>
                    <p className="text-gray-600 text-sm">Budget-friendly smart home automation for everyone</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Easy Installation</h4>
                    <p className="text-gray-600 text-sm">Professional setup with minimal disruption</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Voice Control</h4>
                    <p className="text-gray-600 text-sm">Compatible with Alexa and Google Assistant</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                    <p className="text-gray-600 text-sm">Round-the-clock customer assistance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Smart home interior"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - NEW */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our <span className="text-green-600">Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of smart home automation products designed to make your life easier and more efficient
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 relative overflow-hidden">
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    POPULAR
                  </div>
                )}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                  </div>
{/*                   
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                  </div> */}

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                          <span className="text-gray-600 text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* <div className="flex space-x-2 pt-2">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm">
                      BUY NOW
                    </Button>
                    <Button variant="outline" className="flex-1 border-green-600 text-green-600 hover:bg-green-50 text-sm">
                      LEARN MORE
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg font-medium">
              VIEW ALL PRODUCTS
            </Button>
          </div> */}
        </div>
      </section>

      {/* Services Section - Figma Design */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our <span className="text-green-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation solutions for residential, commercial, and industrial applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 overflow-hidden">
                <div className={`${service.bgColor} p-8 text-center text-white`}>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>
                <CardContent className="p-6 bg-white">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white">
                    LEARN MORE
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Figma Design */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What Our <span className="text-green-600">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from satisfied customers across India
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-white shadow-2xl border-0">
              <CardContent className="p-12">
                <div className="text-center space-y-8">
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center space-x-6">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-green-100"
                    />
                    <div className="text-left">
                      <div className="font-bold text-gray-900 text-xl">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600 text-lg">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full w-14 h-14 p-0 bg-white shadow-xl hover:shadow-2xl border-2"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full w-14 h-14 p-0 bg-white shadow-xl hover:shadow-2xl border-2"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Figma Design */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Get In <span className="text-green-600">Touch</span>
            </h2>
            <p className="text-xl text-gray-600">
              Ready to transform your home? Contact our experts today for a free consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="shadow-2xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500 h-12"
                      required
                    />
                    <Input
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500 h-12"
                      required
                    />
                  </div>
                  
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-green-500 focus:ring-green-500 h-12"
                    required
                  />
                  
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-green-500 focus:ring-green-500 h-12"
                    required
                  />
                  
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-green-500 focus:ring-green-500 min-h-[120px]"
                    required
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-medium"
                  >
                    SEND MESSAGE
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-green-100 rounded-xl">
                    <MapPin className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Our Location</h3>
                    <p className="text-gray-600 text-lg">
                      NO 1, Vijaya Nagar,<br />
                      MGR Salai, Neyveli, Cuddalore<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-green-100 rounded-xl">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Email Us</h3>
                    <p className="text-gray-600 text-lg">zyrehomeautomation@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-green-100 rounded-xl">
                    <Phone className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Call Us</h3>
                    <p className="text-gray-600 text-lg">+91 8525928155</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl">
                <h4 className="font-bold text-gray-900 text-lg mb-3">Why Choose Zyre?</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Free consultation and quote</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Professional installation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">1-year warranty on all products</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">24/7 customer support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Figma Design */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="text-3xl font-bold">
                <span className="text-green-500"><img src="./public/logo2.jpg" alt="" className="h-16 md:h-24"/></span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Making smart living accessible and affordable for everyone in India. 
                Transform your home with our innovative automation solutions.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="rounded-full w-12 h-12 p-0 border-gray-600 text-gray-300 hover:bg-green-600 hover:border-green-600 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </Button>
                <Button variant="outline" size="sm" className="rounded-full w-12 h-12 p-0 border-gray-600 text-gray-300 hover:bg-green-600 hover:border-green-600 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Button>
                <Button variant="outline" size="sm" className="rounded-full w-12 h-12 p-0 border-gray-600 text-gray-300 hover:bg-green-600 hover:border-green-600 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </Button>
                <Button variant="outline" size="sm" className="rounded-full w-12 h-12 p-0 border-gray-600 text-gray-300 hover:bg-green-600 hover:border-green-600 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-white text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#home" className="hover:text-green-500 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-green-500 transition-colors">About Us</a></li>
                <li><a href="#products" className="hover:text-green-500 transition-colors">Products</a></li>
                <li><a href="#services" className="hover:text-green-500 transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-green-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-bold text-white text-lg mb-6">Products</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-green-500 transition-colors">2 Switch Panel</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">4 Switch Panel</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">8 Switch Panel</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Smart Door Lock</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Security Camera</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-white text-lg mb-6">Contact Info</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p>NO 1, Vijaya Nagar, MGR Salai, Neyveli, Cuddalore</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <p>+91 8525928155</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <p>zyrehomeautomation@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zyre Home Automation. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};