'use client';

import React, { useRef } from "react";
import { Card, CardContent } from './ui/card';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Youtube, Linkedin , Twitter} from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    // Add emailjs logic here later
  };

  return (
    <div className="min-h-screen py-16 md:py-24 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

        {/* Header */}
        <div className="text-center mb-16">
          <br /><br />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4  " style={{ fontFamily: 'Roboto Condensed, sans-serif' ,marginTop: '10px' }}>Get in Touch</h1>
          <i className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
            We'd love to hear from you. Let's create something extraordinary.
          </i>
        </div>

        {/* ========== CENTERED CONTACT FORM ========== */}
        <div className="flex justify-center mb-20 "  style={{ marginTop: '-60px' }}>
          <div className="w-full max-w-3xl">
            
              <CardContent className="p-8 md:p-12">
               

                <form ref={form} onSubmit={handleSubmit} className="space-y-6" >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                     
                      <Input
                        id="name"
                        placeholder="Full Name "
                        className=" border-gray-300 focus:border-red-600  focus:ring-red-600  text-gray-900 rounded-none" style={{ fontSize: '14px' , backgroundColor: 'white'}}// ⬅️ Changed rounded-lg to rounded-none
                      />
                    </div>
                    <div>
                    
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className=" border-gray-300 focus:border-red-600 focus:ring-red-600 text-gray-900 rounded-none" style={{ fontSize: '14px' , backgroundColor: 'white'}}// ⬅️ Changed rounded-lg to rounded-none
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      
                      <Input
                        id="phone"
                        placeholder="Phone Number"
                        className="bg-gray-50 border-gray-300 focus:border-red-600 focus:ring-red-600 text-gray-900 rounded-none" style={{ fontSize: '14px' , backgroundColor: 'white'}}// ⬅️ Changed rounded-lg to rounded-none
                      />
                    </div>
                    <div>
                   
                      <Input
                        id="subject"
                        placeholder="Subject"
                        className="bg-gray-50 border-gray-300 focus:border-red-600 focus:ring-red-600 text-gray-900 rounded-none"  style={{ fontSize: '14px' , backgroundColor: 'white'}}// ⬅️ Changed rounded-lg to rounded-none
                      />
                    </div>
                  </div>

                  {/* Service Select (if used, would need updating here) */}
                  {/* <div>
                    <Label htmlFor="service" className="text-gray-800 font-medium mb-2 block">Service Required</Label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-none focus:outline-none focus:border-red-600 text-gray-900 transition-colors" // ⬅️ Changed rounded-lg to rounded-none
                    >
                      <option value="">Select a service</option>
                    </select>
                  </div> */}

                  <div>
                    <Textarea
                      id="message"
                      placeholder="Message"
                      rows={6}
                      className="bg-gray-50 border-gray-300 focus:border-red-600 focus:ring-red-600 resize-none text-gray-900 rounded-none" style={{ fontSize: '14px' , backgroundColor: 'white'}}// ⬅️ Changed rounded-lg to rounded-none
                    />
                  </div>

                  

                  <div className="flex justify-center">
                  <button
  type="submit"
  className="w-50% max-w-sm mx-auto px-6 py-2 bg-red-600 text-white font-bold text-base rounded-none shadow-xl hover:bg-red-700 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group" style={{ fontSize: '14px' }}// ⬅️ Changed rounded-xl to rounded-none
>
  {/* <Send size={20} className="group-hover:translate-x-1 transition-transform" /> */}
  Send Message
</button>
                  </div>
                </form>
              </CardContent>
          
          </div>
        </div>

        {/* ========== CONTACT INFO BELOW FORM ========== */}
     {/* ========== CONTACT INFO BELOW FORM ========== */}
<div className="max-w-5xl mx-auto">
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    {/* Mumbai Office */}
    <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-6 text-center">
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-red-600/10 flex items-center justify-center">
          <MapPin className="text-red-600" size={28} />
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Mumbai Office</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          SHRIDEEPMALA FILMS PRIVATE LIMITED<br />
          Inlaks Nagar, Yari Road,
          Versova, Andheri West,<br />
          Mumbai, Maharashtra - 400061
        </p>
      </CardContent>
    </Card>

    {/* UP Office (Lucknow) */}
    <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-6 text-center">
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-red-600/10 flex items-center justify-center">
          <MapPin className="text-red-600" size={28} />
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Regional Office</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          SHRIDEEPMALA FILMS PRIVATE LIMITED<br />
          Plot No. -9, Durgapuri Colony
          Nr. Springdale, Malhaur B.O,<br />
          Durga Puri, Lucknow (UP) - 226028
        </p>
      </CardContent>
    </Card>

    {/* Phone & Email (Combined) */}
    <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow lg:col-span-1">
      <CardContent className="p-6 text-center">
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-red-600/10 flex items-center justify-center">
          <Phone className="text-red-600" size={28} />
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <a href="tel:+919565813272" className="text-red-600 hover:underline">
              +91-9565813272
            </a>
          </p>
          <p>
            <a href="mailto:shrideepmalafilms@gmail.com" className="text-red-600 hover:underline break-all">
            deep@shrideepmalafilms.com
            </a>
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Social Media - GOLD BACKGROUND */}
    <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow lg:col-span-1">
      <CardContent className="p-6 text-center">
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-red-600/10 flex items-center justify-center">
          {/* Removed phone icon here as this is now the Follow Us card */}
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Follow Us</h3>
        <div className="flex justify-center gap-4">
  {/* Facebook */}
  <a href="https://www.facebook.com/dimple25dec" target="_blank" rel="noopener noreferrer">
    <button className="w-12 h-10 rounded-full bg-[#D1A666] shadow-lg hover:bg-red-600 hover:text-white hover:shadow-xl transition-all duration-300 group flex items-center justify-center">
      <Facebook size={22} className="text-gray-900 group-hover:text-white transition-colors" />
    </button>
  </a>
  {/* Instagram */}
  <a href="https://www.instagram.com/shri_deepmala_films" target="_blank" rel="noopener noreferrer">
    <button className="w-12 h-10 rounded-full bg-[#D1A666] shadow-lg hover:bg-red-600 hover:text-white hover:shadow-xl transition-all duration-300 group flex items-center justify-center">
      <Instagram size={22} className="text-gray-900 group-hover:text-white transition-colors" />
    </button>
  </a>
  {/* YouTube */}
  <a href="https://youtube.com/@shrideepmalafilms" target="_blank" rel="noopener noreferrer">
    <button className="w-12 h-10 rounded-full bg-[#D1A666] shadow-lg hover:bg-red-600 hover:text-white hover:shadow-xl transition-all duration-300 group flex items-center justify-center">
      <Youtube size={22} className="text-gray-900 group-hover:text-white transition-colors" />
    </button>
  </a>
  {/* LinkedIn */}
  <a href="https://www.linkedin.com/company/shrideepmalafilms/" target="_blank" rel="noopener noreferrer">
    <button className="w-12 h-10 rounded-full bg-[#D1A666] shadow-lg hover:bg-red-600 hover:text-white hover:shadow-xl transition-all duration-300 group flex items-center justify-center">
      <Linkedin size={22} className="text-gray-900 group-hover:text-white transition-colors" />
    </button>
  </a>
  {/* ✅ ADDED: X (Twitter) */}
  <a href="https://x.com/DeepmalaFilms" target="_blank" rel="noopener noreferrer">
    <button className="w-12 h-10 rounded-full bg-[#D1A666] shadow-lg hover:bg-red-600 hover:text-white hover:shadow-xl transition-all duration-300 group flex items-center justify-center">
      <Twitter size={22} className="text-gray-900 group-hover:text-white transition-colors" />
    </button>
  </a>
</div>
      </CardContent>
    </Card>
  </div>
</div>

        {/* ========== ADDITIONAL INFO CARDS (Optional) ========== */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
          <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow mb-12">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3"style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>Production Inquiries</h3>
              <p className="text-gray-600 mb-4 text-sm">For film and other services Inquiries</p>
              <a href="mailto:shrideepmalafilms@gmail.com" className="text-red-600 hover:text-red-700 font-medium">
              deep@shrideepmalafilms.com
              </a>
            </CardContent>
          </Card>

          <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow mb-12">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3"style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>Casting & Talent</h3>
              <p className="text-gray-600 mb-4 text-sm">Submit your profile or casting inquiries</p>
              <a href="mailto:shrideepmalafilms@gmail.com" className="text-red-600 hover:text-red-700 font-medium">
              talent@shrideepmalafilms.com
              </a>
            </CardContent>
          </Card>

          <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow mb-12">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3"style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>Media & Press</h3>
              <p className="text-gray-600 mb-4 text-sm">Press releases and media inquiries</p>
              <a href="mailto:shrideepmalafilms@gmail.com" className="text-red-600 hover:text-red-700 font-medium">
              hello@shrideepmalafilms.com
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}