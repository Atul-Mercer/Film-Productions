'use client';

import React, { useRef } from "react";
import { Card, CardContent } from './ui/card';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Youtube } from 'lucide-react';
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4  " >Get in Touch</h1>
          <i className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Let's create something extraordinary.
          </i>
        </div>

        {/* ========== CENTERED CONTACT FORM ========== */}
        <div className="flex justify-center mb-20 ">
          <div className="w-full max-w-3xl">
            <Card className="bg-white border-gray-200 shadow-xl rounded-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
               

                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                     
                      <Input
                        id="name"
                        placeholder="Full Name "
                        className="bg-gray-50 border-gray-300 focus:border-red-600  focus:ring-red-600  text-gray-900 rounded-lg"
                      />
                    </div>
                    <div>
                    
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="bg-gray-50 border-gray-300 focus:border-red-600 focus:ring-red-600 text-gray-900 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      
                      <Input
                        id="phone"
                        placeholder="Phone Number"
                        className="bg-gray-50 border-gray-300 focus:border-red-600 focus:ring-red-600 text-gray-900 rounded-lg"
                      />
                    </div>
                    <div>
                   
                      <Input
                        id="subject"
                        placeholder="Subject"
                        className="bg-gray-50 border-gray-300 focus:border-red-600 focus:ring-red-600 text-gray-900 rounded-lg"
                      />
                    </div>
                  </div>

                  {/* <div>
                    <Label htmlFor="service" className="text-gray-800 font-medium mb-2 block">Service Required</Label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 text-gray-900 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="film">Film Production</option>
                      <option value="series">Web Series</option>
                      <option value="commercial">Commercial/Advertisement</option>
                      <option value="music">Music Video</option>
                      <option value="theatre">Theatre Production</option>
                      <option value="other">Other</option>
                    </select>
                  </div> */}

                  <div>
                    {/* <Label htmlFor="message" className="text-gray-800 font-medium mb-2 block">Message *</Label> */}
                    <Textarea
                      id="message"
                      placeholder="Message"
                      rows={6}
                      className="bg-gray-50 border-gray-300 focus:border-red-600 focus:ring-red-600 resize-none text-gray-900 rounded-lg"
                    />
                  </div>

                  

                  <div className="flex justify-center">
                  <button
  type="submit"
  className="w-50% max-w-sm mx-auto px-8 py-3 bg-red-600 text-white font-bold text-base rounded-xl shadow-xl hover:bg-red-700 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
>
  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
  Send Message
</button>
                  </div>
                </form>
              </CardContent>
            </Card>
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
              shrideepmalafilms@gmail.com
            </a>
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Social Media - GOLD BACKGROUND */}
    <Card className="bg-[#D1A666] border border-amber-700/30 shadow-xl hover:shadow-2xl transition-all duration-300">
      <CardContent className="p-6 text-center">
        <h3 className="font-bold text-gray-900 text-lg mb-4">Follow Us</h3>
        <div className="flex justify-center gap-4">
  <a href="https://www.facebook.com/dimple25dec" target="_blank" rel="noopener noreferrer">
    <button className="w-12 h-10 rounded-full bg-[#D1A666] shadow-lg hover:bg-red-600 hover:text-white hover:shadow-xl transition-all duration-300 group flex items-center justify-center">
      <Facebook size={22} className="text-gray-900 group-hover:text-white transition-colors" />
    </button>
  </a>
  <a href="https://www.instagram.com/shri_deepmala_films" target="_blank" rel="noopener noreferrer">
    <button className="w-12 h-10 rounded-full bg-[#D1A666] shadow-lg hover:bg-red-600 hover:text-white hover:shadow-xl transition-all duration-300 group flex items-center justify-center">
      <Instagram size={22} className="text-gray-900 group-hover:text-white transition-colors" />
    </button>
  </a>
  <a href="https://youtube.com/@shrideepmalafilms" target="_blank" rel="noopener noreferrer">
    <button className="w-12 h-10 rounded-full bg-[#D1A666] shadow-lg hover:bg-red-600 hover:text-white hover:shadow-xl transition-all duration-300 group flex items-center justify-center">
      <Youtube size={22} className="text-gray-900 group-hover:text-white transition-colors" />
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Production Inquiries</h3>
              <p className="text-gray-600 mb-4 text-sm">For film and series production opportunities</p>
              <a href="mailto:shrideepmalafilms@gmail.com" className="text-red-600 hover:text-red-700 font-medium">
                shrideepmalafilms@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow mb-12">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Casting & Talent</h3>
              <p className="text-gray-600 mb-4 text-sm">Submit your profile or casting inquiries</p>
              <a href="mailto:shrideepmalafilms@gmail.com" className="text-red-600 hover:text-red-700 font-medium">
                shrideepmalafilms@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow mb-12">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Media & Press</h3>
              <p className="text-gray-600 mb-4 text-sm">Press releases and media inquiries</p>
              <a href="mailto:shrideepmalafilms@gmail.com" className="text-red-600 hover:text-red-700 font-medium">
                shrideepmalafilms@gmail.com
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}