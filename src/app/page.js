'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-md z-50 border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className={`fixed top-2 left-4 transition-all duration-500 ease-in-out ${scrolled ? 'w-[150px]' : 'w-[200px]'}`}>
              <Image
                src="/img/Conrose1.png"
                alt="Conrose"
                width={scrolled ? 150 : 200}
                height={scrolled ? 45 : 60}
                priority
                className="object-contain border border-black rounded-md p-0 hover:border-teal-500 transition-all duration-500 ease-in-out"
              />
            </div>
            <div className="hidden md:flex space-x-8 ml-auto">
              {['Services', 'About'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-teal-800 hover:text-teal-600 transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
              <Link
                href="/contact"
                className="text-teal-800 hover:text-teal-600 transition-colors font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Warehouse Image */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/warehouse.webp"
            alt="Warehouse"
            fill
            priority
            className="object-cover brightness-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-teal-900/40 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl text-white">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg text-shadow-strong tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Strategic Business Solutions for Your Success
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-100 mb-8 drop-shadow-lg text-shadow font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Expert consulting services to transform your business and drive sustainable growth.
            </motion.p>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                Get Started
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/30 transition-colors shadow-lg">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-12 text-teal-900 tracking-tight">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-teal-100 overflow-hidden"
              >
                {service.image && (
                  <div className="relative h-48 -mx-8 -mt-8 mb-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}
                <div className="text-teal-600 mb-4 text-2xl">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-teal-900 tracking-tight">{service.title}</h3>
                <p className="text-teal-700 font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-8 text-gray-900 tracking-tight">Why Choose Us</h2>
            <p className="text-gray-600 mb-12 font-light">
              With years of experience and a proven track record, we deliver tailored solutions 
              that drive real business results. Our approach combines strategic thinking with 
              practical implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-800 text-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-white/90">
            Contact us today to discuss how we can help you achieve your business goals.
          </p>
          <Link href="/contact">
            <button className="bg-white text-blue-800 px-8 py-4 rounded-lg hover:bg-amber-500 transition-colors shadow-lg">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    icon: "📊",
    title: "Strategic Planning",
    description: "Develop comprehensive strategies to achieve your organizational goals and maximize growth potential.",
    image: "/img/strategic-planning.webp"
  },
  {
    icon: "💡",
    title: "Business Analysis",
    description: "In-depth analysis of your operations to identify opportunities and optimize performance.",
    image: "/img/business-analysis.webp"
  },
  {
    icon: "🚀",
    title: "Growth Consulting",
    description: "Expert guidance to accelerate your business growth and maximize market potential.",
    image: "/img/growth.webp"
  }
];
