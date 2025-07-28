import React, { useState, useEffect } from 'react';

// Header Component
export const Header = ({ showModal, setShowModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">PCRF</h1>
              <p className="text-xs text-gray-600">Palestine Children's Relief Fund</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#programs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Programs</a>
            <a href="#get-involved" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Get Involved</a>
            <a href="#news" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">News</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </nav>

          {/* Donation Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setShowModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#programs" className="text-gray-700 hover:text-blue-600 font-medium">Programs</a>
              <a href="#get-involved" className="text-gray-700 hover:text-blue-600 font-medium">Get Involved</a>
              <a href="#news" className="text-gray-700 hover:text-blue-600 font-medium">News</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold mt-4 transition-colors"
              >
                Donate Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Gaza Relief Modal Component
export const GazaReliefModal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button 
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
        >
          ×
        </button>
        
        {/* Modal Content */}
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1616408621653-6755190009a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG1lZGljYWwlMjBjYXJlfGVufDB8fHxibHVlfDE3NTM3NDY4OTR8MA&ixlib=rb-4.1.0&q=85"
            alt="Child in Gaza"
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60 rounded-t-lg flex items-center justify-center">
            <div className="text-center text-white p-6">
              <h2 className="text-4xl font-bold mb-2">URGENT</h2>
              <h3 className="text-4xl font-bold mb-2">GAZA</h3>
              <h4 className="text-4xl font-bold">RELIEF</h4>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our Gaza Relief and Recovery campaign provides urgent aid and supports long-term recovery in 
            Gaza. Funds will supply medical aid, treatment, food, water, and necessities for affected families. 
            We also focus on rebuilding healthcare facilities, and funding trauma counseling and mental health 
            services to foster healing in the community.
          </p>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors">
            Donate Today
          </button>
        </div>
      </div>
    </div>
  );
};

// Hero Section Component
export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Healing Children,
              <span className="block text-blue-200">Building Hope</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Palestine Children's Relief Fund provides medical care and humanitarian aid to children 
              in the Middle East, regardless of nationality or religion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                Donate Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxtZWRpY2FsJTIwdm9sdW50ZWVyc3xlbnwwfHx8Ymx1ZXwxNzUzNzQ2OTA2fDA&ixlib=rb-4.1.0&q=85"
              alt="Doctor with child patient"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Programs Section Component
