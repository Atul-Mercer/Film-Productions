import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, Phone, Award, Star } from 'lucide-react';
export function InHouseTalent() {
  const talent = [
    {
      id: 1,
      name: 'Arjun Malhotra',
      role: 'Lead Actor',
      specialty: 'Drama & Action',
      image: 'https://images.unsplash.com/photo-1758639842438-718755aa57e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3RvciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTU1NzY0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Award-winning actor with 15+ years of experience in theatre and cinema. Known for intense character portrayals and method acting.',
      achievements: ['3x Best Actor Award', '20+ Feature Films', 'Theatre Background'],
      email: 'arjun@filmhouse.com',
      phone: '+91 98765 43210',
    },
    {
      id: 2,
      name: 'Priya Kapoor',
      role: 'Lead Actress',
      specialty: 'Drama & Romance',
      image: 'https://images.unsplash.com/photo-1512939755946-501bd2c2540d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGRpcmVjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxNjI3MTcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Versatile actress with a strong background in classical dance and theatre. Brings depth and authenticity to every character.',
      achievements: ['2x Best Actress', 'Classical Dancer', '15+ Web Series'],
      email: 'priya@filmhouse.com',
      phone: '+91 98765 43211',
    },
    {
      id: 3,
      name: 'Rahul Verma',
      role: 'Character Actor',
      specialty: 'Comedy & Supporting Roles',
      image: 'https://images.unsplash.com/photo-1758639842438-718755aa57e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3RvciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTU1NzY0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Master of character transformation with exceptional range. From comedy to drama, brings life to every role.',
      achievements: ['Comic Timing Expert', '30+ Supporting Roles', 'Theatre Director'],
      email: 'rahul@filmhouse.com',
      phone: '+91 98765 43212',
    },
    {
      id: 4,
      name: 'Meera Reddy',
      role: 'Actress & Model',
      specialty: 'Contemporary & Period Drama',
      image: 'https://images.unsplash.com/photo-1512939755946-501bd2c2540d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGRpcmVjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxNjI3MTcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Former model turned acclaimed actress. Known for grace, poise, and powerful emotional performances.',
      achievements: ['Fashion Model', 'Period Drama Specialist', '10+ Films'],
      email: 'meera@filmhouse.com',
      phone: '+91 98765 43213',
    },
    {
      id: 5,
      name: 'Vikram Singh',
      role: 'Action Specialist',
      specialty: 'Action & Stunts',
      image: 'https://images.unsplash.com/photo-1758639842438-718755aa57e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3RvciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTU1NzY0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Trained martial artist and stunt performer. Brings authenticity and intensity to action sequences.',
      achievements: ['Martial Arts Black Belt', 'Stunt Coordinator', '25+ Action Films'],
      email: 'vikram@filmhouse.com',
      phone: '+91 98765 43214',
    },
    {
      id: 6,
      name: 'Anjali Sharma',
      role: 'Supporting Actress',
      specialty: 'Drama & Social Commentary',
      image: 'https://images.unsplash.com/photo-1512939755946-501bd2c2540d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGRpcmVjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxNjI3MTcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Known for portraying strong, complex characters. Passionate about socially relevant cinema.',
      achievements: ['Indie Film Favorite', 'Theatre Performer', 'Social Activist'],
      email: 'anjali@filmhouse.com',
      phone: '+91 98765 43215',
    },
    {
      id: 7,
      name: 'Kabir Khan',
      role: 'Villain Specialist',
      specialty: 'Antagonist Roles',
      image: 'https://images.unsplash.com/photo-1758639842438-718755aa57e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3RvciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTU1NzY0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Master of negative roles with commanding presence. Creates memorable antagonists that audiences love to hate.',
      achievements: ['Best Villain Awards', 'Voice Artist', 'Theatre Veteran'],
      email: 'kabir@filmhouse.com',
      phone: '+91 98765 43216',
    },
    {
      id: 8,
      name: 'Divya Nair',
      role: 'Young Talent',
      specialty: 'Youth-Centric Content',
      image: 'https://images.unsplash.com/photo-1512939755946-501bd2c2540d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGRpcmVjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxNjI3MTcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Rising star with strong social media presence. Connects with younger audiences through relatable performances.',
      achievements: ['Social Media Influencer', 'Web Series Star', 'Brand Ambassador'],
      email: 'divya@filmhouse.com',
      phone: '+91 98765 43217',
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">In-House Talents</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Meet our exceptional roster of actors and performers who bring stories to life
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl mb-6 text-gray-900">Our Creative Family</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  At Filmhouse Productions, we've assembled a diverse team of talented actors, 
                  each bringing unique skills and experiences to every project. Our in-house talent 
                  roster includes seasoned veterans and promising newcomers.
                </p>
                <p>
                  From intense dramatic performances to lighthearted comedy, action-packed sequences 
                  to nuanced character work - our actors excel across all genres and formats.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <div className="text-4xl text-red-600 mb-2">50+</div>
                <div className="text-gray-500">Actors</div>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <div className="text-4xl text-red-600 mb-2">200+</div>
                <div className="text-gray-500">Projects</div>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <div className="text-4xl text-red-600 mb-2">40+</div>
                <div className="text-gray-500">Awards</div>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <div className="text-4xl text-red-600 mb-2">10+</div>
                <div className="text-gray-500">Languages</div>
              </div>
            </div>
          </div>
        </div>

        {/* Talent Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {talent.map((person) => (
            <Card 
              key={person.id} 
              className="bg-white border-gray-200 hover:border-red-600/50 hover:shadow-lg transition-all overflow-hidden group"
            >
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 relative h-80 md:h-auto overflow-hidden">
                  <ImageWithFallback
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                </div>
                
                <CardContent className="md:col-span-3 p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl mb-1 text-gray-900">{person.name}</h3>
                      <p className="text-red-600 mb-2">{person.role}</p>
                      <Badge variant="outline" className="border-gray-300 text-gray-700 text-xs">
                        {person.specialty}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star size={16} className="fill-yellow-500" />
                      <Star size={16} className="fill-yellow-500" />
                      <Star size={16} className="fill-yellow-500" />
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {person.bio}
                  </p>

                  <div className="space-y-3 mb-6">
                    {person.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <Award size={14} className="text-red-600 flex-shrink-0" />
                        <span className="text-gray-500">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-gray-200 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Mail size={14} />
                      <a href={`mailto:${person.email}`} className="hover:text-red-600 transition-colors">
                        {person.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Phone size={14} />
                      <span>{person.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Join Our Talent Pool */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg p-12 text-center shadow-lg">
          <h2 className="text-4xl mb-4 text-white">Join Our Talent Pool</h2>
          <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
            Are you a talented actor looking for opportunities in films, web series, or theatre? 
            We're always looking for fresh talent.
          </p>
          <button className="px-8 py-4 bg-white text-gray-900 hover:bg-white/90 transition-colors rounded shadow-md">
            Submit Your Profile
          </button>
        </div>
      </div>
    </div>
  );
}
