import * as React from 'react';
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone, Linkedin , Twitter} from 'lucide-react';
import { useState, useEffect } from 'react'; // Import hooks for responsiveness

// Assuming the logo path is relative to the Footer component, or passed as a prop
import logos from '../assets/Logo/SHRI.png'; 

// Props interface (optional, but good practice)
interface FooterProps {
  setCurrentPage: (page: string) => void;
}

// Define the breakpoint for desktop/laptop view (768px is Tailwind's default 'md')
const MD_BREAKPOINT = 768;
const CUSTOM_MARGIN = '30px';

export function Footer({ setCurrentPage }: FooterProps) {
  
  // 1. State to track if the screen is desktop size
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= MD_BREAKPOINT); 

  // 2. Effect to update the state on resize
  useEffect(() => {
      const handleResize = () => {
          setIsDesktop(window.innerWidth >= MD_BREAKPOINT);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []); 

  // Conditional Styles for Laptop View
  // These styles are applied only if isDesktop is true, fixing the margin issue.
  const descriptionMarginStyle = isDesktop ? { marginLeft: CUSTOM_MARGIN, opacity: 0.8 } : { opacity: 0.8 };
  const socialUlMarginStyle = isDesktop ? { marginLeft: CUSTOM_MARGIN } : {};

  // Navigation items from your header component
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'upcoming', label: 'Upcoming Projects' },
    { id: 'future', label: 'Future Projects' },
    { id: 'services', label: 'Services' },
    { id: 'talent', label: 'In-House Talents' },
    { id: 'contact', label: 'Contact' },
  ];
   
  // Social Media Links with text and icons
  const socialLinks = [
    { name: 'YouTube', icon: Youtube, link: 'https://youtube.com/@shrideepmalafilms?si=ET2xCCThKjns0twe', color: 'hover:text-red-600' },
    { name: 'Instagram', icon: Instagram, link: 'https://www.instagram.com/shri_deepmala_films?igsh=c2xwbWZ0MGg1MDU2&utm_source=qr', color: 'hover:text-pink-500' },
    { name: 'Facebook', icon: Facebook, link: 'https://www.facebook.com/dimple25dec', color: 'hover:text-blue-600' },
    { name: 'LinkedIn', icon: Linkedin, link: 'https://www.linkedin.com/company/shrideepmalafilms/', color: 'hover:text-blue-400' },
    // ✅ ADDED: X (Twitter) Link
    { name: 'X (Twitter)', icon: Twitter, link: 'https://x.com/DeepmalaFilms', color: 'hover:text-gray-400' }, 
];

  const handleNavClick = (id: string) => {
    setCurrentPage(id); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Contact Info based on search results for SHRIDEEPMALA FILMS PRIVATE LIMITED
  const contactInfo = [
    { icon: MapPin, text: 'SHRIDEEPMALA FILMS PRIVATE LIMITED  Inlaks Nagar, Yari Road, Versova, Andheri West, Mumbai, Maharashtra - 400061' },
    { icon: Phone, text: '+91-9565813272', isLink: true, href: 'tel:+91-9565813272' },
    { icon: Mail, text: 'deep@shrideepmalafilms.com', isLink: true, href: 'mailto:deep@shrideepmalafilms.com' },

  ];

  // Reusing the golden color from your header
  const brandColor = '#D1A666';

  return (
    <footer className="bg-black text-white pt-10 pb-8 ">
    <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-10"> 
        
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2  mb-12" style={{marginTop : '70px'}}>

            
            {/* Column 1: Logo and About Company */}
            <div 
                className="md:col-span-1 md:ml-[-27px]"
                style={{ marginTop: '-26px' }} // Negative top margin remains
            > 
                {/* Logo and Company Name (No change here) */}
                <div 
                    className="flex items-center space-x-3 mb-2" 
                    style={{ marginBottom: '-10px' ,}}
                > 
                    <img
                        src={logos}
                        alt="Shri Deepmala Films Logo"
                        className="h-12 w-auto object-contain" 
                    />
                    <span
                        className="text-base font-semibold tracking-wide text-white "
                        style={{ color: brandColor }}
                    >
                        SHRI DEEPMALA FILMS
                    </span>
                </div>

                {/* Description: Uses conditional margin style */}
                <p 
                    className="text-xs text-gray-300 mb-4" 
                    style={descriptionMarginStyle} // ✅ APPLIED: Margin is 30px only on desktop
                > 
                    Shri Deepmala Films is dedicated
                    to redefining the art of cinema. We celebrate storytelling in all its forms-through captivating theatre, immersive workshops, and visionary mentorship programs.  Our mission is to discover and nurture extraordinary talents, offering them a world-class stage to shine  and share their art with global audiences.
                </p>
                <br />

                {/* Social Media Icons: Uses conditional margin style */}
                <ul 
                    className="flex justify-start gap-4"
                    style={socialUlMarginStyle} // ✅ APPLIED: Margin is 30px only on desktop
                > 
                    {socialLinks.map((social) => (
                        <li key={social.name}>
                            <a
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-start text-gray-300 ${social.color} transition-transform hover:scale-125 duration-300`}
                                style={{ opacity: 0.8 }}>
                                <social.icon size={18} className="flex-shrink-0" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>


    {/* Column 3: Quick Links (Pages) */}
<div className="md:col-span-1 ">
    <h3 className="text-lg font-semibold mb-4 text-white"  style={{ marginTop: '15px' }}>Quick Links </h3> {/* Increased mb-3 to mb-4 */}

    {/* List structure remains the same */}
    <ul className="grid md:grid-cols-2 gap-x-4 gap-y-1"> 
        {navItems.map((item) => (
            <li key={item.id}>
                <button
                    onClick={() => handleNavClick(item.id)}
                    className="text-xs text-gray-300 hover:text-red-600 transition-colors cursor-pointer" style={{opacity: 0.8}}
                >
                    {item.label}
                </button>
            </li>
        ))}
    </ul>
</div>


            
            {/* Column 2: Contact Information - TIGHTENED SPACING */}
            <div className="md:col-span-1">
    <h3 className="text-lg font-semibold mb-4 text-white" style={{ marginTop: '15px' }}>Contact Us </h3>
    <ul className="space-y-2 text-xs">
        {contactInfo.map((item, index) => (
            <li 
                key={index} 
                className={`flex items-start text-gray-300 ${!item.isLink ? 'mb-4' : ''}`} // ⬅️ Conditional mb-4 added here
            >
                
                {/* Check if the item is NOT a link (i.e., it's the static address) */}
                {!item.isLink ? (
                    // 0.8 OPACITY for static address (Added space below this item)
                    <span className="mb-3" style={{ opacity: 0.8 }}>
                        {item.text}
                    </span>
                ) : (
                    // FULL OPACITY for links (Email/Phone)
                    <a 
                        href={item.href} 
                        className="hover:text-red-600 transition-colors " 
                        style={{ opacity: 1 }} 
                    >
                        {item.text}
                    </a>
                )}
            </li>
        ))}
    </ul>
</div>
        </div>
        

        {/* --- */}
        
        {/* Copyright Section */}
        <div className="mb-2 pt-6 border-t border-gray-700 text-center" style={{ marginTop: '-70px' }}>
            <p 
                className="text-xs text-white py-3"
                style={{ backgroundColor: '#0A0A0A', opacity: 0.8 }} 
            >
                &copy; {new Date().getFullYear()} Copyright Shrideepmala Films Pvt. Ltd. All Rights Reserved.
            </p>
        </div>
    </div>
</footer>
  );
}