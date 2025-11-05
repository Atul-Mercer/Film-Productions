import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

// Assuming the logo path is relative to the Footer component, or passed as a prop
import logos from '../assets/Logo/SHRI.png'; 

// Props interface (optional, but good practice)
interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  
  // Navigation items from your header component
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
   
  // Social Media Links with text and icons
  const socialLinks = [
    { name: 'YouTube', icon: Youtube, link: 'https://youtube.com/@shrideepmalafilms?si=ET2xCCThKjns0twe', color: 'hover:text-red-600' },
    { name: 'Instagram', icon: Instagram, link: 'https://www.instagram.com/shri_deepmala_films?igsh=c2xwbWZ0MGg1MDU2&utm_source=qr', color: 'hover:text-pink-500' },
    { name: 'Facebook', icon: Facebook, link: 'https://www.facebook.com/dimple25dec', color: 'hover:text-blue-600' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id); 
    // Smooth scroll to the top of the page when a footer link is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Contact Info based on search results for SHRIDEEPMALA FILMS PRIVATE LIMITED
  const contactInfo = [
    { icon: MapPin, text: 'SHRIDEEPMALA FILMS PRIVATE LIMITED Inlaks Nagar, Yari Road, Versova, Andheri West,Mumbai, Maharashtra - 400061' },
    { icon: Mail, text: 'shrideepmalafilms@gmail.com', isLink: true, href: 'shrideepmalafilms@gmail.com' },
    { icon: Phone, text: '+91-9565813272', isLink: true, href: 'tel:+91-9565813272' }, // Placeholder phone
  ];

  // Reusing the golden color from your header
  const brandColor = '#D1A666';

  return (
    <footer className="bg-black text-white pt-10 pb-6">
    {/* Increased horizontal padding on the outer container if needed (px-4 is standard) */}
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10"> 
        
        {/* Main 4-Column Grid with Reduced Space */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mt-12"> {/* ⬅️ CHANGE: Reduced gap-6 to gap-4 and md:gap-8 to md:gap-6 */}

            
            {/* Column 1: Logo and About Company */}
            <div className="md:col-span-1 "> 
                {/* Logo and Name Style (Copied from Header) */}
                <div className="flex items-center space-x-3 mb-4 ">
                    <img
                        src={logos}
                        alt="Shri Deepmala Films Logo"
                        className="h-12 w-auto object-contain" 
                    />
                    <span
                        className="text-lg font-semibold tracking-wide text-white" 
                        style={{ color: brandColor }}
                    >
                        SHRI DEEPMALA FILMS
                    </span>
                </div>
                
                <p className="text-sm text-gray-300">
                    Shri Deepmala Films is committed to producing high-quality and compelling
                    cinema, web series, and visual content, bringing captivating stories to life on screen.
                </p>
            </div>

    {/* Column 3: Quick Links (Pages) */}
    <div className="md:col-span-1 ">
                <h3 className="text-xl font-semibold mb-4 text-white">Quick Links 🔗</h3>
                <ul className="space-y-2">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => handleNavClick(item.id)}
                                className="text-sm text-gray-300 hover:text-red-600 transition-colors cursor-pointer"
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>


            {/* Column 4: Social Media Links (Icon and Text Row-Wise) */}
            <div className="md:col-span-1">
                <h3 className="text-xl font-semibold mb-4 text-white">Follow Us 📱</h3>
                <ul className="space-y-3">
                    {socialLinks.map((social) => (
                        <li key={social.name}>
                            <a
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center text-sm text-gray-300 ${social.color} transition-colors`}
                            > 
                                <social.icon size={25} className="mr-3 flex-shrink-0" />
                                <span>{social.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>


        


            
            {/* Column 2: Contact Information - TIGHTENED SPACING */}
            <div className="md:col-span-1">
                <h3 className="text-xl font-semibold mb-4 text-white">Contact Us 📞</h3>
                <ul className="space-y-2 text-sm"> {/* ⬅️ CHANGE: Reduced space-y-4 to space-y-2 */}
                    {contactInfo.map((item, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                            {/* The margin top here is crucial for vertical alignment with multi-line text */}
                            <item.icon size={18} className="mr-3 mt-0.5 text-red-600 flex-shrink-0" /> 
                            {item.isLink ? (
                                <a href={item.href} className="hover:text-red-600 transition-colors">
                                    {item.text}
                                </a>
                            ) : (
                                <span>{item.text}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        

        {/* --- */}
        
        {/* Copyright Section */}
        <div className="mt-10 pt-6 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Copyright ©️ 2025 Shrideepmala Films Pvt. Ltd. All Rights Reserved.
            </p>
        </div>
    </div>
</footer>
  );
}