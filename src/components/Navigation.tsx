import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logos from '../assets/Logo/SHRI.png';
import './Navigation.css';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const brandColor = '#D1A666';

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'upcoming', label: 'Upcoming Projects' },
    { id: 'future', label: 'Future Projects' },
    { id: 'services', label: 'Services' },
    { id: 'talent', label: 'In-House Talents' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar" style={{ height: '74px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <div className="flex justify-between items-center h-16" >
          {/* Logo */}
          <div
            className="cursor-pointer flex items-center space-x-3" style={{ marginLeft: '-18px'  }}
            onClick={() => handleNavClick('home')}
          >
            <img
              src={logos}
              alt="Shri Deepmala Films Logo"
              className="h-12 w-auto object-contain mt-2"  style={{height : '110px'}}
            />
            <span
              className="text-md font-semibold tracking-wide font-serif"
              style={{ color: brandColor }}
            >
              SHRI DEEPMALA FILMS
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={` transition-colors ${
                  currentPage === item.id
                    ? 'text-red-600'
                    : 'text-gray-300 hover:text-red-600'  
                }`}
                style={{ fontSize: '15px' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-black border-t border-gray-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left transition-colors ${
                  currentPage === item.id
                    ? 'text-red-600'
                    : 'text-gray-300 hover:text-white'
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