export const ProgramsSection = () => {
  const programs = [
    {
      title: "Pediatric Cancer Departments",
      description: "Establishment of specialized cancer care units in the West Bank and Gaza to provide comprehensive treatment for children with cancer.",
      image: "https://images.pexels.com/photos/6075005/pexels-photo-6075005.jpeg",
      impact: "500+ children treated annually"
    },
    {
      title: "Pediatric Cardiac Surgery Program",
      description: "Addressing congenital heart diseases in children through advanced surgical procedures and ongoing care.",
      image: "https://images.unsplash.com/photo-1621862912856-0909fb7f14b7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdm9sdW50ZWVyc3xlbnwwfHx8Ymx1ZXwxNzUzNzQ2OTA2fDA&ixlib=rb-4.1.0&q=85",
      impact: "200+ surgeries completed"
    },
    {
      title: "Mental Health Initiatives",
      description: "Providing psychological support and trauma counseling, especially in Gaza, to help children heal from conflict-related trauma.",
      image: "https://images.unsplash.com/photo-1584746591606-bd7cfe4e4caa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxjaGlsZHJlbiUyMG1lZGljYWwlMjBjYXJlfGVufDB8fHxibHVlfDE3NTM3NDY4OTR8MA&ixlib=rb-4.1.0&q=85",
      impact: "1,000+ children supported"
    },
    {
      title: "Orphan Sponsorship Program",
      description: "Supporting orphaned children with essential needs including education, healthcare, and basic necessities.",
      image: "https://images.unsplash.com/photo-1552457310-ef08195e7e74?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHw0fHxjaGlsZHJlbiUyMG1lZGljYWwlMjBjYXJlfGVufDB8fHxibHVlfDE3NTM3NDY4OTR8MA&ixlib=rb-4.1.0&q=85",
      impact: "300+ orphans sponsored"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive medical care and humanitarian aid through targeted programs 
            designed to address the most critical needs of children in the Middle East.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={program.image}
                alt={program.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">{program.impact}</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Impact Stats Component
export const ImpactStats = () => {
  const stats = [
    { number: "15,000+", label: "Children Treated" },
    { number: "50+", label: "Medical Missions" },
    { number: "25", label: "Years of Service" },
    { number: "100+", label: "Medical Volunteers" }
  ];

  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-blue-100 text-lg">Making a difference in children's lives across the Middle East</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Get Involved Section Component
export const GetInvolvedSection = () => {
  const ways = [
    {
      title: "Make a Donation",
      description: "Your donation directly supports medical care and humanitarian aid for children in need.",
      icon: "💝",
      action: "Donate Now"
    },
    {
      title: "Become a Volunteer",
      description: "Join our team of dedicated volunteers and help us make a difference in children's lives.",
      icon: "🤝",
      action: "Volunteer"
    },
    {
      title: "Sponsor an Orphan",
      description: "Provide ongoing support to orphaned children through our sponsorship program.",
      icon: "👶",
      action: "Sponsor Now"
    },
    {
      title: "Join Our Mission",
      description: "Participate in medical missions and directly provide care to children in the Middle East.",
      icon: "🏥",
      action: "Learn More"
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Get Involved</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            There are many ways you can help us provide medical care and humanitarian aid to children 
            throughout the Middle East. Every contribution makes a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ways.map((way, index) => (
            <div key={index} className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{way.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{way.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{way.description}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                {way.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// News Section Component
export const NewsSection = () => {
  const news = [
    {
      title: "New Pediatric Cardiac Surgery Center Opens in Gaza",
      excerpt: "PCRF opens a state-of-the-art cardiac surgery center to serve children with congenital heart diseases.",
      date: "January 15, 2025",
      image: "https://images.pexels.com/photos/6075001/pexels-photo-6075001.jpeg"
    },
    {
      title: "Mental Health Program Reaches 1,000 Children",
      excerpt: "Our trauma counseling and mental health services have now supported over 1,000 children in Gaza and the West Bank.",
      date: "December 28, 2024",
      image: "https://images.unsplash.com/photo-1623854767711-30ceae433d6c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHw0fHxtZWRpY2FsJTIwdm9sdW50ZWVyc3xlbnwwfHx8Ymx1ZXwxNzUzNzQ2OTA2fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Emergency Medical Supplies Delivered to Gaza",
      excerpt: "Despite ongoing challenges, PCRF successfully delivered critical medical supplies to hospitals in Gaza.",
      date: "December 20, 2024",
      image: "https://images.unsplash.com/photo-1616408621653-6755190009a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG1lZGljYWwlMjBjYXJlfGVufDB8fHxibHVlfDE3NTM3NDY4OTR8MA&ixlib=rb-4.1.0&q=85"
    }
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Latest News</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest activities, achievements, and ongoing efforts to help children 
            in the Middle East.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">{article.date}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">{article.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">PCRF</h3>
                <p className="text-sm text-gray-400">Palestine Children's Relief Fund</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Palestine Children's Relief Fund is dedicated to providing medical and humanitarian aid 
              to children in the Middle East, regardless of nationality or religion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.443.219-.937 1.407-5.965 1.407-5.965s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.749-1.378 0 0-.593 2.25-.738 2.805-.267 1.040-1.007 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors">Our Programs</a></li>
              <li><a href="#get-involved" className="text-gray-400 hover:text-white transition-colors">Get Involved</a></li>
              <li><a href="#news" className="text-gray-400 hover:text-white transition-colors">News & Updates</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p>Palestine Children's Relief Fund</p>
                  <p>P.O. Box 1926</p>
                  <p>Kent, OH 44240</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p>(330) 678-2645</p>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p>info@pcrf.net</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Palestine Children's Relief Fund. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Financial Information</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};