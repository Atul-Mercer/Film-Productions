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
    { icon: MapPin, text: 'SHRIDEEPMALA FILMS PRIVATE LIMITED  Inlaks Nagar, Yari Road, Versova, Andheri West,Mumbai, Maharashtra - 400061' },
    { icon: Mail, text: 'shrideepmalafilms@gmail.com', isLink: true, href: 'shrideepmalafilms@gmail.com' },
    { icon: Phone, text: '+91-9565813272', isLink: true, href: 'tel:+91-9565813272' }, // Placeholder phone
  ];

  // Reusing the golden color from your header
  const brandColor = '#D1A666';

  return (
    <footer className="bg-black text-white pt-10 pb-8 "> {/* ⬅️ CHANGE: Increased pt-6 to pt-10 and pb-4 to pb-8 */}
    {/* Ensure px-6 sm:px-8 lg:px-10 is providing enough side margin */}
    <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-10"> 
        
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-12 mb-12"> {/* ⬅️ CHANGE: Increased mt-8 to mt-12. Adjusted gap to a moderate gap-4 */}

            
            {/* Column 1: Logo and About Company */}
            <div className="md:col-span-1 text-center ">
  {/* Logo and Company Name: Reduced mb-4 to mb-2 */}
  <div className="flex items-center justify-center space-x-3 "> 
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

  {/* Company Description: Reduced mb-8 to mb-4 */}
  {/* Assuming the parent column div does NOT have text-center applied */}
<p className="text-xs text-gray-300 max-w-xs mb-4"> 
    Shri Deepmala Films is committed to producing high-quality <br /> compelling 
    cinema, web series, and visual content, bringing <br /> captivating stories to life on screen.
</p>

  {/* Centered Social Media Icons */}
  <ul className="flex justify-center gap-6 md:gap-8">
  {socialLinks.map((social) => (
    <li key={social.name}>
      <a
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center text-gray-300 ${social.color} transition-transform hover:scale-125 duration-300`}
      >
        <social.icon size={32} className="flex-shrink-0" />
      </a>
    </li>
  ))}
</ul>
</div>


    {/* Column 3: Quick Links (Pages) */}
<div className="md:col-span-1 ">
    <h3 className="text-lg font-semibold mb-4 text-white">Quick Links 🔗</h3> {/* Increased mb-3 to mb-4 */}
    
    {/* List structure remains the same */}
    <ul className="grid md:grid-cols-2 gap-x-4 gap-y-1"> 
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


            
            {/* Column 2: Contact Information - TIGHTENED SPACING */}
            <div className="md:col-span-1">
                <h3 className="text-lg font-semibold mb-4 text-white">Contact Us 📞</h3> {/* Increased mb-3 to mb-4 */}
                <ul className="space-y-2 text-xs"> {/* Increased space-y-1 to space-y-2 */}
                    {contactInfo.map((item, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                           
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
        <div className="mt-10 pt-6 border-t border-gray-700   text-center"> {/* ⬅️ CHANGE: Increased mt-6 to mt-10 and pt-4 to pt-6 */}
            <p className="text-xs text-gray-900 bg-white">
                &copy; {new Date().getFullYear()} Copyright Shrideepmala Films Pvt. Ltd. All Rights Reserved.
            </p>
        </div>
    </div>
</footer>
  );
}