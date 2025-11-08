import { Icon, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react'; // 👈 Import useEffect
import logos from '../assets/Logo/SHRI.png';


interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // State to track scroll

  // Reusing the golden brand color for the name
  const brandColor = '#D1A666';

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
  
  // ----------------------------------------------------
  // 👇 SCROLL LOGIC
  // ----------------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      // Set 'scrolled' to true if scroll position is greater than 60px
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  // ----------------------------------------------------
  // ----------------------------------------------------
  
  // Dynamic link classes based on the 'scrolled' state
  const linkBaseClass = scrolled 
    ? 'text-gray-400 hover:text-red-600' // Scrolled: Slightly darker gray text
    : 'text-white hover:text-red-600';  // Top: Pure white text

  const linkActiveClass = 'text-red-600'; // Active link color (stays red)
  
  // ----------------------------------------------------
  
 return (
  // Header background remains solid black regardless of scroll
  // <nav className={`sticky top-0 z-50 bg-black border-b border-gray-700 transition-colors duration-300`}> 
  <nav className="sticky  bg-black border-gray-200">
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
        className="h-12 w-auto object-contain mt-2"
      />
     <span
    className="text-lg font-semibold tracking-wide font-serif"
    style={{ color: brandColor, fontFamily: 'Federo, sans-serif' }} // ✅ Added inline font-family
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
          className={`text-sm transition-colors ${
            currentPage === item.id
              ? linkActiveClass
              : linkBaseClass // Apply dynamic color
          }`}
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

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 space-y-4 bg-black border-t border-gray-700"> 
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left transition-colors text-white ${
                currentPage === item.id
                  ? linkActiveClass
                  : 'text-gray-300 hover:text-white' // Mobile menu links remain simple light gray/white
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