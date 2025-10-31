import { Card, CardContent } from './ui/card';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
export function Contact() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-4xl mb-6 text-gray-900">Get in Touch</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Let's create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white border-gray-200 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg mb-2 text-gray-900">Office Address</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                    SHRIDEEPMALA FILMS PRIVATE LIMITED<br />
                    Inlaks Nagar, Yari Road, <br />
                    Versova, Andheri West,<br />
                    Mumbai, Maharashtra - 400061
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg mb-2 text-gray-900">Phone Numbers</h3>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Tel: +91-9565813272</p>
                   
                    
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg mb-2 text-gray-900">Email Addresses</h3>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>E-mail: shrideepmalafilms@gmail.com</p>
                      
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg mb-2 text-gray-900">Business Hours</h3>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-gradient-to-br from-red-600/20 to-purple-600/20 border-red-600/30">
              <CardContent className="p-6">
                <h3 className="text-lg mb-4">Follow Us</h3>
                <div className="flex gap-3">
                <a
  href="https://www.facebook.com/dimple25dec"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block"
>
                  <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 transition-colors flex items-center justify-center">
                    <Facebook size={18} />
                  </button>
                  </a>
                  {/* <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 transition-colors flex items-center justify-center">
                    <Twitter size={18} />
                  </button> */}
                  <a
  href="https://www.instagram.com/shri_deepmala_films?igsh=c2xwbWZ0MGg1MDU2&utm_source=qr"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block"
>
  <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 transition-colors flex items-center justify-center">
    <Instagram size={18} />
  </button>
</a>
                  {/* <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 transition-colors flex items-center justify-center">
                    <Linkedin size={18} />
                  </button> */}
                  <a
  href="https://youtube.com/@shrideepmalafilms?si=ET2xCCThKjns0twe"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block"
>
  <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 transition-colors flex items-center justify-center">
    <Youtube size={18} />
  </button>
</a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-gray-200 shadow-md">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl mb-8 text-gray-900">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-white/80 mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="bg-black/30 border-white/20 focus:border-red-600"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white/80 mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-black/30 border-white/20 focus:border-red-600"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-white/80 mb-2 block">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+91 98765 43210"
                        className="bg-black/30 border-white/20 focus:border-red-600"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-white/80 mb-2 block">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        placeholder="Project Inquiry"
                        className="bg-black/30 border-white/20 focus:border-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-white/80 mb-2 block">
                      Service Required
                    </Label>
                    <select 
                      id="service"
                      className="w-full px-3 py-2 bg-black/30 border border-white/20 rounded-md focus:outline-none focus:border-red-600 text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="film">Film Production</option>
                      <option value="series">Web Series</option>
                      <option value="commercial">Commercial/Advertisement</option>
                      <option value="music">Music Video</option>
                      <option value="theatre">Theatre Production</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white/80 mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="bg-black/30 border-white/20 focus:border-red-600 resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-1"
                    />
                    <label htmlFor="consent" className="text-sm text-white/70">
                      I agree to the privacy policy and consent to Filmhouse Productions 
                      contacting me regarding my inquiry.
                    </label>
                  </div>

                  <button 
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        {/* <Card className="bg-white border-gray-200 overflow-hidden shadow-md">
          <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin size={48} className="mx-auto mb-4 text-red-600" />
              <p>Interactive map would be displayed here</p>
              <p className="text-sm mt-2">123, Film City Road, Andheri West, Mumbai</p>
            </div>
          </div>
        </Card> */}

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="bg-white border-gray-200 text-center shadow-md">
            <CardContent className="p-8">
              <h3 className="text-xl mb-3 text-gray-900">Production Inquiries</h3>
              <p className="text-gray-500 mb-4 text-sm">
                For film and series production opportunities
              </p>
              <a href="mailto:production@filmhouse.com" className="text-red-600 hover:text-red-500 transition-colors">
              shrideepmalafilms@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 text-center shadow-md">
            <CardContent className="p-8">
              <h3 className="text-xl mb-3 text-gray-900">Casting & Talent</h3>
              <p className="text-gray-500 mb-4 text-sm">
                Submit your profile or casting inquiries
              </p>
              <a href="mailto:casting@filmhouse.com" className="text-red-600 hover:text-red-500 transition-colors">
              shrideepmalafilms@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 text-center shadow-md">
            <CardContent className="p-8">
              <h3 className="text-xl mb-3 text-gray-900">Media & Press</h3>
              <p className="text-gray-500 mb-4 text-sm">
                Press releases and media inquiries
              </p>
              <a href="mailto:media@filmhouse.com" className="text-red-600 hover:text-red-500 transition-colors">
              shrideepmalafilms@gmail.com
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
