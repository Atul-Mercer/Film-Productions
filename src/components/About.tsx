import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Award, Users, Film, Target } from 'lucide-react';
import DeepMala from '../assets/directors/Deep-Mala-Srivastava.jpeg';
import AnilDhakad from '../assets/directors/Anil-Dhakad.jpeg';
import OurStory from '../assets/story/ourstory.jpg';

export function About() {
  const directors = [
    {
      id: 1,
      name: 'Rajesh Deep Mala Srivastava',
      role: 'Founder & Creative Director',
      bio: `Born and raised in a small village in the Deoria district of Uttar Pradesh, Deep Mala
Srivastava is a self-made creative visionary whose journey reflects passion,
perseverance, and an unwavering dedication to cinema. Renowned for her sharp
sense of humor, distinctive artistic vision, and deep understanding of world cinema,
she continues to refine her craft in writing and direction, establishing herself as a
promising voice in the contemporary film landscape. 

After working with several esteemed professionals across the Bhartiya film industry,
Dedicated, dynamic and deeply passionate about storytelling, Deep Mala decided to
take the next bold step in her career-founding her own production company,
Shrideepmala Films Pvt. Ltd., alongside her long-time trusted friend, Mr. Anil
Dhakad. The company represents the realization of her lifelong dream: to create
meaningful, visually compelling stories that inspire, entertain, and resonate with
audiences worldwide.

Driven by creativity and authenticity, Deep Mala believes that She is a very creative
person and truly feels that she has a lot to say to the world and she is going to let that
happen.`    ,

      image: DeepMala,
      awards: '15+ National Awards',
    },
    {
      id: 2,
      name: 'Anil Dhakad',
      role: 'Co-Founder & Director',
      bio: 'Hailing from the Shivpuri district of Madhya Pradesh, Anil Dhakad is a multifaceted professional-widely recognized as a celebrity yoga trainer and a driving force behind Shrideepmala Films Pvt. Ltd. As the company’s Co-Founder and Director, he stands as one of its strongest pillars, contributing strategic vision and creative leadership to every project. Originally trained as an actor, Anil moved to Mumbai to pursue his passion for the performing arts. While his journey led him to discover a deep connection with yoga-where he built a distinguished reputation-his love for cinema has remained constant. Today, he combines his artistic sensibilities, discipline, and industry insight to guide Shrideepmala Films toward new creative and professional heights. Anil Dhakad continues to bridge the worlds of wellness and entertainment, embodying the spirit of balance, focus, and creative excellence.',
      image: AnilDhakad,
      awards: '10+ International Awards',
    },
  ];

  const values = [
    {
      icon: Film,
      title: 'Creative Excellence',
      description: 'We push the boundaries of storytelling to create unforgettable cinematic experiences.',
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'Our success is built on teamwork, bringing together the best talent in the industry.',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Every project receives our full commitment to excellence, from script to screen.',
    },
    {
      icon: Target,
      title: 'Audience Focus',
      description: 'We create content that resonates with audiences and stands the test of time.',
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-white">
      {/* Company Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl mb-6 text-gray-900">About Filmhouse Productions</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Creating cinematic masterpieces that inspire, entertain, and transform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[600px]">
            <ImageWithFallback
              src={OurStory}
              alt="Production Set"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl mb-6 text-gray-900">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <b>Welcome to Shrideepmala Films Pvt. Ltd.</b>
              <b>
              Founded by Ms. Deep Mala Srivastava and Mr. Anil Dhakad
              </b>
              <p>
              At Shrideepmala Films Pvt. Ltd., creativity meets precision and every frame
becomes a work of art. As a forward-thinking film production company, we specialize
in crafting exceptional visual narratives across diverse genres-including corporate
films, branded content, music videos, documentaries, and commercial
advertisements.
              </p>
              <p>
              Driven by an unwavering commitment to quality and innovation, we collaborate
closely with our clients and creative partners to transform ideas into captivating
cinematic experiences. From the initial concept to the final cut, every project we
undertake is shaped by passion, storytelling excellence, and world-class
production standards.
              </p>
              <p>
              Whether it’s building a brand’s identity, conveying a powerful message, or creating
unforgettable moments on screen, Shrideepmala Films delivers visuals that engage,
inspire, and resonate with audiences worldwide.
              </p>
              <b>
                “Where vision meets artistry-and every story finds its perfect frame.”
              </b>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:border-red-600/50 hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/20 mb-4">
                    <value.icon size={32} className="text-red-600" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-500">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl mb-4 text-gray-900">Meet Our Directors</h2>
      <p className="text-gray-500">Visionaries behind our storytelling</p>
    </div>

    {/* Stack cards vertically — one per row */}
    <div className="space-y-12">
      {directors.map((director) => (
        <Card
          key={director.id}
          className="bg-white border-gray-200 overflow-hidden shadow-lg max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Image: Full width on mobile, 2/5 on desktop */}
            <div className="md:col-span-2 h-80 md:h-auto">
              <ImageWithFallback
                src={director.image}
                alt={director.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content: Full width on mobile, 3/5 on desktop */}
            <CardContent className="md:col-span-3 p-8 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-red-600/20 text-red-600 text-sm mb-4 w-fit rounded">
                {director.awards}
              </div>
              <h3 className="text-3xl mb-2 text-gray-900">{director.name}</h3>
              <p className="text-red-600 mb-6">{director.role}</p>
              <p className="text-gray-600 leading-relaxed">{director.bio}</p>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>
      {/* Stats Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl text-red-600 mb-3">50+</div>
              <div className="text-gray-500">Films Produced</div>
            </div>
            <div>
              <div className="text-5xl text-red-600 mb-3">25+</div>
              <div className="text-gray-500">Awards Won</div>
            </div>
            <div>
              <div className="text-5xl text-red-600 mb-3">100+</div>
              <div className="text-gray-500">Team Members</div>
            </div>
            <div>
              <div className="text-5xl text-red-600 mb-3">15+</div>
              <div className="text-gray-500">OTT Releases</div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
