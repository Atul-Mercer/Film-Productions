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
    <footer className="bg-black text-white pt-6 pb-4 "> {/* ⬅️ CHANGE: Reduced pt-10 to pt-6 and pb-6 to pb-4 */}
    {/* Ensure px-6 sm:px-8 lg:px-10 is providing enough side margin */}
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10"> 
        
        {/* Main 4-Column Grid: Vertical spacing reduced with mt-8 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8"> {/* ⬅️ CHANGE: Reduced mt-12 to mt-8 */}

            
            {/* Column 1: Logo and About Company */}
            <div className="md:col-span-1 "> 
                {/* Logo and Name Style */}
                <div className="flex items-center space-x-3 mb-3 "> {/* Reduced mb-4 to mb-3 */}
                    <img
                        src={logos}
                        alt="Shri Deepmala Films Logo"
                        className="h-12 w-auto object-contain" 
                    />
                    <span
                        className="text-base font-semibold tracking-wide text-white" 
                        style={{ color: brandColor }}
                    >
                        SHRI DEEPMALA FILMS
                    </span>
                </div>
                
                <p className="text-xs text-gray-300"> 
                    Shri Deepmala Films is committed to producing high-quality and compelling
                    cinema, web series, and visual content, bringing captivating stories to life on screen.
                </p>
            </div>

    {/* Column 3: Quick Links (Pages) */}
    <div className="md:col-span-1 ">
                <h3 className="text-lg font-semibold mb-3 text-white">Quick Links 🔗</h3> {/* Reduced mb-4 to mb-3 */}
                <ul className="space-y-1"> 
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => handleNavClick(item.id)}
                                className="text-xs text-gray-300 hover:text-red-600 transition-colors cursor-pointer"
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>


            {/* Column 4: Social Media Links (Icon and Text Row-Wise) */}
            <div className="md:col-span-1">
                <h3 className="text-lg font-semibold mb-3 text-white">Follow Us 📱</h3> {/* Reduced mb-4 to mb-3 */}
                <ul className="space-y-2"> 
                    {socialLinks.map((social) => (
                        <li key={social.name}>
                            <a
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center text-xs text-gray-300 ${social.color} transition-colors`}
                            > 
                                <social.icon size={20} className="mr-2 flex-shrink-0" />
                                <span>{social.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>


            
            {/* Column 2: Contact Information - TIGHTENED SPACING */}
            <div className="md:col-span-1">
                <h3 className="text-lg font-semibold mb-3 text-white">Contact Us 📞</h3> {/* Reduced mb-4 to mb-3 */}
                <ul className="space-y-1 text-xs"> 
                    {contactInfo.map((item, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                            <item.icon size={16} className="mr-2 mt-0.5 flex-shrink-0" /> 
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
        <div className="mt-6 pt-4 border-t border-gray-700 text-center"> {/* ⬅️ CHANGE: Reduced mt-10 to mt-6 and pt-6 to pt-4 */}
            <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Copyright  Shrideepmala Films Pvt. Ltd. All Rights Reserved.
            </p>
        </div>
    </div>
</footer>
  );
}