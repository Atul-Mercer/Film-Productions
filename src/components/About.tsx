import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Award, Users, Film, Target } from 'lucide-react';

export function About() {
  const directors = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Founder & Creative Director',
      bio: 'With over 20 years in the industry, Rajesh has directed numerous award-winning films and series. His vision has shaped the company into what it is today.',
      image: 'https://images.unsplash.com/photo-1512939755946-501bd2c2540d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGRpcmVjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxNjI3MTcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      awards: '15+ National Awards',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Executive Producer & Director',
      bio: 'Priya specializes in contemporary drama and has produced some of the most critically acclaimed series in recent years. Her storytelling resonates with modern audiences.',
      image: 'https://images.unsplash.com/photo-1758639842438-718755aa57e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3RvciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTU1NzY0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
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
          <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">About Filmhouse Productions</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Creating cinematic masterpieces that inspire, entertain, and transform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[600px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1695014192231-18462db3ebde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMHNldHxlbnwxfHx8fDE3NjE1NTYxODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Production Set"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl mb-6 text-gray-900">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2014, Filmhouse Productions emerged from a passion for storytelling 
                and a vision to create content that matters. What started as a small production 
                house has grown into one of the most respected names in the industry.
              </p>
              <p>
                We believe in the power of cinema to change perspectives, evoke emotions, and 
                inspire action. Our productions span multiple genres - from thought-provoking 
                dramas to edge-of-your-seat thrillers, from heartwarming comedies to epic 
                historical sagas.
              </p>
              <p>
                With state-of-the-art facilities, cutting-edge technology, and a team of 
                passionate professionals, we bring stories to life with authenticity and artistry. 
                Every frame we create is a testament to our dedication to the craft of filmmaking.
              </p>
              <p>
                Our commitment extends beyond entertainment. We strive to create opportunities 
                for emerging talent, support diverse voices, and contribute meaningfully to the 
                cultural landscape of Indian cinema.
              </p>
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

          <div className="grid md:grid-cols-2 gap-12">
            {directors.map((director) => (
              <Card key={director.id} className="bg-white border-gray-200 overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="md:col-span-2 h-80 md:h-auto">
                    <ImageWithFallback
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:col-span-3 p-8 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 bg-red-600/20 text-red-600 text-sm mb-4 w-fit">
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
      <section className="py-20 bg-white">
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
      </section>
    </div>
  );
}
