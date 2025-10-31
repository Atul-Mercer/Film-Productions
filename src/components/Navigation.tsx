import { Icon, Menu, X } from 'lucide-react';
import { useState } from 'react';
// import logo from '../SHRI DEEPMALA FILMS LOGO (1).png';
// import logos from '/Users/atul/Desktop/DeepMala Films/src/SHRI DEEPMALA FILMS LOGOS.png';

import logos from '../assets/Logo/SHRI.png';


interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'upcoming', label: 'Upcoming Projects' },
    { id: 'future', label: 'Future Projects' },
    { id: 'services', label: 'Services' },
    { id: 'talent', label: 'In-House Talents' },
    // { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
  };

 return (
  <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        
        {/* Logo and Name */}
        <div
          className="cursor-pointer flex items-center space-x-3"
          onClick={() => handleNavClick('home')}
        >
          <img
            src={logos}
            alt="Shri Deepmala Films Logo"
            className="h-12 w-auto object-contain"
          />
          <span
            className="text-lg font-semibold tracking-wide"
            style={{ color: '#D1A666' }}
          >
            SHRI DEEPMALA FILMS
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`transition-colors ${
                currentPage === item.id
                  ? 'text-red-600'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left transition-colors ${
                currentPage === item.id
                  ? 'text-red-600'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  </nav>
);

}
